<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
	<footer
		class="flex bg-gray-200 min-h-40 w-full mt-20 mb-11 flex-col md:mb-0"
	>
		<div class="flex flex-1"></div>

		<div class="flex bg-gray-400 h-auto w-full items-center justify-center">
			<p class="text-gray-800 font-bold p-2">
				© 2025-{{ currentYear }} AGoncharenko. Все права защищены.
			</p>
		</div>
	</footer>
</template>
