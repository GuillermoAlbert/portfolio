import { T, cvFile, contactEmail, type Locale } from "@/lib/i18n";

export default function Contact({ locale = "es" }: { locale?: Locale }) {
  const email = contactEmail(locale);
  return (
    // `island` re-declares the dark token set on this section, so every child
    // (email, ghost numeral, ghost buttons, social links) re-themes for free.
    // It gives the page its only value anchor and a real ending instead of a
    // fade-out. In dark mode it steps up a surface — see globals.css.
    <section className="section island" id="contact">
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
            es="// ¿hablamos?"
            en="// let's talk"
            fr="// on en parle ?"
          />
        </div>

        <T
          locale={locale}
          as="p"
          className="contact__lead reveal"
          es="Si tienes un backend que diseñar o un sistema que hay que mantener en pie, escríbeme."
          en="If you've got a backend to design, or a system that has to stay up, get in touch."
          fr="Si vous avez un backend à concevoir ou un système qui doit rester en ligne, écrivez-moi."
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
