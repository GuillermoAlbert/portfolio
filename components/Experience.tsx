// Experience timeline. Periods are real; quantified bullets can be added later
// via <ul className="xp__bullets"><li>…</li></ul> inside each <article>.

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
            <p
              className="xp__period mono"
              data-en="Mar 2024 — Present"
              data-fr="mars 2024 — Présent"
            >
              mar. 2024 — Presente
            </p>
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
            <p className="xp__period mono">2022 — 2024</p>
            <h3 className="xp__role">
              <span
                data-en="Web App Development (DAW)"
                data-fr="Développement d'applications web (DAW)"
              >
                Desarrollo de Aplicaciones Web (DAW)
              </span>{" "}
              <span className="xp__org">· IES Mare Nostrum</span>
            </h3>
            <p
              className="xp__meta"
              data-en="Higher diploma · software development"
              data-fr="Diplôme supérieur · développement logiciel"
            >
              FP Superior · desarrollo de software
            </p>
            <p
              className="xp__desc"
              data-en="My formal switch into software: two years of full-stack development, databases and deployment. I joined Inetum before finishing the programme."
              data-fr="Ma transition formelle vers le logiciel : deux ans de développement full-stack, bases de données et déploiement. J'ai rejoint Inetum avant la fin du cursus."
            >
              Mi transición formal al software: dos años de desarrollo full-stack, bases de datos
              y despliegue. Me incorporé a Inetum antes de terminar el ciclo.
            </p>
          </article>

          <article className="xp__item">
            <p className="xp__period mono">2016 — 2022</p>
            <h3 className="xp__role">
              <span data-en="Research &amp; Biology" data-fr="Recherche &amp; Biologie">
                Investigación y Biología
              </span>{" "}
              <span className="xp__org">· Universidad de Alicante</span>
            </h3>
            <p
              className="xp__meta"
              data-en="BSc + MSc · research"
              data-fr="Licence + Master · recherche"
            >
              Grado + Máster · investigación
            </p>
            <p
              className="xp__desc"
              data-en="Research at CSIC (Doñana Biological Station) and the Helsinki Natural History Museum, with an MSc in Biodiversity (Univ. of Valencia). Sequencing data, measuring biodiversity, and 3 peer-reviewed publications — the origin of my evidence-based approach to engineering."
              data-fr="Recherche au CSIC (Station biologique de Doñana) et au Muséum d'histoire naturelle d'Helsinki, avec un Master en Biodiversité (Univ. de Valence). Séquencer des données, mesurer la biodiversité et 3 publications évaluées par les pairs — l'origine de mon approche fondée sur les preuves."
            >
              Investigación en el CSIC (Estación Biológica de Doñana) y en el Museo de Historia
              Natural de Helsinki, con un Máster en Biodiversidad (Univ. de València). Secuenciación
              de datos, medición de biodiversidad y 3 publicaciones revisadas por pares — el origen
              de mi enfoque basado en la evidencia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
