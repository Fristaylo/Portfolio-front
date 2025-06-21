export interface Skill {
	id: string;
	icon: string; // Название иконки SVG
	title: string;
	description: string;
	level: number; // Уровень навыка в процентах
}

export const skills: Skill[] = [
	{
		id: 'figmat',
		icon: 'home',
		title: 'Figma',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 90,
	},
	{
		id: 'html',
		icon: 'home',
		title: 'HTML',
		description:
			'Это язык разметки, который позволяет создавать структуру веб-страниц, используя теги и элементы.',
		level: 90,
	},
	{
		id: 'css',
		icon: 'home',
		title: 'CSS',
		description:
			'Язык стилей, используемый для описания внешнего вида документа, написанного на HTML.',
		level: 70,
	},
	{
		id: 'sass',
		icon: 'home',
		title: 'SASS',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 70,
	},
	{
		id: 'tailwind',
		icon: 'home',
		title: 'Tailwind',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 30,
	},
	{
		id: 'react',
		icon: 'home',
		title: 'React',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 30,
	},
	{
		id: 'vue',
		icon: 'home',
		title: 'VUE',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 15,
	},
	{
		id: 'javascript',
		icon: 'home',
		title: 'JavaScript',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 10,
	},
	{
		id: 'typescript',
		icon: 'home',
		title: 'Typescript',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 20,
	},
	{
		id: 'vite',
		icon: 'home',
		title: 'Vite',
		description:
			'Популярный язык программирования, используемый для создания интерактивных веб-страниц.',
		level: 40,
	},
];
