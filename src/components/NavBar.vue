<script setup lang="ts">
// import { Bars3Icon } from '@heroicons/vue/24/outline';

</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">AGoncharenko</div>
      <div class="flex space-x-6">
        <router-link
          to="/"
          class="text-gray-600 hover:text-blue-600 transition duration-300"
          active-class="text-blue-600 font-semibold"
          >Главная</router-link
        >
        <router-link
          to="/projects"
          class="text-gray-600 hover:text-blue-600 transition duration-300"
          active-class="text-blue-600 font-semibold"
          >Проекты</router-link
        >
        <router-link
          to="/resume"
          class="text-gray-600 hover:text-blue-600 transition duration-300"
          active-class="text-blue-600 font-semibold"
          >Резюме</router-link
        >
        <router-link
          to="/contact"
          class="text-gray-600 hover:text-blue-600 transition duration-300"
          active-class="text-blue-600 font-semibold"
          >Контакты</router-link
        >
      </div>
    </div>
  </nav>
</template>