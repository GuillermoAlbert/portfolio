import { T, type Locale } from "@/lib/i18n";

// Experience timeline. Periods are real; bullets mirror the CV's quantified
// highlights so the site carries the same weight as the PDF.

export default function Experience({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal" data-num="02">
          <span className="sec-index">§ 02</span>
          <T
            locale={locale}
            as="h2"
            className="sec-title"
            es="Experiencia"
            en="Experience"
            fr="Expérience"
          />
          <T
            locale={locale}
            className="sec-note mono"
            es="// mi trayectoria"
            en="// where I've worked"
            fr="// mon parcours"
          />
        </div>

        <div className="xp reveal" data-d="1" data-stagger>
          <article className="xp__item">
            <T
              locale={locale}
              as="p"
              className="xp__period mono"
              es="mar. 2024 — Presente"
              en="Mar 2024 — Present"
              fr="mars 2024 — Aujourd'hui"
            />
            <h3 className="xp__role">
              Full Stack Developer <span className="xp__org">· Inetum</span>
            </h3>
            <T
              locale={locale}
              as="p"
              className="xp__meta"
              es="FranceAgriMer · sector público"
              en="FranceAgriMer · public sector"
              fr="FranceAgriMer · secteur public"
            />
            <T
              locale={locale}
              as="p"
              className="xp__desc"
              es="Dos plataformas para FranceAgriMer, el organismo público bajo el Ministerio de Agricultura francés, que gestionan ayudas, subvenciones y pagos a agricultores de toda Francia."
              en="Two platforms for FranceAgriMer, the French public agency under the Ministry of Agriculture, managing aid, subsidies and payments to farmers across France."
              fr="Deux plateformes pour FranceAgriMer, établissement public sous tutelle du ministère de l'Agriculture, gérant aides, subventions et paiements aux agriculteurs de toute la France."
            />
            <ul className="xp__bullets">
              <T
                locale={locale}
                as="li"
                es="Proyecto nuevo (Angular / Spring / JPA): flujos transaccionales end-to-end hasta producción, del modelo de datos al controlador, lógica de negocio compleja y evolución del esquema con Liquibase."
                en="New project (Angular / Spring / JPA): end-to-end transactional flows through to production, from data model to controller, complex business logic and schema evolution with Liquibase."
                fr="Nouveau projet (Angular / Spring / JPA) : flux transactionnels end-to-end jusqu'à la production, du modèle de données au contrôleur, logique métier complexe et évolution du schéma avec Liquibase."
              />
              <T
                locale={locale}
                as="li"
                es="Proyecto legacy (JSF / Java 8 / Oracle): mantenimiento evolutivo, plantillas JasperReports para documentos oficiales y 15+ scripts correctivos PL/SQL sobre base de datos productiva."
                en="Legacy project (JSF / Java 8 / Oracle): maintenance and evolution, JasperReports templates for official documents and 15+ corrective PL/SQL scripts on a production database."
                fr="Projet legacy (JSF / Java 8 / Oracle) : maintenance évolutive, modèles JasperReports pour les documents officiels et 15+ scripts correctifs PL/SQL sur une base de données en production."
              />
              <T
                locale={locale}
                as="li"
                es="Calidad continua con SonarQube, JUnit y tests de componentes Angular, en un equipo internacional (~10 pers.) bajo metodología Agile."
                en="Continuous quality with SonarQube, JUnit and Angular component tests, in an international team (~10 people) using Agile."
                fr="Qualité continue avec SonarQube, JUnit et tests de composants Angular, au sein d'une équipe internationale (~10 pers.) en méthodologie Agile."
              />
            </ul>
          </article>

          {/* The teaching year is in all three CVs and was missing here, so the
              two documents disagreed about a whole year of the timeline. It
              sits between Inetum and DAW because it overlapped both. */}
          <article className="xp__item">
            <T
              locale={locale}
              as="p"
              className="xp__period mono"
              es="sept. 2023 — sept. 2024"
              en="Sep 2023 — Sep 2024"
              fr="sept. 2023 — sept. 2024"
            />
            <h3 className="xp__role">
              <T
                locale={locale}
                es="Profesor de Ciencias"
                en="Science Teacher"
                fr="Professeur de Sciences"
              />{" "}
              <T
                locale={locale}
                as="span"
                className="xp__org"
                es="· Liceo Francés de Alicante"
                en="· Lycée Français d'Alicante"
                fr="· Lycée Français d'Alicante"
              />
            </h3>
            <T
              locale={locale}
              as="p"
              className="xp__meta"
              es="Bachillerato · bilingüe francés/español"
              en="Upper secondary · bilingual French/Spanish"
              fr="Lycée · bilingue français/espagnol"
            />
            <T
              locale={locale}
              as="p"
              className="xp__desc"
              es="Docencia de ciencias en bachillerato (baccalauréat francés), en entorno bilingüe francés/español y compatibilizada con el inicio en Inetum."
              en="Taught science at upper-secondary level (French baccalauréat) in a bilingual French/Spanish environment, alongside starting at Inetum."
              fr="Enseignement des sciences au lycée (baccalauréat français) dans un environnement bilingue français/espagnol, en parallèle de mes débuts chez Inetum."
            />
          </article>

          <article className="xp__item xp__item--pivot">
            <p className="xp__period mono">2022 — 2024</p>
            <T
              locale={locale}
              className="xp__pivot mono"
              es="el giro"
              en="the pivot"
              fr="le virage"
            />
            <h3 className="xp__role">
              <T
                locale={locale}
                es="Desarrollo de Aplicaciones Web (DAW)"
                en="Web App Development (DAW)"
                fr="Développement d'applications web (DAW)"
              />{" "}
              <span className="xp__org">· IES Mare Nostrum</span>
            </h3>
            <T
              locale={locale}
              as="p"
              className="xp__meta"
              es="FP Superior · desarrollo de software"
              en="Higher diploma · software development"
              fr="Diplôme supérieur · développement logiciel"
            />
            <T
              locale={locale}
              as="p"
              className="xp__desc"
              es="Dos años de desarrollo full-stack, bases de datos y despliegue. Me incorporé a Inetum antes de terminar el ciclo."
              en="Two years of full-stack development, databases and deployment. I joined Inetum before finishing the programme."
              fr="Deux ans de développement full-stack, bases de données et déploiement. J'ai rejoint Inetum avant la fin du cursus."
            />
          </article>

          <article className="xp__item">
            <p className="xp__period mono">2016 — 2022</p>
            <h3 className="xp__role">
              <T
                locale={locale}
                es="Investigación y Biología"
                en="Research &amp; Biology"
                fr="Recherche &amp; Biologie"
              />{" "}
              {/* Not "· Universidad de Alicante" alone: the row's own copy names
                  a València master and research at CSIC and Helsinki, so a
                  single-institution label misattributed three of the four. */}
              {/* Luomus, not "the Helsinki museum": it is the Finnish Museum of
                  Natural History, part of the University of Helsinki, and the
                  vague version invited the wrong guess. Its own name needs no
                  translation, so this stays a plain span in all three. */}
              <span className="xp__org">· UA · CSIC · Luomus (Helsinki)</span>
            </h3>
            <T
              locale={locale}
              as="p"
              className="xp__meta"
              es="Grado + 2 másteres · investigación"
              en="BSc + 2 MScs · research"
              fr="Licence + 2 masters · recherche"
            />
            <T
              locale={locale}
              as="p"
              className="xp__desc"
              es="Investigación en el CSIC (Estación Biológica de Doñana) y en Luomus, el Museo de Historia Natural de Finlandia (Univ. de Helsinki), con un Máster en Biodiversidad (Univ. de València). Secuenciación de datos, medición de biodiversidad y 3 publicaciones, una de ellas en revista revisada por pares."
              en="Research at CSIC (Doñana Biological Station) and at Luomus, the Finnish Museum of Natural History (Univ. of Helsinki), with an MSc in Biodiversity (Univ. of Valencia). Sequencing data, measuring biodiversity, and 3 publications, one of them in a peer-reviewed journal."
              fr="Recherche au CSIC (Station biologique de Doñana) et au Luomus, le Muséum finlandais d'histoire naturelle (Univ. d'Helsinki), avec un Master en Biodiversité (Univ. de Valence). Séquençage de données, mesure de la biodiversité et 3 publications, dont une en revue à comité de lecture."
            />
          </article>
        </div>
      </div>
    </section>
  );
}
