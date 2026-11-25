# Portfolio d'Othmen Al Bydeoi

Site statique bilingue (FR / EN) : HTML, CSS et JavaScript, sans framework et sans étape de build.
En ligne : https://www.xyzdesign.xyz/

## Lancer le site en local

```bash
python -m http.server 8000
```

Puis ouvrir http://localhost:8000. Ouvrir `index.html` par double-clic fonctionne aussi.

Adresses utiles :

| Adresse | Effet |
|---|---|
| `/?lang=en` ou `/?lang=fr` | force la langue (pratique pour un recruteur) |
| `/#etude-athletix` | ouvre directement une étude de cas |
| `/?todo` | affiche sur la page tout ce qui reste à compléter |

## Structure

```
index.html              structure de la page, métadonnées, textes visibles avant le JavaScript
assets/css/style.css    styles, thèmes sombre et clair
assets/js/data.js       toutes les données : textes FR/EN, projets, expériences, compétences
assets/js/main.js       affichage, langue, thème, filtres, études de cas, formulaire, mini terminal
assets/img/             photo, favicon, image de partage (og.png), images des projets (WebP)
assets/fonts/           JetBrains Mono, auto-hébergée (licence OFL.txt)
assets/cv/              CV en anglais, à déposer
vercel.json             en-têtes de sécurité, cache, redirection de l'ancien CV
.vercelignore           fichiers du dépôt qui ne sont pas mis en ligne
robots.txt, sitemap.xml référencement
```

## Ajouter un projet

Ajouter un objet dans le tableau `projects` de `assets/js/data.js`. Rien d'autre à modifier : le numéro `proj_XX`, les filtres et la statistique du haut de page se mettent à jour seuls.

```js
{
  id: "monprojet",                       // lettres, chiffres, tirets ; sert au nom proj_08.monprojet
  title: { fr: "Mon projet", en: "My project" },
  category: "eng",                       // "health", "web" ou "eng"
  context: { fr: "Cadre · dates", en: "Setting · dates" },
  badge: { kind: "award", text: { fr: "1er prix", en: "1st prize" } },   // facultatif ; "award" ou "info"
  role: { fr: "Mon rôle", en: "My role" },
  summary: { fr: "Deux ou trois lignes.", en: "Two or three lines." },
  note: { fr: "Avertissement.", en: "Disclaimer." },                     // facultatif
  tech: ["Python", "Arduino"],
  links: [
    { kind: "code", label: "GitHub", url: "https://github.com/…" },
    { kind: "site", label: { fr: "Voir le site", en: "Visit website" }, url: "https://…" },
  ],
  study: {
    context: { fr: "…", en: "…" },
    problem: { fr: "…", en: "…" },
    contribution: { fr: ["…", "…"], en: ["…", "…"] },
    stack: ["Python", { name: "C++", mine: true }],   // mine: true = utilisé dans ma partie
    result: { fr: ["…"], en: ["…"] },
    team: { fr: "…", en: "…" },                       // facultatif
    shots: [
      { src: "assets/img/projets/photo.webp", w: 960, h: 600, alt: { fr: "…", en: "…" }, caption: { fr: "…", en: "…" } },
    ],
  },
},
```

À savoir :

- L'ordre du tableau est l'ordre d'affichage.
- `featured: true` affiche une carte pleine largeur (Athletix-Data actuellement).
- `art` (facultatif) est le dessin de la carte : une liste de tracés SVG dans un cadre de 320 × 120. Sans `art`, un motif par défaut s'affiche.
- Un texte identique dans les deux langues s'écrit directement `"…"`.
- **Un texte qui commence par `TODO` n'est jamais montré aux visiteurs.** Remplacer le texte suffit à le faire apparaître.
- `w` et `h` doivent être les dimensions réelles de l'image. Préférer le WebP, 1100 px de large au maximum.

## Autres modifications courantes

| Je veux… | Où |
|---|---|
| publier mon CV | déposer `assets/cv/CV_Othmen_AL_BYDEOI_EN.pdf` **sans téléphone, adresse ni âge**, puis `site.cv.ready: true` dans `data.js` |
| afficher un niveau de compétence | `level: "beginner"`, `"intermediate"` ou `"advanced"` sur la compétence |
| afficher une compétence en attente | supprimer `pending: true` |
| changer l'e-mail, LinkedIn ou GitHub | `site` dans `data.js`, et les mêmes liens dans `index.html` (contact, formulaire, JSON-LD) |
| changer l'adresse d'envoi du formulaire | `FORM_ENDPOINT` en haut de `main.js` ; `""` ouvre la messagerie du visiteur |
| changer la disponibilité | `hero.badge`, `hero.pitch`, `hero.facts`, `site.availableFrom` et `ui` dans `data.js` ; les mêmes textes et les balises `og:` dans `index.html` |

Les textes français présents dans `index.html` (accueil, titres) s'affichent avant le JavaScript ; `data.js` les remplace ensuite. Modifier les deux pour qu'ils restent identiques.

Le petit script en une ligne dans le `<head>` évite un flash de mauvais thème. `vercel.json` l'autorise par son empreinte `sha256` : si ce script change, il faut y mettre la nouvelle empreinte (affichée dans la console du navigateur).

## Déployer sur Vercel

Le projet Vercel est relié au dépôt GitHub : chaque envoi sur `main` met le site en ligne, chaque envoi sur une autre branche crée un aperçu.

```bash
git push -u origin refonte-portfolio   # crée un aperçu
```

Réglages Vercel : *Framework Preset* « Other », aucune commande de build, dossier de sortie vide (racine).

Vérifier après la mise en ligne que `/CV-Alternance.pdf` redirige vers l'accueil.
