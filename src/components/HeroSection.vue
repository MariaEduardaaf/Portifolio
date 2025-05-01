<!-- src/components/HeroSection.vue -->
<template>
  <section id="home"
    class="min-h-screen flex flex-col justify-center items-center px-6 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins">
    <!-- Welcome Text -->
    <h1 class="text-2xl md:text-4xl font-bold text-black dark:text-white mt-2 mb-10 text-center">
      {{ t('hero.welcome') }}
    </h1>

    <!-- Grid principal -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 w-full max-w-7xl">
      <!-- Nome + Sociais -->
      <div class="flex flex-col items-end dark:text-gray-100 text-gray-900 space-y-4 w-full md:w-1/3">
        <h2 class="text-2xl md:text-3xl font-normal">
          {{ t('hero.name') }}
        </h2>
        <div class="flex space-x-4 text-xl">
          <font-awesome-icon :icon="['fab', 'linkedin']"
            class="w-6 h-6 hover:text-blue-600 transition-transform transform hover:scale-110" />
          <font-awesome-icon :icon="['fab', 'github']"
            class="w-6 h-6 hover:text-gray-700 transition-transform transform hover:scale-110" />
          <font-awesome-icon :icon="['fab', 'instagram']"
            class="w-6 h-6 hover:text-pink-500 transition-transform transform hover:scale-110" />
        </div>
      </div>

      <!-- Imagem Centralizada -->
      <div class="flex justify-center w-full md:w-1/3">
        <div class="w-40 h-40 md:w-72 md:h-72 rounded-full shadow-lg overflow-hidden">
          <img src="https://i.pinimg.com/736x/56/67/c2/5667c2fc07fc8eaa0d9fd6f75d973e80.jpg" alt="Eduarda Alves"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Tech Stack + Role -->
      <div class="flex flex-col items-start dark:text-gray-100 text-gray-900 space-y-4 w-full md:w-1/3">
        <div class="flex space-x-4">
          <svg class="w-6 h-6 hover:text-blue-400 transition-transform transform hover:scale-110" fill="currentColor"
            viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 12c-5.333 0-9.333 2.667-12 8 2.667-2.667 5.333-4 8-4 2.133 0 3.733 1.067 4.8 3.2C26.867 21.333 28.467 22 30.6 22c2.667 0 5.333-1.333 8-4-2.667-5.333-6.667-8-12-8zM12 24c-5.333 0-9.333 2.667-12 8 2.667-2.667 5.333-4 8-4 2.133 0 3.733 1.067 4.8 3.2C14.867 33.333 16.467 34 18.6 34c2.667 0 5.333-1.333 8-4-2.667-5.333-6.667-8-12-8z" />
          </svg>
          <svg class="w-6 h-6 hover:text-blue-500 transition-transform transform hover:scale-110" fill="currentColor"
            viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6v36h36V6H6zm24 30h-4v-8h-4v8h-4V18h4v8h4v-8h4v18z" />
          </svg>
          <svg class="w-6 h-6 hover:text-blue-700 transition-transform transform hover:scale-110" fill="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0c-1.3 0-2.4.4-3.3 1.1-.7.6-1.2 1.3-1.6 2.1C5.6 3.3 3.7 5.7 4 8c-.6 1.6-.4 3.2 1 4.4C3 13 1 15.1 1 18c0 3.3 2.7 6 6 6h11c3.3 0 6-2.7 6-6 0-2.9-2-5-4-5.6 1.4-1.2 1.6-2.8 1-4.4.3-2.3-1.6-4.7-4.1-4.8-.4-.8-1-1.5-1.7-2.1C14.4.4 13.3 0 12 0z" />
          </svg>
          <svg class="w-6 h-6 hover:text-green-500 transition-transform transform hover:scale-110" fill="currentColor"
            viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16C32 7.163 24.837 0 16 0z" />
          </svg>
        </div>
        <!-- Quebra de linha entre palavras da role -->
        <p class="text-2xl md:text-3xl font-normal leading-tight">
          {{ t('hero.role').split(' ')[0] }}<br>{{ t('hero.role').split(' ').slice(1).join(' ') }}
        </p>
      </div>
    </div>

    <!-- Scroll Button Centralizado com i18n -->
    <div class="w-full flex justify-center mt-10">
      <a href="#about"
        class="inline-flex items-center justify-center border border-black dark:border-white py-2 px-5 rounded-md text-black dark:text-white text-sm md:text-base font-medium transition-colors duration-300 hover:bg-black hover:text-white">
        {{ t('hero.scroll') }} <font-awesome-icon icon="arrow-down" class="ml-2 w-4 h-4" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
/* estilos scoped se necessário */
</style>
