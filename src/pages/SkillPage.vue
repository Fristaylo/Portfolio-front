<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { skills, type Skill } from '../data/skill';
import PageTitle from '@/components/PageTitle.vue';

const route = useRoute();
const skillId = ref(route.params.skillId as string);
const skillData = ref<Skill | null>(null);

const fetchSkillData = (id: string) => {
	skillData.value = skills.find((skill) => skill.id === id) || null;
	if (!skillData.value) {
		console.error('Навык с ID', id, 'не найден');
	}
};

watchEffect(() => {
	if (skillId.value) {
		fetchSkillData(skillId.value);
	}
});

fetchSkillData(skillId.value);
</script>

<template>
	<div v-if="skillData">
		<PageTitle :title="skillData.title" />
		<p>{{ skillData.description }}</p>
	</div>
	<div v-else>
		<PageTitle title="Навык не найден" />
		<p>Запрошенный навык не существует.</p>
	</div>
</template>
