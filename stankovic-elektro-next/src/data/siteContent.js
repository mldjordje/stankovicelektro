export const company = {
  name: "Stanković Elektro",
  tagline: "Kompletna elektro-instalacija i šemiranje elektro ormara za vašu sigurnost.",
  promise: "Brze, profesionalne i pouzdane elektro usluge — od montaže do dokumentovanog šemiranja.",
  phone: "+381 64 0136237",
  email: "kontakt@stankovicelektro.rs",
  location: "Beograd, Srbija",
};

export const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/services", label: "Usluge" },
  { href: "/projects", label: "Projekti" },
  { href: "/pricing", label: "Cene" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Kontakt" },
];

export const highlights = [
  { label: "24/7 dežurstvo", value: "Hitne intervencije" },
  { label: "Industrija i biznis", value: "Dokumentovana rešenja" },
  { label: "Precizno šemiranje", value: "Bez improvizacije" },
];

export const services = [
  {
    slug: "kompletne-elektro-instalacije",
    title: "Kompletne elektro-instalacije",
    description:
      "Projektovanje, izvođenje i verifikacija instalacija u stambenim, poslovnim i industrijskim objektima, uz striktno poštovanje standarda.",
    deliverables: [
      "Glavne i razvodne table, dimenzionisane po potrošnji",
      "Kabliranje, obeležavanje i ispitivanje instalacija",
      "Dokumentacija koja prati svaku izmenu",
    ],
  },
  {
    slug: "rasveta-i-servis",
    title: "Montaža i servis rasvete i priključaka",
    description:
      "Ugradnja i održavanje rasvete, utičnica, prekidača, senzora, gromobrana i zaštitnih sistema uz uredne zapisnike.",
    deliverables: [
      "Projektovanje i montaža svetlosnih linija i bezbednosne rasvete",
      "Zaštita od prenapona i gromobrani",
      "Redovan servis i zamena komponenti",
    ],
  },
  {
    slug: "semiranje-ormara",
    title: "Šemiranje i označavanje elektro ormara",
    description:
      "Precizno označavanje, organizovanje i dokumentovanje svih komponenti, sa tehničkom šemom i etiketama za sigurnu dijagnostiku.",
    deliverables: [
      "Jasne sheme, etikete i numeracija kablova",
      "Mapiranje potrošača i zaštitnih elemenata",
      "Priprema ormara za reviziju i održavanje",
    ],
  },
  {
    slug: "hitne-intervencije",
    title: "Hitne intervencije 24/7",
    description:
      "Brzi izlazak na teren, sanacija kvarova i obezbeđivanje privremenog ili trajnog napajanja sa urednom evidencijom.",
    deliverables: [
      "Dijagnostika i brzo otklanjanje kvarova",
      "Privremena i trajna rešenja napajanja",
      "Izveštaji o stanju i preporuke",
    ],
  },
  {
    slug: "industrijski-i-poslovni-sistemi",
    title: "Industrijski i poslovni sistemi",
    description:
      "Robustna rešenja za proizvodne pogone, logistiku i kancelarije: od glavnog dovoda do fine automatike.",
    deliverables: [
      "Plan napajanja, redundansa i zaštite",
      "Integracija sa BMS i sigurnosnim sistemima",
      "Kontrola kvaliteta napona i potrošnje",
    ],
  },
  {
    slug: "transparentne-cene",
    title: "Transparentne cene, bez skrivenih troškova",
    description:
      "Jasne ponude, razloženi troškovi materijala i rada, uz pisanu garanciju na izvedene radove.",
    deliverables: [
      "Predračun po fazama i materijalima",
      "Garancija i servisni plan",
      "Preporuka optimizacije potrošnje",
    ],
  },
];

export const projects = [
  {
    slug: "dabsinel-industrijski-ormari",
    title: "Dabsinel — industrijski ormar i napajanje",
    summary:
      "Kompletan razvod, označavanje i dokumentacija elektro ormara za industrijski pogon. Stabilnost i laka dijagnostika u radu 24/7.",
    tags: ["Industrija", "Šemiranje", "Dokumentacija"],
  },
  {
    slug: "protim-poslovni-prostor",
    title: "protim.rs — modernizacija poslovnog prostora",
    summary:
      "Modernizacija razvodnih tabli, montaža rasvete i zaštitnih sistema sa jasnim šemama za održavanje bez zastoja.",
    tags: ["Poslovni objekti", "Rasveta", "Sigurnost"],
  },
  {
    slug: "stambeni-sistem-bezbedan",
    title: "Stambeni objekat — uredna instalacija",
    summary:
      "Kompletne instalacije, provera zaštite i gromobrana, te uredna evidencija za sigurnost doma i buduće nadogradnje.",
    tags: ["Stambeni objekti", "Instalacije", "Gromobrani"],
  },
];

export const pricing = [
  {
    name: "Stambeni servis",
    price: "od 2.490 RSD",
    period: "/intervencija",
    items: [
      "Brza dijagnostika i popravke u stanu/kući",
      "Montaža utičnica, prekidača i svetiljki",
      "Izveštaj o stanju instalacije",
    ],
  },
  {
    name: "Poslovni objekti",
    price: "od 4.990 RSD",
    period: "/usluga",
    highlighted: true,
    items: [
      "Rasveta, utičnice i server sobe",
      "Šemiranje i obeležavanje razvodnih tabli",
      "Servis bez zastoja u radu",
    ],
  },
  {
    name: "Industrijski pogoni",
    price: "od 7.990 RSD",
    period: "/usluga",
    items: [
      "Glavni dovodi, napajanje mašina i gromobrani",
      "Dokumentacija i redovna kontrola",
      "24/7 intervencije i standby",
    ],
  },
];

export const faqs = [
  {
    question: "Da li radite hitne intervencije?",
    answer:
      "Da, dežuramo 24/7. Pozovite nas na +381 64 0136237 i tim izlazi na teren uz jasnu dijagnostiku i zapisnik.",
  },
  {
    question: "Kako izgleda šemiranje elektro ormara?",
    answer:
      "Svaki vod i komponenta se označava, izrađujemo čitljive šeme, etiketiramo kablove i obezbeđujemo dokumentaciju za održavanje i reviziju.",
  },
  {
    question: "Radite li i za industrijske pogone?",
    answer:
      "Da. Dimenzionišemo dovod, razvodne table, zaštitu i gromobrane, uz redundansu i jasne procedure za servis bez zastoja.",
  },
  {
    question: "Imate li transparentne cene?",
    answer:
      "Da. Ponude su raščlanjene po fazama i materijalima, bez skrivenih troškova. Svaki rad prate zapisnici i garancija.",
  },
];

export const blogPosts = [
  {
    slug: "kako-pripremamo-razvodni-ormar",
    title: "Kako pripremamo razvodni ormar za bezbedan rad",
    excerpt: "Čiste šeme, jasne etikete i kontrolisani tok napajanja — ovo je naš proces za uredan ormar.",
    category: "Šemiranje",
  },
  {
    slug: "hitne-elektro-intervencije",
    title: "Hitne elektro intervencije: šta prvo uraditi",
    excerpt: "Isključi, obezbedi, pozovi stručnjake. Kako reagujemo u prvih 30 minuta od poziva.",
    category: "Servis 24/7",
  },
  {
    slug: "modernizacija-instalacije",
    title: "Modernizacija instalacije za poslovni prostor",
    excerpt: "Planiranje kapaciteta, gromobrani, redundansa i dokumentacija za timove održavanja.",
    category: "Poslovni objekti",
  },
];
