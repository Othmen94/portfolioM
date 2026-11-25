"use strict";

// TODO: confirmer que ce formulaire Formspree est actif et relié à la bonne adresse.
// Laisser "" pour ouvrir la messagerie du visiteur (mailto) à la place.
const FORM_ENDPOINT = "https://formspree.io/f/mbdwaaeq";

(() => {
  const D = window.PORTFOLIO;
  const root = document.documentElement;
  const params = new URLSearchParams(location.search);
  const showTodo = params.has("todo");

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  /* ---------- Outils ---------- */

  const store = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // Stockage bloqué (navigation privée) : le choix vaut pour cette visite seulement.
      }
    },
  };

  let lang = detectLang();

  function detectLang() {
    const asked = params.get("lang");
    if (asked === "fr" || asked === "en") return asked;
    return /^fr/i.test(store.get("lang") || navigator.language || "fr") ? "fr" : "en";
  }

  const NBSP = String.fromCharCode(0xa0);
  const JOINER = String.fromCharCode(0x2060);

  // Apostrophes typographiques, dates « 2024–2025 » insécables, espaces insécables du français.
  function typography(text) {
    const s = text.replace(/'/g, "’").replace(/(\d)–(\d)/g, `$1${JOINER}–${JOINER}$2`);
    return lang === "fr" ? s.replace(/ ([:;?!»])/g, `${NBSP}$1`).replace(/« /g, `«${NBSP}`) : s;
  }

  // Texte dans la langue courante ; les TODO deviennent une chaîne vide, sauf avec ?todo.
  function t(value) {
    if (value == null) return "";
    if (Array.isArray(value)) return value.map(t).filter(Boolean);
    if (typeof value === "object") return t(value[lang] ?? value.fr);
    const text = String(value);
    if (text.startsWith("TODO") && !showTodo) return "";
    return typography(text);
  }

  const fill = (text, values) => text.replace(/\{(\w+)\}/g, (_, key) => values[key]);
  const path = (key) => key.split(".").reduce((node, part) => node?.[part], D);

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [name, value] of Object.entries(attrs || {})) {
      if (value == null || value === false) continue;
      if (name.startsWith("on")) node.addEventListener(name.slice(2), value);
      else node.setAttribute(name, value === true ? "" : value);
    }
    node.append(...children.flat(Infinity).filter((child) => child != null && child !== "" && child !== false));
    return node;
  }

  function svg(viewBox, paths, attrs) {
    const ns = "http://www.w3.org/2000/svg";
    const node = document.createElementNS(ns, "svg");
    for (const [name, value] of Object.entries({ viewBox, "aria-hidden": "true", ...attrs })) node.setAttribute(name, value);
    for (const d of paths) {
      const line = document.createElementNS(ns, "path");
      line.setAttribute("d", d);
      node.append(line);
    }
    return node;
  }

  const ICONS = {
    out: ["M8 5h7v7M15 5L6 14"],
    code: ["M7 6l-4 4 4 4M13 6l4 4-4 4"],
    close: ["M5 5l10 10M15 5L5 15"],
    prev: ["M16 10H4M9 5l-5 5 5 5"],
    next: ["M4 10h12M11 5l5 5-5 5"],
  };
  const icon = (name, size = 16) => svg("0 0 20 20", ICONS[name], { width: size, height: size });
  const hiddenText = (text) => el("span", { class: "sr-only" }, text);

  function outLink(link) {
    return el(
      "a",
      { class: "link", href: link.url, target: "_blank", rel: "noopener noreferrer" },
      icon(link.kind === "code" ? "code" : "out"),
      t(link.label),
      hiddenText(` (${t(D.ui.newTab)})`)
    );
  }

  function say(message) {
    const live = $("#live");
    live.textContent = "";
    requestAnimationFrame(() => {
      live.textContent = message;
    });
  }

  const fileName = (project) => `proj_${String(D.projects.indexOf(project) + 1).padStart(2, "0")}.${project.id}`;
  const projectById = (id) => D.projects.find((project) => project.id === id);

  /* ---------- Rendu ---------- */

  function renderTexts() {
    root.lang = lang;
    document.title = t(D.ui.title);
    $('meta[name="description"]').content = t(D.ui.description);
    for (const node of $$("[data-i18n]")) node.textContent = t(path(node.dataset.i18n));
    for (const node of $$("[data-i18n-attr]")) {
      for (const pair of node.dataset.i18nAttr.split(";")) {
        const [attr, key] = pair.split("=");
        node.setAttribute(attr, t(path(key)));
      }
    }
    for (const button of $$("[data-lang]")) button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    $("#year").textContent = new Date().getFullYear();
  }

  function renderHero() {
    $("#facts").replaceChildren(...D.hero.facts.flatMap((fact) => [el("dt", null, t(fact.k)), el("dd", null, t(fact.v))]));

    const stats = [
      [D.projects.length, D.stats.projects],
      [new Date().getFullYear() - D.site.workingSince, D.stats.years],
      [D.associations.length, D.stats.associations],
      [t(D.site.availableFrom), D.stats.available],
    ];
    $("#stats").replaceChildren(...stats.map(([value, label]) => el("div", null, el("dt", null, t(label)), el("dd", null, String(value)))));

    const cv = $("#cv-btn");
    cv.textContent = t(D.site.cv.ready ? D.ui.buttons.cv : D.ui.buttons.cvAsk);
    cv.setAttribute("href", D.site.cv.ready ? D.site.cv.file : "#contact");
    cv.toggleAttribute("download", D.site.cv.ready);
  }

  function renderProfile() {
    const { profile } = D;
    const languages = t(profile.languages);
    $("#profil-body").replaceChildren(
      el("div", { class: "prose" }, t(profile.paragraphs).map((text) => el("p", null, text))),
      el(
        "div",
        { class: "card edu" },
        el("h3", null, t(profile.educationTitle)),
        el(
          "ol",
          null,
          profile.education.map((item) =>
            el("li", null, el("p", { class: "when" }, t(item.date)), el("p", { class: "what" }, t(item.title)), el("p", { class: "where" }, t(item.place)))
          )
        ),
        languages && [el("h3", null, t(profile.languagesTitle)), el("p", null, languages)]
      )
    );
  }

  function skillItem(skill) {
    const level = D.ui.levels[skill.level];
    const sources = (skill.from || []).map((id) =>
      id === "cv"
        ? el("span", null, t(D.ui.skillCv))
        : el("a", { href: `#etude-${id}` }, hiddenText(`${t(D.ui.project.open)} `), id)
    );
    return el(
      "li",
      null,
      el("span", null, t(skill.name)),
      level && el("span", { class: "level" }, t(level)),
      el("span", { class: "leader", "aria-hidden": "true" }),
      sources.length > 0 && el("span", { class: "sources" }, sources)
    );
  }

  function renderSkills() {
    $("#skills-body").replaceChildren(
      ...D.skills.map((group) => {
        const items = group.items.filter((skill) => !skill.pending || showTodo);
        const plain = items.every((skill) => !skill.from);
        return el("div", { class: `card panel${plain ? " plain" : ""}` }, el("h3", null, t(group.title)), el("ul", null, items.map(skillItem)));
      })
    );
  }

  function logItem(item) {
    const text = t(item.text);
    const tags = t(item.tags || []);
    return el(
      "li",
      { class: "log-item" },
      el(
        "div",
        { class: "log-when" },
        t(item.date) && el("span", null, t(item.date)),
        el("span", { class: `status ${item.status}` }, t(D.ui.status[item.status]))
      ),
      el(
        "div",
        null,
        el("h4", null, t(item.title)),
        el("p", { class: "org" }, t(item.org)),
        text && el("p", { class: "text" }, text),
        tags.length > 0 && el("ul", { class: "tags" }, tags.map((tag) => el("li", null, tag)))
      )
    );
  }

  function renderExperience() {
    const groups = [...D.experience, { title: D.associationsTitle, short: true, items: D.associations }];
    $("#exp-body").replaceChildren(
      ...groups.map((group) =>
        el("div", { class: `exp-group${group.short ? " short" : ""}` }, el("h3", null, t(group.title)), el("ol", null, group.items.map(logItem)))
      )
    );
  }

  function renderContact() {
    const { site, ui } = D;
    const row = (label, value, href, external) =>
      el(
        "li",
        null,
        el(
          "a",
          { href, target: external && "_blank", rel: external && "noopener noreferrer" },
          el("span", { class: "k" }, t(label)),
          el("span", { class: "v" }, value),
          external && hiddenText(` (${t(ui.newTab)})`)
        )
      );
    $("#contact-links").replaceChildren(
      row(ui.contact.email, site.email, `mailto:${site.email}`),
      row(ui.contact.linkedin, t(ui.contact.profileLink), site.linkedin, true),
      row(ui.contact.github, site.github.replace("https://", ""), site.github, true)
    );
  }

  function render() {
    renderTexts();
    renderHero();
    renderProfile();
    renderSkills();
    renderExperience();
    renderProjects();
    renderContact();
    renderForm();
    renderTheme();
  }

  /* ---------- Projets et filtres ---------- */

  const DEFAULT_ART = ["M118 42l22 18-22 18M152 80h44"];
  let filter = "all";

  function projectCard(project) {
    const category = D.categories.find((item) => item.id === project.category);
    const title = t(project.title);
    return el(
      "li",
      { class: project.featured ? "featured" : null, "data-category": project.category },
      el(
        "article",
        { class: "card project" },
        el("p", { class: "project-bar" }, el("span", { class: "file" }, fileName(project)), el("span", null, t(category.label))),
        el("div", { class: "art", "aria-hidden": "true" }, svg("0 0 320 120", project.art || DEFAULT_ART)),
        el(
          "div",
          { class: "project-body" },
          project.badge && el("p", { class: `medal ${project.badge.kind}` }, t(project.badge.text)),
          el("h3", null, title),
          el("p", { class: "meta" }, t(project.context)),
          el("p", { class: "summary" }, t(project.summary)),
          t(project.note) && el("p", { class: "note" }, t(project.note)),
          el("p", { class: "mine" }, el("b", null, `${t(D.ui.project.role)} `), t(project.role)),
          el("ul", { class: "tags", "aria-label": t(D.ui.project.tech) }, t(project.tech).map((name) => el("li", null, name))),
          el(
            "div",
            { class: "project-actions" },
            el(
              "button",
              { class: "btn", type: "button", "aria-haspopup": "dialog", onclick: () => goToStudy(project.id) },
              t(D.ui.project.open),
              hiddenText(` : ${title}`)
            ),
            project.links.map(outLink)
          )
        )
      )
    );
  }

  function renderProjects() {
    const options = [{ id: "all", label: D.ui.filters.all }, ...D.categories];
    $("#filters").replaceChildren(
      ...options.map(({ id, label }) =>
        el(
          "button",
          { type: "button", "data-filter": id, onclick: () => setFilter(id) },
          `${t(label)} (${D.projects.filter((project) => id === "all" || project.category === id).length})`
        )
      )
    );
    $("#projects-body").replaceChildren(...D.projects.map(projectCard));
    applyFilter();
  }

  function applyFilter() {
    for (const button of $$("[data-filter]")) button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    const cards = $$("#projects-body > li");
    for (const card of cards) card.hidden = filter !== "all" && card.dataset.category !== filter;
    return cards.filter((card) => !card.hidden).length;
  }

  function setFilter(id) {
    filter = id;
    const n = applyFilter();
    say(n === 1 ? t(D.ui.filters.one) : fill(t(D.ui.filters.many), { n }));
  }

  /* ---------- Étude de cas ---------- */

  const dialog = $("#study");
  let opener = null;

  const bullets = (items) => el("ul", { class: "bullets" }, items.map((item) => el("li", null, item)));

  function stackList(stack) {
    const items = stack.map((item) => (item.name ? item : { name: item })).filter((item) => t(item.name));
    return [
      el(
        "ul",
        { class: "tags" },
        items.map((item) =>
          el("li", { class: item.mine ? "is-mine" : null }, t(item.name), item.mine && hiddenText(` (${t(D.ui.study.mine)})`))
        )
      ),
      items.some((item) => item.mine) &&
        el("p", { class: "legend", "aria-hidden": "true" }, el("span", { class: "is-mine" }, t(D.ui.study.mine)), el("span", null, t(D.ui.study.team))),
    ];
  }

  function flowFigure(figure) {
    return el(
      "figure",
      { class: "card figure" },
      el("figcaption", null, t(figure.title), figure.items.some((item) => item.mine) && ` (${t(D.ui.study.flowMine)})`),
      el(
        "ol",
        { class: "flow" },
        figure.items.map((item) =>
          el(
            "li",
            null,
            item.via && el("span", { class: `via${item.mine ? " is-mine" : ""}` }, t(item.via), icon("next", 14)),
            el("span", { class: "node" }, t(item.name))
          )
        )
      )
    );
  }

  function bytesFigure(figure) {
    return el(
      "figure",
      { class: "card figure" },
      el("figcaption", null, t(figure.title)),
      el(
        "ol",
        { class: "bytes" },
        figure.items.map((item) =>
          el(
            "li",
            null,
            el("span", { class: "hex" }, item.hex),
            el("span", { class: "name" }, t(item.name)),
            el("span", { class: "value" }, t(item.value))
          )
        )
      )
    );
  }

  const FIGURES = { flow: flowFigure, bytes: bytesFigure };

  function shotList(shots) {
    return el(
      "div",
      { class: `shots${shots.length === 1 ? " single" : ""}` },
      shots.map((shot) =>
        el(
          "figure",
          null,
          el("img", { src: shot.src, width: shot.w, height: shot.h, alt: t(shot.alt), loading: "lazy", decoding: "async" }),
          el("figcaption", null, t(shot.caption))
        )
      )
    );
  }

  function renderStudy(project) {
    const { study } = project;
    const labels = D.ui.study;
    const index = D.projects.indexOf(project);

    const block = (label, content) => content && [el("h3", null, t(label)), content];
    const text = (value) => t(value) && el("p", { class: "study-text" }, t(value));
    const list = (value) => t(value || []).length > 0 && bullets(t(value));
    const step = (offset, label) => {
      const target = D.projects[index + offset];
      if (!target) return el("span");
      return el(
        "button",
        { class: "btn", type: "button", onclick: () => goToStudy(target.id) },
        offset < 0 && icon("prev"),
        hiddenText(`${t(label)} : `),
        fileName(target),
        offset > 0 && icon("next")
      );
    };

    dialog.replaceChildren(
      el(
        "div",
        { class: "study-bar" },
        el("p", { "aria-hidden": "true" }, el("span", { class: "ps1" }, "$ "), `cat ${fileName(project)}`),
        el("button", { class: "icon-btn", type: "button", "aria-label": t(labels.close), onclick: () => dialog.close() }, icon("close", 18))
      ),
      el(
        "div",
        { class: "study-scroll" },
        el("p", { class: "meta" }, t(project.context)),
        el("h2", { id: "study-title", tabindex: "-1" }, t(project.title)),
        project.badge && el("p", { class: `medal ${project.badge.kind}` }, t(project.badge.text)),
        el("p", { class: "mine" }, el("b", null, `${t(D.ui.project.role)} `), t(project.role)),
        t(project.note) && el("p", { class: "note" }, t(project.note)),
        block(labels.context, text(study.context)),
        block(labels.problem, text(study.problem)),
        block(labels.contribution, list(study.contribution)),
        (study.figures || []).map((figure) => FIGURES[figure.kind](figure)),
        block(labels.stack, stackList(study.stack)),
        block(labels.result, list(study.result)),
        block(labels.credits, text(study.team)),
        block(labels.shots, (study.shots || []).length > 0 && shotList(study.shots)),
        block(labels.links, project.links.length > 0 && el("div", { class: "study-links" }, project.links.map(outLink))),
        el("div", { class: "study-nav" }, step(-1, labels.prev), step(1, labels.next))
      )
    );
  }

  function openStudy(project) {
    renderStudy(project);
    if (!dialog.open) {
      opener = document.activeElement;
      dialog.showModal();
    }
    $("#study-title").focus();
  }

  function goToStudy(id) {
    if (location.hash === `#etude-${id}`) route();
    else location.hash = `etude-${id}`;
  }

  // Ouvre la fiche désignée par l'adresse (#etude-athletix) et la referme sinon.
  function route() {
    const match = /^#etude-([\w-]+)$/.exec(location.hash);
    const project = match && projectById(match[1]);
    if (project) openStudy(project);
    else if (dialog.open) dialog.close();
    return Boolean(project);
  }

  function initStudy() {
    addEventListener("hashchange", route);
    dialog.addEventListener("close", () => {
      if (location.hash.startsWith("#etude-")) history.replaceState(null, "", location.pathname + location.search);
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    });
    dialog.addEventListener("click", (event) => event.target === dialog && dialog.close());
    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const items = $$("a[href], button", dialog);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------- Formulaire ---------- */

  const form = $("#contact-form");
  const formStatus = $("#form-status");
  const requiredFields = $$("[required]", form);

  function setFormStatus(kind, ...content) {
    formStatus.className = `form-status ${kind}`;
    formStatus.replaceChildren(...content);
  }

  function checkField(input) {
    const errors = D.ui.form.errors;
    const message = !input.value.trim() ? errors.required : input.validity.typeMismatch ? errors.email : null;
    const error = document.getElementById(input.getAttribute("aria-describedby"));
    error.hidden = !message;
    error.textContent = t(message);
    if (message) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
    return !message;
  }

  function renderForm() {
    requiredFields.filter((input) => input.hasAttribute("aria-invalid")).forEach(checkField);
    setFormStatus("");
  }

  function mailtoUrl(data) {
    const subject = data.get("subject") || t(D.ui.form.defaultSubject);
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    return `mailto:${D.site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function sendForm(event) {
    event.preventDefault();
    const submit = $('[type="submit"]', form);
    if (submit.getAttribute("aria-disabled") === "true") return;

    const invalid = requiredFields.filter((input) => !checkField(input));
    if (invalid.length > 0) {
      invalid[0].focus();
      return;
    }

    const data = new FormData(form);
    const mailLink = el("a", { href: mailtoUrl(data) }, D.site.email);
    if (data.get("_gotcha")) {
      form.reset();
      return;
    }
    if (!FORM_ENDPOINT) {
      setFormStatus("", `${t(D.ui.form.mailto)} `, mailLink);
      location.href = mailLink.href;
      return;
    }

    if (!data.get("subject")) data.set("subject", t(D.ui.form.defaultSubject));
    submit.setAttribute("aria-disabled", "true");
    submit.textContent = t(D.ui.form.sending);
    try {
      const response = await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setFormStatus("ok", t(D.ui.form.ok));
    } catch {
      setFormStatus("fail", `${t(D.ui.form.fail)} `, mailLink);
    } finally {
      submit.removeAttribute("aria-disabled");
      submit.textContent = t(D.ui.form.send);
    }
  }

  function initForm() {
    form.noValidate = true;
    form.addEventListener("submit", sendForm);
    for (const input of requiredFields) {
      input.addEventListener("input", () => input.hasAttribute("aria-invalid") && checkField(input));
    }
    $("#cv-btn").addEventListener("click", () => {
      const subject = $("#f-subject");
      if (!D.site.cv.ready && !subject.value) subject.value = t(D.ui.buttons.cvSubject);
    });
  }

  /* ---------- Mini terminal ---------- */

  function initShell() {
    const log = $("#shell-log");
    const input = $("#shell-input");
    const texts = D.ui.terminal;
    const past = [];
    let cursor = 0;

    const print = (text, className) => {
      log.hidden = false;
      log.append(el("p", { class: className }, text));
      while (log.children.length > 60) log.firstChild.remove();
      log.scrollTop = log.scrollHeight;
    };

    const visit = (id) => {
      print(fill(t(texts.going), { c: t(D.ui.nav[id]) }));
      const section = document.getElementById(id);
      const title = $("h2", section) || $("h1", section);
      section.scrollIntoView();
      title.tabIndex = -1;
      title.focus({ preventScroll: true });
    };

    const commands = {
      help: () => t(texts.help).forEach((line) => print(line)),
      projets: () => D.projects.forEach((project) => print(`${fileName(project).padEnd(18)}${t(project.title)}`)),
      open: (name) => {
        const project = D.projects.find((item) => name && (item.id === name || fileName(item) === name));
        if (project) goToStudy(project.id);
        else print(fill(t(texts.noProject), { c: D.projects.map((item) => item.id).join(", ") }));
      },
      profil: () => visit("profil"),
      skills: () => visit("skills"),
      exp: () => visit("exp"),
      contact: () => visit("contact"),
      cv: () => {
        print(t(D.site.cv.ready ? texts.cvOk : texts.cvSoon));
        if (D.site.cv.ready) $("#cv-btn").click();
      },
      lang: (code) => (code === "fr" || code === "en" ? setLang(code) : print("lang fr | lang en")),
      theme: () => toggleTheme(),
      whoami: () => print(D.site.name),
      clear: () => {
        log.replaceChildren();
        log.hidden = true;
      },
    };
    const aliases = { aide: "help", projects: "projets", ls: "projets", profile: "profil", about: "profil" };

    const run = (line) => {
      const [word, argument] = line.toLowerCase().split(/\s+/);
      const name = aliases[word] || word;
      print(line, "in");
      if (Object.hasOwn(commands, name)) commands[name](argument);
      else print(fill(t(texts.notFound), { c: word }));
    };

    $("#shell-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const line = input.value.trim();
      input.value = "";
      if (!line) return;
      past.push(line);
      cursor = past.length;
      run(line);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
      event.preventDefault();
      cursor = Math.min(past.length, Math.max(0, cursor + (event.key === "ArrowUp" ? -1 : 1)));
      input.value = past[cursor] || "";
    });
  }

  /* ---------- Langue et thème ---------- */

  function setLang(next) {
    lang = next;
    store.set("lang", next);
    if (params.has("lang")) {
      params.delete("lang");
      const query = params.toString();
      history.replaceState(null, "", location.pathname + (query ? `?${query}` : "") + location.hash);
    }
    render();
    say(t(D.ui.lang.changed));
  }

  function renderTheme() {
    const light = root.dataset.theme === "light";
    $("#theme-btn").setAttribute("aria-label", t(light ? D.ui.theme.toDark : D.ui.theme.toLight));
    $('meta[name="theme-color"]').content = light ? "#f6f8fa" : "#0d1117";
  }

  function setTheme(next, remember) {
    root.dataset.theme = next;
    if (remember) {
      store.set("theme", next);
      say(t(D.ui.theme[next]));
    }
    renderTheme();
  }

  const toggleTheme = () => setTheme(root.dataset.theme === "light" ? "dark" : "light", true);

  function initTheme() {
    const system = matchMedia("(prefers-color-scheme: light)");
    const saved = store.get("theme");
    const hasChoice = saved === "light" || saved === "dark";
    setTheme(hasChoice ? saved : system.matches ? "light" : "dark", false);
    system.addEventListener("change", (event) => {
      if (!store.get("theme")) setTheme(event.matches ? "light" : "dark", false);
    });
    $("#theme-btn").addEventListener("click", toggleTheme);
  }

  /* ---------- Navigation ---------- */

  function initMenu() {
    const button = $("#menu-btn");
    const nav = $("#nav");
    const setOpen = (open) => {
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    };
    button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (event) => event.target.closest("a") && setOpen(false));
    document.addEventListener("click", (event) => !event.target.closest(".topbar") && setOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        button.focus();
      }
    });
    $(".topbar").addEventListener("focusout", (event) => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    });
  }

  function initActiveLink() {
    const links = $$(".nav a");
    const mark = (id) => {
      for (const link of links) {
        if (link.hash === `#${id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    };
    const band = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && mark(entry.target.id)),
      { rootMargin: "-40% 0px -59% 0px" }
    );
    $$("main > section").forEach((section) => band.observe(section));
    const end = new IntersectionObserver((entries) => entries[0].isIntersecting && mark("contact"), { threshold: 0.6 });
    end.observe($(".footer"));
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px" }
    );
    $$(".reveal").forEach((item) => observer.observe(item));
    root.classList.add("reveal-on");
  }

  /* ---------- Démarrage ---------- */

  root.classList.add("js");
  render();
  initTheme();
  initMenu();
  initStudy();
  initForm();
  initShell();
  for (const button of $$("[data-lang]")) button.addEventListener("click", () => setLang(button.dataset.lang));
  if ("IntersectionObserver" in window) {
    initActiveLink();
    initReveal();
  }
  if (!route() && location.hash.length > 1) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
