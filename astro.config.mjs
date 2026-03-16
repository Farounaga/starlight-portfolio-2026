import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import catppuccin from '@catppuccin/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Portfolio — V. Spirine',
      description: 'Portfolio personnel en français avec une section présentation et une veille technologique.',
      defaultLocale: 'fr',
      locales: {
        fr: {
          label: 'Français',
          lang: 'fr'
        }
      },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/' }
      ],
      sidebar: [
        {
          label: 'Presentation',
          items: [
            { label: 'À propos', link: '/fr/presentation/a-propos/' },
            { label: 'Parcours', link: '/fr/presentation/parcours/' },
            { label: 'Projets', link: '/fr/presentation/projets/' },
            { label: "Exemples d'éléments", link: '/fr/presentation/exemples-elements/' },
            { label: 'Documents', link: '/fr/presentation/documents/' }
          ]
        },
        {
          label: 'Veille',
          items: [
            { label: 'Introduction', link: '/fr/veille/introduction/' },
            { label: 'Journal', link: '/fr/veille/journal/' },
            { label: 'Ressources', link: '/fr/veille/ressources/' }
          ]
        }
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/TopHeader.astro'
      },
      plugins: [
        catppuccin({
          dark: { flavor: 'mocha', accent: 'lavender' },
          light: { flavor: 'latte', accent: 'blue' }
        })
      ]
    }),
    mdx()
  ]
});
