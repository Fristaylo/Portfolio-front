<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';

const props = defineProps<{
	src?: string;
	alt?: string;
	class?: string;
}>();

const isLoadingOrError = ref(true);

watch(
	() => props.src,
	(newSrc, oldSrc) => {
		if (newSrc !== oldSrc) {
			isLoadingOrError.value = true;
		}
	},
);
</script>

<template>
	<div>
		<img
			v-if="!isLoadingOrError && props.src"
			:src="props.src"
			:alt="props.alt"
			:class="props.class"
		/>

		<div
			v-else
			:class="props.class"
			class="mb-3 w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg shadow-md"
		>
			<p class="text-gray-500">
				Изображение загружается или не найдено...
			</p>
		</div>
	</div>
</template>
