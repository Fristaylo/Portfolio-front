<script setup lang="ts">
import Project from '../components/Project.vue';
import { projects } from '../data/projects';
</script>

<template>
	<div class="p-4">
		<h2 class="text-3xl mb-5 font-bold text-center">Проекты в работе</h2>

		<div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
			<Project
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</div>
</template>
