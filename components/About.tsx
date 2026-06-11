import { T, type Locale } from "@/lib/i18n";

export default function About({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="section section--sand" id="about">
      <div className="container">
        <div className="section-head reveal" data-num="01">
          <span className="sec-index">§ 01</span>
          <T
            locale={locale}
            as="h2"
            className="sec-title"
            es="Sobre mí"
            en="About"
            fr="À propos"
          />
          <span className="sec-note mono">{"// biology → dev"}</span>
        </div>

        <div className="about__grid">
          <div className="reveal">
            <T
              locale={locale}
              as="p"
              className="about__quote"
              es={'Abordo el backend como antes abordaba el laboratorio: <span class="accent">hipótesis, medir, iterar.</span>'}
              en={'I treat backend the way I once treated the lab: <span class="accent">hypothesis, measure, iterate.</span>'}
              fr={'J\'aborde le backend comme j\'abordais le laboratoire : <span class="accent">hypothèse, mesurer, itérer.</span>'}
            />
            <div className="about__body">
              <T
                locale={locale}
                as="p"
                es="Empecé en un laboratorio: secuenciando datos, midiendo biodiversidad y defendiendo cada conclusión con evidencia. Hoy diseño APIs, modelo bases de datos y despliego contenedores en producción. El método apenas cambió."
                en="I started in a lab — sequencing data, measuring biodiversity, defending every conclusion with evidence. Today I design APIs, model databases and deploy containers to production. The method barely changed."
                fr="J'ai commencé dans un laboratoire : à séquencer des données, mesurer la biodiversité et défendre chaque conclusion par des preuves. Aujourd'hui je conçois des API, modélise des bases de données et déploie des conteneurs en production. La méthode n'a presque pas changé."
              />
              <T
                locale={locale}
                as="p"
                es="Mi base científica —un Grado en Biología, investigación y tres publicaciones revisadas por pares— es la lente con la que abordo el desarrollo: rigor, lectura crítica de los datos y la disciplina de medir antes de decidir."
                en="My scientific background — a Biology degree, research, and three peer-reviewed publications — is the lens I bring to development: rigour, critical reading of the data, and the discipline of measuring before deciding."
                fr="Ma formation scientifique —une licence de Biologie, de la recherche et trois publications évaluées par les pairs— est le prisme avec lequel j'aborde le développement : rigueur, lecture critique des données et la discipline de mesurer avant de décider."
              />
              <T
                locale={locale}
                as="p"
                es="Soy <strong>backend-first</strong>. Me importan la arquitectura, el modelo de datos y que el sistema siga en pie cuando nadie mira. El frontend lo defiendo; el backend lo lidero."
                en="I'm <strong>backend-first</strong>. I care about architecture, the data model, and whether the system stays up when nobody is watching. I can hold my own on the frontend — but the backend is where I lead."
                fr="Je suis <strong>backend-first</strong>. Ce qui m'importe : l'architecture, le modèle de données et que le système tienne debout quand personne ne regarde. Le frontend, je le défends ; le backend, je le mène."
              />
              <T
                locale={locale}
                as="p"
                es="Y trabajo con herramientas de IA agéntica —Claude Code, MCP— como con Docker o Git: una herramienta más que controlo, no un sustituto del criterio técnico."
                en="And I work with agentic AI tools — Claude Code, MCP — just like Docker or Git: one more tool I control, not a substitute for technical judgement."
                fr="Et je travaille avec des outils d'IA agentique — Claude Code, MCP — comme avec Docker ou Git : un outil de plus que je contrôle, pas un substitut au jugement technique."
              />
            </div>
          </div>

          <aside className="facts reveal" data-d="1" aria-label="Datos">
            <div className="facts__row">
              <span className="facts__k">FORMACIÓN / EDUCATION</span>
              <T
                locale={locale}
                className="facts__v"
                es="Grado en Biología (UA) · DAW"
                en="BSc Biology (UA) · Web App Dev (DAW)"
                fr="Licence de Biologie (UA) · DAW"
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">INVESTIGACIÓN / RESEARCH</span>
              <T
                locale={locale}
                className="facts__v"
                es={'3 publicaciones revisadas por pares<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
                en={'3 peer-reviewed publications<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
                fr={'3 publications évaluées par les pairs<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">EXPERIENCIA / EXPERIENCE</span>
              <T
                locale={locale}
                className="facts__v"
                es={'Full Stack Developer @ Inetum<span class="sub">France AgriMer · sector público</span>'}
                en={'Full Stack Developer @ Inetum<span class="sub">France AgriMer · public sector</span>'}
                fr={'Full Stack Developer @ Inetum<span class="sub">France AgriMer · secteur public</span>'}
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">IDIOMAS / LANGUAGES</span>
              <T
                locale={locale}
                className="facts__v"
                es="ES nativo · FR bilingüe · EN C1"
                en="ES native · FR bilingual · EN C1"
                fr="ES natif · FR bilingue · EN C1"
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">ENFOQUE / FOCUS</span>
              <T
                locale={locale}
                className="facts__v"
                es="Backend &amp; arquitectura"
                en="Backend &amp; architecture"
                fr="Backend &amp; architecture"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
