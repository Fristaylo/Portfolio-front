<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { projects, type Project } from '../data/projects';
import Image from '../components/Image.vue';

const route = useRoute();
const projectId = ref(route.params.projectId as string);
const projectData = ref<Project | null>(null);

const fetchProjectData = (id: string) => {
	projectData.value = projects.find((project) => project.id === id) || null;
	if (!projectData.value) {
		console.error('Проект с ID', id, 'не найден');
	}
};

fetchProjectData(projectId.value);

watch(
	() => route.params.projectId,
	(newProjectId) => {
		projectId.value = newProjectId as string;
		fetchProjectData(projectId.value);
	},
);
</script>

<template>
	<Block>
		<div v-if="projectData">
			<h2 class="text-2xl mb-5 font-bold">{{ projectData.title }}</h2>
			<p class="mb-3">{{ projectData.description }}</p>
			<p v-if="projectData.fullDescription" class="mb-3">
				{{ projectData.fullDescription }}
			</p>

			<Image
				:src="projectData.imageUrl"
				:alt="projectData.title"
				class="mb-3 max-w-full h-auto min-h-80 rounded-lg shadow-md"
			/>

			<p class="mb-3">
				<span class="font-semibold">Технологии:</span>
				{{ projectData.technologies.join(', ') }}
			</p>
			<a
				v-if="projectData.link"
				:href="projectData.link"
				target="_blank"
				class="text-blue-500 hover:underline"
			>
				Посмотреть проект
			</a>
		</div>
	</Block>
</template>
