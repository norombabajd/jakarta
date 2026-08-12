// @ts-check

import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import remarkNowSections from './src/remark-now-sections.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({ remarkPlugins: [remarkNowSections] }),
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
