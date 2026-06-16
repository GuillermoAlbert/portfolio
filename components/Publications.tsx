import { T, type Locale } from "@/lib/i18n";

export default function Publications({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="section section--sand" id="publications">
      <div className="container">
        <div className="section-head reveal" data-num="05">
          <span className="sec-index">§ 05</span>
          <T
            locale={locale}
            as="h2"
            className="sec-title"
            es="Publicaciones"
            en="Publications"
            fr="Publications"
          />
          <T
            locale={locale}
            className="sec-note mono"
            es="// revisadas por pares"
            en="// peer-reviewed"
            fr="// évalué par les pairs"
          />
        </div>

        <div className="pubs reveal" data-stagger>

          <article className="pub">
            <div className="pub__bar">
              <span className="pub__year mono">2022</span>
              <T
                locale={locale}
                className="pub__ai-tag mono"
                es="IA aplicada"
                en="applied ML"
                fr="ML appliqué"
              />
              <span className="pub__venue-wrap">
                <em className="pub__venue">Ibis</em>
                <span className="pub__vol mono">164(4) · 1123–1131</span>
              </span>
            </div>
            <h3 className="pub__title">
              Semi‐automated detection of tagged animals from camera trap
              images using artificial intelligence
            </h3>
            <p className="pub__authors">
              Santangeli, A., Chen, Y., Boorman, M., Sales Ligero, S.,{" "}
              &amp; <span className="pub__me">Albert García, G.</span>
            </p>
            <a
              className="pub__doi"
              href="https://onlinelibrary.wiley.com/doi/10.1111/ibi.13099"
              target="_blank"
              rel="noopener noreferrer"
            >
              doi:10.1111/ibi.13099{" "}
              <span className="arr" aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="pub">
            <div className="pub__bar">
              <span className="pub__year mono">2022</span>
              <span className="pub__conf-tag mono">conf.</span>
              <span className="pub__venue-wrap">
                <em className="pub__venue">INTED2022 Proceedings</em>
                <span className="pub__vol mono">pp. 2481–2487</span>
              </span>
            </div>
            <h3 className="pub__title">
              Teaching Parasitology in Biology Degrees: From Subjects to
              Principles
            </h3>
            <p className="pub__authors">
              Aznar-Avendaño, F.J., <span className="pub__me">Albert-García, G.</span>,
              Barón-Rodríguez, P., et al.
            </p>
            <a
              className="pub__doi"
              href="https://doi.org/10.21125/inted.2022.0726"
              target="_blank"
              rel="noopener noreferrer"
            >
              doi:10.21125/inted.2022.0726{" "}
              <span className="arr" aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="pub">
            <div className="pub__bar">
              <span className="pub__year mono">2015</span>
              <span className="pub__venue-wrap">
                <em className="pub__venue">Iberomyrmex</em>
                <span className="pub__vol mono">7 · 3–6</span>
              </span>
            </div>
            <h3 className="pub__title">
              Hormigas del Parque Natural de Serra Gelada y citas
              interesantes para la mirmecofauna alicantina (Hymenoptera,
              Formicidae)
            </h3>
            <p className="pub__authors">
              <span className="pub__me">Albert, G.</span>, &amp; Arcos, J.
            </p>
            <a
              className="pub__doi"
              href="https://mirmiberica.org/mirmiadmin/wp-content/uploads/2025/04/Iberomyrmex_7_2015.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iberomyrmex nº 7 (PDF){" "}
              <span className="arr" aria-hidden="true">↗</span>
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}
