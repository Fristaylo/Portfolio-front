<script setup lang="ts">
import NavButton from './NavButton.vue';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import PotIcon from 'vue-material-design-icons/Pot.vue';
import BriefCaseIcon from 'vue-material-design-icons/BriefCase.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
import FileStarIcon from 'vue-material-design-icons/FileStar.vue';
</script>

<template>
	<nav class="bg-white shadow-md">
		<div
			class="container mx-auto px-4 py-3 flex justify-between items-center"
		>
			<div
				class="flex text-2xl items-center font-bold text-gray-800 gap-1"
			>
				<PotIcon size="28" />AGoncharenko
			</div>
			<div class="hidden md:flex space-x-6">
				<NavButton to="/" text="Главная" :icon="HomeIcon" />
				<NavButton
					to="/projects"
					text="Проекты"
					:icon="BriefCaseIcon"
				/>
				<NavButton to="/resume" text="Резюме" :icon="FileStarIcon" />
				<NavButton to="/contact" text="Контакты" :icon="EmailIcon" />
			</div>
		</div>
	</nav>

	<nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
		<div
			class="container mx-auto px-4 py-2 flex justify-around items-center"
		>
			<NavButton to="/" :icon="HomeIcon" :iconSize="28" />
			<NavButton to="/projects" :icon="BriefCaseIcon" :iconSize="28" />
			<NavButton to="/resume" :icon="FileStarIcon" :iconSize="28" />
			<NavButton to="/contact" :icon="EmailIcon" :iconSize="28" />
		</div>
	</nav>
</template>
