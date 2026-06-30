import { T, type Locale } from "@/lib/i18n";

export default function Footer({ locale = "es" }: { locale?: Locale }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Guillermo Albert García</span>
        <T
          locale={locale}
          es="Diseñado y construido en La Nucía, Alicante"
          en="Designed &amp; built in La Nucía, Alicante"
          fr="Conçu et développé à La Nucía, Alicante"
        />
        <T
          locale={locale}
          as="a"
          href="#top"
          es="Volver arriba ↑"
          en="Back to top ↑"
          fr="Retour en haut ↑"
        />
      </div>
    </footer>
  );
}
