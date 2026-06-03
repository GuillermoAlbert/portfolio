// Experience timeline. Scaffolded from facts already on the site.
// TODO (feed later): add real periods (e.g. "2023 — Presente") via <p className="xp__period mono">,
// add 2–3 quantified bullets per role via <ul className="xp__bullets">, and add more roles.

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">§ 02</span>
          <h2 className="sec-title" data-en="Experience" data-fr="Expérience">
            Experiencia
          </h2>
          <span
            className="sec-note mono"
            data-en="// where I've worked"
            data-fr="// mon parcours"
          >
            {"// mi trayectoria"}
          </span>
        </div>

        <div className="xp reveal" data-d="1">
          <article className="xp__item">
            {/* TODO: <p className="xp__period mono">2023 — Presente</p> */}
            <h3 className="xp__role">
              Full Stack Developer <span className="xp__org">· Inetum</span>
            </h3>
            <p
              className="xp__meta"
              data-en="France AgriMer · public sector"
              data-fr="France AgriMer · secteur public"
            >
              France AgriMer · sector público
            </p>
            <p
              className="xp__desc"
              data-en="Full-stack development on a public-sector project (France AgriMer)."
              data-fr="Développement full-stack sur un projet du secteur public (France AgriMer)."
            >
              Desarrollo full-stack en un proyecto del sector público (France AgriMer).
            </p>
            {/* TODO: <ul className="xp__bullets"><li>…</li></ul> */}
          </article>

          <article className="xp__item">
            {/* TODO: <p className="xp__period mono">2014 — 2022</p> */}
            <h3 className="xp__role">
              <span data-en="Research &amp; Biology" data-fr="Recherche &amp; Biologie">
                Investigación y Biología
              </span>{" "}
              <span className="xp__org">· Universidad de Alicante</span>
            </h3>
            <p
              className="xp__meta"
              data-en="BSc Biology · research"
              data-fr="Licence de Biologie · recherche"
            >
              Grado en Biología · investigación
            </p>
            <p
              className="xp__desc"
              data-en="Sequencing data, measuring biodiversity, and 3 peer-reviewed publications — the origin of my evidence-based approach to engineering."
              data-fr="Séquencer des données, mesurer la biodiversité et 3 publications évaluées par les pairs — l'origine de mon approche fondée sur les preuves."
            >
              Secuenciación de datos, medición de biodiversidad y 3 publicaciones revisadas por
              pares — el origen de mi enfoque basado en la evidencia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
