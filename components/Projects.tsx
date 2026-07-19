import { T, type Locale } from "@/lib/i18n";
import { MamsDiagram, HomelabDiagram } from "@/components/ProjectDiagrams";

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
            es="// proyectos en producción"
            en="// projects in production"
            fr="// projets en production"
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
                fr="2025 — Présent"
              />
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
            <MamsDiagram locale={locale} />
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
                fr="2024 — Présent"
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
              es="Infraestructura propia corriendo en producción: 10 contenedores LXC, pipelines ETL en Python (Catapult → PostgreSQL + Power BI), un panel de monitorización propio, un pipeline asistido por LLM que clasifica facturas y extrae sus datos, y gestión real de incidentes con backups cifrados externos."
              en="My own infrastructure running in production: 10 LXC containers, Python ETL pipelines (Catapult → PostgreSQL + Power BI), a self-built monitoring dashboard, an LLM-assisted pipeline that classifies invoices and extracts their data, and hands-on incident management with encrypted off-site backups."
              fr="Mon infrastructure en production : 10 conteneurs LXC, pipelines ETL en Python (Catapult → PostgreSQL + Power BI), un tableau de bord de supervision maison, un pipeline assisté par LLM qui classe les factures et en extrait les données, et une gestion réelle des incidents avec sauvegardes chiffrées externes."
            />
            <p className="card__metrics">
              <T
                locale={locale}
                es="<b>10</b> contenedores LXC"
                en="<b>10</b> LXC containers"
                fr="<b>10</b> conteneurs LXC"
              />
              <T
                locale={locale}
                es="<b>77</b> tests pytest"
                en="<b>77</b>-test pytest suite"
                fr="<b>77</b> tests pytest"
              />
            </p>
            <HomelabDiagram locale={locale} />
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
