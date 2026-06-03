export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__eyebrow reveal">
            <span className="status-dot" aria-hidden="true"></span>
            <span
              data-en="Available for opportunities · La Nucía, Alicante (ES)"
              data-fr="Ouvert aux opportunités · La Nucía, Alicante (ES)"
            >
              Abierto a oportunidades · La Nucía, Alicante (ES)
            </span>
          </p>

          <h1 className="hero__name reveal" data-d="1">
            Guillermo
            <br />
            Albert García
          </h1>

          <p className="hero__role reveal" data-d="2">
            Full Stack Developer
            <span className="sep">·</span>Java
            <span className="sep">/</span>Spring
            <span className="sep">/</span>Angular
          </p>

          <p className="hero__anchor reveal" data-d="2">
            <span
              data-en="From sequencing data in a lab to deploying containers in production."
              data-fr="De séquencer des données en laboratoire à déployer des conteneurs en production."
            >
              De secuenciar datos en un laboratorio a desplegar{" "}
              <span className="hi">contenedores en producción</span>.
            </span>
          </p>

          <div className="hero__links reveal" data-d="3">
            <a className="cvbtn" data-cv="" href="cv/Guillermo_Albert_CV_ES.pdf" download>
              <span data-en="Download CV" data-fr="Télécharger le CV">Descargar CV</span>{" "}
              <span className="dl" aria-hidden="true">↓</span>
            </a>
            <a
              className="linkmono"
              href="https://github.com/GuillermoAlbert"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span className="arr" aria-hidden="true">↗</span>
            </a>
            <a
              className="linkmono"
              href="https://linkedin.com/in/guillermo-albert-garcia"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span className="arr" aria-hidden="true">↗</span>
            </a>
            <a className="linkmono" href="mailto:guillermo.albert@outlook.com">
              Email <span className="arr" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="spec reveal" data-d="3" aria-label="Resumen">
          <div className="spec__bar">
            <span className="b" aria-hidden="true"></span>
            <span>~/ developer.profile</span>
          </div>
          <div className="spec__rows">
            <div className="spec__row">
              <span className="spec__k">LOCATION</span>
              <span
                className="spec__v"
                data-en="La Nucía, Alicante · Hybrid / Remote"
                data-fr="La Nucía, Alicante · Hybride / À distance"
              >
                La Nucía, Alicante · Híbrido / Remoto
              </span>
            </div>
            <div className="spec__row">
              <span className="spec__k">FOCUS</span>
              <span className="spec__v">
                <em data-en="Backend-first" data-fr="Backend-first">Backend-first</em>{" "}
                <span data-en="· architecture" data-fr="· architecture">· arquitectura</span>
              </span>
            </div>
            <div className="spec__row">
              <span className="spec__k">STACK</span>
              <span className="spec__v">Java · Spring · JPA · Angular</span>
            </div>
            <div className="spec__row">
              <span className="spec__k">INFRA</span>
              <span className="spec__v">Proxmox · Docker · 9× LXC</span>
            </div>
            <div className="spec__row">
              <span className="spec__k">LANGS</span>
              <span className="spec__v">ES · FR · EN (C1)</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
