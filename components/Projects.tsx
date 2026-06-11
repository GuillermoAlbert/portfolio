import { T, type Locale } from "@/lib/i18n";

export default function Projects({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
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
            es="// proyectos en producción"
            en="// projects in production"
            fr="// projets en production"
          />
        </div>

        <div className="cards reveal" data-d="1">

          {/* MAMS */}
          <article className="card">
            <div className="card__top">
              <span className="card__idx">01</span>
              <span className="card__year">2025 — Present</span>
            </div>
            <h3 className="card__title">MAMS — My Athlete Monitoring System</h3>
            <T
              locale={locale}
              as="p"
              className="card__kicker"
              es="SaaS de monitorización de carga deportiva"
              en="Sports-load monitoring SaaS"
              fr="SaaS de suivi de charge sportive"
            />
            <T
              locale={locale}
              as="p"
              className="card__desc"
              es="SaaS backend-first para clubes y academias semi-profesionales: modelo de permisos multinivel, diseño de esquema con Liquibase e ingesta de datos GPS mediante un pipeline ETL incremental con upserts idempotentes."
              en="A backend-first SaaS for semi-pro clubs and academies: multi-level permissions model, schema design with Liquibase, and GPS data ingested through an incremental ETL pipeline with idempotent upserts."
              fr="SaaS backend-first pour clubs et académies semi-professionnels : modèle de permissions multi-niveaux, conception du schéma avec Liquibase et ingestion de données GPS via un pipeline ETL incrémental avec upserts idempotents."
            />
            <p className="card__metrics">
              <T
                locale={locale}
                es="<b>5</b> entidades transaccionales end-to-end"
                en="<b>5</b> transactional entities end-to-end"
                fr="<b>5</b> entités transactionnelles end-to-end"
              />
              <T
                locale={locale}
                es="<b>Catapult</b> GPS"
                en="<b>Catapult</b> GPS"
                fr="<b>Catapult</b> GPS"
              />
            </p>
            <div className="tags" aria-label="Stack">
              <span className="tag">Spring Boot</span>
              <span className="tag">Java 21</span>
              <span className="tag">Spring Security</span>
              <span className="tag">JWT</span>
              <span className="tag tag--db">PostgreSQL</span>
              <span className="tag tag--db">Liquibase</span>
              <span className="tag tag--mut">React</span>
            </div>
            <div className="card__actions">
              <button type="button" className="btn" disabled>
                <T
                  locale={locale}
                  es="Demo próximamente"
                  en="Demo coming soon"
                  fr="Démo bientôt disponible"
                />
              </button>
              <a
                className="btn btn--ghost"
                href="https://github.com/GuillermoAlbert/mams-architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <T locale={locale} es="Código" en="Code" fr="Code" />
              </a>
            </div>
          </article>

          {/* Proxmox Home Server */}
          <article className="card">
            <div className="card__top">
              <span className="card__idx">02</span>
              <span className="card__year">2024 — Present</span>
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
                es="<b>77</b> tests pytest"
                en="<b>77</b>-test pytest suite"
                fr="<b>77</b> tests pytest"
              />
            </p>
            <div className="tags" aria-label="Stack">
              <span className="tag tag--infra">Proxmox VE</span>
              <span className="tag tag--infra">Docker</span>
              <span className="tag tag--infra">LXC</span>
              <span className="tag tag--infra">Tailscale</span>
              <span className="tag tag--db">PostgreSQL</span>
              <span className="tag tag--mut">Python · ETL</span>
              <span className="tag tag--mut">LLM</span>
            </div>
            <div className="card__actions">
              <button type="button" className="btn" disabled>
                <T
                  locale={locale}
                  es="Detalle próximamente"
                  en="Write-up coming soon"
                  fr="Détails bientôt disponibles"
                />
              </button>
              <a
                className="btn btn--ghost"
                href="https://github.com/GuillermoAlbert/homelab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <T locale={locale} es="Código" en="Code" fr="Code" />
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
