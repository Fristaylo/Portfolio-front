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
		technologies: ['react', 'typescript', 'sass', 'vite', 'docker'],
	},
	{
		id: 'yamkatv',
		title: 'YamkaTV',
		description: 'Упрощенный сайт для просмотра аниме - YamkaTV',
		fullDescription:
			'Этот проект демонстрирует другие аспекты моих навыков, возможно, с использованием другого стека технологий.',
		imageUrl: '',
		link: 'https://yamka.tv',
		technologies: ['react', 'typescript', 'sass', 'vite'],
	},
	{
		id: 'agoncharenko',
		title: 'AGoncharenko',
		description: 'Сайт-партфолио, который вы сейчас просматриваете.',
		fullDescription:
			'Разработан для демонстрации моих навыков веб-разработки, включая Vue.js, TypeScript, маршрутизацию и управление состоянием.',
		imageUrl: '',
		link: 'https://agoncharenko.dev',
		technologies: ['vue', 'typescript', 'nuxt', 'vite', 'sass', 'tailwind'],
	},
];
