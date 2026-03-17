# Portfolio MDX + shadcn (Astro)

Site portfolio prêt à remplir où **chaque page est un fichier MDX**.

## Stack

- Astro
- MDX
- React islands
- shadcn-style components (base + forms + table + media examples)

## Démarrer

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Thèmes

Le sélecteur en header propose les 4 thèmes Catppuccin: **Latte, Frappé, Macchiato, Mocha**.

## Workflow contenu (sans prise de tête)

Le menu est autogénéré par dossiers:

- `src/content/pages/fr/presentation/*`
- `src/content/pages/fr/veille/*`

Donc pour ajouter une page:

1. Crée `mon-fichier.mdx` dans le dossier voulu.
2. Ajoute le frontmatter:

```md
---
title: Mon titre
order: 10
---
```

3. Écris ton contenu.

## Puis-je écrire juste du texte en MDX ?

Oui, totalement. Tu peux rester en **Markdown pur**:

```md
# Titre

Paragraphe normal.

- Liste
- Liste
```

Tu ajoutes des composants (Button/Card/Tabs...) uniquement quand tu veux enrichir une page.
Aucun besoin de mettre des `<div>` partout.

## Utiliser les composants dans MDX

Exemple:

```mdx
import { Button } from '../../../components/ui/button';

<Button>Cliquer</Button>
```

Pour composants interactifs (Tabs/Accordion), ajoute `client:load`.
