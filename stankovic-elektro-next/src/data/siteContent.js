export const company = {
  name: "Stankovic Elektro",
  tagline: "Kompletna elektro-instalacija i semiranje elektro ormara za vasu sigurnost.",
  promise: "Brze, profesionalne i pouzdane elektro usluge od montaze do dokumentovanog semiranja.",
  phone: "+381658918453",
  email: "kontakt@stankovicelektro.rs",
  location: "Ni\u0161, Srbija",
};

export const navLinks = [
  { href: "/", label: "Pocetna" },
  { href: "/about", label: "O nama" },
  { href: "/services", label: "Usluge" },
  { href: "/projects", label: "Projekti" },
  { href: "/pricing", label: "Cene" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Kontakt" },
];

export const highlights = [
  { label: "24/7 dezurstvo", value: "Hitne intervencije" },
  { label: "Industrija i biznis", value: "Dokumentovana resenja" },
  { label: "Precizno semiranje", value: "Bez improvizacije" },
];

export const services = [
  {
    slug: "kompletne-elektro-instalacije",
    title: "Kompletne elektro-instalacije",
    description:
      "Projektovanje, izvodjenje i verifikacija instalacija u stambenim, poslovnim i industrijskim objektima, uz striktno postovanje standarda.",
    deliverables: [
      "Glavne i razvodne table, dimenzionisane po potrosnji",
      "Kabliranje, obelezavanje i ispitivanje instalacija",
      "Dokumentacija koja prati svaku izmenu",
    ],
  },
  {
    slug: "rasveta-i-servis",
    title: "Montaza i servis rasvete i prikljucaka",
    description:
      "Ugradnja i odrzavanje rasvete, uticnica, prekidaca, senzora, gromobrana i zastitnih sistema uz uredne zapisnike.",
    deliverables: [
      "Projektovanje i montaza svetlosnih linija i bezbednosne rasvete",
      "Zastita od prenapona i gromobrani",
      "Redovan servis i zamena komponenti",
    ],
  },
  {
    slug: "semiranje-ormara",
    title: "Semiranje i oznacavanje elektro ormara",
    description:
      "Precizno oznacavanje, organizovanje i dokumentovanje svih komponenti, sa tehnickom semom i etiketama za sigurnu dijagnostiku.",
    deliverables: [
      "Jasne sheme, etikete i numeracija kablova",
      "Mapiranje potrosaca i zastitnih elemenata",
      "Priprema ormara za reviziju i odrzavanje",
    ],
  },
  {
    slug: "hitne-intervencije",
    title: "Hitne intervencije 24/7",
    description:
      "Brzi izlazak na teren, sanacija kvarova i obezbedjivanje privremenog ili trajnog napajanja sa urednom evidencijom.",
    deliverables: [
      "Dijagnostika i brzo otklanjanje kvarova",
      "Privremena i trajna resenja napajanja",
      "Izvestaji o stanju i preporuke",
    ],
  },
  {
    slug: "industrijski-i-poslovni-sistemi",
    title: "Industrijski i poslovni sistemi",
    description:
      "Robustna resenja za proizvodne pogone, logistiku i kancelarije: od glavnog dovoda do fine automatike.",
    deliverables: [
      "Plan napajanja, redundansa i zastite",
      "Integracija sa BMS i sigurnosnim sistemima",
      "Kontrola kvaliteta napona i potrosnje",
    ],
  },
  {
    slug: "transparentne-cene",
    title: "Transparentne cene, bez skrivenih troskova",
    description:
      "Jasne ponude, razlozeni troskovi materijala i rada, uz pisanu garanciju na izvedene radove.",
    deliverables: [
      "Predracun po fazama i materijalima",
      "Garancija i servisni plan",
      "Preporuka optimizacije potrosnje",
    ],
  },
];

export const projects = [
  {
    slug: "dabsinel-industrijski-ormari",
    title: "Dabsinel - industrijski ormar i napajanje",
    summary:
      "Kompletan razvod, oznacavanje i dokumentacija elektro ormara za industrijski pogon. Stabilnost i laka dijagnostika u radu 24/7.",
    tags: ["Industrija", "Semiranje", "Dokumentacija"],
  },
  {
    slug: "modernizacija-poslovnog-prostora",
    title: "Modernizacija poslovnog prostora",
    summary:
      "Modernizacija razvodnih tabli, montaza rasvete i zastitnih sistema sa jasnim semama za odrzavanje bez zastoja.",
    tags: ["Poslovni objekti", "Rasveta", "Sigurnost"],
  },
  {
    slug: "stambeni-sistem-bezbedan",
    title: "Stambeni objekat - uredna instalacija",
    summary:
      "Kompletne instalacije, provera zastite i gromobrana, te uredna evidencija za sigurnost doma i buduce nadogradnje.",
    tags: ["Stambeni objekti", "Instalacije", "Gromobrani"],
  },
];

export const pricing = [
  {
    name: "Stambeni servis",
    price: "od 2.490 RSD",
    period: "/intervencija",
    items: [
      "Brza dijagnostika i popravke u stanu/kuci",
      "Montaza uticnica, prekidaca i svetiljki",
      "Izvestaj o stanju instalacije",
    ],
  },
  {
    name: "Poslovni objekti",
    price: "od 4.990 RSD",
    period: "/usluga",
    highlighted: true,
    items: [
      "Rasveta, uticnice i server sobe",
      "Semiranje i obelezavanje razvodnih tabli",
      "Servis bez zastoja u radu",
    ],
  },
  {
    name: "Industrijski pogoni",
    price: "od 7.990 RSD",
    period: "/usluga",
    items: [
      "Glavni dovodi, napajanje masina i gromobrani",
      "Dokumentacija i redovna kontrola",
      "24/7 intervencije i standby",
    ],
  },
];

export const faqs = [
  {
    question: "Da li radite hitne intervencije?",
    answer:
      "Da, dezuramo 24/7. Pozovite nas na +381658918453 i tim izlazi na teren uz jasnu dijagnostiku i zapisnik.",
  },
  {
    question: "Kako izgleda semiranje elektro ormara?",
    answer:
      "Svaki vod i komponenta se oznacava, izradjujemo citljive seme, etiketiramo kablove i obezbedjujemo dokumentaciju za odrzavanje i reviziju.",
  },
  {
    question: "Radite li i za industrijske pogone?",
    answer:
      "Da. Dimenzionisemo dovod, razvodne table, zastitu i gromobrane, uz redundansu i jasne procedure za servis bez zastoja.",
  },
  {
    question: "Imate li transparentne cene?",
    answer:
      "Da. Ponude su razclanjene po fazama i materijalima, bez skrivenih troskova. Svaki rad prate zapisnici i garancija.",
  },
];

export const blogPosts = [
  {
    slug: "kako-pripremamo-razvodni-ormar",
    title: "Kako pripremamo razvodni ormar za bezbedan rad",
    excerpt: "Ciste seme, jasne etikete i kontrolisani tok napajanja - ovo je nas proces za uredan ormar.",
    category: "Semiranje",
  },
  {
    slug: "hitne-elektro-intervencije",
    title: "Hitne elektro intervencije: sta prvo uraditi",
    excerpt: "Iskljuci, obezbedi, pozovi strucnjake. Kako reagujemo u prvih 30 minuta od poziva.",
    category: "Servis 24/7",
  },
  {
    slug: "modernizacija-instalacije",
    title: "Modernizacija instalacije za poslovni prostor",
    excerpt: "Planiranje kapaciteta, gromobrani, redundansa i dokumentacija za timove odrzavanja.",
    category: "Poslovni objekti",
  },
];
