/* ==========================================================
   BSIC - logique du site
   - Langues : français par défaut, arabe (droite à gauche)
   - Navigation : #section (accueil), #/page, #/actualite/<id>
   ========================================================== */
(function () {
  "use strict";

  /* ---------- Langue : le site s'ouvre toujours en français ---------- */
  const LANGS = ["fr", "ar"];
  let LANG = new URLSearchParams(location.search).get("lang") === "ar" ? "ar" : "fr";

  const t = (k) => (I18N[LANG][k] !== undefined ? I18N[LANG][k] : (I18N.fr[k] !== undefined ? I18N.fr[k] : k));
  const href = (x) => (x.startsWith("#") ? x : "#/" + x);
  const pg = (id) => PAGES[id] && PAGES[id][LANG];
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isRTL = () => LANG === "ar";
  const nf = () => new Intl.NumberFormat(isRTL() ? "ar-u-nu-latn" : "fr-FR", { maximumFractionDigits: 0 });
  const banner = (name) => `images/bannieres/${name}.jpg`;
  const img = (n, f) => `images/actualites/${n.id}/${f}`;
  const catLabel = (c) => t("cat" + c.charAt(0).toUpperCase() + c.slice(1));
  const firstOf = (g) => Object.keys(PAGES).find((k) => PAGES[k].group === g);

  function applyI18n(root = document) {
    $$("[data-i18n]", root).forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-html]", root).forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    $$("[data-i18n-ph]", root).forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
    $$("[data-i18n-aria]", root).forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  }
  function applyLangAttrs() {
    document.documentElement.lang = LANG;
    document.documentElement.dir = isRTL() ? "rtl" : "ltr";
    $$("[data-lang]").forEach((b) => b.classList.toggle("active", b.dataset.lang === LANG));
    $$("[data-lang-toggle]").forEach((b) => (b.textContent = isRTL() ? "Français" : "العربية"));
  }

  /* ---------- Coordonnées (config.js) ---------- */
  function applyConfig(root = document) {
    $$("[data-config]", root).forEach((el) => {
      const k = el.dataset.config;
      if (k === "adresse") el.textContent = CONFIG.adresse[LANG];
      if (k === "horaires") el.textContent = CONFIG.horaires[LANG];
      if (k === "tel") { el.textContent = CONFIG.telAffiche; el.href = "tel:" + CONFIG.telLien; el.dir = "ltr"; }
      if (k === "email") { el.textContent = CONFIG.email; el.href = "mailto:" + CONFIG.email; }
    });
    $$("[data-config-row]", root).forEach((el) => {
      const k = el.dataset.configRow;
      el.hidden = k === "tel" ? !CONFIG.telLien : !CONFIG[k];
    });
    const icons = { facebook: "fa-facebook-f", linkedin: "fa-linkedin-in", youtube: "fa-youtube", instagram: "fa-instagram" };
    const links = Object.entries(CONFIG.social).filter(([, u]) => u);
    $$("[data-social]", root).forEach((box) => {
      box.innerHTML = links.map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener" aria-label="${k}"><i class="fab ${icons[k]}"></i></a>`).join("");
      box.hidden = !links.length;
    });
  }

  /* ---------- Méga-menu ---------- */
  function renderNav() {
    $("#navList").innerHTML = MENU.map((m) => {
      if (!m.group) return `<li class="nav-item"><a href="${href(m.link)}" class="nav-link">${esc(m.label[LANG])}</a></li>`;
      const cols = m.cols.map((c) => `<div><h4>${esc(c[LANG])}</h4><ul>${c.items.map((id) =>
        `<li><a href="#/${id}"><i class="fas ${PAGES[id].icon}"></i>${esc(pg(id).title)}</a></li>`).join("")}</ul></div>`).join("");
      const promo = `<a href="${href(m.promo.link)}" class="mega-promo" style="background-image:linear-gradient(180deg,rgba(31,27,28,.15),rgba(31,27,28,.88)),url('${banner(m.promo.img)}')">
        <h4>${esc(m.promo[LANG][0])}</h4><p>${esc(m.promo[LANG][1])}</p><span class="more">${esc(t("discover"))} <i class="fas fa-arrow-right"></i></span></a>`;
      return `<li class="nav-item" data-group="${m.group}">
        <a href="#/${m.cols[0].items[0]}" class="nav-link" data-has-mega="1">${esc(GROUPS[m.group][LANG])} <i class="fas fa-chevron-down"></i></a>
        <div class="mega"><div class="container mega-inner" style="--cols:${m.cols.length}">${cols}${promo}</div></div></li>`;
    }).join("");
  }
  const markNav = (g) => $$(".nav-item").forEach((li) => { const l = $(".nav-link", li); if (l) l.classList.toggle("current", !!g && li.dataset.group === g); });

  /* ---------- Offres ---------- */
  let currentTab = "particuliers";
  function renderOffers() {
    $("#offersGrid").innerHTML = OFFERS[currentTab].map((id) => {
      const p = PAGES[id], c = p[LANG];
      return `<a href="#/${id}" class="offer"><div class="ic"><i class="fas ${p.icon}"></i></div>
        <h3>${esc(c.title)}</h3><p>${esc(c.intro)}</p><span class="more">${esc(t("more"))} <i class="fas fa-arrow-right"></i></span></a>`;
    }).join("");
    $$("#offres .tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === currentTab));
  }
  const openTab = (n) => { if (OFFERS[n]) { currentTab = n; renderOffers(); } };

  /* ---------- Actualités ---------- */
  const newsCard = (n, big) => `
    <button type="button" class="news-card${big ? " big" : ""}" data-news="${n.id}" data-i="0">
      <div class="news-img"><img src="${img(n, big ? "1.jpg" : "vignette.jpg")}" alt="${esc(n[LANG][0])}" loading="lazy">
        <span class="badge">${esc(catLabel(n.cat))}</span>${n.n > 1 ? `<span class="count"><i class="far fa-images"></i> ${n.n}</span>` : ""}</div>
      <div class="news-body"><span class="loc"><i class="fas fa-location-dot"></i> ${esc(n.lieu[LANG])}</span>
        <h3>${esc(n[LANG][0])}</h3><span class="more"><i class="far fa-images"></i> ${esc(t("readMore"))}</span></div>
    </button>`;
  function renderHomeNews() {
    const [first, ...rest] = NEWS;
    $("#newsHome").innerHTML = newsCard(first, true) + `<div class="news-side">${rest.slice(0, 4).map((n) => newsCard(n)).join("")}</div>`;
  }
  const photosOf = (n) => Array.from({ length: n.n }, (_, i) => ({ src: img(n, `${i + 1}.jpg`), thumb: img(n, `t${i + 1}.jpg`), cap: n[LANG][0] }));

  const countryChips = () => COUNTRIES.map((c) => `<span class="country"><i class="fas ${c.office ? "fa-building" : "fa-location-dot"}"></i>${esc(c[LANG])}</span>`).join("");
  const renderCountries = () => ($("#countries").innerHTML = countryChips());

  function renderFooter() {
    $("#footerCols").innerHTML = FOOTER.map((col) => `<div><h4>${esc(t(col.title))}</h4><ul>${
      col.items.map((id) => `<li><a href="#/${id}">${esc(pg(id).title)}</a></li>`).join("")}</ul></div>`).join("");
    $("#footerLegal").innerHTML = ["plan-du-site", "mentions-legales", "confidentialite", "reclamations"]
      .map((id) => `<li><a href="#/${id}">${esc(pg(id).title)}</a></li>`).join("");
  }

  /* ---------- Visionneuse ---------- */
  let LB = [], lbi = 0;
  const openLB = (list, i) => { LB = list; lbi = i; $("#lightbox").hidden = false; document.body.style.overflow = "hidden"; showLB(); };
  function showLB() {
    const it = LB[lbi];
    $("#lbImg").src = it.src; $("#lbImg").alt = it.cap;
    $("#lbCap").textContent = `${it.cap}  (${lbi + 1} / ${LB.length})`;
    $$(".lb-nav").forEach((b) => (b.hidden = LB.length < 2));
  }
  const stepLB = (d) => { lbi = (lbi + d + LB.length) % LB.length; showLB(); };
  const closeLB = () => { $("#lightbox").hidden = true; document.body.style.overflow = ""; };
  $(".lb-close").addEventListener("click", closeLB);
  $(".lb-prev").addEventListener("click", () => stepLB(isRTL() ? 1 : -1));
  $(".lb-next").addEventListener("click", () => stepLB(isRTL() ? -1 : 1));
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox" || e.target.tagName === "FIGURE") closeLB(); });

  /* ---------- Pages internes ---------- */
  const pageHero = (bg, crumbs, title, intro) => `
    <section class="page-hero" style="background-image:linear-gradient(90deg,rgba(31,27,28,.92),rgba(29,63,143,.55)),url('${bg}')"><div class="container">
      <div class="crumbs"><a href="#/">${esc(t("home"))}</a>${crumbs.map((c) => `<span>›</span>${c[1] ? `<a href="${c[1]}">${esc(c[0])}</a>` : `<span>${esc(c[0])}</span>`}`).join("")}</div>
      <h1>${esc(title)}</h1>${intro ? `<p>${esc(intro)}</p>` : ""}</div></section>`;
  function sideBox(id) {
    const g = PAGES[id].group, items = Object.keys(PAGES).filter((k) => PAGES[k].group === g);
    return `<div class="side-box"><h4>${esc(t("related"))}</h4><ul>${items.map((k) =>
      `<li><a href="#/${k}" class="${k === id ? "current" : ""}"><span><i class="fas ${PAGES[k].icon}"></i>${esc(pg(k).title)}</span><i class="fas fa-chevron-right"></i></a></li>`).join("")}</ul></div>`;
  }
  const ctaBox = () => `<div class="side-cta"><h4>${esc(t("ctaT"))}</h4><p>${esc(t("ctaP"))}</p><a href="#/contact" class="btn">${esc(t("ctaBtn"))}</a></div>`;
  const mapFrame = () => `<iframe class="map" loading="lazy" title="${esc(t("cMapT"))}" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&z=15&output=embed"></iframe>`;
  function contactCards() {
    const cards = [["fa-location-dot", t("cAddress"), `<span data-config="adresse"></span>`, true],
      ["fa-phone", t("cPhone"), `<a data-config="tel"></a>`, !!CONFIG.telLien],
      ["fa-envelope", t("cEmail"), `<a data-config="email"></a>`, !!CONFIG.email],
      ["fa-clock", t("cHours"), `<span data-config="horaires"></span>`, !!CONFIG.horaires[LANG]]];
    return `<div class="contact-cards">${cards.filter((c) => c[3]).map((c) =>
      `<div class="contact-card"><i class="fas ${c[0]}"></i><div><strong>${esc(c[1])}</strong>${c[2]}</div></div>`).join("")}</div>`;
  }

  let newsFilter = "all";
  const SPECIAL = {
    contact: () => `${contactCards()}<h2>${esc(t("cFormT"))}</h2>
      <form id="contactForm" class="form-grid">
        <div class="field"><label for="cf-name">${esc(t("cName"))}</label><input id="cf-name" name="name" required></div>
        <div class="field"><label for="cf-mail">${esc(t("cMail"))}</label><input id="cf-mail" name="email" type="email" required dir="ltr"></div>
        <div class="field"><label for="cf-tel">${esc(t("cTel"))}</label><input id="cf-tel" name="tel" type="tel" dir="ltr"></div>
        <div class="field"><label for="cf-subj">${esc(t("cSubject"))}</label><select id="cf-subj" name="subject">${t("cSubjects").map((s) => `<option>${esc(s)}</option>`).join("")}</select></div>
        <div class="field full"><label for="cf-msg">${esc(t("cMsg"))}</label><textarea id="cf-msg" name="message" required></textarea></div>
        <div class="field full"><button class="btn btn-accent" type="submit" style="align-self:flex-start"><i class="fas fa-paper-plane"></i>${esc(t("cSend"))}</button></div>
      </form><div id="contactMsg" class="form-msg" hidden>${esc(t("cSent"))}</div>
      <h2>${esc(t("cMapT"))}</h2>${mapFrame()}`,
    agences: () => `<h2>${esc(t("agSiege"))}</h2>${contactCards()}${mapFrame()}
      <h2>${esc(t("agListT"))}</h2>
      <div class="agency-list">${AGENCIES.map((a) => `<div class="agency"><i class="fas ${a.siege ? "fa-building" : a.office ? "fa-city" : "fa-location-dot"}"></i><div><strong>${esc(a[LANG][0])}${a.siege ? " · " + esc(t("agHead")) : ""}</strong><span>${esc(a[LANG][1])}</span></div></div>`).join("")}</div>
      <div class="note">${esc(t("agNote"))}</div>`,
    simulateur: () => `<div class="sim">
        <form id="simForm" class="form-grid" style="grid-template-columns:1fr" onsubmit="return false">
          <div class="field"><label for="sim-a">${esc(t("simAmount"))}</label>
            <div class="range-row"><input type="range" id="sim-a" min="1000000" max="300000000" step="1000000" value="25000000"><output id="out-a"></output></div></div>
          <div class="field"><label for="sim-d">${esc(t("simDuration"))}</label>
            <div class="range-row"><input type="range" id="sim-d" min="12" max="72" step="6" value="36"><output id="out-d"></output></div></div>
          <div class="field"><label for="sim-r">${esc(t("simRate"))}</label>
            <div class="range-row"><input type="range" id="sim-r" min="1" max="20" step="0.25" value="9"><output id="out-r"></output></div></div>
        </form>
        <div class="sim-result"><span>${esc(t("simMonthly"))}</span><strong id="sim-m">-</strong>
          <dl><dt>${esc(t("simInterest"))}</dt><dd id="sim-i">-</dd><dt>${esc(t("simTotal"))}</dt><dd id="sim-t">-</dd></dl>
          <a href="#/contact" class="btn" style="background:#fff;color:var(--primary);margin-top:20px">${esc(t("simCta"))}</a></div>
      </div><div class="note">${esc(t("simNote"))}</div>`,
    news: () => `<div class="news-filters">${["all", "institutionnel", "evenement", "developpement"].map((f) =>
        `<button class="tab${f === newsFilter ? " active" : ""}" type="button" data-filter="${f}">${esc(f === "all" ? t("fAll") : catLabel(f))}</button>`).join("")}</div>
      <div class="news-grid">${NEWS.filter((n) => newsFilter === "all" || n.cat === newsFilter).map((n) => newsCard(n)).join("")}</div>`,
    gallery: () => `<div class="gallery">${NEWS.map((n) => photosOf(n).map((p, i) =>
        `<button type="button" class="g-item" data-news="${n.id}" data-i="${i}" data-all="1"><img src="${p.thumb}" alt="${esc(p.cap)}" loading="lazy"><span>${esc(n[LANG][0])}</span></button>`).join("")).join("")}</div>`,
    sitemap: () => {
      const home = `<div><h3>${esc(t("home"))}</h3><ul><li><a href="#/">${esc(t("home"))}</a></li><li><a href="#offres">${esc(t("offK"))}</a></li>
        <li><a href="#demarches">${esc(t("demK"))}</a></li><li><a href="#actualites">${esc(t("newsK"))}</a></li></ul></div>`;
      return `<div class="sitemap">${home}${Object.keys(GROUPS).map((g) => `<div><h3>${esc(GROUPS[g][LANG])}</h3><ul>${
        Object.keys(PAGES).filter((k) => PAGES[k].group === g).map((k) => `<li><a href="#/${k}"><i class="fas ${PAGES[k].icon}"></i>${esc(pg(k).title)}</a></li>`).join("")}</ul></div>`).join("")}</div>`;
    }
  };

  function bindSpecial(type) {
    if (type === "contact") {
      $("#contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const d = Object.fromEntries(new FormData(e.target));
        const body = `${t("cName")} : ${d.name}\n${t("cMail")} : ${d.email}\n${t("cTel")} : ${d.tel || "-"}\n\n${d.message}`;
        location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("[Site web] " + d.subject)}&body=${encodeURIComponent(body)}`;
        $("#contactMsg").hidden = false;
      });
    }
    if (type === "simulateur") {
      const fmt = nf();
      const calc = () => {
        const P = +$("#sim-a").value, n = +$("#sim-d").value, rate = +$("#sim-r").value, r = rate / 100 / 12;
        const m = r ? (P * r) / (1 - Math.pow(1 + r, -n)) : P / n;
        $("#out-a").textContent = fmt.format(P);
        $("#out-d").textContent = n + " " + t("months");
        $("#out-r").textContent = rate.toLocaleString(isRTL() ? "ar-u-nu-latn" : "fr-FR") + " %";
        $("#sim-m").textContent = fmt.format(m) + " " + t("currency");
        $("#sim-i").textContent = fmt.format(m * n - P) + " " + t("currency");
        $("#sim-t").textContent = fmt.format(m * n) + " " + t("currency");
      };
      $$("#simForm input").forEach((i) => i.addEventListener("input", calc));
      calc();
    }
  }

  function showPage(id) {
    const p = PAGES[id], v = $("#pageView");
    if (!p) return notFound();
    const c = p[LANG], wide = ["news", "gallery", "sitemap"].includes(p.type);
    v.innerHTML = pageHero(banner(GROUPS[p.group].banner), [[GROUPS[p.group][LANG], "#/" + firstOf(p.group)], [c.title]], c.title, c.intro) +
      `<div class="container page-layout${wide ? " wide" : ""}"><article class="page-content">${p.type ? SPECIAL[p.type]() : c.body}</article>${
        wide ? "" : `<aside class="page-side">${sideBox(id)}${ctaBox()}</aside>`}</div>`;
    applyConfig(v);
    if (p.type) bindSpecial(p.type);
    document.title = c.title + " | BSIC";
    markNav(p.group);
  }

  function notFound() {
    $("#pageView").innerHTML = pageHero(banner("services"), [], t("notFoundT"), t("notFoundP")) +
      `<div class="container" style="padding:60px 20px"><a href="#/" class="btn btn-accent">${esc(t("backHome"))}</a></div>`;
    document.title = t("notFoundT") + " | BSIC"; markNav(null);
  }

  /* ---------- Routeur ---------- */
  function route(keepScroll) {
    closeMenus();
    const h = decodeURIComponent(location.hash);
    if (h.startsWith("#/") && h.length > 2) {
      $("#homeView").hidden = true; $("#pageView").hidden = false;
      const path = h.slice(2);
      showPage(path.startsWith("actualite/") ? "actualites" : path);
      if (!keepScroll) window.scrollTo(0, 0);
      return;
    }
    $("#pageView").hidden = true; $("#pageView").innerHTML = ""; $("#homeView").hidden = false;
    document.title = "BSIC | " + t("tagline"); markNav(null);
    if (keepScroll) return;
    const el = h.length > 1 && h !== "#/" ? document.getElementById(h.slice(1)) : null;
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" })); else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", () => route());
  function closeMenus() {
    $(".mainnav").classList.remove("open");
    $$(".nav-item.open, .dropdown.open").forEach((el) => el.classList.remove("open"));
  }

  /* ---------- Clics ---------- */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (a) {
      if (a.dataset.hasMega && window.innerWidth <= 900) { e.preventDefault(); a.parentElement.classList.toggle("open"); return; }
      if (a.dataset.tab) openTab(a.dataset.tab);
      const mega = a.closest(".mega"); if (mega) mega.classList.add("force-close");
      if (a.getAttribute("href") === location.hash) { e.preventDefault(); route(); }
      return;
    }
    const g = e.target.closest("[data-news][data-i]");
    if (g) {
      const n = NEWS.find((x) => x.id === g.dataset.news);
      if (g.dataset.all) {
        const idx = NEWS.slice(0, NEWS.indexOf(n)).reduce((s, x) => s + x.n, 0) + +g.dataset.i;
        return openLB(NEWS.flatMap(photosOf), idx);
      }
      return openLB(photosOf(n), +g.dataset.i);
    }
    const tab = e.target.closest("button[data-tab]"); if (tab) return openTab(tab.dataset.tab);
    const f = e.target.closest("[data-filter]"); if (f) { newsFilter = f.dataset.filter; $(".page-content").innerHTML = SPECIAL.news(); return; }
    const lb = e.target.closest("[data-lang]"); if (lb) return setLang(lb.dataset.lang);
    if (e.target.closest("[data-lang-toggle]")) return setLang(isRTL() ? "fr" : "ar");
    if (e.target.closest(".burger")) return $(".mainnav").classList.toggle("open");
    const dd = e.target.closest(".dropdown-toggle"); if (dd) return dd.parentElement.classList.toggle("open");
    if (!e.target.closest(".dropdown")) $$(".dropdown.open").forEach((d) => d.classList.remove("open"));
  });
  document.addEventListener("mouseover", (e) => { if (!e.target.closest(".nav-item")) $$(".mega.force-close").forEach((m) => m.classList.remove("force-close")); });
  document.addEventListener("keydown", (e) => {
    if (!$("#lightbox").hidden) {
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowRight") stepLB(isRTL() ? -1 : 1);
      if (e.key === "ArrowLeft") stepLB(isRTL() ? 1 : -1);
    } else if (e.key === "Escape") closeMenus();
  });

  /* ---------- Newsletter ---------- */
  $("#nlForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.outerHTML = `<p style="color:#fff;font-weight:600">${esc(t("nlOk"))}</p>`;
  });

  /* ---------- Slider ---------- */
  const slides = $$(".slide"), dotsBox = $(".dots"); let cur = 0, timer;
  slides.forEach((_, i) => { const d = document.createElement("button"); d.type = "button"; d.className = "dot" + (i ? "" : " active");
    d.setAttribute("aria-label", String(i + 1)); d.addEventListener("click", () => go(i)); dotsBox.appendChild(d); });
  const dots = [...dotsBox.children];
  function go(i) { slides[cur].classList.remove("active"); dots[cur].classList.remove("active");
    cur = (i + slides.length) % slides.length; slides[cur].classList.add("active"); dots[cur].classList.add("active"); restart(); }
  function restart() { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6500); }
  $$(".arrow").forEach((a) => a.addEventListener("click", () => go(cur + (+a.dataset.dir) * (isRTL() ? -1 : 1))));
  restart();

  /* ---------- Compteurs ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((en) => en.forEach((x) => {
      if (!x.isIntersecting) return; const el = x.target, end = +el.dataset.count, start = end > 1000 ? end - 40 : 0; let v = start;
      const step = Math.max(1, Math.ceil((end - start) / 30));
      const tm = setInterval(() => { v += step; if (v >= end) { v = end; clearInterval(tm); } el.textContent = v; }, 30); io.unobserve(el);
    }), { threshold: 0.6 });
    $$("[data-count]").forEach((el) => io.observe(el));
  }

  /* ---------- Divers ---------- */
  const toTop = $(".to-top");
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 600));
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  $("#year").textContent = new Date().getFullYear();

  function renderAll() {
    applyLangAttrs(); applyI18n(); renderNav(); renderOffers(); renderHomeNews(); renderCountries(); renderFooter(); applyConfig();
  }
  function setLang(l) {
    if (!LANGS.includes(l) || l === LANG) return;
    LANG = l;
    renderAll(); route(true);
  }
  renderAll();
  route();
})();
