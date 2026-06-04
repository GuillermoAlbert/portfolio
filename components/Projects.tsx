export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">§ 04</span>
          <h2
            className="sec-title"
            data-en="Selected work"
            data-fr="Travaux sélectionnés"
          >
            Trabajo seleccionado
          </h2>
          <span
            className="sec-note mono"
            data-en="// projects in production"
            data-fr="// projets en production"
          >
            {"// proyectos en producción"}
          </span>
        </div>

        <div className="cards reveal" data-d="1">

          {/* MAMS */}
          <article className="card">
            <div className="card__top">
              <span className="card__idx">01</span>
              <span className="card__year">2025 — Present</span>
            </div>
            <h3 className="card__title">MAMS — My Athlete Monitoring System</h3>
            <p
              className="card__kicker"
              data-en="Sports-load monitoring SaaS"
              data-fr="SaaS de suivi de charge sportive"
            >
              SaaS de monitorización de carga deportiva
            </p>
            <p
              className="card__desc"
              data-en="A backend-first SaaS for semi-pro clubs and academies: multi-level permissions model, schema design with Liquibase, and GPS data ingested through an incremental ETL pipeline with idempotent upserts."
              data-fr="SaaS backend-first pour clubs et académies semi-professionnels : modèle de permissions multi-niveaux, conception du schéma avec Liquibase et ingestion de données GPS via un pipeline ETL incrémental avec upserts idempotents."
            >
              SaaS backend-first para clubes y academias semi-profesionales: modelo de permisos
              multinivel, diseño de esquema con Liquibase e ingesta de datos GPS mediante un pipeline
              ETL incremental con upserts idempotentes.
            </p>
            <p className="card__metrics">
              <span
                data-en={"<b>5</b> transactional entities end-to-end"}
                data-fr={"<b>5</b> entités transactionnelles end-to-end"}
              >
                <b>5</b> entidades transaccionales end-to-end
              </span>
              <span
                data-en={"<b>Catapult</b> GPS"}
                data-fr={"<b>Catapult</b> GPS"}
              >
                <b>Catapult</b> GPS
              </span>
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
                <span data-en="Live demo" data-fr="Voir la démo">Ver demo</span>{" "}
                <span className="arr" aria-hidden="true">→</span>
              </button>
              <a
                className="btn btn--ghost"
                href="https://github.com/GuillermoAlbert/mams-architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span data-en="Code" data-fr="Code">Código</span>
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
            <p
              className="card__kicker"
              data-en="Self-hosted infrastructure"
              data-fr="Infrastructure auto-hébergée"
            >
              Infraestructura autoalojada
            </p>
            <p
              className="card__desc"
              data-en="My own infrastructure running in production: 9 LXC containers, Python ETL pipelines (Catapult → PostgreSQL + Power BI), a self-built monitoring dashboard, and hands-on incident management with encrypted off-site backups."
              data-fr="Mon infrastructure en production : 9 conteneurs LXC, pipelines ETL en Python (Catapult → PostgreSQL + Power BI), un tableau de bord de supervision maison et une gestion réelle des incidents avec sauvegardes chiffrées externes."
            >
              Infraestructura propia corriendo en producción: 9 contenedores LXC, pipelines ETL en
              Python (Catapult → PostgreSQL + Power BI), un panel de monitorización propio y gestión
              real de incidentes con backups cifrados externos.
            </p>
            <p className="card__metrics">
              <span
                data-en={"<b>9</b> LXC containers"}
                data-fr={"<b>9</b> conteneurs LXC"}
              >
                <b>9</b> contenedores LXC
              </span>
              <span
                data-en={"<b>77</b>-test pytest suite"}
                data-fr={"<b>77</b> tests pytest"}
              >
                <b>77</b> tests pytest
              </span>
            </p>
            <div className="tags" aria-label="Stack">
              <span className="tag tag--infra">Proxmox VE</span>
              <span className="tag tag--infra">Docker</span>
              <span className="tag tag--infra">LXC</span>
              <span className="tag tag--infra">Tailscale</span>
              <span className="tag tag--db">PostgreSQL</span>
              <span className="tag tag--mut">Python · ETL</span>
            </div>
            <div className="card__actions">
              <button type="button" className="btn" disabled>
                <span data-en="Write-up" data-fr="Détails">Ver detalle</span>{" "}
                <span className="arr" aria-hidden="true">→</span>
              </button>
              <a
                className="btn btn--ghost"
                href="https://github.com/GuillermoAlbert/homelab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span data-en="Code" data-fr="Code">Código</span>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
