<script setup lang="ts">
import Svg from './Svg.vue';
import NavButton from './NavButton.vue';
</script>

<template>
	<nav class="bg-white shadow-md">
		<div
			class="container mx-auto px-4 py-3 flex justify-between items-center"
		>
			<router-link
				to="/"
				class="flex text-2xl items-center font-bold text-gray-800 gap-1 hover:text-blue-600 transition duration-300 group"
			>
				<Svg
					icon="logo"
					:size="24"
					svgClass="fill-gray-800 group-hover:fill-blue-600 transition duration-300"
				></Svg>
				AGoncharenko
			</router-link>
			<div class="hidden md:flex space-x-6">
				<NavButton to="/" text="Главная" iconName="logo" />
				<NavButton to="/projects" text="Проекты" iconName="briefcase" />
				<NavButton to="/resume" text="Резюме" iconName="filestar" />
				<NavButton to="/contact" text="Контакты" iconName="email" />
			</div>
		</div>
	</nav>

	<nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
		<div
			class="container mx-auto px-4 py-2 flex justify-around items-center"
		>
			<NavButton to="/" iconName="home" :iconSize="28" />
			<NavButton to="/projects" iconName="briefcase" :iconSize="28" />
			<NavButton to="/resume" iconName="filestar" :iconSize="28" />
			<NavButton to="/contact" iconName="email" :iconSize="28" />
		</div>
	</nav>
</template>
