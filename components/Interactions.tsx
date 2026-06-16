"use client";
import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    /* ---------- CV files per language ---------- */
    const CV = {
      es: { fb: "/cv/Guillermo_Albert_CV_ES.pdf", file: "Guillermo_Albert_CV_ES.pdf" },
      en: { fb: "/cv/Guillermo_Albert_CV_EN.pdf", file: "Guillermo_Albert_CV_EN.pdf" },
      fr: { fb: "/cv/Guillermo_Albert_CV_FR.pdf", file: "Guillermo_Albert_CV_FR.pdf" },
    };
    const cvLinks = document.querySelectorAll("[data-cv]");

    /* ---------- Contact email per language ---------- */
    const MAIL = {
      es: "hola@guillermoalbert.dev",
      en: "contact@guillermoalbert.dev",
      fr: "contact@guillermoalbert.dev",
    };
    const mailLinks = document.querySelectorAll("[data-mail]");

    /* ---------- Language toggle ---------- */
    // Cache only outermost [data-en] nodes so nested ones aren't double-processed.
    // Spanish comes from the data-es attribute (the static HTML is rendered in
    // the route's language, so innerHTML can't be assumed to be Spanish).
    const i18nNodes = Array.from(document.querySelectorAll("[data-en]")).filter(
      (el) => !el.parentElement?.closest("[data-en]")
    ) as HTMLElement[];
    i18nNodes.forEach((el) => { if (!el.dataset.es) el.dataset.es = el.innerHTML; });

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

      const mail = MAIL[lang as keyof typeof MAIL] ?? MAIL.es;
      mailLinks.forEach((a) => { a.setAttribute("href", `mailto:${mail}`); });

      document.querySelectorAll("[data-setlang]").forEach((btn) => {
        const on = btn.getAttribute("data-setlang") === lang;
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-pressed", String(on));
      });

      try { localStorage.setItem("ga-lang", lang); } catch (_) {}
      // Keep the URL on the matching static route (/, /en, /fr) so a refresh or
      // a shared link lands on the right language and hreflang stays coherent.
      const url = new URL(location.href);
      url.searchParams.delete("lang");
      url.pathname = lang === "es" ? "/" : `/${lang}`;
      history.replaceState(null, "", url.toString());
    }

    document.querySelectorAll("[data-setlang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-setlang")!));
    });

    const LANGS = new Set(["es", "en", "fr"]);

    function detectBrowserLang(): string {
      const nav = navigator.language ?? "";
      const primary = nav.split("-")[0].toLowerCase();
      return LANGS.has(primary) ? primary : "es";
    }

    // The /en and /fr routes are explicit — the path wins over any saved choice.
    function detectPathLang(): string | null {
      const p = location.pathname;
      if (p === "/en" || p.startsWith("/en/")) return "en";
      if (p === "/fr" || p.startsWith("/fr/")) return "fr";
      return null;
    }

    const urlLang = new URLSearchParams(location.search).get("lang");
    let savedLang: string | null = null;
    try { savedLang = localStorage.getItem("ga-lang"); } catch (_) {}

    const initialLang =
      detectPathLang() ??
      (LANGS.has(urlLang ?? "") ? urlLang! : (savedLang ?? detectBrowserLang()));
    setLang(initialLang);

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
    const reveals = Array.from(document.querySelectorAll(".reveal"));

    // Index direct children of [data-stagger] containers so the CSS cascade
    // (transition-delay: var(--i) * 60ms) knows each item's position.
    document.querySelectorAll<HTMLElement>(".reveal[data-stagger]").forEach((c) => {
      Array.from(c.children).forEach((child, i) =>
        (child as HTMLElement).style.setProperty("--i", String(i))
      );
    });

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

    /* ---------- Mobile section menu ---------- */
    const navToggle = document.querySelector(".navtoggle");
    const navSections = document.getElementById("nav-sections");

    const closeNav = () => {
      navSections?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    };
    const toggleNav = () => {
      const open = navSections?.classList.toggle("is-open");
      navToggle?.setAttribute("aria-expanded", String(!!open));
    };
    const onNavKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeNav(); };

    navToggle?.addEventListener("click", toggleNav);
    navSections?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", onNavKey);

    /* ---------- Scroll progress ---------- */
    const progressBar = document.querySelector(".topbar__progress") as HTMLElement | null;
    const updateProgress = () => {
      if (!progressBar) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      progressBar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    /* ---------- Active nav section ---------- */
    const sections = (["about", "experience", "stack", "work", "publications", "contact"] as const)
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
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      navToggle?.removeEventListener("click", toggleNav);
      document.removeEventListener("keydown", onNavKey);
    };
  }, []);

  return null;
}
