import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';

export async function GET(context) {
	const academicsPosts = await getCollection('academics');

	const posts = academicsPosts.sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

	return rss({
		title: `${SITE_TITLE} - Academics`,
		description: 'Academic writings, coursework reflections, and research',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.collection}/${post.id}/`,
		})),
	});
}
