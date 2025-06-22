<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	isLink?: boolean;
}>();

const blockClasses = computed(() => {
	const baseClasses = 'bg-gray-300 rounded-2xl shadow-lg p-10';
	if (props.isLink) {
		return `${baseClasses} cursor-pointer transition duration-300 ease-in-out hover:scale-101`;
	}
	return baseClasses;
});
</script>

<template>
	<div :class="blockClasses">
		<slot></slot>
	</div>
</template>
