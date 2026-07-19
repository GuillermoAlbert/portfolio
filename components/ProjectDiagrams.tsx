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
export function MethodDiagram({ locale = "es" }: { locale?: Locale }) {
  return (
    <figure className="card__diagram" aria-hidden="true">
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

        <line className="diag-wire" x1="130" y1="14" x2="154" y2="14" />
        <path className="diag-head" d="M155 10 l6 4 -6 4" />

        <rect className="diag-box" x="164" y="2" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="228" y="17"
           es="IA agéntica" en="agentic AI" fr="IA agentique" />

        {/* down into verification */}
        <line className="diag-wire" x1="196" y1="26" x2="196" y2="50" />
        <path className="diag-head" d="M192 51 l4 6 4 -6" />

        {/* feedback: verification kicks it back until it passes */}
        <line className="diag-wire" x1="260" y1="58" x2="260" y2="34" />
        <path className="diag-head" d="M256 33 l4 -6 4 6" />
        <T locale={locale} as="text" className="diag-note diag-note--start" x="268" y="45"
           es="itera" en="iterate" fr="itère" />

        {/* row 2: verification → production */}
        <rect className="diag-box" x="164" y="58" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="228" y="73"
           es="verificación" en="verification" fr="vérification" />

        <line className="diag-wire" x1="164" y1="70" x2="140" y2="70" />
        <path className="diag-head" d="M139 66 l-6 4 6 4" />

        <rect className="diag-box diag-box--accent" x="2" y="58" width="128" height="24" rx="2" />
        <T locale={locale} as="text" className="diag-label" x="66" y="73"
           es="producción" en="production" fr="production" />

        <text className="diag-note" x="228" y="100">tests · review · monitoring</text>
      </svg>
    </figure>
  );
}

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
      <svg viewBox="0 0 360 100" strokeWidth="1">
        {/* access edge */}
        <rect className="diag-box diag-box--dashed" x="2" y="30" width="80" height="24" rx="2" />
        <text className="diag-label" x="42" y="45">Tailscale</text>

        <line className="diag-wire" x1="84" y1="42" x2="110" y2="42" />
        <path className="diag-head" d="M111 38 l6 4 -6 4" />

        {/* host */}
        <rect className="diag-box" x="118" y="2" width="240" height="70" rx="2" />
        <text className="diag-note diag-note--start" x="126" y="14">PROXMOX VE</text>
        <text className="diag-note diag-note--end diag-accent" x="350" y="14">10× LXC</text>

        <rect className="diag-box diag-box--soft" x="126" y="20" width="106" height="20" rx="2" />
        <text className="diag-label" x="179" y="33">Docker · apps</text>
        <rect className="diag-box diag-box--soft" x="244" y="20" width="106" height="20" rx="2" />
        <text className="diag-label" x="297" y="33">PostgreSQL</text>
        <rect className="diag-box diag-box--soft" x="126" y="46" width="106" height="20" rx="2" />
        <text className="diag-label" x="179" y="59">ETL · LLM</text>
        <rect className="diag-box diag-box--soft" x="244" y="46" width="106" height="20" rx="2" />
        <text className="diag-label" x="297" y="59">monitoring</text>

        {/* off-site backups */}
        <line className="diag-wire" x1="238" y1="72" x2="238" y2="82" />
        <path className="diag-head" d="M234 83 l4 6 4 -6" />
        <text className="diag-note" x="238" y="98">backups · off-site</text>
      </svg>
    </figure>
  );
}
