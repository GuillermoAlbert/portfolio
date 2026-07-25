import { T, type Locale } from "@/lib/i18n";

// Architecture sketches for the project cards, drawn in the site's own
// language: hairline boxes, mono labels, dashed wires. Colors come from CSS
// variables so both themes work. The SVGs are aria-hidden — the card
// description already carries the same information as text.

export function MamsDiagram({ locale = "es" }: { locale?: Locale }) {
  return (
    <figure className="card__diagram" aria-hidden="true">
      <T
        locale={locale}
        className="card__diagram-k mono"
        es="// arquitectura"
        en="// architecture"
        fr="// architecture"
      />
      <svg viewBox="0 0 360 86" strokeWidth="1">
        {/* row 1: ingestion */}
        <rect className="diag-box diag-box--dashed" x="2" y="2" width="92" height="24" rx="2" />
        <text className="diag-label" x="48" y="17">Catapult GPS</text>

        <line className="diag-wire" x1="94" y1="14" x2="120" y2="14" />
        <path className="diag-head" d="M121 10 l6 4 -6 4" />

        <rect className="diag-box" x="128" y="2" width="92" height="24" rx="2" />
        <text className="diag-label" x="174" y="17">ETL · upserts</text>

        <line className="diag-wire" x1="220" y1="14" x2="246" y2="14" />
        <path className="diag-head" d="M247 10 l6 4 -6 4" />

        <rect className="diag-box" x="254" y="2" width="104" height="24" rx="2" />
        <text className="diag-label" x="306" y="17">PostgreSQL</text>

        {/* elbow down from PostgreSQL into the API */}
        <path className="diag-wire" d="M306 26 v14 h-116 v12" />
        <path className="diag-head" d="M186 52 l4 6 4 -6" />

        {/* row 2: serving */}
        <rect className="diag-box diag-box--accent" x="128" y="58" width="124" height="24" rx="2" />
        <text className="diag-label" x="190" y="73">Spring Boot API</text>

        <line className="diag-wire" x1="254" y1="70" x2="290" y2="70" />
        <path className="diag-head" d="M291 66 l6 4 -6 4" />

        <rect className="diag-box" x="296" y="58" width="62" height="24" rx="2" />
        <text className="diag-label" x="327" y="73">React</text>
      </svg>
    </figure>
  );
}

// Working-method sketch for the hero's side column: the AI-assisted loop where
// verification gates everything. Same visual language as the project sketches.
//
// `diag-run` makes it the site's one idle instrument (motion layer 4 — see
// STYLING.md): each leg lights blue in turn, so the sketch performs the process
// instead of just naming it. The data-run indices are the story order —
// stated → built → verified → sent back → shipped — and the CSS turns them into
// delays on one deterministic 9s timeline. Nothing is injected into the <text>
// nodes, which the language toggle rewrites; only wires and arrowheads animate.
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

        <line className="diag-wire" data-run="4" x1="164" y1="70" x2="140" y2="70" />
        <path className="diag-head" data-run="4" d="M139 66 l-6 4 6 4" />

        <rect className="diag-box diag-box--accent" x="2" y="58" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="66" y="73"
           es="producción" en="production" fr="production" />

        <T locale={locale} as="text" className="diag-note" x="228" y="100"
           es="tests · revisión · monitorización"
           en="tests · review · monitoring"
           fr="tests · revue · supervision" />
      </svg>
    </figure>
  );
}

// Homelab, drawn in axonometric projection so the "10× LXC" claim becomes a
// countable object: ten slabs in a rack, four of them named. Consistent 4:1
// dimetric (14.04°) — every depth edge runs ±(4,1), every height edge stays
// vertical, including the connectors. Hidden edges are omitted the way an ink
// technical drawing does it: only the top unit shows its top face, the nine
// below show the visible front band, and the base plate's top face is dropped
// because the stack covers it. Static by design — no animation beyond the
// dash-flow the card's hover already gives .diag-wire.
//
// The angle is the shallow end of the dimetric range on purpose. A top face
// costs exactly slope × width in height, so at 2:1 this 152-wide rack would
// spend 76 units on its lid alone and the stack could not fit under 130. At
// 4:1 the lid costs 38 and the height freed goes into slab pitch, which is
// what makes the units countable at the ~400px the card actually renders.
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
      <svg viewBox="0 0 360 130" strokeWidth="1">
        {/* header rule, spanning exactly the rack it names */}
        <text className="diag-note diag-note--start" x="92" y="6">PROXMOX VE</text>
        <text className="diag-note diag-note--end diag-accent" x="244" y="6">10× LXC</text>

        {/* access edge — a small dashed node, not a second rack: it sits
            outside the host, so it gets the least ink that still reads. */}
        <text className="diag-label" x="32" y="28">Tailscale</text>
        <line className="diag-box diag-box--soft" x1="32" y1="30" x2="32" y2="36" />
        <path className="diag-box diag-box--dashed" d="M24 34 L56 42 L40 46 L8 38 Z" />
        <path className="diag-box diag-box--dashed" d="M8 38 V41 L40 49 L56 45 V42 M40 46 V49" />

        {/* Tailscale → host, down the +u axis. It lands in the air gap between
            two units so it reads as entering the chassis, not one container. */}
        <line className="diag-wire" x1="60" y1="43" x2="84" y2="49" />
        <path className="diag-head" d="M87 46.1 L92 51 L85.3 52.9" />

        {/* rack frame = the Proxmox VE enclosure: two corner posts + base rim */}
        <line className="diag-box" x1="92" y1="10" x2="92" y2="100" />
        <line className="diag-box" x1="244" y1="24" x2="244" y2="114" />
        <path className="diag-box" d="M92 100 L196 126 L244 114" />

        {/* ten LXC slabs: 8-unit pitch, 2-unit band, so the air between units
            is 3× the band and the stack cannot collapse into hatching at the
            ~400px this actually renders. Named units carry the full stroke,
            the six anonymous ones the soft stroke. */}
        <path className="diag-box" d="M92 22 L140 10 L244 36" />
        <path className="diag-box" d="M92 22 L196 48 L244 36 M92 24 L196 50 L244 38 M196 48 V50" />
        <path className="diag-box diag-box--soft" d="M92 30 L196 56 L244 44 M92 32 L196 58 L244 46 M196 56 V58" />
        <path className="diag-box diag-box--soft" d="M92 38 L196 64 L244 52 M92 40 L196 66 L244 54 M196 64 V66" />
        <path className="diag-box" d="M92 46 L196 72 L244 60 M92 48 L196 74 L244 62 M196 72 V74" />
        <path className="diag-box diag-box--soft" d="M92 54 L196 80 L244 68 M92 56 L196 82 L244 70 M196 80 V82" />
        <path className="diag-box diag-box--soft" d="M92 62 L196 88 L244 76 M92 64 L196 90 L244 78 M196 88 V90" />
        <path className="diag-box" d="M92 70 L196 96 L244 84 M92 72 L196 98 L244 86 M196 96 V98" />
        <path className="diag-box diag-box--soft" d="M92 78 L196 104 L244 92 M92 80 L196 106 L244 94 M196 104 V106" />
        <path className="diag-box diag-box--soft" d="M92 86 L196 112 L244 100 M92 88 L196 114 L244 102 M196 112 V114" />
        <path className="diag-box" d="M92 94 L196 120 L244 108 M92 96 L196 122 L244 110 M196 120 V122" />

        {/* callouts: each leader starts 4 units clear of the corner post, on
            the +u line through its own slab's right corner, so it points at
            the unit without touching structure. Label x = left edge + half the
            mono advance (5.7px/char), left-aligning centre-anchored text. */}
        <line className="diag-box diag-box--soft" x1="248" y1="37" x2="272" y2="43" />
        <text className="diag-label" x="313" y="46">Docker · apps</text>
        <line className="diag-box diag-box--soft" x1="248" y1="61" x2="272" y2="67" />
        <text className="diag-label" x="304.5" y="70">PostgreSQL</text>
        <line className="diag-box diag-box--soft" x1="248" y1="85" x2="272" y2="91" />
        <text className="diag-label" x="301.7" y="94">ETL · LLM</text>
        <line className="diag-box diag-box--soft" x1="248" y1="109" x2="272" y2="115" />
        <text className="diag-label" x="304.5" y="118">monitoring</text>

        {/* off-site backups: leaves the base rim's left corner down the +v
            axis, so it hangs off the bottom of the host without costing the
            height a straight drop below the rack would. */}
        <line className="diag-wire" x1="88" y1="101" x2="64" y2="107" />
        <path className="diag-head" d="M61 104.1 L56 109 L62.7 110.9" />
        <text className="diag-note" x="46" y="120">backups · off-site</text>
      </svg>
    </figure>
  );
}
