<script setup lang="ts">
import HeaderBlock from './components/HeaderBlock.vue';
import FooterBlock from './components/FooterBlock.vue';
</script>

<template>
	<div class="flex flex-col min-h-screen bg-gray-100">
		<HeaderBlock />
		<main class="container mx-auto p-7 flex-grow">
			<router-view />
		</main>
		<FooterBlock />
	</div>
</template>
