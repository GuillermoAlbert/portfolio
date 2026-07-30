import { T, type Locale } from "@/lib/i18n";
import { MamsDiagram, HomelabDiagram } from "@/components/ProjectDiagrams";

// The dashed tags appear here too, two sections away from the Stack legend
// that decodes them (and these cards are deep-linkable), so each tag group
// carries the meaning in its accessible name. It says *tag*, not "dashed":
// six other things on this page are drawn with a dashed stroke (the conf.
// chip, the pivot chip, the email underline, diagram borders and rules) and
// none of them mean AI.
const TAGS_LABEL: Record<Locale, string> = {
  es: "Stack — la etiqueta punteada indica que lo uso con IA",
  en: "Stack — a dashed tag marks a tool I use with AI",
  fr: "Stack — l'étiquette pointillée indique un outil que j'utilise avec l'IA",
};

// A bare <div> is role=generic and cannot carry an accessible name, so the
// label above was being dropped on the floor — role="list" (+ role="listitem"
// children) gives it a role that exposes one, without needing the list-style
// resets a real <ul> would. The three variants ride along as data-aria-* so
// the language toggle can rewrite the label on switch; the per-locale value
// is still rendered server-side for the no-JS case. See components/Interactions.tsx.
const tagsAria = (locale: Locale) => ({
  "aria-label": TAGS_LABEL[locale],
  "data-aria-es": TAGS_LABEL.es,
  "data-aria-en": TAGS_LABEL.en,
  "data-aria-fr": TAGS_LABEL.fr,
});

// Visible echo of the Stack legend, scoped to tags for the same reason.
// aria-hidden because the group label above already says it: one announcement
// per card beats the same sentence being read out on every dashed tag.
function TagsNote({ locale }: { locale: Locale }) {
  return (
    <span className="tags__note" aria-hidden="true">
      <span className="key key--dashed" />
      <T
        locale={locale}
        es="etiqueta punteada · con IA"
        en="dashed tag · with AI"
        fr="étiquette pointillée · avec l'IA"
      />
    </span>
  );
}

export default function Projects({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal" data-num="04">
          <span className="sec-index">§ 04</span>
          <T
            locale={locale}
            as="h2"
            className="sec-title"
            es="Trabajo seleccionado"
            en="Selected work"
            fr="Travaux sélectionnés"
          />
          <T
            locale={locale}
            className="sec-note mono"
            es="// proyectos propios"
            en="// personal projects"
            fr="// projets personnels"
          />
        </div>

        <div className="cards reveal" data-d="1" data-stagger>

          {/* MAMS */}
          <article className="card">
            <div className="card__top">
              <span className="card__idx">01</span>
              <T
                locale={locale}
                className="card__year"
                es="2025 — Presente"
                en="2025 — Present"
                fr="2025 — Aujourd'hui"
              />
            </div>
            <h3 className="card__title">MAMS — My Athlete Monitoring System</h3>
            <T
              locale={locale}
              as="p"
              className="card__kicker"
              es="Plataforma de monitorización de atletas (AMS)"
              en="Athlete monitoring platform (AMS)"
              fr="Plateforme de suivi d'athlètes (AMS)"
            />
            <T
              locale={locale}
              as="p"
              className="card__desc"
              es="Plataforma backend-first para clubes y academias semi-profesionales: check-in diario de wellness y RPE con mapa corporal de dolor, dashboard de entrenador con alertas, e integridad del dato garantizada en la propia base de datos (CHECK, UNIQUE, columnas generadas)."
              en="A backend-first platform for semi-pro clubs and academies: daily wellness and RPE check-ins with a body pain map, a coach dashboard with alerts, and data integrity enforced by the database itself (CHECK, UNIQUE, generated columns)."
              fr="Plateforme backend-first pour clubs et académies semi-professionnels : check-in quotidien de wellness et RPE avec carte corporelle de douleur, tableau de bord entraîneur avec alertes, et intégrité des données garantie par la base elle-même (CHECK, UNIQUE, colonnes générées)."
            />
            {/* The "5 transactional entities" figure belongs to the Inetum role
                and only there — the CVs attribute it to that project alone. A
                recycled number costs more than no number to the one reader who
                has the CV and this page open at once. The permissions model is
                the claim that is true of MAMS specifically, so it moves up from
                the description rather than being said twice. */}
            <p className="card__metrics">
              <T
                locale={locale}
                es="<b>Permisos</b> multinivel"
                en="<b>Multi-level</b> permissions"
                fr="<b>Permissions</b> multi-niveaux"
              />
              <T
                locale={locale}
                es="<b>21</b> endpoints REST"
                en="<b>21</b> REST endpoints"
                fr="<b>21</b> endpoints REST"
              />
            </p>
            <MamsDiagram locale={locale} />
            <div className="tags" role="list" {...tagsAria(locale)}>
              <span className="tag" role="listitem">Spring Boot</span>
              <span className="tag" role="listitem">Java 21</span>
              <span className="tag" role="listitem">Spring Security</span>
              <span className="tag" role="listitem">JWT</span>
              <span className="tag tag--db" role="listitem">PostgreSQL</span>
              <span className="tag tag--db" role="listitem">Liquibase</span>
              <span className="tag tag--mut" role="listitem">React</span>
            </div>
            <TagsNote locale={locale} />
            <div className="card__actions">
              <a
                className="btn"
                href="https://github.com/GuillermoAlbert/mams-architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <T locale={locale} es="Arquitectura" en="Architecture" fr="Architecture" />{" "}
                <span className="arr" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          {/* Proxmox Home Server */}
          <article className="card">
            <div className="card__top">
              <span className="card__idx">02</span>
              <T
                locale={locale}
                className="card__year"
                es="2024 — Presente"
                en="2024 — Present"
                fr="2024 — Aujourd'hui"
              />
            </div>
            <h3 className="card__title">Proxmox Home Server + Tailscale</h3>
            <T
              locale={locale}
              as="p"
              className="card__kicker"
              es="Infraestructura autoalojada"
              en="Self-hosted infrastructure"
              fr="Infrastructure auto-hébergée"
            />
            <T
              locale={locale}
              as="p"
              className="card__desc"
              es="Infraestructura propia corriendo en producción: 9 contenedores LXC, pipelines ETL en Python (Catapult → PostgreSQL + Power BI), un panel de monitorización propio, un pipeline asistido por LLM que clasifica facturas y extrae sus datos, y gestión real de incidentes con backups cifrados externos."
              en="My own infrastructure running in production: 9 LXC containers, Python ETL pipelines (Catapult → PostgreSQL + Power BI), a self-built monitoring dashboard, an LLM-assisted pipeline that classifies invoices and extracts their data, and hands-on incident management with encrypted off-site backups."
              fr="Mon infrastructure en production : 9 conteneurs LXC, pipelines ETL en Python (Catapult → PostgreSQL + Power BI), un tableau de bord de supervision maison, un pipeline assisté par LLM qui classe les factures et en extrait les données, et une gestion réelle des incidents avec sauvegardes chiffrées externes."
            />
            <p className="card__metrics">
              <T
                locale={locale}
                es="<b>9</b> contenedores LXC"
                en="<b>9</b> LXC containers"
                fr="<b>9</b> conteneurs LXC"
              />
              <T
                locale={locale}
                es="<b>115</b> tests pytest"
                en="<b>115</b>-test pytest suite"
                fr="<b>115</b> tests pytest"
              />
            </p>
            <HomelabDiagram locale={locale} />
            <div className="tags" role="list" {...tagsAria(locale)}>
              <span className="tag tag--infra" role="listitem">Proxmox VE</span>
              <span className="tag tag--infra" role="listitem">Docker</span>
              <span className="tag tag--infra" role="listitem">LXC</span>
              <span className="tag tag--infra" role="listitem">Tailscale</span>
              <span className="tag tag--db" role="listitem">PostgreSQL</span>
              <span className="tag tag--mut" role="listitem">Python · ETL</span>
              <span className="tag tag--mut" role="listitem">LLM</span>
            </div>
            <TagsNote locale={locale} />
            <div className="card__actions">
              <a
                className="btn"
                href="https://github.com/GuillermoAlbert/homelab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <T locale={locale} es="Documentación" en="Documentation" fr="Documentation" />{" "}
                <span className="arr" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
