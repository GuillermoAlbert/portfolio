"use client";
import { useEffect, useRef } from "react";
import { T, cvFile, contactEmail, type Locale } from "@/lib/i18n";
import { MethodDiagram } from "@/components/ProjectDiagrams";

export default function Hero({ locale = "es" }: { locale?: Locale }) {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h1 = nameRef.current;
    if (!h1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = ["Guillermo", "Albert García"];
    const STEP = 72;        // base ms between keystrokes (jittered per key)
    const LINE_PAUSE = 430; // "Enter" beat before starting the second line
    const WORD_PAUSE = 120; // extra breath after a space
    const BLINK_MS = 850;   // must match the tw-blink cycle in globals.css
    const savedHTML = h1.innerHTML;
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Hidden character spans, one non-wrapping block per line. Splitting text
    // into spans drops kerning and widens it slightly; nowrap stops that from
    // bumping "Albert García" to a 3rd line, so the layout stays identical
    // before, during, and after typing — no reflow when the markup restores.
    h1.innerHTML = "";
    const chars: { span: HTMLSpanElement; ch: string; newLine: boolean }[] = [];
    lines.forEach((text, li) => {
      const lineEl = document.createElement("span");
      lineEl.style.display = "block";
      lineEl.style.whiteSpace = "nowrap";
      Array.from(text).forEach((ch, ci) => {
        const span = document.createElement("span");
        span.textContent = ch;
        span.style.opacity = "0";
        lineEl.appendChild(span);
        chars.push({ span, ch, newLine: li > 0 && ci === 0 });
      });
      h1.appendChild(lineEl);
    });

    // A cursor with terminal physics: solid while keys are landing, blinking
    // only when idle (before the first key, on the line break, at the end).
    const cursor = document.createElement("span");
    cursor.className = "tw-cursor";
    cursor.textContent = "_";
    const setTyping = (typing: boolean) =>
      cursor.classList.toggle("tw-cursor--typing", typing);
    chars[0].span.before(cursor);

    // Choreographed exit: hold solid a beat (hands leaving the keyboard), blink
    // two calm full cycles, then dissolve from the visible phase — never cutting
    // a blink halfway, which is what made the old ending feel abrupt.
    const finish = () => {
      timers.push(setTimeout(() => {
        setTyping(false); // idle again — calm blinking over the finished name
        timers.push(setTimeout(() => {
          // 2 whole cycles in: the animation is back at its visible phase, so
          // removing it can't jump, and the fade starts from a solid cursor.
          cursor.style.animation = "none";
          cursor.style.transition = "opacity 0.6s ease";
          cursor.style.opacity = "0";
          // Then restore the pristine markup so the heading keeps its kerning.
          timers.push(setTimeout(() => { h1.innerHTML = savedHTML; }, 650));
        }, 2 * BLINK_MS));
      }, 380));
    };

    // Human cadence: every keystroke lands with jitter, a space buys a breath,
    // the line break reads as Enter + a beat, and now and then a key hesitates.
    const step = (i: number) => {
      const c = chars[i];
      c.span.style.opacity = "1";
      c.span.after(cursor);
      if (i + 1 >= chars.length) { finish(); return; }

      const next = chars[i + 1];
      let delay = STEP * (0.6 + Math.random() * 0.85);
      if (next.newLine) delay += LINE_PAUSE;
      else if (c.ch === " ") delay += WORD_PAUSE * (0.6 + Math.random() * 0.8);
      else if (Math.random() < 0.07) delay += 120 + Math.random() * 150;

      const idle = delay > 260;
      setTyping(!idle);
      // On Enter the cursor jumps to the empty next line and waits there.
      if (next.newLine) next.span.before(cursor);
      timers.push(setTimeout(() => { setTyping(true); step(i + 1); }, delay));
    };

    // Sit down first: the cursor blinks a beat before the first key lands.
    timers.push(setTimeout(() => { setTyping(true); step(0); }, 220 + Math.random() * 240));

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
              es={'Antes secuenciaba datos en un laboratorio. Ahora convierto problemas reales en <span class="hi">software que funciona</span>.'}
              en={'I used to sequence data in a lab. Now I turn real problems into <span class="hi">software that works</span>.'}
              fr={'Avant, je séquençais des données dans un laboratoire. Maintenant, je transforme de vrais problèmes en <span class="hi">logiciels qui fonctionnent</span>.'}
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

        <div className="hero__side reveal" data-d="3">
          <aside
            className="spec"
            aria-label={locale === "en" ? "Summary" : locale === "fr" ? "Résumé" : "Resumen"}
            data-aria-es="Resumen"
            data-aria-en="Summary"
            data-aria-fr="Résumé"
          >
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
              <span className="spec__v">Proxmox · Docker · 9× LXC</span>
            </div>
            <div className="spec__row">
              <span className="spec__k">LANGS</span>
              <span className="spec__v">ES · FR · EN (C1)</span>
            </div>
          </div>
          </aside>
          <MethodDiagram locale={locale} />
        </div>
      </div>
    </section>
  );
}
