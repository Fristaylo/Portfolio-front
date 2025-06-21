<script setup lang="ts">
import Block from './Block.vue';
import Svg from './Svg.vue';
import type { Skill } from '../data/skill';

const props = defineProps<{
	skill: Skill;
}>();
</script>

<template>
	<Block>
		<div class="flex items-center gap-3">
			<Svg :icon="props.skill.icon" :size="25"></Svg>
			<h2 class="font-bold text-2xl">{{ props.skill.title }}</h2>
		</div>
		<p>{{ props.skill.description }}</p>
		<div class="flex items-center gap-2 mt-5">
			<p>skill</p>
			<div class="w-full h-2 bg-gray-200 rounded-md">
				<div
					class="h-full bg-orange-500 rounded-md"
					:style="{ width: props.skill.level + '%' }"
				></div>
			</div>
			<p>{{ props.skill.level }}%</p>
		</div>
	</Block>
</template>
