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
              fr="mars 2024 — Présent"
            />
            <h3 className="xp__role">
              Full Stack Developer <span className="xp__org">· Inetum</span>
            </h3>
            <T
              locale={locale}
              as="p"
              className="xp__meta"
              es="France AgriMer · sector público"
              en="France AgriMer · public sector"
              fr="France AgriMer · secteur public"
            />
            <T
              locale={locale}
              as="p"
              className="xp__desc"
              es="Dos plataformas para el Ministerio France AgriMer, que gestionan ayudas, subvenciones y pagos a agricultores de toda Francia."
              en="Two platforms for the French Ministry France AgriMer, managing aid, subsidies and payments to farmers across France."
              fr="Deux plateformes pour le ministère France AgriMer, gérant aides, subventions et paiements aux agriculteurs de toute la France."
            />
            <ul className="xp__bullets">
              <T
                locale={locale}
                as="li"
                es="Proyecto nuevo (Angular / Spring / JPA): 5 entidades transaccionales end-to-end hasta producción, lógica de negocio compleja y evolución del esquema con Liquibase."
                en="New project (Angular / Spring / JPA): 5 transactional entities developed end-to-end into production, complex business logic and schema evolution with Liquibase."
                fr="Nouveau projet (Angular / Spring / JPA) : 5 entités transactionnelles développées end-to-end jusqu'à la production, logique métier complexe et évolution du schéma avec Liquibase."
              />
              <T
                locale={locale}
                as="li"
                es="Proyecto legacy (JSF / Java 8 / Oracle): mantenimiento evolutivo, 10+ plantillas JasperReports y 15+ scripts correctivos PL/SQL sobre base de datos productiva."
                en="Legacy project (JSF / Java 8 / Oracle): evolutive maintenance, 10+ JasperReports templates and 15+ corrective PL/SQL scripts on a production database."
                fr="Projet legacy (JSF / Java 8 / Oracle) : maintenance évolutive, 10+ modèles JasperReports et 15+ scripts correctifs PL/SQL sur une base de données en production."
              />
              <T
                locale={locale}
                as="li"
                es="Calidad continua con SonarQube, JUnit y tests de componentes Angular, en un equipo internacional (~10 pers.) bajo metodología Agile."
                en="Continuous quality with SonarQube, JUnit and Angular component tests, in an international team (~10 people) under Agile methodology."
                fr="Qualité continue avec SonarQube, JUnit et tests de composants Angular, au sein d'une équipe internationale (~10 pers.) en méthodologie Agile."
              />
            </ul>
          </article>

          <article className="xp__item">
            <p className="xp__period mono">2022 — 2024</p>
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
              es="Mi transición formal al software: dos años de desarrollo full-stack, bases de datos y despliegue. Me incorporé a Inetum antes de terminar el ciclo."
              en="My formal switch into software: two years of full-stack development, databases and deployment. I joined Inetum before finishing the programme."
              fr="Ma transition formelle vers le logiciel : deux ans de développement full-stack, bases de données et déploiement. J'ai rejoint Inetum avant la fin du cursus."
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
              <span className="xp__org">· Universidad de Alicante</span>
            </h3>
            <T
              locale={locale}
              as="p"
              className="xp__meta"
              es="Grado + Máster · investigación"
              en="BSc + MSc · research"
              fr="Licence + Master · recherche"
            />
            <T
              locale={locale}
              as="p"
              className="xp__desc"
              es="Investigación en el CSIC (Estación Biológica de Doñana) y en el Museo de Historia Natural de Helsinki, con un Máster en Biodiversidad (Univ. de València). Secuenciación de datos, medición de biodiversidad y 3 publicaciones revisadas por pares. Ahí nació mi enfoque basado en la evidencia."
              en="Research at CSIC (Doñana Biological Station) and the Helsinki Natural History Museum, with an MSc in Biodiversity (Univ. of Valencia). Sequencing data, measuring biodiversity, and 3 peer-reviewed publications. That's where my evidence-based approach to engineering began."
              fr="Recherche au CSIC (Station biologique de Doñana) et au Muséum d'histoire naturelle d'Helsinki, avec un Master en Biodiversité (Univ. de Valence). Séquencer des données, mesurer la biodiversité et 3 publications évaluées par les pairs. C'est là qu'est née mon approche fondée sur les preuves."
            />
          </article>
        </div>
      </div>
    </section>
  );
}
