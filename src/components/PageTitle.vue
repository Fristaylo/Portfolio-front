<script setup>
import Svg from './Svg.vue';

const props = defineProps({
	icon: {
		type: String,
	},
	title: {
		type: String,
		requared: true,
	},
});
</script>

<template>
	<div class="flex items-center justify-center gap-2 mb-5">
		<Svg :icon="icon" size="25" class="fill-gray-800"></Svg>
		<h1 class="font-bold text-3xl text-gray-800">{{ title }}</h1>
	</div>
</template>
