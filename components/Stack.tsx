import { T, type Locale } from "@/lib/i18n";

// Stack / Skills. Grouped so recruiters (and ATS keyword search) can scan it fast.
// Every item here already appears elsewhere on the site — extend the arrays as needed.

type Tag = { label: string; cls?: string };
type Group = { es: string; en: string; fr: string; items: Tag[]; feature?: boolean };

const GROUPS: Group[] = [
  {
    es: "LENGUAJES", en: "LANGUAGES", fr: "LANGAGES",
    items: [{ label: "Java 21" }, { label: "TypeScript" }, { label: "Python", cls: "tag--mut" }, { label: "SQL" }],
  },
  {
    es: "BACKEND", en: "BACKEND", fr: "BACKEND",
    items: [{ label: "Spring Boot" }, { label: "Spring Security" }, { label: "JPA / Hibernate" }, { label: "REST" }, { label: "JWT" }],
  },
  {
    es: "FRONTEND", en: "FRONTEND", fr: "FRONTEND",
    items: [{ label: "Angular", cls: "tag--fe" }, { label: "React", cls: "tag--mut" }, { label: "HTML / CSS", cls: "tag--fe" }],
  },
  {
    es: "DATOS", en: "DATA", fr: "DONNÉES",
    items: [{ label: "PostgreSQL", cls: "tag--db" }, { label: "Liquibase", cls: "tag--db" }, { label: "ETL", cls: "tag--mut" }, { label: "Power BI" }],
  },
  {
    es: "INFRA / DEVOPS", en: "INFRA / DEVOPS", fr: "INFRA / DEVOPS",
    items: [{ label: "Docker", cls: "tag--infra" }, { label: "Proxmox / LXC", cls: "tag--infra" }, { label: "Tailscale", cls: "tag--infra" }, { label: "Linux", cls: "tag--infra" }, { label: "Cloudflare Workers", cls: "tag--infra" }, { label: "GitLab CI", cls: "tag--infra" }],
  },
  {
    es: "PRÁCTICAS", en: "PRACTICES", fr: "PRATIQUES",
    items: [{ label: "Testing (pytest · JUnit)" }, { label: "Diseño de APIs" }, { label: "Modelado de datos" }, { label: "Git" }],
  },
  {
    es: "IA / AGENTES", en: "AI / AGENTS", fr: "IA / AGENTS",
    items: [{ label: "Claude Code (skills · hooks)", cls: "tag--ai" }, { label: "Claude API", cls: "tag--ai" }, { label: "MCP", cls: "tag--ai" }, { label: "AI Agents", cls: "tag--ai" }, { label: "Codex", cls: "tag--ai" }, { label: "Opencode", cls: "tag--ai" }],
    feature: true,
  },
];

export default function Stack({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="section section--sand" id="stack">
      <div className="container">
        <div className="section-head reveal" data-num="03">
          <span className="sec-index">§ 03</span>
          <h2 className="sec-title">Stack</h2>
          <T
            locale={locale}
            className="sec-note mono"
            es="// herramientas que uso"
            en="// tools I reach for"
            fr="// mes outils"
          />
        </div>

        <div className="stack reveal" data-d="1" data-stagger>
          {/* Map key for the dashed tags. They mark tools shipped with AI
              rather than written by hand — a deliberate honesty signal that,
              undecoded, was reading as "disabled / broken". It keys the two
              *tags*, not the dashed stroke in general: the conf. chip, the
              pivot chip, the email underline and the diagram borders are all
              dashed and mean something else entirely. States the two cases
              and stops: justifying the boundary would turn it into an excuse,
              and the reader draws the stronger conclusion unaided.

              It is FIRST in the DOM and pushed last by `order` on wide
              screens. Below 620px the grid is a single column, so as the last
              child the key landed roughly six screens below the `Python` tag
              it decodes — the reader met the dashed border with no way to read
              it. First in source also means it takes stagger index 0 instead
              of 6, so on a phone it does not fade in after the rows it is
              supposed to introduce. */}
          <div className="stack__legend">
            <span className="stack__legend-item">
              <span className="key" aria-hidden="true" />
              <T
                locale={locale}
                es="etiqueta sólida · lo escribo a mano"
                en="solid tag · I write it by hand"
                fr="étiquette pleine · je l'écris à la main"
              />
            </span>
            <span className="stack__legend-item">
              <span className="key key--dashed" aria-hidden="true" />
              <T
                locale={locale}
                es="etiqueta punteada · lo uso con IA"
                en="dashed tag · I use it with AI"
                fr="étiquette pointillée · je l'utilise avec l'IA"
              />
            </span>
          </div>

          {GROUPS.filter((g) => !g.feature).map((g) => (
            <div className="stack__group" key={g.es}>
              <T locale={locale} className="stack__k" es={g.es} en={g.en} fr={g.fr} />
              <div
                className="stack__tags"
                role="list"
                aria-label={g[locale]}
                data-aria-es={g.es}
                data-aria-en={g.en}
                data-aria-fr={g.fr}
              >
                {g.items.map((t) => (
                  <span className={`tag${t.cls ? ` ${t.cls}` : ""}`} role="listitem" key={t.label}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {GROUPS.filter((g) => g.feature).map((g) => (
          <div className="stack-feature reveal" data-d="2" key={g.es}>
            <T locale={locale} className="stack__k" es={g.es} en={g.en} fr={g.fr} />
            <div
              className="stack__tags"
              role="list"
              aria-label={g[locale]}
              data-aria-es={g.es}
              data-aria-en={g.en}
              data-aria-fr={g.fr}
            >
              {g.items.map((t) => (
                <span className={`tag${t.cls ? ` ${t.cls}` : ""}`} role="listitem" key={t.label}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
