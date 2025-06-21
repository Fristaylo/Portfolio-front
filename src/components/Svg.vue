<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	size: {
		type: Number,
		default: 16,
	},
	viewBoxSize: {
		type: Number,
		default: 20,
	},
	svgClass: {
		type: String,
		default: '',
	},
});

const viewBox = computed(() => {
	return `0 0 ${props.viewBoxSize} ${props.viewBoxSize}`;
});

const iconPath = computed(() => {
	return iconPaths[props.icon];
});

const iconPaths: Record<string, string> = {
	logo: 'M16.89 1.86c-.22 0-.44.05-.66.13-1.78.68-2.07 2.69-2.2 3.68-.05.43.1.65.34.79.13.07.3.17.37.25.67.68.8 1.33.89 1.8.07.35.13.67.46.88.41.25.83-.32 1.03-.54a7.54 7.54 0 001.72-5.14c-.1-1-.8-1.85-1.95-1.85ZM6.24.61c.96.5 1.67 1.22 2.3 1.87a5.3 5.3 0 001.58 1.3c.76.32 1.36.43 1.86.43-.23.46-.6.7-1.29.75-1.16.07-1.84-.25-2.83-1.44 0 0-.56-.67-.89-1.01A6.7 6.7 0 004.47.82 5.27 5.27 0 002.5.55C3.51-.14 5.25.1 6.24.6ZM17.5 10.2c-1.05 1.18-1.63 2-1.89 3.2-.44 2.04-1.4 3.8-2.93 5.39-.62.65-2.44 1.08-4.52 1.08-1.76 0-2.98-.31-3.36-.6C3.64 18.4-.07 13.68 1 8.5c.22-1.1 1.12-1.77 1.85-2.32.23-.17.81-.38.77-1-.1-1.7-2.52-2.35-3.63-2.52.66-1 2.37-1 2.76-1 1.57 0 2.73.94 3.49 1.74.25.27.73.85.73.85 1 1.2 2.01 1.98 3.79 1.84 1.9-.13 2.38-1.42 2.8-2.56.32-.84.64-1.7 1.5-2.35a2.93 2.93 0 014.69 1.39c.83 2.54-.6 5.73-2.27 7.62Z',
	home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
	briefcase:
		'M2 6h16v12H2V6zm16-2c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16zM10 10h4v4h-4v-4z',
	email: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
	filestar:
		'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
};
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		:viewBox="viewBox"
	>
		<path v-if="iconPath" :d="iconPath" :class="svgClass" />
	</svg>
</template>
