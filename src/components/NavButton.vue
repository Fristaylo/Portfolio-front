<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
	to: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
	icon: {
		type: Object,
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
		<component :is="icon" :size="iconSize" class="mr-1" />
		<span>{{ text }}</span>
	</router-link>
</template>
