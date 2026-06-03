"use client";
import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    /* ---------- CV files per language ---------- */
    const CV = {
      es: { fb: "cv/Guillermo_Albert_CV_ES.pdf", file: "Guillermo_Albert_CV_ES.pdf" },
      en: { fb: "cv/Guillermo_Albert_CV_EN.pdf", file: "Guillermo_Albert_CV_EN.pdf" },
      fr: { fb: "cv/Guillermo_Albert_CV_EN.pdf", file: "Guillermo_Albert_CV_FR-EN.pdf" },
    };
    const cvLinks = document.querySelectorAll("[data-cv]");

    /* ---------- Language toggle ---------- */
    // Cache only outermost [data-en] nodes so nested ones aren't double-processed.
    const i18nNodes = Array.from(document.querySelectorAll("[data-en]")).filter(
      (el) => !el.parentElement?.closest("[data-en]")
    ) as HTMLElement[];
    i18nNodes.forEach((el) => { el.dataset.es = el.innerHTML; });

    function setLang(lang: string) {
      if (!CV[lang as keyof typeof CV]) lang = "es";
      document.body.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("lang", lang);

      i18nNodes.forEach((el) => {
        el.innerHTML =
          lang === "es"
            ? el.dataset.es!
            : (el.getAttribute(`data-${lang}`) ?? el.getAttribute("data-en") ?? el.dataset.es!);
      });

      cvLinks.forEach((a) => {
        const c = CV[lang as keyof typeof CV];
        a.setAttribute("href", c.fb);
        a.setAttribute("download", c.file);
      });

      document.querySelectorAll("[data-setlang]").forEach((btn) => {
        const on = btn.getAttribute("data-setlang") === lang;
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-pressed", String(on));
      });

      try { localStorage.setItem("ga-lang", lang); } catch (_) {}
    }

    document.querySelectorAll("[data-setlang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-setlang")!));
    });

    let savedLang: string | null = null;
    try { savedLang = localStorage.getItem("ga-lang"); } catch (_) {}
    setLang(savedLang ?? "es");

    /* ---------- Theme toggle ---------- */
    const themeBtn = document.querySelector("[data-theme-toggle]");
    const metaTheme = document.querySelector('meta[name="theme-color"]');

    function setTheme(theme: string) {
      document.documentElement.setAttribute("data-theme", theme);
      metaTheme?.setAttribute("content", theme === "dark" ? "#0d1a31" : "#ffffff");
      themeBtn?.setAttribute("aria-pressed", String(theme === "dark"));
      try { localStorage.setItem("ga-theme", theme); } catch (_) {}
    }

    let savedTheme: string | null = null;
    try { savedTheme = localStorage.getItem("ga-theme"); } catch (_) {}
    if (!savedTheme) {
      savedTheme = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    setTheme(savedTheme);

    themeBtn?.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });

    /* ---------- Scroll reveal ---------- */
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let reveals = Array.from(document.querySelectorAll(".reveal"));

    const checkReveals = () => {
      const trigger = window.innerHeight * 0.9;
      for (let i = reveals.length - 1; i >= 0; i--) {
        if (reveals[i].getBoundingClientRect().top < trigger) {
          reveals[i].classList.add("is-in");
          reveals.splice(i, 1);
        }
      }
    };

    if (!reduce) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.add("reveal-armed");
          checkReveals();
          window.addEventListener("scroll", checkReveals, { passive: true });
          window.addEventListener("resize", checkReveals);
        });
      });
    }

    /* ---------- Active nav section ---------- */
    const sections = (["work", "about", "contact"] as const)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const navLinks: Record<string, Element> = {};
    document.querySelectorAll(".nav a.navlink").forEach((a) => {
      const href = a.getAttribute("href");
      if (href) navLinks[href.slice(1)] = a;
    });

    const updateActive = () => {
      const mark = window.innerHeight * 0.4;
      let current: string | null = null;
      sections.forEach((s) => { if (s.getBoundingClientRect().top <= mark) current = s.id; });
      Object.keys(navLinks).forEach((k) => navLinks[k].classList.toggle("is-active", k === current));
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", checkReveals);
      window.removeEventListener("resize", checkReveals);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return null;
}
