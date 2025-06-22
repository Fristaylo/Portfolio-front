import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import ResumePage from '../pages/ResumePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import SkillsPage from '../pages/SkillsPage.vue';
import SkillPage from '../pages/SkillPage.vue';

const routes = [
	{ path: '/', name: 'Home', component: HomePage },
	{ path: '/projects', name: 'Projects', component: ProjectsPage },
	{
		path: '/projects/:projectId',
		name: 'project',
		component: ProjectPage,
	},
	{ path: '/resume', name: 'Resume', component: ResumePage },
	{ path: '/contact', name: 'Contact', component: ContactPage },
	{ path: '/skills', name: 'Skills', component: SkillsPage },
	{
		path: '/skill/:skillId',
		name: 'skill',
		component: SkillPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
