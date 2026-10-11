// Obsah galerie. Jediné místo, kde se hry přidávají a upravují.
//
// První hra v poli visí na stěně největší — bere dvojnásobek mřížky.
//
// status:    "in-development" | "prototype" | "design"   (názvy stavů jsou v i18n.js)
// plannedOn:  nepovinné; vypíše do popisky tichý řádek "chystá se na Google Play".
//             Nastavovat jen tam, kde to je pravda — je to slib návštěvníkovi.
// links:      zatím prázdné. Repozitáře her jsou privátní, takže odkaz na ně by
//             skončil 404. Až budou hry v obchodě, přibude sem
//             { kind: "play-store", url: "..." } a řádek plannedOn se smaže.
// links[].kind: "github" | "play" | "itch" | "steam" | "play-store" | "app-store"
// cover: obrázek 16:9, webp 1600×900. Všechny jsou kompozice z původních herních
//        assetů (postavy, sprity, moduly, podlahy, ostrovy); u KidGame, Věže,
//        Uklidíme to!, Ghost Playground a Junkyard Dogs na pozadí
//        z Bingu bez postav. Postavy Věže
//        vyfotí Godot (je ve 3D). Buildery jsou v tools/covers/, postup v README.

export const games = [
  {
    id: "kidgame",
    title: { cs: "KidGame", en: "KidGame" },
    tagline: {
      cs: "Dvacet tři miniher pro předškoláka",
      en: "Twenty-three mini-games for a preschooler",
    },
    audience: { cs: "3–5 let", en: "ages 3–5" },
    status: "in-development",
    cover: "assets/img/games/kidgame.webp",
    coverAlt: {
      cs: "Slunná louka s rybníkem: myška, pejsek, liška, kočka, veverka a opička z kolotoče mávají v řadě, u rybníka žabák s vysílačkou, na nebi drak a papírový drak",
      en: "A sunny meadow with a pond: a mouse, a puppy, a fox, a cat, a squirrel and a monkey from the carousel wave in a row, a frog with a walkie-talkie sits by the pond, a dragon and a kite fly overhead",
    },
    blurb: {
      cs: "Rozcestník miniher, který dítě mimochodem naučí ovládat myš, ovladač i dotyk. Žádné písmeno, které by muselo přečíst, a nedá se prohrát — žádné životy, žádný časový limit, žádný konec hry.",
      en: "A hub of mini-games that teaches a child to use a mouse, a gamepad and touch along the way. Not a single letter to read, and nothing to lose — no lives, no timer, no game over.",
    },
    plannedOn: "play-store",
    links: [],
  },
  {
    id: "ghost-playground",
    title: { cs: "Ghost Playground", en: "Ghost Playground" },
    tagline: {
      cs: "Parta duchů straší na hřišti",
      en: "A gang of ghosts haunts the playground",
    },
    audience: { cs: "5–10 let", en: "ages 5–10" },
    status: "prototype",
    cover: "assets/img/games/ghost-playground.webp",
    coverAlt: {
      cs: "Podvečerní hřiště: bublinový duch Boo vyskočil ze sudu, Dan visí ve vzduchu, Míša se tiskne k medvídkovi, na houpačce sedí plechovkový Rattle",
      en: "A playground at dusk: Boo the bubble ghost bursts from a barrel, Dan hangs in the air, Míša hugs her teddy, Rattle the tin can sits on the swing",
    },
    blurb: {
      cs: "Logická hra na jedné obrazovce pro tablet. Velíš duchům, kteří se schovávají do keřů, sudů a stínů a odtamtud v legraci straší návštěvníky. Nikdo se nezraní a nic není doopravdy děsivé.",
      en: "A single-screen puzzle game for tablets. You command ghosts who hide in bushes, barrels and shadows, then pop out to spook visitors for laughs. Nobody gets hurt and nothing is truly scary.",
    },
    plannedOn: "play-store",
    links: [],
  },
  {
    id: "junkyard-dogs",
    title: { cs: "Junkyard Dogs", en: "Junkyard Dogs" },
    tagline: {
      cs: "Deset minut ve šrotišti ve dvou",
      en: "Ten minutes in a scrapyard, together",
    },
    audience: { cs: "rodič a dítě", en: "a parent and a child" },
    status: "prototype",
    cover: "assets/img/games/junkyard-dogs.webp",
    coverAlt: {
      cs: "Šrotiště shora mezi kontejnery: modrý pes Plecháč běží oživit ležícího žlutého Klubka v zeleném kruhu, v rohu číhá boss ze staré pračky",
      en: "A scrapyard from above between containers: Plecháč the blue dog runs to revive Klubko the downed yellow dog inside a green ring, a washing-machine boss lurks in the corner",
    },
    blurb: {
      cs: "Kooperativní střílečka pro dva u jedné obrazovky, navržená pro dvojici dospělý a šestileté dítě. Oba mají stejné schopnosti a když jeden padne, druhý ho zvedne — dítě tedy dospělého doopravdy zachraňuje.",
      en: "A two-player couch co-op shooter built for one specific pair: an adult and a six-year-old. Both have the same abilities, and when one goes down the other picks them up — so the child genuinely saves the grown-up.",
    },
    links: [],
  },
  {
    id: "say-ahoy",
    // Název se nikdy nezkracuje na „Ahoy“ — samotné slovo je ve hrách obsazené.
    title: { cs: "Say Ahoy", en: "Say Ahoy" },
    tagline: {
      cs: "Ťukni. Poslouchej. Řekni to.",
      en: "Tap it. Listen. Say it.",
    },
    audience: { cs: "3–6 let", en: "ages 3–6" },
    status: "prototype",
    cover: "assets/img/games/say-ahoy.webp",
    coverAlt: {
      cs: "Modrý papoušek s černo-zlatým šátkem říká slovo nad dlaždicí s kočkou, za ním moře s ostrovy, obláčky mlhy a otevřená truhla se zlatými dublony",
      en: "A blue parrot in a black and gold bandana says a word over a tile with a cat, behind it a sea of islands, patches of fog and an open chest of gold doubloons",
    },
    blurb: {
      cs: "První anglická slova obrázkem a zvukem: dítě ťukne na obrázek a ten řekne, jak se jmenuje anglicky. Celá hra je tahle jedna věta. Pirátský svět, ve kterém nikdo s nikým nebojuje — a prohrát se nedá.",
      en: "First English words through picture and sound: the child taps a picture and it says its name in English. That one sentence is the whole game. A pirate world where nobody fights anybody — and you cannot lose.",
    },
    links: [],
  },
  {
    id: "kouzelnikova-vez",
    title: { cs: "Kouzelníkova věž", en: "The Wizard's Tower" },
    tagline: {
      cs: "Věž plná hádanek a pomocníků",
      en: "A tower full of puzzles and helpers",
    },
    audience: { cs: "6–10 let", en: "ages 6–10" },
    status: "in-development",
    cover: "assets/img/games/kouzelnikova-vez.webp",
    coverAlt: {
      cs: "Kamenná věž s modrou střechou za soumraku, před ní kouzelník ve fialovém klobouku s hůlkou a knihou, za ním kamenný golem, u nohou kočka, myška a žába",
      en: "A stone tower with a blue roof at dusk; in front of it the wizard in a purple hat with a wand and a book, a stone golem behind him, a cat, a mouse and a frog at his feet",
    },
    blurb: {
      cs: "Logická hra ve 3D: kouzelník stoupá věží místnost po místnosti a hádanky řeší tím, že posílá pomocníky tam, kam sám nemůže — myši do škvír, sovu na polici, golema na těžký kámen. Nic tu neumírá a každou chybu vrátí přetočení času.",
      en: "A 3D puzzle game: the wizard climbs a tower room by room and solves each puzzle by sending helpers where he cannot go — mice into cracks, the owl up to a shelf, the golem to a heavy stone. Nothing dies here, and turning back time undoes every mistake.",
    },
    plannedOn: "play-store",
    links: [],
  },
  {
    id: "uklidime-to",
    title: { cs: "Uklidíme to!", en: "Let's Tidy Up!" },
    tagline: {
      cs: "Tower defense, kde se nebojuje, ale uklízí",
      en: "A tower defense where you tidy up instead of fighting",
    },
    audience: { cs: "3–6 let", en: "ages 3–6" },
    status: "prototype",
    cover: "assets/img/games/uklidime-to.webp",
    coverAlt: {
      cs: "Barevné městečko na kopcích, větrný mlýn a kolotoč. Po silnici jede zametací auto, žluté a modré popelářské auto a před nimi leží žluté láhve a modré noviny",
      en: "A colourful little town on the hills with a windmill and a carousel. A street sweeper, a yellow and a blue garbage truck drive along the road towards yellow bottles and blue newspapers lying ahead",
    },
    blurb: {
      cs: "Po silnici se k městečku valí nepořádek a dítě k ní staví auta, která ho sbírají — každé jen svůj druh, poznaný podle barvy i obrázku. Co projede, zůstane na hromádce u brány a dítě to odťuká. Z uklizeného se pak staví městečko.",
      en: "Litter rolls down the road towards a little town, and the child places trucks along it to collect it — each truck only its own kind, matched by colour and picture. Whatever gets through waits in a pile by the gate for the child to tap away. What gets tidied up then builds the town.",
    },
    plannedOn: "play-store",
    links: [],
  },
  {
    id: "galaxy-travel",
    title: { cs: "GalaxyTravel", en: "GalaxyTravel" },
    tagline: {
      cs: "Postav loď, vyleť pro šrot, postav lepší",
      en: "Build a ship, fly out for scrap, build a better one",
    },
    audience: { cs: "8–12 let", en: "ages 8–12" },
    status: "in-development",
    cover: "assets/img/games/galaxy-travel.webp",
    coverAlt: {
      cs: "Loď poskládaná z modulů — zbraně, reaktor, štít, náklad, drapák a dva motory — letí fialovou mlhovinou v bublině štítu a střílí na pirátskou loď. Kolem krouží pomocníci a plují volné moduly",
      en: "A ship built from modules — weapons, a reactor, a shield, cargo, a grabber and two engines — flies through a purple nebula inside its shield bubble, firing at a pirate ship. Helpers circle around it and loose modules drift by",
    },
    blurb: {
      cs: "Stavění lodi v duchu Galaxy Truckeru a výpravy jako v FTL. V hangáru osazuješ trup moduly a hledáš, co vedle sebe funguje; na výpravě loď sama sbírá šrot, přežívá asteroidy a potkává piráty i hodné mimozemšťany. Když dojde palivo, odtáhnou tě domů — hra nikdy nekončí.",
      en: "Ship building in the spirit of Galaxy Trucker, with expeditions like FTL. In the hangar you fit modules into a hull and look for what works well side by side; out on an expedition the ship collects scrap, weathers asteroids and meets pirates and friendly aliens. Run out of fuel and you get towed home — the game never ends.",
    },
    plannedOn: "play-store",
    links: [],
  },
  {
    id: "zoologic",
    title: { cs: "Zoologic", en: "Zoologic" },
    tagline: {
      cs: "Stroj z přírodnin a zvířat",
      en: "A machine made of nature and animals",
    },
    audience: { cs: "5–10 let", en: "ages 5–10" },
    status: "prototype",
    cover: "assets/img/games/zoologic.webp",
    coverAlt: {
      cs: "Palouk v lese: stočený ježek se kutálí po prkně z kmene na pařez, pod ním houpačka z prkna na kameni vystřelí oříšek k veverce. Opodál stojí tučňák s kufrem a mapou, z rohu se dívá sova, na nebi balón",
      en: "A forest clearing: a curled-up hedgehog rolls down a plank from a tree trunk to a stump, and below it a seesaw on a stone flings a hazelnut towards a squirrel. A penguin with a suitcase and a map stands nearby, an owl watches from the corner, a balloon floats in the sky",
    },
    blurb: {
      cs: "Fyzikální hádanky v duchu The Incredible Machine: postav stroj z prken, kamenů a zvířat, pusť ho a sleduj řetězovou reakci. Ježek se lekne a kutálí, veverka nosí oříšky a tučňák hledá cestu domů. Zoologic je pracovní název, ten konečný se vybere před vydáním.",
      en: "Physics puzzles in the spirit of The Incredible Machine: build a machine out of planks, stones and animals, let it go and watch the chain reaction. The hedgehog gets startled and rolls, the squirrel carries nuts, and the penguin is looking for the way home. Zoologic is a working title; the final one will be chosen before release.",
    },
    plannedOn: "play-store",
    links: [],
  },
];
