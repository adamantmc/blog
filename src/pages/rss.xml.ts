import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, url, getPosts } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: new URL(url('/'), context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: url(`/${post.id}/`),
    })),
  });
}
