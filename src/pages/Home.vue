<!-- src/pages/Home.vue -->
<template>
  <main class="bg-background dark:bg-gray-900 transition-colors duration-300 min-h-screen">
    <!-- Seções principais -->
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </main>

  <!-- Botão voltar ao topo -->
  <button
    v-show="showBackToTop"
    @click="scrollToTop"
    class="fixed bottom-24 right-6 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:scale-110 transition-all duration-300 z-50"
    aria-label="Voltar ao topo"
  >
    <font-awesome-icon icon="arrow-up" class="w-5 h-5" />
  </button>

  <!-- Controles fixos: tema e idioma -->
  <div class="fixed bottom-6 right-6 flex items-center space-x-4 z-50">
    <!-- Ícone de tema -->
    <font-awesome-icon
      :icon="isDark ? 'moon' : 'sun'"
      @click="toggleTheme"
      class="w-8 h-8 cursor-pointer text-yellow-500 dark:text-white hover:brightness-110 transition-all duration-300"
    />
    <!-- Ícone de idioma -->
    <font-awesome-icon
      icon="globe"
      @click="showLang = true"
      class="w-8 h-8 cursor-pointer text-blue-500 hover:brightness-110 transition-all duration-300"
    />
  </div>

  <!-- Modal de seleção de idioma -->
  <div
    v-if="showLang"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="showLang = false"
  >
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
      <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {{ $t('language.select') }}
      </h2>
      <div class="flex space-x-4">
        <button
          @click="setLocale('pt')"
          :class="btnClass('pt')"
        >
          Português
        </button>
        <button
          @click="setLocale('en')"
          :class="btnClass('en')"
        >
          English
        </button>
        <button
          @click="setLocale('es')"
          :class="btnClass('es')"
        >
          Español
        </button>
        <button
          @click="setLocale('ru')"
          :class="btnClass('ru')"
        >
          Русский
        </button>
        <button
          @click="setLocale('de')"
          :class="btnClass('de')"
        >
          Deutsch
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import HeroSection from '../components/HeroSection.vue'

// Lazy loading de componentes abaixo da dobra
const AboutSection = defineAsyncComponent(() =>
  import('../components/AboutSection.vue')
)
const ProjectsSection = defineAsyncComponent(() =>
  import('../components/ProjectsSection.vue')
)
const ContactSection = defineAsyncComponent(() =>
  import('../components/ContactSection.vue')
)

const showLang = ref(false)
const isDark = ref(false)
const showBackToTop = ref(false)

const { locale } = useI18n()

function handleScroll() {
  showBackToTop.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  // Inicializa tema a partir do localStorage
  isDark.value = localStorage.getItem('theme') === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)

  // Listener para mostrar/esconder botão voltar ao topo
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function setLocale(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
  showLang.value = false
}

// Define classes para botões de idioma (destaca o selecionado)
function btnClass(lang) {
  return [
    'px-4 py-2 rounded-md font-medium transition-all',
    locale.value === lang
      ? 'bg-black text-white hover:bg-gray-800'
      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  ].join(' ')
}
</script>

<style scoped>
/* Ajustes adicionais, se necessário */
</style>
