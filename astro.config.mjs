// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Served from GitHub Pages at https://blog.adamantmc.gr/ (custom domain, see public/CNAME)
export default defineConfig({
  site: 'https://blog.adamantmc.gr',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      // Mermaid blocks are rendered client-side instead (see src/components/Mermaid.astro)
      excludeLangs: ['mermaid', 'math'],
    },
    shikiConfig: {
      themes: {
        dark: 'github-dark-default',
        light: 'github-light-default',
      },
      // Colors come from CSS variables, switched by [data-theme] in global.css
      defaultColor: false,
    },
  },
});
