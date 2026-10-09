import { T, type Locale } from "@/lib/i18n";

// Architecture sketches for the project cards, drawn in the site's own
// language: hairline boxes, mono labels, dashed wires. Colors come from CSS
// variables so both themes work. The SVGs are aria-hidden — the card
// description already carries the same information as text.

// On card hover (motion layer 3) the wires light in data order — check-in →
// API → PostgreSQL → dashboard — and the alert lamp next to `alertas` fills
// when the reading lands. It loops while hovered: a check-in arrives every day.
export function MamsDiagram({ locale = "es" }: { locale?: Locale }) {
  return (
    <figure className="card__diagram diag-trace" aria-hidden="true">
      <T
        locale={locale}
        className="card__diagram-k mono"
        es="// arquitectura"
        en="// architecture"
        fr="// architecture"
      />
      <svg viewBox="0 0 360 86" strokeWidth="1">
        {/* row 1: the daily check-in coming in. The dashed box is the actor
            outside the system (the player on their phone), same convention as
            the method sketch's "problema real". */}
        <rect className="diag-box diag-box--dashed" x="2" y="2" width="104" height="24" rx="2" />
        <text className="diag-label" x="54" y="17">check-in · RPE</text>

        <line className="diag-wire" data-trace="1" x1="106" y1="14" x2="128" y2="14" />
        <path className="diag-head" data-trace="1" d="M129 10 l6 4 -6 4" />

        <rect className="diag-box" x="136" y="2" width="108" height="24" rx="2" />
        <text className="diag-label" x="190" y="17">Spring Boot API</text>

        <line className="diag-wire" data-trace="2" x1="244" y1="14" x2="266" y2="14" />
        <path className="diag-head" data-trace="2" d="M267 10 l6 4 -6 4" />

        <rect className="diag-box" x="274" y="2" width="84" height="24" rx="2" />
        <text className="diag-label" x="316" y="17">PostgreSQL</text>

        {/* elbow down from PostgreSQL into the coach dashboard */}
        <path className="diag-wire" data-trace="3" d="M316 26 v14 h-120 v12" />
        <path className="diag-head" data-trace="3" d="M192 52 l4 6 4 -6" />

        {/* row 2: serving the coach */}
        <rect className="diag-box diag-box--accent" x="134" y="58" width="124" height="24" rx="2" />
        <text className="diag-label" x="196" y="73">dashboard · React</text>

        {/* alert lamp: a hollow square at rest, filled when the trace lands.
            `alertes`/`alertas` are 7 chars × 5.88 (8.4px + 0.05em tracking)
            = 41.2 wide centred on 300, so the text starts at 279.4 and the
            lamp (266.5–271.5) keeps ~8 units clear of it and of the box. */}
        <rect className="diag-lamp" x="266.5" y="67.5" width="5" height="5" />
        <T locale={locale} as="text" className="diag-note" x="300" y="73"
           es="alertas" en="alerts" fr="alertes" />
      </svg>
    </figure>
  );
}

// Working-method sketch for the hero's side column: the AI-assisted loop where
// verification gates everything. Same visual language as the project sketches.
//
// `diag-run` makes it the site's one idle instrument (motion layer 4 — see
// STYLING.md): a packet walks the loop and each leg lights blue as it passes,
// so the sketch performs the process instead of just naming it. The story is
// the site's thesis — what doesn't pass gets rewritten — so the first trip
// FAILS: a grey ✗ at verification, back up to the agent, down again, a blue ✓,
// and only then production. One deterministic 10s CSS timeline, no JS.
//
// The marks are stroked paths, not glyphs: nothing is injected into the <text>
// nodes, which the language toggle rewrites. Fail is neutral grey and pass is
// --blue, so the one-accent rule holds and blue keeps meaning "moves forward".
// They sit at x 274–282: `vérification`, the longest of the three labels, is
// 12 chars × 6.37 = 76.4 wide centred on 228, so it ends at 266.2.
// Everything new starts hidden; with reduced motion the sketch is the old
// static one.
export function MethodDiagram({ locale = "es" }: { locale?: Locale }) {
  return (
    <figure className="card__diagram diag-run" aria-hidden="true">
      <T
        locale={locale}
        className="card__diagram-k mono"
        es="// cómo trabajo"
        en="// how I work"
        fr="// ma méthode"
      />
      <svg viewBox="0 0 320 112" strokeWidth="1">
        {/* row 1: input → agent */}
        <rect className="diag-box diag-box--dashed" x="2" y="2" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="66" y="17"
           es="problema real" en="real problem" fr="problème réel" />

        <line className="diag-wire" data-run="1" x1="130" y1="14" x2="154" y2="14" />
        <path className="diag-head" data-run="1" d="M155 10 l6 4 -6 4" />

        <rect className="diag-box" x="164" y="2" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="228" y="17"
           es="IA agéntica" en="agentic AI" fr="IA agentique" />

        {/* down into verification */}
        <line className="diag-wire" data-run="2" x1="196" y1="26" x2="196" y2="50" />
        <path className="diag-head" data-run="2" d="M192 51 l4 6 4 -6" />

        {/* feedback: verification kicks it back until it passes */}
        <line className="diag-wire" data-run="3" x1="260" y1="58" x2="260" y2="34" />
        <path className="diag-head" data-run="3" d="M256 33 l4 -6 4 6" />
        <T locale={locale} as="text" className="diag-note diag-note--start" x="268" y="45"
           es="itera" en="iterate" fr="itère" />

        {/* row 2: verification → production */}
        <rect className="diag-box" x="164" y="58" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="228" y="73"
           es="verificación" en="verification" fr="vérification" />

        {/* verdicts: ✗ on the first trip, ✓ on the second (hidden at rest) */}
        <path className="diag-mark diag-mark--fail" d="M274.5 66.5 l7 7 M281.5 66.5 l-7 7" />
        <path className="diag-mark diag-mark--pass" d="M273.5 70.5 l3 3 l6 -7" />

        <line className="diag-wire" data-run="4" x1="164" y1="70" x2="140" y2="70" />
        <path className="diag-head" data-run="4" d="M139 66 l-6 4 6 4" />

        <rect className="diag-box diag-box--accent" x="2" y="58" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="66" y="73"
           es="producción" en="production" fr="production" />

        {/* the packet: a 4-unit square (corners stay square — house rule),
            moved by CSS transform along the wires; hidden inside boxes */}
        <rect className="diag-packet" x="-2" y="-2" width="4" height="4" />

        <T locale={locale} as="text" className="diag-note" x="228" y="100"
           es="tests · revisión · monitorización"
           en="tests · review · monitoring"
           fr="tests · revue · supervision" />
      </svg>
    </figure>
  );
}

// Homelab, drawn flat in the same box-and-wire language as the MAMS sketch.
// It replaced an axonometric rack whose nine stacked slabs read as hatching:
// the claim was there, but the reader had to decode the drawing first. Here
// the host is one frame and every container is a box you can count — four
// named, five as small squares — so "9× LXC" checks itself at a glance.
// Outside the frame, left column: how you get in (Tailscale, glossed as
// "private access" for readers who don't know it) and what leaves (off-site
// backups). Each gloss sits ABOVE its own box: between the two boxes they
// read as one caption and nobody could tell which note was whose. Dashed boxes = outside the system, as in the other sketches.
// The one inner wire is the real data path: ETL (Catapult) → PostgreSQL.
//
// On card hover (motion layer 3) the host boots: the nine containers flash
// blue in reading order (data-boot 1 → 9), then the backup leaves.
//
// Widths, at the .diag-label advance of 6.37/char and the .diag-note advance
// of 5.88/char (8.4px + 0.05em tracking), all centre-anchored:
//   inner boxes are 100 wide (22 between them, room for a readable arrow);
//   the longest label, `Docker · apps`, is 82.8.
//   left column boxes are 88 wide, centred on 46; the longest note,
//   `private access`/`acceso privado` (14 chars), is 82.3 → 4.8 to 87.2.
//   `+ 5 autres` (FR, 10 chars, start-anchored at 220) ends at 278.8.
// Recompute these if a label, a font size or a box moves.
export function HomelabDiagram({ locale = "es" }: { locale?: Locale }) {
  return (
    <figure className="card__diagram" aria-hidden="true">
      <T
        locale={locale}
        className="card__diagram-k mono"
        es="// arquitectura"
        en="// architecture"
        fr="// architecture"
      />
      <svg viewBox="0 0 360 126" strokeWidth="1">
        {/* ---- outside the host: the way in ---- */}
        <rect className="diag-box diag-box--dashed" x="2" y="34" width="88" height="24" rx="2" />
        <text className="diag-label" x="46" y="49">Tailscale</text>
        <T locale={locale} as="text" className="diag-note" x="46" y="28"
           es="acceso privado" en="private access" fr="accès privé" />

        <line className="diag-wire" x1="90" y1="46" x2="112" y2="46" />
        <path className="diag-head" d="M113 42 l6 4 -6 4" />

        {/* ---- the host ---- */}
        <rect className="diag-box diag-box--frame" x="120" y="12" width="238" height="112" rx="2" />
        <text className="diag-note diag-note--start" x="128" y="25">PROXMOX VE</text>
        <text className="diag-note diag-note--end diag-accent" x="350" y="25">9× LXC</text>

        {/* row 1: the data path, ETL into the database */}
        <rect className="diag-box" data-boot="1" x="128" y="32" width="100" height="24" rx="2" />
        <text className="diag-label" x="178" y="47">ETL · LLM</text>
        <line className="diag-wire" x1="228" y1="44" x2="242" y2="44" />
        <path className="diag-head" d="M243 40 l6 4 -6 4" />
        <rect className="diag-box" data-boot="2" x="250" y="32" width="100" height="24" rx="2" />
        <text className="diag-label" x="300" y="47">PostgreSQL</text>

        {/* row 2 */}
        <rect className="diag-box" data-boot="3" x="128" y="62" width="100" height="24" rx="2" />
        <text className="diag-label" x="178" y="77">Docker · apps</text>
        <rect className="diag-box" data-boot="4" x="250" y="62" width="100" height="24" rx="2" />
        <text className="diag-label" x="300" y="77">monitoring</text>

        {/* row 3: the five unnamed containers, small but countable */}
        <rect className="diag-box diag-box--soft" data-boot="5" x="128" y="96" width="12" height="12" rx="1.5" />
        <rect className="diag-box diag-box--soft" data-boot="6" x="146" y="96" width="12" height="12" rx="1.5" />
        <rect className="diag-box diag-box--soft" data-boot="7" x="164" y="96" width="12" height="12" rx="1.5" />
        <rect className="diag-box diag-box--soft" data-boot="8" x="182" y="96" width="12" height="12" rx="1.5" />
        <rect className="diag-box diag-box--soft" data-boot="9" x="200" y="96" width="12" height="12" rx="1.5" />
        <T locale={locale} as="text" className="diag-note diag-note--start" x="220" y="105"
           es="+ 5 más" en="+ 5 more" fr="+ 5 autres" />

        {/* ---- outside the host: what leaves ---- */}
        <line className="diag-wire" data-boot="out" x1="120" y1="106" x2="98" y2="106" />
        <path className="diag-head" data-boot="out" d="M97 102 l-6 4 6 4" />
        <rect className="diag-box diag-box--dashed" x="2" y="94" width="88" height="24" rx="2" />
        <text className="diag-label" x="46" y="109">backups</text>
        <text className="diag-note" x="46" y="88">off-site</text>
      </svg>
    </figure>
  );
}
