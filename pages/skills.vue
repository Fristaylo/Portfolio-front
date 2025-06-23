<script setup lang="ts">
import PageTitle from '../src/components/PageTitle.vue';
import SkillCard from '../src/components/SkillCard.vue';
import { skills } from '../src/data/skill';
</script>

<template>
	<PageTitle icon="puzzle" title="Навыки" />
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" />
	</div>
</template>
