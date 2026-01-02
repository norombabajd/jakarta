import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = ({ image }: { image: any }) =>
	z.object({
		title: z.string(),
		date: z.coerce.date(),
		lastUpdated: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
		cover: image().optional(),
		description: z.string().default(""),
	});

const personal = defineCollection({
	loader: glob({ base: './src/content/personal/posts', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

const technology = defineCollection({
	loader: glob({ base: './src/content/technology/posts', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

const academics = defineCollection({
	loader: glob({ base: './src/content/academics/posts', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

const now = defineCollection({
	loader: glob({ base: './src/content/now/posts', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

export const collections = { personal, technology, academics, now };
