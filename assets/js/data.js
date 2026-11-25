/*
 * TOUTES LES DONNÉES DU SITE
 *
 * - Texte traduit : { fr: "…", en: "…" }. Texte identique dans les deux langues : "…".
 * - Liste traduite : { fr: ["…", "…"], en: ["…", "…"] }.
 * - Un texte qui commence par « TODO » n'est jamais affiché aux visiteurs.
 *   Pour voir ce qui manque sur la page, ouvrir le site avec ?todo à la fin de l'adresse.
 * - Pour ajouter un projet, copier un objet du tableau `projects` (voir README.md).
 */
"use strict";

window.PORTFOLIO = {
  /* ------------------------------------------------------------------ */
  site: {
    url: "https://www.xyzdesign.xyz/",
    name: "Othmen Al Bydeoi",
    // TODO: confirmer l'adresse e-mail à afficher (reprise du CV et de l'ancien site).
    email: "othmane.bedwi@gmail.com",
    // TODO: confirmer le lien LinkedIn (LinkedIn bloque les vérifications automatiques).
    linkedin: "https://www.linkedin.com/in/othmen-al-bydeoi-96942832a",
    github: "https://github.com/Othmen94",
    // TODO: déposer le CV anglais SANS téléphone, adresse ni âge, puis passer ready à true.
    cv: { file: "assets/cv/CV_Othmen_AL_BYDEOI_EN.pdf", ready: false },
    workingSince: 2020,
    availableFrom: { fr: "mai 2027", en: "May 2027" },
  },

  /* ------------------------------------------------------------------ */
  hero: {
    init: "portfolio.init()",
    greeting: { fr: "Salut, je suis", en: "Hi, I'm" },
    role: {
      fr: "Étudiant ingénieur en technologies pour la santé",
      en: "Engineering student in health technologies",
    },
    pitch: {
      fr: "J'aime faire le pont entre le matériel et le logiciel, avec la santé comme terrain d'application. Je recherche un stage international de 4 mois, de mai à août 2027, dans le cadre d'Erasmus+.",
      en: "I like bridging hardware and software, with healthcare as the field of application. I am looking for a 4-month international internship, from May to August 2027, through Erasmus+.",
    },
    badge: {
      status: { fr: "DISPONIBLE", en: "AVAILABLE" },
      text: {
        fr: "stage 4 mois · mai–août 2027 · Erasmus+",
        en: "4-month internship · May–Aug 2027 · Erasmus+",
      },
    },
    photoAlt: { fr: "Portrait d'Othmen Al Bydeoi", en: "Portrait of Othmen Al Bydeoi" },
    facts: [
      { k: { fr: "école", en: "school" }, v: "EPISEN (UPEC), Créteil" },
      { k: { fr: "cursus", en: "degree" }, v: { fr: "Technologies pour la santé, 2025–2028", en: "Health Engineering and Technologies, 2025–2028" } },
      { k: { fr: "avant", en: "before" }, v: { fr: "Classe préparatoire TSI, 2023–2025", en: "TSI preparatory classes, 2023–2025" } },
      { k: { fr: "cherche", en: "seeking" }, v: { fr: "stage international, 4 mois", en: "international internship, 4 months" } },
      { k: { fr: "intérêts", en: "interests" }, v: { fr: "informatique, IA, électronique, embarqué, automatisation, santé", en: "software, AI, electronics, embedded systems, automation, health" } },
    ],
  },

  /* ------------------------------------------------------------------ */
  // Les nombres sont calculés par main.js à partir des données de ce fichier.
  stats: {
    projects: { fr: "projets", en: "projects" },
    years: { fr: "ans d'expérience", en: "years of experience" },
    associations: { fr: "associations", en: "non-profits" },
    available: { fr: "disponible", en: "available" },
    // TODO: le CV indique « 3 pays vécus ». Donner la liste des pays pour rétablir ce chiffre.
  },

  /* ------------------------------------------------------------------ */
  profile: {
    paragraphs: {
      fr: [
        "Je suis étudiant ingénieur en technologies pour la santé à l'EPISEN, l'école d'ingénieurs de l'UPEC à Créteil, après une classe préparatoire TSI (technologies et sciences industrielles).",
        "Je m'intéresse à l'informatique, à l'intelligence artificielle, à l'électronique, aux systèmes embarqués et à l'automatisation, et surtout à ce que ces technologies peuvent apporter à la santé.",
        "En parallèle de mes études, je gère depuis 2020 mon activité d'auto-entrepreneur, l'atelier de réparation de vélos Le Cyclousain : diagnostic, réparations, relation client et gestion en autonomie.",
      ],
      en: [
        "I am an engineering student in Health Engineering and Technologies at EPISEN, the engineering school of Paris-Est Créteil University (UPEC), after two years of TSI preparatory classes (industrial technology and sciences).",
        "I am interested in software, artificial intelligence, electronics, embedded systems and automation, and above all in what these technologies can bring to healthcare.",
        "Alongside my studies, I have been running my own business since 2020, the bicycle repair workshop Le Cyclousain: diagnosis, repairs, customer relations and day-to-day management.",
      ],
    },
    educationTitle: { fr: "Formation", en: "Education" },
    education: [
      {
        date: "2025–2028",
        title: { fr: "Cycle ingénieur, technologies pour la santé", en: "Engineering degree, Health Engineering and Technologies" },
        place: "EPISEN (UPEC), Créteil",
      },
      {
        date: "2023–2025",
        title: { fr: "Classe préparatoire TSI", en: "TSI preparatory classes (CPGE)" },
        place: { fr: "Lycée Pierre-Paul-Riquet, Saint-Orens-de-Gameville", en: "Lycée Pierre-Paul-Riquet, Saint-Orens-de-Gameville, France" },
      },
    ],
    languagesTitle: { fr: "Langues", en: "Languages" },
    // TODO: langues parlées et niveaux (indispensable pour Erasmus+).
    languages: "TODO: langues parlées et niveaux, par exemple « Français (langue maternelle), anglais (B2) »",
  },

  /* ------------------------------------------------------------------ */
  // from : "cv" ou l'id d'un projet. Les sources s'affichent à droite de chaque compétence.
  // level : "beginner", "intermediate" ou "advanced" ; un niveau TODO reste masqué.
  // pending: true : compétence de l'ancien site absente du CV, masquée tant qu'elle n'est pas confirmée.
  skills: [
    {
      title: { fr: "Langages & scripts", en: "Languages & scripts" },
      items: [
        { name: "Python", from: ["cv"], level: "TODO: valider « intermediate »" },
        { name: "C", from: ["cv"], level: "TODO: valider « intermediate »" },
        { name: "C++ (Arduino, ESP32)", from: ["athletix", "tipe", "robot"], level: "TODO: valider « intermediate »" },
        { name: "Dart / Flutter", from: ["athletix"], level: "TODO: niveau" },
        { name: "PHP", from: ["athletix"], level: "TODO: niveau" },
        { name: "SQL (MySQL / MariaDB)", from: ["athletix"], level: "TODO: valider « beginner »" },
        { name: "JavaScript (Node.js)", from: ["postop"], level: "TODO: niveau" },
        { name: "HTML", from: ["cv", "postop"], level: "TODO: niveau" },
        { name: "Bash", from: ["cv"], level: "TODO: valider « beginner »" },
      ],
    },
    {
      title: { fr: "Systèmes & réseaux", en: "Systems & networks" },
      items: [
        { name: "Linux", from: ["cv"], level: "TODO: valider « beginner »" },
        { name: { fr: "Machines virtuelles", en: "Virtual machines" }, from: ["cv"], level: "TODO: valider « intermediate »" },
        { name: "TCP/IP", from: ["cv"], level: "TODO: valider « intermediate »" },
        { name: "Bluetooth Low Energy (GATT)", from: ["athletix"], level: "TODO: niveau" },
        { name: "Windows Server", from: ["cv"], level: "TODO: valider « intermediate »", pending: true },
        { name: "OSPF, DNS, DHCP", from: ["cv"], level: "TODO: valider « intermediate »", pending: true },
        { name: "Cisco", from: ["cv"], level: "TODO: niveau", pending: true },
      ],
    },
    {
      title: { fr: "Outils", en: "Tools" },
      items: [
        { name: "VS Code", from: ["cv"] },
        { name: "MATLAB", from: ["cv"], level: "TODO: valider « beginner »" },
        { name: "Git / GitHub", from: ["athletix", "postop"], level: "TODO: niveau" },
        { name: "Scrum", from: ["cv", "postop"] },
        { name: { fr: "Merise (MCD, MLD, MCT)", en: "Merise data modelling" }, from: ["athletix"] },
        { name: "PyQt", from: ["cv"], pending: true },
        { name: "NumPy / Matplotlib", from: ["cv"], pending: true },
        { name: "Kanban", from: ["cv"], pending: true },
      ],
    },
    {
      title: { fr: "Électronique & embarqué", en: "Electronics & embedded" },
      items: [
        { name: "Arduino", from: ["tipe", "robot"] },
        { name: "ESP32", from: ["athletix"] },
        { name: { fr: "Capteurs (LDR, infrarouge)", en: "Sensors (LDR, infrared)" }, from: ["tipe", "robot"] },
        { name: { fr: "Servomoteurs, pont en H", en: "Servomotors, H-bridge" }, from: ["tipe", "robot"] },
        { name: { fr: "Prototypage", en: "Prototyping" }, from: ["tipe", "osi"] },
      ],
    },
    {
      title: "Soft skills",
      items: [
        { name: { fr: "Intégration rapide", en: "Quick integration" } },
        { name: { fr: "Observation et analyse", en: "Observation and analysis" } },
        { name: { fr: "Adaptabilité", en: "Adaptability" } },
        { name: { fr: "Sérieux", en: "Reliability" } },
      ],
    },
    {
      title: { fr: "Centres d'intérêt", en: "Interests" },
      items: [
        { name: { fr: "Nouvelles technologies", en: "New technologies" } },
        { name: { fr: "Bricolage", en: "DIY" } },
        { name: { fr: "Boxe", en: "Boxing" } },
        { name: { fr: "Voyages", en: "Travel" } },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  // status : "current" (en cours) ou "done" (terminé). short: true : affichage sur une ligne.
  experience: [
    {
      title: { fr: "Expériences principales", en: "Main experience" },
      items: [
        {
          date: { fr: "juin–juillet 2026", en: "June–July 2026" },
          status: "done",
          title: { fr: "Stage découverte", en: "Discovery internship" },
          org: { fr: "Cabinet médical et dentaire, Bagneux", en: "Medical and dental practice, Bagneux, France" },
          text: "TODO: missions du stage et ce que tu y as observé (2 lignes)",
          tags: [{ fr: "Santé", en: "Healthcare" }],
        },
        {
          date: { fr: "2020 – aujourd'hui", en: "2020 – present" },
          status: "current",
          title: { fr: "Auto-entrepreneur, atelier de réparation de vélos", en: "Self-employed, bicycle repair workshop" },
          org: "Le Cyclousain",
          text: {
            fr: "Activité menée en autonomie à côté des études : diagnostic technique, réparations, relation client et gestion complète.",
            en: "Run independently alongside my studies: technical diagnosis, repairs, customer relations and full management.",
          },
          tags: [{ fr: "Mécanique", en: "Mechanics" }, { fr: "Relation client", en: "Customer relations" }, { fr: "Gestion", en: "Management" }],
        },
        {
          date: { fr: "oct. 2026 – aujourd'hui", en: "Oct. 2026 – present" },
          status: "current",
          title: { fr: "Partenariat SAV", en: "After-sales service partnership" },
          org: "ENGWE",
          text: "TODO: tâches réalisées pour le SAV ENGWE (1 ou 2 lignes) et lien avec Le Cyclousain",
          tags: [{ fr: "SAV", en: "After-sales" }],
        },
      ],
    },
    {
      title: { fr: "Missions et emplois ponctuels", en: "One-off assignments and jobs" },
      short: true,
      items: [
        {
          date: { fr: "2024 – aujourd'hui", en: "2024 – present" },
          status: "current",
          title: { fr: "Missions ponctuelles", en: "One-off assignments" },
          // TODO: confirmer l'orthographe « OrNoirBourbon » (« Or Noir Bourbon » sur l'ancien site).
          org: "OPPIZI · HIVE Technologie GmbH · DELIVERBAG · OrNoirBourbon",
        },
        {
          date: { fr: "été 2025", en: "Summer 2025" },
          status: "done",
          title: { fr: "Intérim, BTP et industrie", en: "Temporary work, construction and industry" },
          org: "La Garonnaise Forage · STGC · MIDI TP",
        },
        {
          date: "2023–2024",
          status: "done",
          title: { fr: "CDD, employé polyvalent fruits et légumes", en: "Fixed-term contracts, fruit and vegetable assistant" },
          org: "Sud Marché 81",
        },
      ],
    },
  ],

  // Le nombre d'associations du bandeau est la longueur de cette liste.
  associationsTitle: { fr: "Associations", en: "Non-profits" },
  associations: [
    {
      date: "TODO: date d'entrée dans l'association",
      status: "current",
      title: { fr: "Membre de TECHSQUAD", en: "Member of TECHSQUAD" },
      org: { fr: "aider les personnes âgées à utiliser la technologie", en: "helping older people use technology" },
    },
    {
      date: "2024–2025",
      status: "done",
      title: { fr: "Bénévole à l'atelier vélo Zinc", en: "Volunteer at the Zinc bicycle workshop" },
      org: "Toulouse",
    },
  ],

  /* ------------------------------------------------------------------ */
  categories: [
    { id: "health", label: { fr: "Santé & data", en: "Health & data" } },
    { id: "web", label: { fr: "Web & business", en: "Web & business" } },
    { id: "eng", label: { fr: "Ingénierie & embarqué", en: "Engineering & embedded" } },
  ],

  // L'ordre du tableau est l'ordre d'affichage ; le numéro proj_XX en découle.
  projects: [
    {
      id: "athletix",
      title: "Athletix-Data",
      category: "health",
      featured: true,
      context: {
        fr: "Projet de groupe EPISEN · février–juin 2026, poursuivi en 2e année",
        en: "EPISEN team project · February–June 2026, continued in second year",
      },
      badge: { kind: "info", text: { fr: "Prototype, brassard simulé", en: "Prototype, simulated armband" } },
      role: {
        fr: "Architecture système : Bluetooth LE (GATT), modèles de données, intégration réseau, brassard simulé, tests",
        en: "System architecture: Bluetooth LE (GATT), data models, network integration, simulated armband, tests",
      },
      summary: {
        fr: "Brassard connecté qui mesure l'activité d'un muscle (EMG) et application de suivi sportif, pensés notamment pour des personnes atteintes de sclérose en plaques.",
        en: "A connected armband that measures muscle activity (EMG) and a fitness-tracking app, designed in particular for people living with multiple sclerosis.",
      },
      note: {
        fr: "Ce n'est pas un dispositif médical. À la date du 14 novembre 2026, le matériel n'était pas encore arrivé : le système tourne sur un brassard simulé qui envoie les mêmes paquets Bluetooth, et rien n'a été testé sur des patients.",
        en: "This is not a medical device. As of 14 November 2026, the hardware had not arrived: the system runs on a simulated armband that sends the same Bluetooth packets, and nothing has been tested on patients.",
      },
      tech: ["Flutter / Dart", "Bluetooth LE", "PHP", "MySQL", "ESP32 (C++)"],
      links: [
        { kind: "code", label: { fr: "Dépôt de l'équipe", en: "Team repository" }, url: "https://github.com/Valentin-Auger-Laboratoire/athletix-data" },
        { kind: "site", label: { fr: "Démo en ligne", en: "Live demo" }, url: "https://valentin-auger-laboratoire.github.io/athletix-data/" },
      ],
      art: [
        "M0 64L3 63L6 66L9 63L12 65L15 62L18 66L21 63L24 66L27 62L30 66L33 62L36 66L39 62L42 66L45 62L48 67L51 61L54 66L57 59L60 69L63 55L66 74L69 57L72 77L75 44L78 84L81 43L84 86L87 35L90 94L93 43L96 84L99 37L102 81L105 51L108 77L111 52L114 73L117 52L120 71L123 57L126 70L129 62L132 66L135 61L138 66L141 62L144 65L147 62L150 65L153 62L156 66L159 62L162 67L165 61L168 66L171 60L174 68L177 58L180 72L183 55L186 77L189 48L192 78L195 36L198 87L201 30L204 96L207 29L210 97L213 30L216 102L219 21L222 92L225 31L228 85L231 39L234 82L237 49L240 77L243 50L246 76L249 59L252 71L255 61L258 68L261 62L264 66L267 61L270 66L273 62L276 65L279 62L282 66L285 63L288 66L291 62L294 66L297 62L300 66L303 62L306 65L309 63L312 65L315 63L318 65",
      ],
      study: {
        context: {
          fr: "Projet de groupe de l'EPISEN. Le brassard associe un capteur musculaire MyoWare 2.0 et un microcontrôleur ESP32-S3, reliés en Bluetooth Low Energy à une application Flutter (Android et web), qui enregistre les séances dans une API PHP et une base MySQL/MariaDB. L'application de l'équipe gère les comptes, les séances en direct avec alertes d'intensité, le suivi de la fatigue, les graphiques de progression, les exports PDF et CSV et les outils RGPD.",
          en: "An EPISEN team project. The armband combines a MyoWare 2.0 muscle sensor and an ESP32-S3 microcontroller, connected over Bluetooth Low Energy to a Flutter app (Android and web) that stores sessions through a PHP API and a MySQL/MariaDB database. The team's app covers accounts, live sessions with intensity alerts, fatigue tracking, progress charts, PDF and CSV exports and GDPR tools.",
        },
        problem: {
          fr: "Comment développer et tester l'application avant de recevoir le matériel, sans devoir tout réécrire à son arrivée ? Il fallait un format d'échange précis, respecté à la fois par le brassard et par l'application.",
          en: "How do you build and test the app before the hardware arrives, without rewriting everything when it does? It required a precise exchange format, followed by both the armband and the app.",
        },
        contribution: {
          fr: [
            "Spécification Bluetooth LE (GATT) : un service dédié, quatre caractéristiques et des paquets de 8 octets envoyés environ 50 fois par seconde, en plus des services standards (batterie, informations de l'appareil).",
            "Modèles de données (MCD, MLD, MCT) et migration SQL : tables des brassards, des calibrations et des résultats EMG.",
            "Brassard simulé en Dart, qui produit les mêmes octets que le vrai, et adaptation de l'écran de séance à la mesure EMG.",
            "API PHP pour enregistrer les séances et les calibrations.",
            "Firmware de test pour ESP32 (faux brassard Bluetooth), écrit mais pas encore essayé sur une carte.",
            "13 tests automatiques : format des paquets, résumé de séance, brassard simulé.",
          ],
          en: [
            "Bluetooth LE (GATT) specification: one dedicated service, four characteristics and 8-byte packets sent about 50 times per second, on top of the standard battery and device information services.",
            "Data models (Merise: conceptual, logical, processing) and SQL migration: armband, calibration and EMG result tables.",
            "Simulated armband in Dart that produces the same bytes as the real one, and adaptation of the session screen to EMG data.",
            "PHP API to store sessions and calibrations.",
            "ESP32 test firmware (fake Bluetooth armband), written but not yet tried on a board.",
            "13 automated tests: packet format, session summary, simulated armband.",
          ],
        },
        figures: [
          {
            kind: "flow",
            title: { fr: "Le chemin des données", en: "The data path" },
            items: [
              { name: "Muscle" },
              { name: "MyoWare 2.0", via: "EMG" },
              { name: "ESP32-S3", via: { fr: "analogique", en: "analog" } },
              { name: { fr: "Application Flutter", en: "Flutter app" }, via: "Bluetooth LE", mine: true },
              { name: { fr: "API PHP", en: "PHP API" }, via: "HTTPS", mine: true },
              { name: "MySQL", via: "SQL", mine: true },
            ],
          },
          {
            kind: "bytes",
            title: { fr: "Un paquet de mesure (8 octets, little-endian)", en: "One measurement packet (8 bytes, little-endian)" },
            items: [
              { hex: "e8 03 00 00", name: { fr: "horodatage", en: "timestamp" }, value: "1000 ms" },
              { hex: "9e 02", name: "RMS", value: "670 mV" },
              { hex: "2a", name: { fr: "intensité", en: "intensity" }, value: "42 % MVC" },
              { hex: "00", name: { fr: "drapeaux", en: "flags" }, value: { fr: "pas d'alerte", en: "no alert" } },
            ],
          },
        ],
        stack: [
          { name: "Bluetooth LE (GATT)", mine: true },
          { name: "Dart / Flutter", mine: true },
          { name: "PHP", mine: true },
          { name: "SQL (MySQL / MariaDB)", mine: true },
          { name: "C++ (ESP32)", mine: true },
          { name: { fr: "Merise (MCD, MLD, MCT)", en: "Merise data modelling" }, mine: true },
          { name: "MATLAB / Simulink" },
          { name: "Python" },
          { name: "CadQuery" },
          { name: "GitHub Actions" },
        ],
        // TODO: valider ces trois résultats (vérifiés dans le dépôt de l'équipe).
        result: {
          fr: [
            "Le firmware final et l'application utilisent ce format Bluetooth ; l'équipe y a ajouté deux caractéristiques en conservant les quatre premières.",
            "Les 13 tests sont relancés par GitHub à chaque envoi de code.",
            "La démo en ligne fonctionne sans serveur, avec le brassard simulé et des données fictives.",
          ],
          en: [
            "The final firmware and the app use this Bluetooth format; the team added two characteristics and kept the original four.",
            "GitHub re-runs the 13 tests on every push.",
            "The online demo runs without a server, with the simulated armband and fictitious data.",
          ],
        },
        team: {
          fr: "Valentin Auger (chef de projet, matériel, application, firmware, boîtier, documentation), Maxence Olivier (simulation Simulink, diagramme de Gantt), Othmen Al Bydeoi (architecture système).",
          en: "Valentin Auger (project lead, hardware, app, firmware, enclosure, documentation), Maxence Olivier (Simulink simulation, Gantt chart), Othmen Al Bydeoi (system architecture).",
        },
        // TODO: captures d'écran (seance.jpg, accueil-demo.jpg, evolution.jpg) après accord de Valentin Auger.
        shots: [],
      },
    },

    {
      id: "tipe",
      title: { fr: "Traqueur solaire automatisé", en: "Automated solar tracker" },
      category: "eng",
      context: {
        fr: "TIPE · classe préparatoire TSI · lycée Pierre-Paul-Riquet · 2024–2025",
        en: "Preparatory-class research project (TIPE) · Lycée Pierre-Paul-Riquet · 2024–2025",
      },
      role: { fr: "Automatisme et programmation", en: "Automation and programming" },
      summary: {
        fr: "Prototype qui oriente un panneau solaire vers la lumière : une carte Arduino compare deux photorésistances et commande un servomoteur.",
        en: "A prototype that turns a solar panel towards the light: an Arduino board compares two photoresistors and drives a servomotor.",
      },
      tech: ["Arduino (C++)", { fr: "Servomoteur MG995", en: "MG995 servomotor" }, { fr: "Capteurs LDR", en: "LDR sensors" }],
      links: [{ kind: "code", label: "GitHub", url: "https://github.com/Othmen94/TIPE-Solar-tracker-" }],
      art: [
        "M30 104A130 92 0 0 1 290 104",
        "M237 28a13 13 0 1 1-26 0a13 13 0 1 1 26 0M224 9V3M243 28h6M238 15l4-4M210 15l-4-4",
        "M118 62l62-34 14 24-62 34zM139 51l14 24M160 39l14 24M125 74l62-34",
        "M156 68v36M134 104h44M20 104h280",
      ],
      study: {
        context: {
          fr: "Projet de recherche de classe préparatoire sur le thème « Transition, Conversion, Transformation ». L'idée vient de la station de recharge présentée aux Olympiades, pour laquelle l'équipe avait ajouté des suiveurs solaires.",
          en: "A preparatory-class research project on the theme \"Transition, Conversion, Transformation\". The idea came from the charging station shown at the Olympiads, to which the team had added solar trackers.",
        },
        problem: {
          fr: "Un panneau fixe capte moins d'énergie qu'un panneau qui suit la course du soleil. Un suivi automatique améliore-t-il la performance énergétique ?",
          en: "A fixed panel collects less energy than one that follows the sun. Does automatic tracking improve energy performance?",
        },
        contribution: {
          fr: [
            "Programme Arduino : lecture de deux photorésistances montées en différentiel et correction de l'angle du panneau.",
            "Automatisme : commande du servomoteur MG995 pour revenir face à la lumière.",
          ],
          en: [
            "Arduino program: reading two photoresistors in a differential set-up and correcting the panel angle.",
            "Automation: driving the MG995 servomotor to face the light again.",
          ],
        },
        stack: ["Arduino Uno (C++)", { fr: "Servomoteur MG995", en: "MG995 servomotor" }, { fr: "Photorésistances (LDR)", en: "Photoresistors (LDR)" }, { fr: "Panneau photovoltaïque", en: "Photovoltaic panel" }],
        result: {
          fr: ["Prototype réalisé, avec un panneau incliné à 45°.", "TODO: résultat mesuré"],
          en: ["Prototype built, with a panel tilted at 45°.", "TODO: measured energy gain on the prototype"],
        },
        shots: [
          { src: "assets/img/projets/tipe-prototype.webp", w: 960, h: 583, alt: { fr: "Prototype posé sur une table : plaque d'essai câblée, servomoteur et petit panneau solaire", en: "Prototype on a table: wired breadboard, servomotor and small solar panel" }, caption: { fr: "Le prototype", en: "The prototype" } },
          { src: "assets/img/projets/tipe-croquis.webp", w: 800, h: 505, alt: { fr: "Croquis à main levée du suiveur : panneau à 45°, capteurs LDR, base tournante, carte Arduino et pont en H", en: "Hand sketch of the tracker: panel at 45°, LDR sensors, rotating base, Arduino board and H-bridge" }, caption: { fr: "Croquis de conception", en: "Design sketch" } },
          { src: "assets/img/projets/tipe-montage.webp", w: 800, h: 566, alt: { fr: "Schéma de montage : carte Arduino Uno, plaque d'essai avec deux photorésistances et servomoteur", en: "Wiring diagram: Arduino Uno board, breadboard with two photoresistors and servomotor" }, caption: { fr: "Schéma de montage", en: "Wiring diagram" } },
        ],
      },
    },

    {
      id: "robot",
      title: { fr: "Robot de combat suiveur de ligne", en: "Line-following combat robot" },
      category: "eng",
      context: {
        fr: "Concours de fin d'année · 1re STI2D · lycée Déodat de Séverac · juin 2022",
        en: "End-of-year competition · Lycée Déodat de Séverac · June 2022",
      },
      badge: { kind: "award", text: { fr: "1re place", en: "1st place" } },
      role: { fr: "Chef d'équipe et programmeur", en: "Team leader and programmer" },
      summary: {
        fr: "Robot autonome conçu en équipe autour d'une carte Arduino : il suit une ligne au sol et corrige sa trajectoire en temps réel.",
        en: "An autonomous robot built as a team around an Arduino board: it follows a line on the floor and corrects its path in real time.",
      },
      tech: ["Arduino (C++)", { fr: "Capteurs infrarouges", en: "Infrared sensors" }, { fr: "Pont en H", en: "H-bridge" }],
      links: [{ kind: "code", label: "GitHub", url: "https://github.com/Othmen94/Robot-suiveur-de-ligne" }],
      art: [
        "M-6 98C70 98 72 34 134 34S200 94 246 94s62-34 80-58",
        "M-6 110C84 110 84 46 134 46S192 106 246 106s74-40 92-64",
        "M114 22h44v36h-44zM106 24h8v10h-8zM106 46h8v10h-8zM158 24h8v10h-8zM158 46h8v10h-8zM128 34h16v12h-16zM136 22v-8",
      ],
      study: {
        context: {
          fr: "Concours de fin d'année de première STI2D (2021–2022) : concevoir, programmer et engager un robot autonome.",
          en: "End-of-year competition in the STI2D technology track (2021–2022): design, program and race an autonomous robot.",
        },
        problem: {
          fr: "Rester stable dans les virages et fiabiliser la détection de la ligne, sans perdre de vitesse.",
          en: "Staying stable in bends and detecting the line reliably, without losing speed.",
        },
        contribution: {
          fr: [
            "Programmation de la logique de suivi et de la correction de trajectoire.",
            "Réglages : seuils des capteurs infrarouges, virages plus fluides, compromis entre vitesse et stabilité.",
            "Coordination de l'équipe : répartition des tâches et suivi de l'avancement.",
          ],
          en: [
            "Programming of the line-following logic and path correction.",
            "Tuning: infrared sensor thresholds, smoother bends, balance between speed and stability.",
            "Team coordination: sharing out the tasks and tracking progress.",
          ],
        },
        stack: ["Arduino (C++)", { fr: "Capteurs infrarouges", en: "Infrared sensors" }, { fr: "Moteurs pilotés par pont en H", en: "Motors driven by an H-bridge" }],
        result: { fr: ["1re place au concours."], en: ["1st place in the competition."] },
        shots: [
          { src: "assets/img/projets/robot-virage.webp", w: 362, h: 452, alt: { fr: "Le robot, coque rouge, suit une ligne claire dans un virage", en: "The robot, with a red shell, follows a light line through a bend" }, caption: { fr: "Dans un virage", en: "Through a bend" } },
          { src: "assets/img/projets/robot-piste.webp", w: 362, h: 452, alt: { fr: "Le robot sur une piste sinueuse vue de dessus", en: "The robot on a winding track seen from above" }, caption: { fr: "Sur la piste", en: "On the track" } },
        ],
      },
    },

    {
      id: "osi",
      title: { fr: "Station de recharge pour vélos électriques", en: "E-bike charging station" },
      category: "eng",
      context: {
        fr: "Olympiades des Sciences de l'Ingénieur · lycée Déodat de Séverac · mai 2023",
        en: "French Engineering Sciences Olympiads · Lycée Déodat de Séverac · May 2023",
      },
      badge: { kind: "award", text: { fr: "Prix de l'hybridation", en: "Hybridisation award" } },
      role: { fr: "En charge de la conception du prototype", en: "In charge of prototype design" },
      summary: {
        fr: "Maquette d'une station de recharge pour vélos électriques, alimentée par des panneaux solaires, imaginée en équipe et présentée aux Olympiades.",
        en: "A scale model of a solar-powered charging station for e-bikes, designed as a team and presented at the Olympiads.",
      },
      tech: [{ fr: "Énergie solaire", en: "Solar energy" }, { fr: "Prototypage", en: "Prototyping" }],
      links: [{ kind: "code", label: "GitHub", url: "https://github.com/Othmen94/OSI-mai2023-Station-de-recharge-v-los-lectriques" }],
      art: [
        "M70 46L250 22v12L70 58zM115 40v12M160 34v12M205 28v12",
        "M84 58v46M236 36v68M40 104h240",
        "M148 88a16 16 0 1 1-32 0a16 16 0 1 1 32 0M208 88a16 16 0 1 1-32 0a16 16 0 1 1 32 0M132 88l14-24h30l16 24M146 64l14 24h-28M160 88l18-32h10M140 64h14",
        "M236 72h-14v10h14",
      ],
      study: {
        context: {
          fr: "Concours national de l'UPSTI pour les lycéens, sur un projet d'équipe innovant en sciences de l'ingénieur.",
          en: "A national competition run by UPSTI for high-school students, based on an innovative team project in engineering sciences.",
        },
        problem: {
          fr: "Concevoir une station de recharge autonome en énergie : panneaux solaires en toiture et suiveurs pour mieux capter la lumière.",
          en: "Designing an energy-independent charging station: rooftop solar panels with trackers to capture more light.",
        },
        contribution: {
          fr: ["Conception du prototype présenté au jury.", "TODO: ce que tu as conçu précisément (structure, électronique, plans…)"],
          en: ["Design of the prototype shown to the jury.", "TODO: what you designed exactly"],
        },
        stack: [{ fr: "Panneaux solaires", en: "Solar panels" }, { fr: "Suiveurs solaires", en: "Solar trackers" }, "TODO: carte et logiciels utilisés"],
        result: {
          fr: ["Prix de l'hybridation, pour la qualité et l'originalité de la maquette."],
          en: ["Hybridisation award (Prix de l'hybridation), for the quality and originality of the model."],
        },
        shots: [
          { src: "assets/img/projets/osi-maquette.webp", w: 478, h: 598, alt: { fr: "Maquette en bois de la station avec panneau solaire en toiture et vélo miniature", en: "Wooden model of the station with a rooftop solar panel and a miniature bike" }, caption: { fr: "La maquette", en: "The model" } },
          { src: "assets/img/projets/osi-electronique.webp", w: 478, h: 598, alt: { fr: "Arrière de la maquette : cartes électroniques sous le panneau solaire", en: "Back of the model: electronic boards under the solar panel" }, caption: { fr: "L'électronique embarquée", en: "The on-board electronics" } },
        ],
      },
    },

    {
      id: "dgtap",
      title: "DGTap",
      category: "web",
      context: { fr: "Produits NFC et QR code pour commerces indépendants", en: "NFC and QR code products for independent shops" },
      role: { fr: "Créateur de la marque", en: "Creator of the brand" },
      summary: {
        fr: "Plaques, porte-clés et cartes de visite NFC + QR code : le client approche son téléphone et arrive sur les avis Google, le menu, les réseaux sociaux ou la réservation. Sans application ni abonnement.",
        en: "NFC + QR code plates, key rings and business cards: customers tap their phone and land on Google reviews, the menu, social networks or bookings. No app, no subscription.",
      },
      tech: ["HTML / CSS / JavaScript", "NFC", "QR code"],
      links: [{ kind: "site", label: "dgtap.fr", url: "https://www.dgtap.fr/" }],
      art: [
        "M70 34h96a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H70a8 8 0 0 1-8-8V42a8 8 0 0 1 8-8z",
        "M76 48h18v18H76zM82 54h6v6h-6zM104 50h10M104 60h18M76 78h60M76 86h40",
        "M190 52a22 22 0 0 1 0 30M202 42a38 38 0 0 1 0 50M214 32a54 54 0 0 1 0 70",
        "M246 20h36a7 7 0 0 1 7 7v74a7 7 0 0 1-7 7h-36a7 7 0 0 1-7-7V27a7 7 0 0 1 7-7zM258 99h12",
      ],
      study: {
        context: {
          fr: "« Le digital de votre commerce, en un simple geste. » DGTap s'adresse aux cafés, restaurants, bars, coiffeurs, barbiers et indépendants.",
          en: "\"Your shop's digital presence in one simple gesture.\" DGTap is aimed at cafés, restaurants, bars, hairdressers, barbers and independent shops.",
        },
        problem: {
          fr: "Chercher une fiche Google, taper l'adresse d'un menu ou retrouver un compte Instagram demande trop d'étapes au client. DGTap les remplace par un geste.",
          en: "Finding a Google listing, typing a menu address or looking up an Instagram account takes customers too many steps. DGTap replaces them with one gesture.",
        },
        contribution: {
          fr: [
            "Création de la marque.",
            "Cartes acryliques NFC pour avis Google et menus digitaux : programmation et installation chez les commerçants.",
            "TODO: rôle exact (conception du site, prospection…)",
          ],
          en: [
            "Creation of the brand.",
            "Acrylic NFC cards for Google reviews and digital menus: programming and installation in shops.",
            "TODO: exact role (website, prospecting…)",
          ],
        },
        stack: ["HTML", "CSS", "JavaScript", "NFC", "QR code", "Open Graph", "WebP"],
        result: {
          fr: [
            "Site en ligne, responsive : comparatif avant/après, gamme de produits, fonctionnement en 4 étapes, FAQ et demande de devis.",
            "TODO: résultats réels (nombre de commerces équipés, etc.)",
          ],
          en: [
            "Live, responsive website: before/after comparison, product range, 4-step process, FAQ and quote requests.",
            "TODO: actual results",
          ],
        },
        // TODO: valider cette capture, prise sur le site public le 25 novembre 2026.
        shots: [
          { src: "assets/img/projets/dgtap-situation.webp", w: 1100, h: 679, alt: { fr: "Section « En situation » du site : un client approche son téléphone, une plaque posée sur un comptoir et une plaque menu", en: "\"In situation\" section of the website: a customer taps a phone, a plate on a counter and a menu plate" }, caption: { fr: "Extrait de dgtap.fr", en: "Excerpt from dgtap.fr" } },
        ],
      },
    },

    {
      id: "skyrise",
      title: "SKYRISE",
      category: "web",
      context: {
        fr: "Boutique en ligne de la marque SKYRISE (marque de mon frère, j'y contribue)",
        en: "Online store of the SKYRISE brand (my brother's brand, I contribute to it)",
      },
      role: { fr: "Contributeur", en: "Contributor" },
      summary: {
        fr: "Vêtements de calisthenics haut de gamme, sous le slogan « Strength in Nature, Built for Stillness. ». Le site présente la marque et propose sa collection, en français et en anglais.",
        en: "High-end calisthenics clothing, under the slogan \"Strength in Nature, Built for Stillness.\" The website presents the brand and offers its collection, in French and English.",
      },
      tech: ["React", "Tailwind CSS", { fr: "API REST", en: "REST API" }],
      // TODO: lien du dépôt, s'il existe et peut être public.
      links: [{ kind: "site", label: { fr: "Voir le site", en: "Visit website" }, url: "https://skyrise-delta.vercel.app/" }],
      art: [
        "M8 104L84 40l34 32 44-54 62 62 26-22 62 46z",
        "M140 45l22 14 16-8 18 4M64 57l20 12 20-10",
        "M276 34a15 15 0 1 1-30 0a15 15 0 1 1 30 0",
      ],
      study: {
        context: {
          fr: "SKYRISE est la marque de mon frère. Le site est une application React, avec une API séparée pour le catalogue, les paiements et les messages.",
          en: "SKYRISE is my brother's brand. The website is a React application, with a separate API for the catalogue, payments and messages.",
        },
        problem: "TODO: besoin de départ de la boutique",
        contribution: { fr: ["TODO: ce que tu fais exactement (développement, design, paiement, stock, marketing…)"], en: ["TODO: what you do exactly"] },
        // TODO: confirmer ces technologies, relevées dans le code public du site.
        stack: ["React", "React Router", "Tailwind CSS", { fr: "API REST", en: "REST API" }],
        // TODO: état réel du site (en ligne, en développement ?). Pages constatées le 25 novembre 2026.
        result: {
          fr: ["Site consultable : catalogue, fiches produit, panier, retours, FAQ et contact, en français et en anglais."],
          en: ["Website available: catalogue, product pages, cart, returns, FAQ and contact, in French and English."],
        },
        // TODO: captures d'écran, avec l'accord de ton frère.
        shots: [],
      },
    },

    {
      id: "postop",
      title: "PostOp Suivi",
      category: "health",
      // TODO: confirmer les dates (2025 sur l'ancien site, code publié en mai 2026).
      context: { fr: "Projet Agile · EPISEN / UPEC · équipe 7 · 2025–2026", en: "Agile project · EPISEN / UPEC · team 7 · 2025–2026" },
      role: "Scrum Master",
      summary: {
        fr: "Application web de suivi à domicile après une opération : questionnaire quotidien, photo de la plaie et alertes pour le médecin, afin de limiter les réhospitalisations.",
        en: "A web app for home follow-up after surgery: daily questionnaire, wound photo and alerts for the doctor, to help avoid readmissions.",
      },
      note: { fr: "Projet pédagogique : ce n'est pas un dispositif médical.", en: "Student project: this is not a medical device." },
      tech: ["Scrum", "JavaScript", "Node.js", "Supabase"],
      links: [],
      art: [
        "M56 24h60a6 6 0 0 1 6 6v72H50V30a6 6 0 0 1 6-6zM72 16h28v14H72zM64 48h44M64 62h44M64 76h28",
        "M140 64h34l8-22 14 46 12-34 6 10h30",
        "M296 64a22 22 0 1 1-44 0a22 22 0 1 1 44 0M274 52v14M274 74v2",
      ],
      study: {
        context: { fr: "Projet Agile mené en équipe à l'EPISEN, en quatre sprints.", en: "An Agile team project at EPISEN, run in four sprints." },
        problem: {
          fr: "Détecter tôt une complication après le retour à domicile, pour réduire les réhospitalisations.",
          en: "Detecting complications early once patients are back home, to reduce readmissions.",
        },
        contribution: {
          fr: ["Scrum Master de l'équipe 7 : Daily Scrum, Sprint Review et rétrospective.", "TODO: contribution au code"],
          en: ["Scrum Master of team 7: Daily Scrum, Sprint Review and Retrospective.", "TODO: your part in the code"],
        },
        stack: ["HTML / CSS / JavaScript", "Node.js (Express)", "Supabase (PostgreSQL)"],
        result: {
          fr: [
            "Un espace patient (questionnaire, photo, messages, planning) et un espace médecin.",
            "Une réponse à risque (douleur, température, fatigue ou aspect de la plaie) crée une alerte pour le médecin.",
          ],
          en: [
            "A patient area (questionnaire, photo, messages, schedule) and a doctor area.",
            "A risky answer (pain, temperature, fatigue or wound appearance) raises an alert for the doctor.",
          ],
        },
        shots: [],
      },
    },
  ],

  /* ------------------------------------------------------------------ */
  ui: {
    title: {
      fr: "Othmen Al Bydeoi | Étudiant ingénieur en technologies pour la santé",
      en: "Othmen Al Bydeoi | Engineering student in health technologies",
    },
    description: {
      fr: "Portfolio d'Othmen Al Bydeoi, étudiant ingénieur à l'EPISEN : projets santé, embarqué et web. Recherche un stage international de 4 mois, mai–août 2027.",
      en: "Portfolio of Othmen Al Bydeoi, engineering student at EPISEN: health, embedded and web projects. Seeking a 4-month international internship, May–Aug 2027.",
    },
    skip: { fr: "Aller au contenu", en: "Skip to content" },
    home: { fr: "retour à l'accueil", en: "back to top" },
    menu: "menu",
    navLabel: { fr: "Navigation principale", en: "Main navigation" },
    nav: {
      accueil: { fr: "accueil", en: "home" },
      profil: { fr: "profil", en: "profile" },
      skills: "skills",
      exp: "exp",
      projets: { fr: "projets", en: "projects" },
      contact: "contact",
    },
    lang: { label: { fr: "Langue", en: "Language" }, changed: { fr: "Site affiché en français", en: "Website displayed in English" } },
    theme: {
      toLight: { fr: "Passer au thème clair", en: "Switch to light theme" },
      toDark: { fr: "Passer au thème sombre", en: "Switch to dark theme" },
      light: { fr: "Thème clair activé", en: "Light theme on" },
      dark: { fr: "Thème sombre activé", en: "Dark theme on" },
    },
    newTab: { fr: "nouvel onglet", en: "new tab" },
    buttons: {
      projects: { fr: "Voir mes projets", en: "See my projects" },
      cv: { fr: "Télécharger mon CV (EN)", en: "Download my résumé (EN)" },
      cvAsk: { fr: "Demander mon CV (EN)", en: "Request my résumé (EN)" },
      cvSubject: { fr: "Demande de CV", en: "Résumé request" },
      contact: { fr: "Me contacter", en: "Contact me" },
    },
    sections: {
      profil: { cmd: "cat about.txt", title: { fr: "Profil", en: "Profile" }, comment: { fr: "parcours et objectif", en: "background and goal" } },
      skills: { cmd: "ls skills/", title: { fr: "Compétences", en: "Skills" }, comment: { fr: "à droite, où je les ai pratiquées", en: "on the right, where I used them" } },
      exp: { cmd: "cat experience.log", title: { fr: "Expérience", en: "Experience" }, comment: { fr: "du plus proche de la santé au plus ponctuel", en: "from closest to healthcare to one-off jobs" } },
      projets: { cmd: "ls projects/", title: { fr: "Projets", en: "Projects" }, comment: { fr: "santé, ingénierie, web", en: "health, engineering, web" } },
      contact: { cmd: "./contact.sh", title: { fr: "Contact", en: "Contact" }, comment: { fr: "stage international, 4 mois, mai–août 2027", en: "international internship, 4 months, May–August 2027" } },
    },
    skillCv: "cv",
    levels: {
      beginner: { fr: "débutant", en: "beginner" },
      intermediate: { fr: "intermédiaire", en: "intermediate" },
      advanced: { fr: "avancé", en: "advanced" },
    },
    status: { current: { fr: "En cours", en: "Ongoing" }, done: { fr: "Terminé", en: "Completed" } },
    filters: {
      label: { fr: "Filtrer les projets", en: "Filter projects" },
      all: { fr: "Tous", en: "All" },
      one: { fr: "1 projet affiché", en: "1 project shown" },
      many: { fr: "{n} projets affichés", en: "{n} projects shown" },
    },
    project: {
      role: { fr: "rôle", en: "role" },
      tech: { fr: "Technologies", en: "Technologies" },
      open: { fr: "Voir l'étude de cas", en: "View case study" },
    },
    study: {
      title: { fr: "Étude de cas", en: "Case study" },
      context: { fr: "Contexte", en: "Context" },
      problem: { fr: "Problème", en: "Problem" },
      contribution: { fr: "Ma contribution", en: "My contribution" },
      stack: { fr: "Stack", en: "Stack" },
      mine: { fr: "utilisé dans ma partie", en: "used in my part" },
      team: { fr: "reste de l'équipe", en: "rest of the team" },
      flowMine: { fr: "en vert, les liaisons que j'ai spécifiées", en: "in green, the links I specified" },
      result: { fr: "Résultat", en: "Result" },
      credits: { fr: "Équipe", en: "Team" },
      shots: { fr: "Captures", en: "Pictures" },
      links: { fr: "Liens", en: "Links" },
      close: { fr: "Fermer", en: "Close" },
      prev: { fr: "Projet précédent", en: "Previous project" },
      next: { fr: "Projet suivant", en: "Next project" },
    },
    contact: {
      intro: {
        fr: "Vous proposez un stage en santé numérique, en informatique ou en systèmes embarqués entre mai et août 2027 ? Écrivez-moi.",
        en: "Do you offer an internship in digital health, software or embedded systems between May and August 2027? Write to me.",
      },
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      profileLink: { fr: "voir le profil", en: "view profile" },
    },
    form: {
      title: "send_message()",
      name: { fr: "Nom", en: "Name" },
      email: "E-mail",
      subject: { fr: "Sujet", en: "Subject" },
      message: "Message",
      trap: { fr: "Ne pas remplir", en: "Leave empty" },
      optional: { fr: "facultatif", en: "optional" },
      send: { fr: "$ envoyer --message", en: "$ send --message" },
      sending: { fr: "envoi en cours…", en: "sending…" },
      ok: { fr: "Message envoyé. Merci, je vous réponds par e-mail.", en: "Message sent. Thank you, I will reply by email." },
      fail: { fr: "L'envoi a échoué. Vous pouvez m'écrire directement :", en: "Sending failed. You can write to me directly:" },
      mailto: { fr: "Votre messagerie va s'ouvrir avec le message prêt à envoyer. Si rien ne se passe, écrivez-moi à", en: "Your mail app will open with the message ready to send. If nothing happens, write to me at" },
      defaultSubject: { fr: "Message depuis le portfolio", en: "Message from the portfolio" },
      errors: {
        required: { fr: "Ce champ est obligatoire.", en: "This field is required." },
        email: { fr: "Adresse e-mail invalide (exemple : nom@domaine.fr).", en: "Invalid email address (example: name@domain.com)." },
      },
    },
    terminal: {
      title: "othmen@portfolio: ~",
      label: { fr: "Mini terminal : tapez une commande, par exemple help", en: "Mini terminal: type a command, for example help" },
      log: { fr: "Réponses du terminal", en: "Terminal output" },
      hint: { fr: "tapez help", en: "type help" },
      run: { fr: "exécuter", en: "run" },
      help: {
        fr: [
          "projets          liste des projets",
          "open <nom>       ouvre une étude de cas",
          "profil, skills, exp, contact",
          "cv               mon CV en anglais",
          "lang fr | en     change la langue",
          "theme            clair / sombre",
          "clear            efface l'écran",
        ],
        en: [
          "projects         list of projects",
          "open <name>      opens a case study",
          "profile, skills, exp, contact",
          "cv               my résumé in English",
          "lang fr | en     changes the language",
          "theme            light / dark",
          "clear            clears the screen",
        ],
      },
      notFound: { fr: "commande introuvable : {c}. Tapez help.", en: "command not found: {c}. Type help." },
      noProject: { fr: "projet introuvable. Noms possibles : {c}", en: "project not found. Available names: {c}" },
      going: { fr: "ouverture de ~/{c}", en: "opening ~/{c}" },
      cvSoon: { fr: "CV bientôt en ligne : demandez-le avec le formulaire de contact.", en: "Résumé coming soon: ask for it with the contact form." },
      cvOk: { fr: "téléchargement du CV", en: "downloading the résumé" },
    },
    footer: {
      hosting: {
        fr: "Site statique sans cookie ni traceur, hébergé par Vercel. Les messages du formulaire passent par Formspree et servent uniquement à vous répondre.",
        en: "Static website, no cookies or trackers, hosted by Vercel. Form messages go through Formspree and are only used to reply to you.",
      },
      top: { fr: "haut de page", en: "back to top" },
    },
    noscript: {
      fr: "Le détail des projets a besoin de JavaScript.",
      en: "Project details need JavaScript.",
    },
  },
};
