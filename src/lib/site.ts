import { getCollection } from 'astro:content';

export const SITE = {
  title: 'adamantmc',
  author: 'Adam',
  description: 'Notes on software engineering, and cool stuff I stumbled upon while writing it.',
  github: 'https://github.com/adamantmc',
  repo: 'https://github.com/adamantmc/blog',
};

/** Prefix an internal path with the configured base (e.g. "/blog"). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, style: 'long' | 'short' = 'long'): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** Rough reading time in minutes, ignoring fenced code blocks. */
export function readingTime(markdown = ''): number {
  const prose = markdown.replace(/```[\s\S]*?```/g, '');
  const words = prose.split(/\s+/).filter((w) => /\w{2,}/.test(w)).length;
  return Math.max(1, Math.round(words / 230));
}
