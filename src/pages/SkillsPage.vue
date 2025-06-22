<script setup lang="ts">
import { skills } from '../data/skill';
import SkillCard from '@/components/SkillCard.vue';
import PageTitle from '@/components/PageTitle.vue';
</script>

<template>
	<PageTitle icon="puzzle" title="Навыки" />
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" />
	</div>
</template>
