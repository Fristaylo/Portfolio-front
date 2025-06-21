<script setup lang="ts">
import { skills } from '../data/skill';
import SkillCard from '../components/SkillCard.vue';
</script>

<template>
	<div class="p-4">
		<h2 class="text-3xl mb-5 font-bold text-center">Резюме</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" />
		</div>
	</div>
</template>
