# Jakarta

A neobrutalist blog theme for Astro, created by John Daniel Norombaba.

Running on [Astro](https://astro.build). Built with assistance from Claude and Codex.

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

### Now sections

Now posts are divided into neobrutalist cards using level-one Markdown headings. For example, `# Academics` and `# Work` each start a new card. Lower-level headings such as `## Current project` remain inside their parent card. Content before the first level-one heading is displayed as an overview card.

A copy-ready example is available at [`examples/now-post.md`](examples/now-post.md).

Watching, listening, and reading entries can be added as nested frontmatter. Each
entry renders as a compact media row after the Markdown sections:

```yaml
watching:
  - title: 'Movie or series title'
    creator: 'Director, creator, or studio'
    description: 'A short review or note about what stood out.' # optional
    link: 'https://example.com/movie' # optional
    cover: './img/movie-cover.jpg' # optional, relative to the post
    attribution: 'https://en.wikipedia.org/wiki/File:Example_movie_poster.jpg' # optional
listening:
  - title: 'Album or song title'
    artist: 'Artist name'
    description: 'A short review or note about what stood out.' # optional
    link: 'https://example.com/album' # optional
    cover: './img/album-cover.jpg' # optional, relative to the post
    attribution: 'https://en.wikipedia.org/wiki/File:Example_album_cover.jpg' # optional
reading:
  - title: 'Book or article title'
    creator: 'Author name'
    description: 'A short review or note about what stood out.' # optional
    link: 'https://example.com/book' # optional
    cover: './img/book-cover.jpg' # optional, relative to the post
    attribution: 'https://en.wikipedia.org/wiki/File:Example_book_cover.jpg' # optional
```

Cover paths are relative to the post. Every entry renders as a compact row with
an optional thumbnail beside its text. Listening thumbnails are square, while
Watching and Reading use a portrait poster or book-cover ratio. Artwork is
fitted inside its frame without cropping or enlarging low-resolution sources.
Items with an `attribution` URL are collected into a small attribution card
beneath all media sections. Source labels are derived from each URL, including
Wikipedia, Wikimedia Commons, TMDB, and other domains.

Structured media fields:

| Field | Required | Purpose |
| :---- | :------: | :------ |
| `title` | Yes | Item title displayed in the row |
| `creator` | No | Director, author, studio, platform, or other creator label |
| `artist` | No | Artist label for listening entries; takes precedence over `creator` |
| `description` | No | A lighter, italic review or personal note |
| `link` | No | Makes the entire item row link to an external page |
| `cover` | No | Local image path; rendered as a small, non-draggable thumbnail |
| `attribution` | No | Image-source URL collected in the attribution card |

Always close the YAML frontmatter with a second `---` before beginning Markdown
content.

```md
---
title: 'August 2026'
date: 2026-08-10
---

An optional introduction appears in an overview card.

# Academics

Updates about school and research.

## Current project

Nested headings remain in the Academics card.

# Watching

<!-- After adding the file, uncomment this line:
![A collage of what I am watching](../img/august-2026/watching.jpg)
-->
```

Images use ordinary Markdown syntax and local files, so no API keys or external metadata services are required. Image paths are resolved relative to the post file.

### Content submodule workflow

`src/content` is a separate Git repository. Publish content changes first, then
publish the parent theme repository so its submodule pointer references a commit
that already exists remotely:

```sh
git -C src/content add now
git -C src/content commit -m "Add latest now update"
git -C src/content push origin main

git add src/content
git commit -m "Update content submodule"
git push origin main
```

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

// Homepage collection visibility
// Empty collection routes remain available when hidden from the homepage.
export const HIDE_EMPTY_COLLECTIONS = true;
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
