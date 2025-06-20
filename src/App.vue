<template>
  <header>
    <nav class="bg-gray-800 p-4">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-white hover:text-gray-300" @click="currentPage = 'home'">Главная</a></li>
        <li><a href="#" class="text-white hover:text-gray-300" @click="currentPage = 'projects'">Проекты</a></li>
        <li><a href="#" class="text-white hover:text-gray-300" @click="currentPage = 'resume'">Резюме</a></li>
        <li><a href="#" class="text-white hover:text-gray-300" @click="currentPage = 'contact'">Контакты</a></li>
      </ul>
    </nav>
  </header>
  <div class="p-4">
    <HomePage v-if="currentPage === 'home'" />
    <ProjectsPage v-if="currentPage === 'projects'" />
    <ResumePage v-if="currentPage === 'resume'" />
    <ContactPage v-if="currentPage === 'contact'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomePage from './components/pages/HomePage.vue';
import ProjectsPage from './components/pages/ProjectsPage.vue';
import ResumePage from './components/pages/ResumePage.vue';
import ContactPage from './components/pages/ContactPage.vue';

const currentPage = ref('home');
</script>

<style lang="">

</style>
