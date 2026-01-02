# Jakarta

A neobrutalist blog theme for Astro, created by John Daniel Norombaba.

Built with [Astro](https://astro.build) and developed with assistance from Claude Sonnet 4.5.

## Features

- ✅ Neobrutalist design with bold borders and high contrast
- ✅ Multiple content collections (Personal, Technology, Academics, Now)
- ✅ Flexible sorting (by year and by tag)
- ✅ SEO-friendly with comprehensive Open Graph protocol support
- ✅ Responsive design with Tailwind CSS
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ /now page inspired by [Derek Sivers' now page movement](https://nownownow.com/about)

## Project Structure

```text
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── content/
│   │   ├── personal/
│   │   ├── technology/
│   │   ├── academics/
│   │   └── now/
│   ├── layouts/
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── posts/
│   │   ├── personal/
│   │   ├── technology/
│   │   ├── academics/
│   │   ├── now/
│   │   └── about/
│   ├── styles/
│   │   └── global.css
│   ├── consts.ts
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Collections

Jakarta uses Astro's content collections to organize blog posts into four categories:

- **Personal** - Birthdays, vacations, and everyday life
- **Technology** - Consumer electronics, technical things, etc.
- **Academics** - Everything graduate school
- **Now** - What I'm doing now, brief and short updates

Each collection supports:
- Title, date, and description
- Optional cover images
- Tags for categorization
- Markdown/MDX content

## Configuration

Edit `src/consts.ts` to customize your site:

```typescript
// Site metadata
export const SITE_TITLE = 'Your Site Title';
export const SITE_DESCRIPTION = 'Your site description';

// Profile information
export const PROFILE_NAME = 'Your Name';
export const PROFILE_BIO = 'Your bio';

// Social links
export const GITHUB_HANDLE = 'yourusername';
export const THREADS_HANDLE = 'yourusername';

// Collection descriptions
export const PERSONAL_DESCRIPTION = 'Your personal collection description';
export const ACADEMICS_DESCRIPTION = 'Your academics collection description';
export const TECHNOLOGY_DESCRIPTION = 'Your technology collection description';
export const NOW_DESCRIPTION = 'Your now page description';
```

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Creating Posts

Posts are created as Markdown or MDX files in the appropriate collection directory under `src/content/`.

Example frontmatter:

```yaml
---
title: 'Your Post Title'
date: 2025-12-25
description: 'A brief description of your post'
tags: ['tag1', 'tag2']
cover: ./images/cover.jpg # optional
---

Your post content here...
```