<script setup lang="ts">
import Svg from './Svg.vue';
import NavButton from './NavButton.vue';
</script>

<template>
	<Header class="bg-white shadow-md sticky top-0 z-10">
		<div
			class="container mx-auto px-8 py-3 flex justify-between items-center"
		>
			<NuxtLink
				to="/"
				class="flex text-2xl items-center font-bold text-gray-800 gap-1 hover:text-blue-600 transition duration-200 group"
			>
				<Svg
					icon="logo"
					:size="24"
					svgClass="fill-gray-800 group-hover:fill-blue-600 transition duration-200"
				></Svg>
				AGoncharenko
			</NuxtLink>
			<div class="hidden lg:flex space-x-6">
				<NavButton to="/" text="Главная" iconName="home" />
				<NavButton to="/projects" text="Проекты" iconName="cases" />
				<NavButton to="/resume" text="Резюме" iconName="file" />
				<NavButton to="/skills" text="Навыки" iconName="puzzle" />
				<NavButton to="/contact" text="Контакты" iconName="email" />
			</div>
		</div>
	</Header>

	<nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden">
		<div
			class="container mx-auto px-4 py-2 flex justify-around items-center"
		>
			<NavButton to="/" iconName="home" :iconSize="28" />
			<NavButton to="/projects" iconName="cases" :iconSize="28" />
			<NavButton to="/resume" iconName="file" :iconSize="28" />
			<NavButton to="/skills" iconName="puzzle" :iconSize="28" />
			<NavButton to="/contact" iconName="email" :iconSize="28" />
		</div>
	</nav>
</template>
