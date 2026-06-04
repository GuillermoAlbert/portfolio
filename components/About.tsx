export default function About() {
  return (
    <section className="section section--sand" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">§ 01</span>
          <h2 className="sec-title" data-en="About" data-fr="À propos">
            Sobre mí
          </h2>
          <span className="sec-note mono">{"// biology → dev"}</span>
        </div>

        <div className="about__grid">
          <div className="reveal">
            <p
              className="about__quote"
              data-en={'I treat backend the way I once treated the lab: <span class="accent">hypothesis, measure, iterate.</span>'}
              data-fr={'J\'aborde le backend comme j\'abordais le laboratoire : <span class="accent">hypothèse, mesurer, itérer.</span>'}
            >
              Abordo el backend como antes abordaba el laboratorio:{" "}
              <span className="accent">hipótesis, medir, iterar.</span>
            </p>
            <div className="about__body">
              <p
                data-en="I started in a lab — sequencing data, measuring biodiversity, defending every conclusion with evidence. Today I design APIs, model databases and deploy containers to production. The method barely changed."
                data-fr="J'ai commencé dans un laboratoire : à séquencer des données, mesurer la biodiversité et défendre chaque conclusion par des preuves. Aujourd'hui je conçois des API, modélise des bases de données et déploie des conteneurs en production. La méthode n'a presque pas changé."
              >
                Empecé en un laboratorio: secuenciando datos, midiendo biodiversidad y defendiendo
                cada conclusión con evidencia. Hoy diseño APIs, modelo bases de datos y despliego
                contenedores en producción. El método apenas cambió.
              </p>
              <p
                data-en="My scientific background — a Biology degree, research, and three peer-reviewed publications — is the lens I bring to development: rigour, critical reading of the data, and the discipline of measuring before deciding."
                data-fr="Ma formation scientifique —une licence de Biologie, de la recherche et trois publications évaluées par les pairs— est le prisme avec lequel j'aborde le développement : rigueur, lecture critique des données et la discipline de mesurer avant de décider."
              >
                Mi base científica —un Grado en Biología, investigación y tres publicaciones revisadas
                por pares— es la lente con la que abordo el desarrollo: rigor, lectura crítica de
                los datos y la disciplina de medir antes de decidir.
              </p>
              <p
                data-en={'I\'m <strong>backend-first</strong>. I care about architecture, the data model, and whether the system stays up when nobody is watching. I can hold my own on the frontend — but the backend is where I lead.'}
                data-fr={'Je suis <strong>backend-first</strong>. Ce qui m\'importe : l\'architecture, le modèle de données et que le système tienne debout quand personne ne regarde. Le frontend, je le défends ; le backend, je le mène.'}
              >
                Soy <strong>backend-first</strong>. Me importan la arquitectura, el modelo de datos
                y que el sistema siga en pie cuando nadie mira. El frontend lo defiendo; el backend
                lo lidero.
              </p>
              <p
                data-en="And I work with agentic AI tools — Claude Code, MCP — just like Docker or Git: one more tool I control, not a substitute for technical judgement."
                data-fr="Et je travaille avec des outils d'IA agentique — Claude Code, MCP — comme avec Docker ou Git : un outil de plus que je contrôle, pas un substitut au jugement technique."
              >
                Y trabajo con herramientas de IA agéntica —Claude Code, MCP— como con Docker o Git:
                una herramienta más que controlo, no un sustituto del criterio técnico.
              </p>
            </div>
          </div>

          <aside className="facts reveal" data-d="1" aria-label="Datos">
            <div className="facts__row">
              <span className="facts__k">FORMACIÓN / EDUCATION</span>
              <span
                className="facts__v"
                data-en="BSc Biology (UA) · Web App Dev (DAW)"
                data-fr="Licence de Biologie (UA) · DAW"
              >
                Grado en Biología (UA) · DAW
              </span>
            </div>
            <div className="facts__row">
              <span className="facts__k">INVESTIGACIÓN / RESEARCH</span>
              <span
                className="facts__v"
                data-en={'3 peer-reviewed publications<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
                data-fr={'3 publications évaluées par les pairs<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
              >
                3 publicaciones revisadas por pares
                <span className="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>
              </span>
            </div>
            <div className="facts__row">
              <span className="facts__k">EXPERIENCIA / EXPERIENCE</span>
              <span
                className="facts__v"
                data-en={'Full Stack Developer @ Inetum<span class="sub">France AgriMer · public sector</span>'}
                data-fr={'Full Stack Developer @ Inetum<span class="sub">France AgriMer · secteur public</span>'}
              >
                Full Stack Developer @ Inetum
                <span className="sub">France AgriMer · sector público</span>
              </span>
            </div>
            <div className="facts__row">
              <span className="facts__k">IDIOMAS / LANGUAGES</span>
              <span className="facts__v">
                ES <span data-en="native" data-fr="natif">nativo</span>
                {" "}· FR <span data-en="bilingual" data-fr="bilingue">bilingüe</span>
                {" "}· EN C1
              </span>
            </div>
            <div className="facts__row">
              <span className="facts__k">ENFOQUE / FOCUS</span>
              <span
                className="facts__v"
                data-en="Backend &amp; architecture"
                data-fr="Backend &amp; architecture"
              >
                Backend &amp; arquitectura
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
