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
    items: [{ label: "Angular" }, { label: "React", cls: "tag--mut" }, { label: "HTML / CSS" }],
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
    items: [{ label: "Claude API" }, { label: "MCP" }, { label: "AI Agents" }, { label: "Codex" }, { label: "Opencode" }, { label: "Prompt Engineering", cls: "tag--mut" }],
    feature: true,
  },
];

export default function Stack({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="section section--sand" id="stack">
      <div className="container">
        <div className="section-head reveal">
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

        <div className="stack reveal" data-d="1">
          {GROUPS.map((g) => (
            <div className={`stack__group${g.feature ? " stack__group--feature" : ""}`} key={g.es}>
              <T locale={locale} className="stack__k" es={g.es} en={g.en} fr={g.fr} />
              <div className="stack__tags" aria-label={g[locale]}>
                {g.items.map((t) => (
                  <span className={`tag${t.cls ? ` ${t.cls}` : ""}`} key={t.label}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
