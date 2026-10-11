// Slovník webu. Klíč = hodnota atributu data-i18n v index.html.
// Texty her jsou u her samotných v games.js.

export const LANGS = ["cs", "en"];

export const strings = {
  cs: {
    "meta.title": "Martin Holý — hry, u kterých se nedá prohrát",
    "meta.description":
      "Vizitka Martina Holého: osm her pro děti dělaných v Godotu — od KidGame a Say Ahoy po Kouzelníkovu věž a GalaxyTravel.",

    "header.name": "Martin Holý",
    "header.role": "Dělám hry, u kterých se nedá prohrát.",
    "header.lang": "Jazyk",
    "header.skip": "Přeskočit na obsah",

    "gallery.heading": "Hry",
    "gallery.note": "Osm projektů, žádný zatím nevyšel. Fáze je u každého napsaná.",

    "about.heading": "O mně",
    "about.p1":
      "Dělám hry v Godotu a první hráči jsou moje vlastní děti. Z toho vychází jeden druh her: takové, u kterých se sedí vedle sebe, nikdo nepřečte ani písmeno a nedá se prohrát.",
    "about.p2":
      "Ke každému projektu vzniká dokumentace dřív než kód — vize, herní design a zápis rozhodnutí včetně toho, co se zamítlo a proč. U projektu jednoho člověka to zní jako zbytečnost, ale je to jediný důvod, proč se po měsíci pauzy dá pokračovat tam, kde jsem přestal.",
    "about.p3":
      "Hledám lidi, kteří si hry zkusí s vlastními dětmi a řeknou mi, co viděli. První minuta bez nápovědy je nejcennější údaj celého projektu.",

    "contact.heading": "Napiš mi",
    "contact.lead":
      "Zpětná vazba k hrám, nabídka spolupráce nebo dotaz — přijde mi to do e-mailu.",
    "contact.name": "Jméno",
    "contact.email": "E-mail",
    "contact.message": "Zpráva",
    "contact.submit": "Odeslat zprávu",
    "contact.sending": "Odesílám…",
    "contact.sent": "Zpráva odešla. Odpovím na e-mail, který jsi uvedl.",
    "contact.failed":
      "Zprávu se nepodařilo odeslat. Zkus to prosím znovu, nebo mi napiš přímo na holy.mar@gmail.com.",
    "contact.mailto": "Otevřel se ti poštovní program s předvyplněnou zprávou.",
    "contact.mailtoHint":
      "Tlačítko otevře tvůj poštovní program s předvyplněnou zprávou.",
    "contact.invalid": "Vyplň prosím jméno, e-mail a zprávu.",
    "contact.direct": "Nebo rovnou na adresu",

    "support.heading": "Podpořit vývoj",
    "support.body":
      "Hry vznikají po večerech a jsou zadarmo. Když některá udělala radost, můžeš přihodit na další.",
    "support.action": "Přispět přes PayPal",

    "footer.built": "Postaveno bez frameworku. Zdrojový kód webu je na GitHubu.",
    "footer.source": "holymar/VisitingCard",

    "privacy.meta.title": "Zásady ochrany soukromí — Martin Holý",
    "privacy.meta.description":
      "Co dělají s údaji hry Martina Holého a tenhle web. Krátká odpověď: hry neposílají nikam nic.",
    "privacy.heading": "Zásady ochrany soukromí",
    "privacy.updated": "Naposledy upraveno 29. září 2026",
    "privacy.lead":
      "Hry neposílají nikam nic. Nemají v sobě připojení k internetu, analytiku, reklamy ani přihlašování. Jediné údaje, které vůbec někde vznikají, vznikají na tomhle webu — a jsou popsané níž.",

    "privacy.games.heading": "Hry",
    "privacy.games.p1":
      "Žádná z her — KidGame, Ghost Playground, Junkyard Dogs, Say Ahoy, Kouzelníkova věž, Uklidíme to!, GalaxyTravel ani Zoologic — se neptá na jméno, e-mail ani věk a nezakládá žádný účet. Hry se nepřipojují k žádnému serveru, neobsahují reklamní ani analytické knihovny a nežádají o žádná zvláštní oprávnění zařízení.",
    "privacy.games.p2":
      "Ukládá se jen to, co hra sama potřebuje: postup a nastavení zvuku, a u rozpracovaných her ještě vývojářský záznam o průběhu, který používám při ladění. Všechno leží v paměti zařízení, nikam to neodchází a odinstalace hry to smaže. Kouzelníkova věž a Zoologic umí sdílet vlastní místnost nebo stavbu kódem — ten se jen zkopíruje do schránky (Věž ho umí uložit i jako soubor do Dokumentů) a dál putuje jen tam, kam ho hráč sám vloží.",

    "privacy.children.heading": "Děti",
    "privacy.children.p1":
      "Hry jsou dělané pro děti, a proto o nich nesbírají nic — ani jméno, ani věk, ani identifikátory zařízení nebo polohu. Není co sdílet, protože není co získat.",

    "privacy.site.heading": "Tenhle web",
    "privacy.site.p1":
      "Web běží na GitHub Pages. Provozovatel hostingu vidí běžný provozní záznam serveru o každé návštěvě — IP adresu, čas a typ prohlížeče. Já k němu nemám přístup.",
    "privacy.site.p2":
      "Písma i obrázky se načítají odsud, ne z cizích serverů, takže prohlížeč při prohlížení stránky nikam jinam nesahá. Nejsou tu sledovací skripty ani cookies; v paměti prohlížeče zůstává jediná věc, a to zvolený jazyk.",
    "privacy.site.p3":
      "Kontaktní formulář buď otevře tvůj poštovní program — pak zpráva neprojde nikým dalším — nebo pošle jméno, e-mail a text zprávy službou Formspree, která je přepošle na můj e-mail. Používám je jen k odpovědi a nikomu je nepředávám.",
    "privacy.site.p4":
      "Odkaz na PayPal vede na stránky PayPalu a tam už platí jeho vlastní podmínky. O přispěvatelích se nedozvím nic než to, co mi PayPal ukáže u platby.",

    "privacy.contact.heading": "Otázky",
    "privacy.contact.p1": "Cokoli k tomuhle textu nebo ke hrám:",
    "privacy.contact.p2":
      "Až se na tomhle něco podstatného změní, změní se i tenhle text a datum nahoře.",

    "privacy.back": "Zpět na vizitku",
    "footer.privacy": "Zásady ochrany soukromí",

    "status.in-development": "ve vývoji",
    "status.prototype": "hratelný prototyp",
    "status.design": "ve fázi návrhu",

    "plan.play-store": "chystá se na Google Play",

    "link.github": "Zdrojový kód",
    "link.play": "Hrát v prohlížeči",
    "link.itch": "itch.io",
    "link.steam": "Steam",
    "link.play-store": "Google Play",
    "link.app-store": "App Store",
  },

  en: {
    "meta.title": "Martin Holý — games you cannot lose",
    "meta.description":
      "Martin Holý's card: eight games for children made in Godot — from KidGame and Say Ahoy to The Wizard's Tower and GalaxyTravel.",

    "header.name": "Martin Holý",
    "header.role": "I make games you cannot lose.",
    "header.lang": "Language",
    "header.skip": "Skip to content",

    "gallery.heading": "Games",
    "gallery.note": "Eight projects, none released yet. Each one says where it stands.",

    "about.heading": "About me",
    "about.p1":
      "I make games in Godot, and my own children are the first players. That leads to one kind of game: the kind you play sitting next to each other, with not a single letter to read and nothing to lose.",
    "about.p2":
      "Every project gets its documentation before its code — vision, game design, and a record of decisions including the ones that were turned down and why. For a one-person project that sounds like overhead, but it is the only reason I can pick a project up a month later exactly where I left it.",
    "about.p3":
      "I am looking for people who will try the games with their own children and tell me what they saw. That first minute without any hints is the most valuable data in the whole project.",

    "contact.heading": "Send me a message",
    "contact.lead":
      "Feedback on the games, an offer to work together, or a question — it lands in my inbox.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send message",
    "contact.sending": "Sending…",
    "contact.sent": "Message sent. I'll reply to the address you gave.",
    "contact.failed":
      "The message didn't go through. Please try again, or write to holy.mar@gmail.com directly.",
    "contact.mailto": "Your mail program opened with the message filled in.",
    "contact.mailtoHint": "The button opens your mail program with the message filled in.",
    "contact.invalid": "Please fill in your name, email and message.",
    "contact.direct": "Or write straight to",

    "support.heading": "Support the work",
    "support.body":
      "These games are made in the evenings and they are free. If one of them made someone happy, you can chip in for the next.",
    "support.action": "Chip in via PayPal",

    "footer.built": "Built without a framework. The source of this site is on GitHub.",
    "footer.source": "holymar/VisitingCard",

    "privacy.meta.title": "Privacy policy — Martin Holý",
    "privacy.meta.description":
      "What Martin Holý's games and this site do with data. Short answer: the games send nothing anywhere.",
    "privacy.heading": "Privacy policy",
    "privacy.updated": "Last updated 29 September 2026",
    "privacy.lead":
      "The games send nothing anywhere. They contain no internet connection, no analytics, no ads and no sign-in. The only data that exists at all comes from this website, and it is described below.",

    "privacy.games.heading": "The games",
    "privacy.games.p1":
      "None of the games — KidGame, Ghost Playground, Junkyard Dogs, Say Ahoy, The Wizard's Tower, Let's Tidy Up!, GalaxyTravel or Zoologic — ever asks for a name, an email or an age, or creates an account. They connect to no server, contain no advertising or analytics libraries, and request no special device permissions.",
    "privacy.games.p2":
      "Only what the game itself needs is stored: progress and sound settings, plus — in the games still being built — a developer log of the session that I use for debugging. All of it sits in the device's own memory, none of it leaves, and uninstalling the game deletes it. The Wizard's Tower and Zoologic can share a home-made room or machine as a code — the code is only copied to the clipboard (the Tower can also save it as a file in Documents) and goes nowhere except where the player pastes it.",

    "privacy.children.heading": "Children",
    "privacy.children.p1":
      "These games are made for children, so they collect nothing about them — no name, no age, no device identifiers, no location. There is nothing to share because there is nothing to gather.",

    "privacy.site.heading": "This website",
    "privacy.site.p1":
      "The site runs on GitHub Pages. The host keeps an ordinary server log of each visit — IP address, time and browser type. I have no access to it.",
    "privacy.site.p2":
      "Fonts and images are served from here rather than from other servers, so reading the page reaches nowhere else. There are no tracking scripts and no cookies; the only thing kept in your browser is the language you picked.",
    "privacy.site.p3":
      "The contact form either opens your own mail program — in which case the message passes through nobody else — or sends your name, email and message through Formspree, which forwards them to my inbox. I use them only to reply, and pass them to no one.",
    "privacy.site.p4":
      "The PayPal link leads to PayPal, where its own terms apply. I learn nothing about anyone who chips in beyond what PayPal shows me with the payment.",

    "privacy.contact.heading": "Questions",
    "privacy.contact.p1": "Anything about this text or about the games:",
    "privacy.contact.p2":
      "If something here changes in a way that matters, this text and the date above change with it.",

    "privacy.back": "Back to the card",
    "footer.privacy": "Privacy policy",

    "status.in-development": "in development",
    "status.prototype": "playable prototype",
    "status.design": "in design",

    "plan.play-store": "coming to Google Play",

    "link.github": "Source code",
    "link.play": "Play in browser",
    "link.itch": "itch.io",
    "link.steam": "Steam",
    "link.play-store": "Google Play",
    "link.app-store": "App Store",
  },
};

export function t(lang, key) {
  return (strings[lang] && strings[lang][key]) || strings.cs[key] || key;
}
