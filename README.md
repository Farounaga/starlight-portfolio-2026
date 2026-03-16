# Portfolio Starlight (fr)

Base minimaliste d'un portfolio/documentation avec **Astro + Starlight + MDX** et thème **Catppuccin**.

## Prérequis

- Node.js 22.12+
- npm 10+

## Lancer en développement

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:4321`.

## Build de production

```bash
npm run build
```

Les fichiers statiques sont générés dans `dist/`.

## Prévisualiser le build

```bash
npm run preview
```

## Vérification de types et contenu

```bash
npm run check
```

## Utiliser le flux RSS de veille

La section veille publie un flux RSS disponible ici :

- En local : `http://localhost:4321/fr/veille/rss.xml`
- En production : `https://votre-domaine/fr/veille/rss.xml`

### Comment s'abonner

1. Copie l'URL du flux.
2. Colle-la dans ton lecteur RSS (Feedly, Inoreader, FreshRSS, etc.).
3. Tu recevras automatiquement les nouvelles publications de veille.

### Vérifier rapidement que le flux fonctionne

En local, lance le site puis teste :

```bash
curl http://localhost:4321/fr/veille/rss.xml
```

Tu dois voir un XML avec les items de la collection `src/content/veille/`.
