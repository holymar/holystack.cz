import { games } from "./games.js";
import { LANGS, t } from "./i18n.js";

/* -----------------------------------------------------------------
   Nastavení. Tohle jsou jediné dvě hodnoty, které se tady mění.

   FORMSPREE_ID  — kód z formspree.io (adresa formuláře končí /f/<ID>).
                   Dokud je prázdný, formulář otevře poštovní program.
   PAYPAL_HANDLE — jméno z paypal.me/<handle>.
                   Dokud je prázdné, sekce podpory se nezobrazí.
   ----------------------------------------------------------------- */

const FORMSPREE_ID = "";
const PAYPAL_HANDLE = "holystack";

const EMAIL = "holy.mar@gmail.com";
const STORAGE_KEY = "vizitka-jazyk";

/* --- jazyk -------------------------------------------------------- */

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* localStorage může být zakázané, pak rozhoduje prohlížeč */
  }
  const preferred = (navigator.languages || [navigator.language || "cs"])
    .map((l) => String(l).toLowerCase());
  return preferred.some((l) => l.startsWith("cs") || l.startsWith("sk")) ? "cs" : "en";
}

let lang = initialLang();
let galleryLit = false;

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* bez uložení se jazyk příště odvodí z prohlížeče */
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(lang, el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) el.setAttribute(attr.trim(), t(lang, key.trim()));
    });
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  renderGallery();
  renderSupport();
  renderFormHint();
}

/* --- galerie ------------------------------------------------------ */

function renderGallery() {
  const hang = document.getElementById("hang");
  if (!hang) return; // stránky bez galerie (zásady soukromí) sdílejí tenhle skript
  hang.textContent = "";

  games.forEach((game, index) => {
    const piece = document.createElement("article");
    piece.className = index === 0 ? "piece piece--lead" : "piece";
    piece.style.setProperty("--i", String(index));

    const primary = game.links && game.links[0];
    const frame = document.createElement(primary ? "a" : "div");
    frame.className = "piece__frame";
    if (primary) {
      frame.href = primary.url;
      frame.target = "_blank";
      frame.rel = "noopener noreferrer";
      frame.tabIndex = -1;
      frame.setAttribute("aria-hidden", "true");
    }

    const img = document.createElement("img");
    img.src = game.cover;
    img.alt = game.coverAlt ? game.coverAlt[lang] : "";
    img.width = 1600;
    img.height = 900;
    img.loading = index === 0 ? "eager" : "lazy";
    img.decoding = "async";
    frame.append(img);

    const plaque = document.createElement("div");
    plaque.className = "plaque";

    const title = document.createElement("h3");
    title.className = "piece__title";
    title.textContent = game.title[lang];

    const tagline = document.createElement("p");
    tagline.className = "piece__tagline";
    tagline.textContent = game.tagline[lang];

    const blurb = document.createElement("p");
    blurb.className = "piece__blurb";
    blurb.textContent = game.blurb[lang];

    const meta = document.createElement("p");
    meta.className = "piece__meta";

    const status = document.createElement("span");
    status.className = "piece__status";
    status.textContent = t(lang, "status." + game.status);
    meta.append(status);

    if (game.audience) {
      const audience = document.createElement("span");
      audience.className = "piece__audience";
      audience.textContent = game.audience[lang];
      meta.append(audience);
    }

    if (game.plannedOn) {
      const planned = document.createElement("span");
      planned.className = "piece__planned";
      planned.textContent = t(lang, "plan." + game.plannedOn);
      meta.append(planned);
    }

    (game.links || []).forEach((link) => {
      const a = document.createElement("a");
      a.className = "piece__link";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = t(lang, "link." + link.kind);
      a.setAttribute("aria-label", t(lang, "link." + link.kind) + " — " + game.title[lang]);
      meta.append(a);
    });

    plaque.append(title, tagline, blurb, meta);
    piece.append(frame, plaque);
    hang.append(piece);
  });

  if (galleryLit) {
    hang.classList.add("is-lit");
  } else {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        hang.classList.add("is-lit");
        galleryLit = true;
      })
    );
  }
}

/* --- podpora ------------------------------------------------------ */

function renderSupport() {
  const support = document.getElementById("support");
  const desk = document.querySelector(".desk");
  if (!support || !desk) return;
  if (!PAYPAL_HANDLE) {
    support.hidden = true;
    desk.classList.add("desk--solo");
    return;
  }
  support.hidden = false;
  desk.classList.remove("desk--solo");
  document.getElementById("support-link").href =
    "https://www.paypal.com/paypalme/" + encodeURIComponent(PAYPAL_HANDLE);
}

/* --- formulář ----------------------------------------------------- */

const form = document.getElementById("contact-form");
const statusLine = document.getElementById("form-status");
const hintLine = document.getElementById("form-hint");

function renderFormHint() {
  if (!hintLine) return;
  hintLine.textContent = FORMSPREE_ID ? "" : t(lang, "contact.mailtoHint");
}

function setStatus(key, state) {
  if (!statusLine) return;
  statusLine.textContent = key ? t(lang, key) : "";
  if (state) statusLine.dataset.state = state;
  else delete statusLine.dataset.state;
}

function mailtoFallback(data) {
  const subject = "Zpráva z webu — " + data.name;
  const body = data.message + "\n\n—\n" + data.name + "\n" + data.email;
  window.location.href =
    "mailto:" + EMAIL +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
  setStatus("contact.mailto", "sent");
}

if (form) form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (form.elements._gotcha.value) return; // past na roboty

  const data = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!data.name || !data.message || !form.elements.email.checkValidity()) {
    setStatus("contact.invalid", "failed");
    return;
  }

  if (!FORMSPREE_ID) {
    mailtoFallback(data);
    return;
  }

  const button = form.querySelector("button[type=submit]");
  button.disabled = true;
  setStatus("contact.sending");

  try {
    const response = await fetch("https://formspree.io/f/" + FORMSPREE_ID, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        _subject: "Zpráva z webu — " + data.name,
      }),
    });
    if (!response.ok) throw new Error("Formspree odpověděl " + response.status);
    form.reset();
    setStatus("contact.sent", "sent");
  } catch (error) {
    console.error(error);
    setStatus("contact.failed", "failed");
  } finally {
    button.disabled = false;
  }
});

/* --- start -------------------------------------------------------- */

document.querySelectorAll(".lang__btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

applyLang(lang);
