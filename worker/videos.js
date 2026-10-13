// Byte ranges for the project videos (public/video/).
//
// Workers Static Assets answers every request with the whole file — 200, no
// Accept-Ranges — even when the browser asks for a slice. Chrome and Firefox
// cope; Safari on macOS and iOS does not: it opens with `Range: bytes=0-1` and
// won't play media from a server that can't answer with a 206. So /video/*,
// and only /video/* (run_worker_first in wrangler.toml), goes through here;
// every other path is still served straight from the assets.
//
// The files are ~3.3 MB, so slicing a buffered copy is cheap and keeps this
// short. If the assets layer ever starts honouring Range itself, its 206 is
// passed through untouched.
const RANGE = /^bytes=(\d*)-(\d*)$/;

const worker = {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    if (res.status !== 200) return res; // 206 already, 304, 404…

    const headers = new Headers(res.headers);
    headers.set("Accept-Ranges", "bytes");
    const m = RANGE.exec((request.headers.get("Range") ?? "").trim());
    if (!m || (m[1] === "" && m[2] === "")) {
      return new Response(res.body, { status: 200, headers });
    }

    const buf = await res.arrayBuffer();
    const size = buf.byteLength;
    // "bytes=-N" asks for the last N bytes; "bytes=N-" runs to the end.
    const start = m[1] === "" ? Math.max(0, size - Number(m[2])) : Number(m[1]);
    const end = m[1] === "" || m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1);
    if (start > end) {
      headers.set("Content-Range", `bytes */${size}`);
      headers.delete("Content-Length");
      return new Response(null, { status: 416, headers });
    }
    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    const body = request.method === "HEAD" ? null : buf.slice(start, end + 1);
    return new Response(body, { status: 206, headers });
  },
};

export default worker;
