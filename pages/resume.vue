<script setup lang="ts">
import Block from '../src/components/Block.vue';
import SkillBubble from '../src/components/SkillBubble.vue';
import { skills } from '../src/data/skill';
</script>

<template>
	<Block>
		<h3>Навыки</h3>
		<div class="flex gap-2 flex-wrap">
			<SkillBubble id="figma" />
			<SkillBubble
				v-for="skill in skills"
				:key="skill.id"
				:id="skill.id"
			/>
		</div>
	</Block>
</template>
