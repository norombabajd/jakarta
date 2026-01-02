import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	// Fetch posts from all three collections
	const personalPosts = await getCollection('personal');
	const technologyPosts = await getCollection('technology');
	const academicsPosts = await getCollection('academics');

	// Combine all posts and sort by date
	const posts = [...personalPosts, ...technologyPosts, ...academicsPosts].sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.collection}/${post.id}/`,
		})),
	});
}
