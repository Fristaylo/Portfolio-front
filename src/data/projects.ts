export interface Project {
	id: string;
	title: string;
	description: string;
	fullDescription?: string;
	imageUrl?: string;
	link?: string;
	technologies: string[];
}

export const projects: Project[] = [
	{
		id: 'yummyanime',
		title: 'YummyAnime',
		description: 'Популярный сайт для просмотра аниме - YummyAnime',
		fullDescription:
			'Здесь может быть более подробное описание с деталями реализации, использованными технологиями и особенностями проекта.',
		imageUrl: '',
		link: 'https://yummyani.me',
		technologies: ['React', 'TypeScript', 'SCSS', 'Vite', 'Docker'],
	},
	{
		id: 'yamkatv',
		title: 'YamkaTV',
		description: 'Упрощенный сайт для просмотра аниме - YamkaTV',
		fullDescription:
			'Этот проект демонстрирует другие аспекты моих навыков, возможно, с использованием другого стека технологий.',
		imageUrl: '',
		link: 'https://example.com/another-project',
		technologies: ['React', 'TypeScript', 'SCSS', 'Vite'],
	},
	{
		id: 'portfolio-website',
		title: 'Сайт-Портфолио',
		description: 'Этот сайт, который вы сейчас просматриваете.',
		fullDescription:
			'Разработан для демонстрации моих навыков веб-разработки, включая Vue.js, TypeScript, маршрутизацию и управление состоянием.',
		imageUrl: '',
		link: 'https://github.com/your-username/portfolio-front',
		technologies: [
			'Vue.js',
			'TypeScript',
			'Vue Router',
			'Vite',
			'SCSS',
			'Tailwindcss',
		],
	},
];
