<script setup lang="ts">
import Project from '@/components/ProjectCard.vue';
import { projects } from '../data/projects';
import PageTitle from '@/components/PageTitle.vue';
</script>

<template>
	<PageTitle icon="cases" title="Проекты" />

	<div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
		<Project
			v-for="project in projects"
			:key="project.id"
			:project="project"
		/>
	</div>
</template>
