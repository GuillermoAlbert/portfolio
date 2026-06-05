export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">§ 06</span>
          <h2 className="sec-title" data-en="Contact" data-fr="Contact">
            Contacto
          </h2>
          <span
            className="sec-note mono"
            data-en="// let's build something"
            data-fr="// construisons quelque chose"
          >
            {"// construyamos algo"}
          </span>
        </div>

        <p
          className="contact__lead reveal"
          data-en="Got a backend that needs designing, a system that needs to stay up, or a project to talk through? Write to me."
          data-fr="Un backend à concevoir, un système à garder debout ou un projet à discuter ? Écrivez-moi."
        >
          ¿Un backend que diseñar, un sistema que mantener en pie o un proyecto del que hablar?
          Escríbeme.
        </p>

        <a
          className="contact__email reveal"
          data-d="1"
          data-mail=""
          href="mailto:hola@guillermoalbert.dev"
          data-en="contact<wbr />@guillermoalbert.dev"
          data-fr="contact<wbr />@guillermoalbert.dev"
        >
          hola<wbr />@guillermoalbert.dev
        </a>

        <div className="contact__row reveal" data-d="2">
          <a className="cvbtn" data-cv="" href="cv/Guillermo_Albert_CV_ES.pdf" download>
            <span data-en="Download CV" data-fr="Télécharger le CV">Descargar CV</span>{" "}
            <span className="dl" aria-hidden="true">↓</span>
          </a>
          <div className="contact__social">
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
              href="https://www.linkedin.com/in/guillermo-albert-garcia"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span className="arr" aria-hidden="true">↗</span>
            </a>
            <a className="linkmono" href="tel:+34640347624">
              (+34) 640 347 624
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
