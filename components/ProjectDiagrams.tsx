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
// countable object: ten slabs in a rack, four of them named. Consistent 2:1
// dimetric (26.57°) — every depth edge runs ±(2,1), every height edge stays
// vertical, including the connectors. Hidden edges are omitted the way an ink
// technical drawing does it: only the top unit shows its top face, the nine
// below show the visible front band, and the base plate's top face is dropped
// because the stack covers it. Static by design — no animation beyond the
// dash-flow the card's hover already gives .diag-wire.
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
      <svg viewBox="0 0 360 144" strokeWidth="1">
        {/* header rule: host on the left, container count on the right */}
        <text className="diag-note diag-note--start" x="132" y="7">PROXMOX VE</text>
        <text className="diag-note diag-note--end diag-accent" x="358" y="7">10× LXC</text>

        {/* access edge — dashed = outside the host, as in the other sketches */}
        <text className="diag-label" x="34" y="24">Tailscale</text>
        <line className="diag-box diag-box--soft" x1="34" y1="26" x2="34" y2="36" />
        <path className="diag-box diag-box--dashed" d="M22 30 L62 50 L46 58 L6 38 Z" />
        <path className="diag-box diag-box--dashed" d="M6 38 V41 L46 61 L62 53 V50 M46 58 V61" />

        {/* Tailscale → host, running down the +u axis like every other edge */}
        <line className="diag-wire" x1="64" y1="51" x2="122" y2="80" />
        <path className="diag-head" d="M128.2 79.2 L132 85 L125 85.4" />

        {/* rack frame = the Proxmox VE enclosure: two corner posts + base rim */}
        <line className="diag-box" x1="132" y1="14" x2="132" y2="93" />
        <line className="diag-box" x1="204" y1="30" x2="204" y2="109" />
        <path className="diag-box" d="M132 93 L184 119 L204 109" />

        {/* ten LXC slabs, 7px pitch. Named ones carry the full stroke, the six
            anonymous ones the soft stroke — 1·2·1·2·1·2·1 also aids counting. */}
        <path className="diag-box" d="M132 22 L152 12 L204 38" />
        <path className="diag-box" d="M132 22 L184 48 L204 38 M132 25 L184 51 L204 41 M184 48 V51" />
        <path className="diag-box diag-box--soft" d="M132 29 L184 55 L204 45 M132 32 L184 58 L204 48 M184 55 V58" />
        <path className="diag-box diag-box--soft" d="M132 36 L184 62 L204 52 M132 39 L184 65 L204 55 M184 62 V65" />
        <path className="diag-box" d="M132 43 L184 69 L204 59 M132 46 L184 72 L204 62 M184 69 V72" />
        <path className="diag-box diag-box--soft" d="M132 50 L184 76 L204 66 M132 53 L184 79 L204 69 M184 76 V79" />
        <path className="diag-box diag-box--soft" d="M132 57 L184 83 L204 73 M132 60 L184 86 L204 76 M184 83 V86" />
        <path className="diag-box" d="M132 64 L184 90 L204 80 M132 67 L184 93 L204 83 M184 90 V93" />
        <path className="diag-box diag-box--soft" d="M132 71 L184 97 L204 87 M132 74 L184 100 L204 90 M184 97 V100" />
        <path className="diag-box diag-box--soft" d="M132 78 L184 104 L204 94 M132 81 L184 107 L204 97 M184 104 V107" />
        <path className="diag-box" d="M132 85 L184 111 L204 101 M132 88 L184 114 L204 104 M184 111 V114" />

        {/* callouts: leader lines share the +u angle, lighter than object lines
            so they read as annotation. Label x = left edge + half the mono
            advance (5.7px/char), which left-aligns centre-anchored text. */}
        <line className="diag-box diag-box--soft" x1="204" y1="39" x2="240" y2="57" />
        <text className="diag-label" x="281" y="60">Docker · apps</text>
        <line className="diag-box diag-box--soft" x1="204" y1="60" x2="240" y2="78" />
        <text className="diag-label" x="272.5" y="81">PostgreSQL</text>
        <line className="diag-box diag-box--soft" x1="204" y1="81" x2="240" y2="99" />
        <text className="diag-label" x="270" y="102">ETL · LLM</text>
        <line className="diag-box diag-box--soft" x1="204" y1="102" x2="240" y2="120" />
        <text className="diag-label" x="272.5" y="123">monitoring</text>

        {/* off-site backups */}
        <line className="diag-wire" x1="184" y1="119" x2="184" y2="125" />
        <path className="diag-head" d="M180 125 l4 6 4 -6" />
        <text className="diag-note" x="184" y="140">backups · off-site</text>
      </svg>
    </figure>
  );
}
