<script setup lang="ts">
import { projects } from '../../src/data/projects';
import PageTitle from '../..//src/components/PageTitle.vue';
import ProjectCard from '../../src/components/ProjectCard.vue';
</script>

<template>
	<PageTitle icon="cases" title="Проекты" />

	<div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
		<ProjectCard
			v-for="project in projects"
			:key="project.id"
			:project="project"
		/>
	</div>
</template>
