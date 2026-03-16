import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import catppuccin from '@catppuccin/starlight';

export default defineConfig({
  site: 'https://portfolio.local',
  integrations: [
    react(),
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
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/' }],
      sidebar: [
        {
          label: 'Presentation',
          items: [
            { label: 'À propos', link: '/presentation/a-propos/' },
            { label: 'Parcours', link: '/presentation/parcours/' },
            { label: 'Projets', link: '/presentation/projets/' },
            { label: "Exemples d'éléments", link: '/presentation/exemples-elements/' },
            { label: 'Documents', link: '/presentation/documents/' }
          ]
        },
        {
          label: 'Veille',
          items: [
            { label: 'Publications', link: '/veille/' },
            { label: 'Flux RSS', link: '/veille/rss.xml' }
          ]
        }
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/TopHeader.astro'
      },
      markdown: {
        headingLinks: false
      },
      plugins: [
        catppuccin({
          dark: { flavor: 'mocha', accent: 'blue' },
          light: { flavor: 'latte', accent: 'blue' }
        })
      ]
    }),
    mdx()
  ]
});
