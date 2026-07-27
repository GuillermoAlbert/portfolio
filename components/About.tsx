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
          <T
            locale={locale}
            className="sec-note mono"
            es="// biología → dev"
            en="// biology → dev"
            fr="// biologie → dev"
          />
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
                es="De la investigación me quedó un reflejo: no me fío de un resultado que no sé reproducir. En el laboratorio eso era repetir la medición; aquí es un log que confirma lo que creo que ha pasado, o un test que falla cuando tiene que fallar."
                en="Research left me with a reflex I never dropped: I don't trust a result I can't reproduce. In the lab that meant running the measurement again; here it's a log confirming what I think happened, or a test that fails when it should."
                fr="De la recherche j'ai gardé un réflexe : je ne me fie pas à un résultat que je ne sais pas reproduire. Au laboratoire, cela voulait dire refaire la mesure ; ici, c'est un log qui confirme ce que je crois avoir vu, ou un test qui échoue quand il doit échouer."
              />
              <T
                locale={locale}
                as="p"
                es="Soy <strong>backend-first</strong>. En frontend me defiendo, pero donde aporto de verdad es una capa por debajo: en cómo se modelan los datos y en qué pasa cuando llega más carga de la prevista."
                en="I'm <strong>backend-first</strong>. I can hold my own on the frontend, but I earn my keep a layer below it: in how the data is modelled and in what happens when more load turns up than anyone planned for."
                fr="Je suis <strong>backend-first</strong>. En frontend je me débrouille, mais je suis vraiment utile une couche plus bas : dans la façon dont les données sont modélisées et dans ce qui se passe quand la charge dépasse ce qui était prévu."
              />
              <T
                locale={locale}
                as="p"
                es="Con IA agéntica (Claude Code, MCP) no improviso. La especificación la escribo yo, casos límite incluidos, y el agente ejecuta contra ella. Después el código pasa por las puertas de siempre: tests, revisión, monitorización. Lo que no las pasa, se reescribe."
                en="With agentic AI (Claude Code, MCP) I don't improvise. I write the spec myself, edge cases included, and the agent builds against it. The code then goes through the same gates as anything else: tests, review, monitoring. Whatever doesn't clear them gets rewritten."
                fr="Avec l'IA agentique (Claude Code, MCP) je n'improvise pas. C'est moi qui écris la spec, cas limites compris, et l'agent exécute contre elle. Ensuite le code passe par les garde-fous habituels : tests, revue, supervision. Ce qui ne passe pas, je le réécris."
              />
            </div>
          </div>

          <aside
            className="facts reveal"
            data-d="1"
            data-stagger
            aria-label={locale === "en" ? "Facts" : locale === "fr" ? "Repères" : "Datos"}
            data-aria-es="Datos"
            data-aria-en="Facts"
            data-aria-fr="Repères"
          >
            {/* Deliberately a summary, and deliberately redundant. Four of these
                rows say something the page says again later — FOCUS and LANGS
                also sit in the hero spec card, EXPERIENCE opens §02, RESEARCH
                lists what §05 lists — and that is the point: it lets someone who
                will not read three paragraphs leave with the whole picture in
                one glance. Judged as prose it is repetition; judged as an index
                it is the job. Two things it does NOT repeat: the two masters
                (the Teacher Training one appears nowhere else on the site) and
                the Scholar link, which makes §05 checkable in one click and sits
                next to the claim it backs. Keep RESEARCH phrased exactly as §05
                — "1 en revista revisada por pares", never "3 revisadas por
                pares" — or the summary contradicts the section it summarises. */}
            <div className="facts__row">
              <span className="facts__k">EDUCATION</span>
              <T
                locale={locale}
                className="facts__v"
                es={'Grado en Biología (UA) · DAW<span class="sub">Máster en Profesorado · Máster en Biodiversidad (Univ. de València)</span>'}
                en={'BSc Biology (UA) · Web App Dev (DAW)<span class="sub">MSc in Teacher Training · MSc in Biodiversity (Univ. of Valencia)</span>'}
                fr={'Licence de Biologie (UA) · DAW<span class="sub">Master en enseignement · Master en Biodiversité (Univ. de Valence)</span>'}
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">RESEARCH</span>
              <T
                locale={locale}
                className="facts__v"
                es={'3 publicaciones · 1 en revista revisada por pares<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
                en={'3 publications · 1 in a peer-reviewed journal<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
                fr={'3 publications · 1 en revue à comité de lecture<span class="sub">Ibis 2022 · INTED2022 · Iberomyrmex 2015</span>'}
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">SCHOLAR</span>
              <span className="facts__v">
                <a
                  className="linkmono"
                  href="https://scholar.google.com/citations?user=Xo9Er0sAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar <span className="arr" aria-hidden="true">↗</span>
                </a>
              </span>
            </div>
            <div className="facts__row">
              <span className="facts__k">EXPERIENCE</span>
              <T
                locale={locale}
                className="facts__v"
                es={'Full Stack Developer @ Inetum<span class="sub">FranceAgriMer · sector público</span>'}
                en={'Full Stack Developer @ Inetum<span class="sub">FranceAgriMer · public sector</span>'}
                fr={'Full Stack Developer @ Inetum<span class="sub">FranceAgriMer · secteur public</span>'}
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">LANGS</span>
              <T
                locale={locale}
                className="facts__v"
                es="ES nativo · FR bilingüe · EN C1"
                en="ES native · FR bilingual · EN C1"
                fr="ES natif · FR bilingue · EN C1"
              />
            </div>
            <div className="facts__row">
              <span className="facts__k">FOCUS</span>
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
