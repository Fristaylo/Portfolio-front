<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import Svg from './Svg.vue';

const props = defineProps({
	to: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
	// Изменено: теперь ожидаем строковое имя иконки
	iconName: {
		type: String,
		required: false,
	},
	iconSize: {
		type: [String, Number],
		required: false,
		default: 18,
	},
});
</script>

<template>
	<router-link
		:to="to"
		class="flex items-center font-medium text-gray-600 text-lg hover:text-blue-600 transition duration-300"
	>
		<!-- Изменено: передаем iconName в компонент Svg -->
		<Svg
			v-if="iconName"
			:icon="iconName"
			:size="Number(iconSize)"
			class="mr-1"
		></Svg>
		<span>{{ text }}</span>
	</router-link>
</template>
