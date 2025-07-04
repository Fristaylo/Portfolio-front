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
	home: 'M19.64 9.12 10.88.37a1.25 1.25 0 00-1.77 0L.35 9.12c-.48.5-.46 1.25.03 1.74.49.5 1.2.56 1.7.07l.42-.42v8.24c0 .7.56 1.25 1.25 1.25h5v-5h2.5v5h5c.7 0 1.27-.56 1.27-1.25v-8.22l.37.37c.5.5 1.24.45 1.73-.04a1.2 1.2 0 00.02-1.74Z',
	cases: 'M1.67 19.5A1.6 1.6 0 01.49 19 1.62 1.62 0 010 17.83V8.04a.82.82 0 01.83-.83c.23 0 .43.08.6.24a.8.8 0 01.24.6v9.77h14.16a.8.8 0 01.6.24.8.8 0 01.24.6.82.82 0 01-.84.84H1.67ZM5 16.15a1.6 1.6 0 01-1.18-.5 1.62 1.62 0 01-.49-1.18V4.7c0-.24.08-.44.24-.6a.8.8 0 01.6-.24h3.6V2.17c0-.46.17-.86.5-1.18A1.6 1.6 0 019.44.5h4.45c.46 0 .85.16 1.18.5.32.32.49.72.49 1.18v1.67h3.6a.8.8 0 01.6.24c.16.16.24.36.24.6v9.78c0 .46-.16.86-.49 1.18-.33.33-.72.5-1.18.5H5Zm4.44-12.3h4.45V2.18H9.44v1.67Z',
	email: 'M1.88 18a1.8 1.8 0 01-1.33-.55A1.8 1.8 0 010 16.12V4.87c0-.52.18-.96.55-1.32.37-.37.8-.55 1.32-.55h16.25c.52 0 .96.18 1.33.55.37.37.55.81.55 1.33v11.25c0 .52-.18.96-.55 1.32-.37.37-.8.55-1.32.55H1.88ZM10 11.62a.93.93 0 00.5-.16l7.18-4.11c.14-.09.25-.2.33-.35.08-.15.11-.3.11-.48a.88.88 0 00-.47-.83.94.94 0 00-.98.02L10 9.54l-6.64-3.8a.96.96 0 00-.99-.03.86.86 0 00-.5.8c0 .18.05.34.14.49.08.14.2.26.33.35l7.2 4.11a.8.8 0 00.46.16Z',
	puzzle: 'M6.3 20H1.9a1.8 1.8 0 01-1.3-.6A1.8 1.8 0 010 18.1v-4.4c.7 0 1.3-.3 1.8-.8s.7-1.1.7-1.7c0-.7-.2-1.3-.7-1.7A2.6 2.6 0 000 8.8V4.4c0-.5.2-.9.6-1.3s.8-.6 1.3-.6h4.4c0-.7.2-1.3.7-1.8A2.4 2.4 0 018.7 0c.7 0 1.3.2 1.8.7s.7 1.1.7 1.8h4.4c.5 0 .9.2 1.3.6s.6.8.6 1.3v4.4c.7 0 1.3.2 1.8.7s.7 1.1.7 1.8c0 .7-.2 1.3-.7 1.8a2.4 2.4 0 01-1.8.7v4.4c0 .5-.2.9-.6 1.3-.4.4-.8.6-1.3.6h-4.4a2.6 2.6 0 00-.8-1.8 2.3 2.3 0 00-1.7-.7c-.7 0-1.3.2-1.7.7A2.6 2.6 0 006.3 20Z',
	file: 'M7.3 16h5.5c.3 0 .6 0 .8-.3.2-.2.3-.4.3-.7a1.1 1.1 0 00-1.1-1.1H7.3c-.4 0-.6 0-.9.3a1 1 0 00-.3.7c0 .4.1.6.3.8.3.3.5.4.9.4Zm0-3.6h5.4c.4 0 .6 0 .9-.3.2-.2.3-.5.3-.8a1 1 0 00-.3-.8c-.3-.2-.5-.3-.8-.3H7.3c-.4 0-.6.1-.9.3a1 1 0 00-.3.8c0 .3.1.6.3.8.3.2.5.3.9.3ZM4.6 20c-.7 0-1.3-.2-1.8-.7S2 18.2 2 17.5v-15c0-.7.3-1.3.8-1.8S3.9 0 4.6 0h6.5c.4 0 .7 0 1 .2.4.1.6.3.9.5l4.2 4c.3.3.5.6.6 1l.2.9v10.9c0 .7-.3 1.3-.8 1.8s-1.1.7-1.8.7H4.6Zm6-14.2c0 .4.1.7.4 1 .2.2.6.3 1 .3h3.4l-4.8-4.6v3.3Z',
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
