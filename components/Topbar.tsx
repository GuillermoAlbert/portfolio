export default function Topbar() {
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <a className="brand" href="#top" aria-label="Guillermo Albert García">
          <span className="brand__dot"></span>
          <span>
            <b>Guillermo Albert</b> <span>· guillermoalbert.dev</span>
          </span>
        </a>
        <nav className="nav" aria-label="Secciones">
          <div className="nav__sections" id="nav-sections">
            <a className="navlink" href="#about">
              <span className="idx">01</span>
              <span data-en="About" data-fr="À propos">Sobre mí</span>
            </a>
            <a className="navlink" href="#experience">
              <span className="idx">02</span>
              <span data-en="Experience" data-fr="Expérience">Experiencia</span>
            </a>
            <a className="navlink" href="#stack">
              <span className="idx">03</span>
              <span>Stack</span>
            </a>
            <a className="navlink" href="#work">
              <span className="idx">04</span>
              <span data-en="Work" data-fr="Travaux">Trabajo</span>
            </a>
            <a className="navlink" href="#publications">
              <span className="idx">05</span>
              <span data-en="Publications" data-fr="Publications">Publicaciones</span>
            </a>
            <a className="navlink" href="#contact">
              <span className="idx">06</span>
              <span data-en="Contact" data-fr="Contact">Contacto</span>
            </a>
          </div>
          <div className="langtoggle" role="group" aria-label="Idioma / Language / Langue">
            <button type="button" data-setlang="es" className="is-on">ES</button>
            <button type="button" data-setlang="en">EN</button>
            <button type="button" data-setlang="fr">FR</button>
          </div>
          <button
            type="button"
            className="iconbtn themetoggle"
            data-theme-toggle=""
            aria-label="Cambiar tema / Toggle theme"
            aria-pressed="false"
          >
            <svg
              className="ic ic-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg
              className="ic ic-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <button
            type="button"
            className="iconbtn navtoggle"
            aria-label="Abrir menú de secciones"
            aria-expanded="false"
            aria-controls="nav-sections"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
