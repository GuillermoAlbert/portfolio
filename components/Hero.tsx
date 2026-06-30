"use client";
import { useEffect, useRef } from "react";
import { T, cvFile, contactEmail, type Locale } from "@/lib/i18n";

export default function Hero({ locale = "es" }: { locale?: Locale }) {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h1 = nameRef.current;
    if (!h1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = ["Guillermo", "Albert García"];
    const STEP = 100;  // ms between keystrokes
    const HOLD = 900;  // ms the cursor blinks once the name is written
    const savedHTML = h1.innerHTML;
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Hidden character spans, one non-wrapping block per line. Splitting text
    // into spans drops kerning and widens it slightly; nowrap stops that from
    // bumping "Albert García" to a 3rd line, so the layout stays identical
    // before, during, and after typing — no reflow when the markup restores.
    h1.innerHTML = "";
    const chars: HTMLSpanElement[] = [];
    lines.forEach((text) => {
      const lineEl = document.createElement("span");
      lineEl.style.display = "block";
      lineEl.style.whiteSpace = "nowrap";
      Array.from(text).forEach((ch) => {
        const span = document.createElement("span");
        span.textContent = ch;
        span.style.opacity = "0";
        lineEl.appendChild(span);
        chars.push(span);
      });
      h1.appendChild(lineEl);
    });

    // A blinking cursor that travels with the text: each keystroke reveals one
    // character and parks the cursor right after it.
    const cursor = document.createElement("span");
    cursor.className = "tw-cursor";
    cursor.textContent = "_";
    chars[0].before(cursor);

    chars.forEach((span, i) => {
      timers.push(setTimeout(() => {
        span.style.opacity = "1";
        span.after(cursor);
      }, i * STEP));
    });

    // Let the cursor blink, fade it out, then restore the pristine markup so
    // the heading keeps its original kerning.
    timers.push(setTimeout(() => {
      cursor.style.animation = "none";
      cursor.style.transition = "opacity 0.3s ease";
      cursor.style.opacity = "0";
      timers.push(setTimeout(() => { h1.innerHTML = savedHTML; }, 300));
    }, (chars.length - 1) * STEP + HOLD));

    return () => {
      timers.forEach(clearTimeout);
      h1.innerHTML = savedHTML;
    };
  }, []);

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__eyebrow reveal">
            <span className="status-dot" aria-hidden="true"></span>
            <T
              locale={locale}
              es="Abierto a oportunidades · La Nucía, Alicante (ES)"
              en="Available for opportunities · La Nucía, Alicante (ES)"
              fr="Ouvert aux opportunités · La Nucía, Alicante (ES)"
            />
          </p>

          <h1
            className="hero__name"
            ref={nameRef}
            aria-label="Guillermo Albert García"
          >
            Guillermo
            <br />
            Albert García
          </h1>

          <p className="hero__role reveal" data-d="2">
            Backend-first Full Stack Developer
            <span className="sep">·</span>Java
            <span className="sep">/</span>Spring
            <span className="sep">/</span>Angular
          </p>

          <p className="hero__anchor reveal" data-d="2">
            <T
              locale={locale}
              es={'Antes medía biodiversidad en el campo. Ahora despliego <span class="hi">contenedores en producción</span>.'}
              en="I used to measure biodiversity in the field. Now I deploy containers in production."
              fr="Avant, je mesurais la biodiversité sur le terrain. Aujourd'hui, je déploie des conteneurs en production."
            />
          </p>

          <div className="hero__links reveal" data-d="3">
            <a className="cvbtn" data-cv="" href={`/cv/${cvFile(locale)}`} download={cvFile(locale)}>
              <T
                locale={locale}
                es="Descargar CV"
                en="Download CV"
                fr="Télécharger le CV"
              />{" "}
              <span className="dl" aria-hidden="true">↓</span>
            </a>
            <div className="hero__socials">
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
              <a className="linkmono" data-mail="" href={`mailto:${contactEmail(locale)}`}>
                Email <span className="arr" aria-hidden="true">↗</span>
              </a>
            </div>
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
              <T
                locale={locale}
                className="spec__v"
                es="La Nucía, Alicante · Híbrido / Remoto"
                en="La Nucía, Alicante · Hybrid / Remote"
                fr="La Nucía, Alicante · Hybride / À distance"
              />
            </div>
            <div className="spec__row">
              <span className="spec__k">FOCUS</span>
              <T
                locale={locale}
                className="spec__v"
                es="<em>Backend-first</em> · arquitectura"
                en="<em>Backend-first</em> · architecture"
                fr="<em>Backend-first</em> · architecture"
              />
            </div>
            <div className="spec__row">
              <span className="spec__k">STACK</span>
              <span className="spec__v">Java · Spring · JPA · Angular</span>
            </div>
            <div className="spec__row">
              <span className="spec__k">INFRA</span>
              <span className="spec__v">Proxmox · Docker · 10× LXC</span>
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
