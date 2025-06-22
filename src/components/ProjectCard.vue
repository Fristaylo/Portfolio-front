<script setup lang="ts">
import { defineProps } from 'vue';
import { type Project } from '../data/projects';
import Image from '../components/Image.vue';
import Block from '../components/Block.vue';

const props = defineProps<{
	project: Project;
}>();
</script>

<template>
	<router-link :to="{ name: 'project', params: { projectId: project.id } }">
		<Block :isLink="true" class="block">
			<h3 class="text-2xl font-bold mb-5">{{ project.title }}</h3>

			<Image
				:src="project.imageUrl"
				:alt="project.title"
				class="mb-3 max-w-full h-auto min-h-80 rounded-lg shadow-md"
			/>

			<p class="mb-3">{{ project.description }}</p>
			<p class="text-sm text-gray-600">
				<span class="font-semibold">Технологии:</span>
				{{ project.technologies.join(', ') }}
			</p>
		</Block>
	</router-link>
</template>
