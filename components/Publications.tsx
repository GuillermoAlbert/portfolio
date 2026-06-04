export default function Publications() {
  return (
    <section className="section section--sand" id="publications">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">§ 05</span>
          <h2
            className="sec-title"
            data-en="Publications"
            data-fr="Publications"
          >
            Publicaciones
          </h2>
          <span
            className="sec-note mono"
            data-en="// peer-reviewed"
            data-fr="// évalué par les pairs"
          >
            {"// revisadas por pares"}
          </span>
        </div>

        <div className="pubs reveal">

          <article className="pub">
            <div className="pub__bar">
              <span className="pub__year mono">2022</span>
              <span
                className="pub__ai-tag mono"
                data-en="applied ML"
                data-fr="ML appliqué"
              >
                IA aplicada
              </span>
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
              <span className="pub__conf-tag mono"
                data-en="conf."
                data-fr="conf."
              >conf.</span>
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
