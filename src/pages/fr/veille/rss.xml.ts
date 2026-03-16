import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
  const entries = (await getCollection('veille', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'Veille technologique — V. Spirine',
    description: 'Publications de veille technologique.',
    site: context.site ?? 'http://localhost:4321',
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/fr/veille/${entry.id}/`
    }))
  });
};
