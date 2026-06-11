import { T, cvFile, contactEmail, type Locale } from "@/lib/i18n";

export default function Contact({ locale = "es" }: { locale?: Locale }) {
  const email = contactEmail(locale);
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal" data-num="06">
          <span className="sec-index">§ 06</span>
          <T
            locale={locale}
            as="h2"
            className="sec-title"
            es="Contacto"
            en="Contact"
            fr="Contact"
          />
          <T
            locale={locale}
            className="sec-note mono"
            es="// construyamos algo"
            en="// let's build something"
            fr="// construisons quelque chose"
          />
        </div>

        <T
          locale={locale}
          as="p"
          className="contact__lead reveal"
          es="¿Un backend que diseñar, un sistema que mantener en pie o un proyecto del que hablar? Escríbeme."
          en="Got a backend that needs designing, a system that needs to stay up, or a project to talk through? Write to me."
          fr="Un backend à concevoir, un système à garder debout ou un projet à discuter ? Écrivez-moi."
        />

        <T
          locale={locale}
          as="a"
          className="contact__email reveal"
          data-d="1"
          data-mail=""
          href={`mailto:${email}`}
          es="hola<wbr>@guillermoalbert.dev"
          en="contact<wbr>@guillermoalbert.dev"
          fr="contact<wbr>@guillermoalbert.dev"
        />

        <div className="contact__row reveal" data-d="2">
          <a className="cvbtn" data-cv="" href={`/cv/${cvFile(locale)}`} download={cvFile(locale)}>
            <T
              locale={locale}
              es="Descargar CV"
              en="Download CV"
              fr="Télécharger le CV"
            />{" "}
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
