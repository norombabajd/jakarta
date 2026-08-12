/**
 * Wrap each level-one heading and its following content in a semantic section.
 * Content before the first level-one heading becomes an overview section.
 */
export default function remarkNowSections() {
	return (tree, file) => {
		const filePath = String(file.path ?? file.history?.[0] ?? '');
		if (!filePath.includes('/content/now/posts/')) return;

		const sections = [];
		let currentSection;

		for (const node of tree.children) {
			if (node.type === 'heading' && node.depth === 1) {
				currentSection = createSection(false);
				sections.push(currentSection);
			} else if (!currentSection) {
				currentSection = createSection(true);
				sections.push(currentSection);
			}

			currentSection.children.push(node);
		}

		tree.children = sections;
	};
}

function createSection(intro) {
	return {
		type: 'nowSection',
		data: {
			hName: 'section',
			hProperties: {
				className: intro ? ['now-section', 'now-section--intro'] : ['now-section'],
			},
		},
		children: [],
	};
}
