/* ==========================================================================
   main.js — UI behaviour (no dependencies)
   --------------------------------------------------------------------------
   1. Storage helpers (localStorage may be unavailable: private mode, etc.)
   2. Language (EN default / ES) — reads window.I18N from i18n.js
   3. Theme (light default / dark)
   4. Mobile navigation
   5. Nav state: scrolled border + active section highlight
   6. Reveal-on-scroll animations
   7. Project card cursor spotlight
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js"); // also set in <head>; repeated in case that script is removed

  /* 1. STORAGE HELPERS ==================================================== */
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  /* 2. LANGUAGE =========================================================== */
  var SUPPORTED = ["en", "es"];
  var DEFAULT_LANG = "en";
  var dict = window.I18N || {};

  function t(lang, key) {
    return (dict[lang] && dict[lang][key]) || (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key]);
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n"));
      if (value) el.textContent = value;
    });

    // Attributes — format: data-i18n-attr="aria-label:key;alt:key2"
    // (also swaps the hero CV link: href + download filename per language)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var value = t(lang, (parts[1] || "").trim());
        if (parts[0] && value) el.setAttribute(parts[0].trim(), value);
      });
    });

    // Document-level meta
    root.setAttribute("lang", lang);
    document.title = t(lang, "meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(lang, "meta.description"));

    // Switch state
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    save("lang", lang);
  }

  function initLanguage() {
    // <head> script already set <html lang> from storage; trust it.
    var current = root.getAttribute("lang") || DEFAULT_LANG;
    applyLanguage(current);

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-lang");
        if (next === root.getAttribute("lang")) return;
        // Brief fade so the swap feels intentional rather than a flicker
        root.classList.add("is-switching");
        window.setTimeout(function () {
          applyLanguage(next);
          root.classList.remove("is-switching");
        }, 140);
      });
    });
  }

  /* 3. THEME ============================================================== */
  function initTheme() {
    var btn = document.getElementById("theme-toggle");
    var meta = document.querySelector('meta[name="theme-color"]');

    function setTheme(theme) {
      root.setAttribute("data-theme", theme);
      if (meta) meta.setAttribute("content", theme === "light" ? "#f7f7fa" : "#08090d");
    }

    setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

    if (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        setTheme(next);
        save("theme", next);
      });
    }
  }

  /* 4. MOBILE NAVIGATION ================================================== */
  function initMenu() {
    var btn = document.getElementById("menu-toggle");
    var links = document.getElementById("nav-links");
    if (!btn || !links) return;

    function setOpen(open) {
      links.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    }

    btn.addEventListener("click", function () {
      setOpen(!links.classList.contains("is-open"));
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav")) setOpen(false);
    });
  }

  /* 5. NAV STATE ========================================================== */
  function initNavState() {
    var nav = document.querySelector(".nav");
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!("IntersectionObserver" in window)) return;

    var linkFor = {};
    document.querySelectorAll('.nav__links a[href^="#"]').forEach(function (a) {
      linkFor[a.getAttribute("href").slice(1)] = a;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (!link || !entry.isIntersecting) return;
          Object.keys(linkFor).forEach(function (id) { linkFor[id].classList.remove("is-active"); });
          link.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(linkFor).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* 6. REVEAL ON SCROLL =================================================== */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    // Stagger siblings inside the same grid for a subtle cascade
    items.forEach(function (el) {
      var siblings = el.parentElement ? el.parentElement.querySelectorAll(":scope > .reveal") : [];
      var index = Array.prototype.indexOf.call(siblings, el);
      if (index > 0) el.style.transitionDelay = Math.min(index, 6) * 70 + "ms";
      observer.observe(el);
    });
  }

  /* 7. PROJECT CARD SPOTLIGHT ============================================= */
  function initSpotlight() {
    if (!window.matchMedia("(hover: hover)").matches) return;
    document.querySelectorAll(".project").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - rect.left + "px");
        card.style.setProperty("--my", e.clientY - rect.top + "px");
      });
    });
  }

  /* BOOT ================================================================== */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  initLanguage();
  initTheme();
  initMenu();
  initNavState();
  initReveal();
  initSpotlight();

  window.__appReady = true; // read by the safety-net timeout in <head>
})();
