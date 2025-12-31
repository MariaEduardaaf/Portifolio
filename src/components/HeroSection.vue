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
          <a href="https://www.linkedin.com/in/eduardaalvesfr/" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'linkedin']"
              class="w-6 h-6 hover:text-blue-600 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://github.com/MariaEduardaaf" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'github']"
              class="w-6 h-6 hover:text-gray-700 transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>

      <!-- Imagem Centralizada -->
      <div class="flex justify-center w-full md:w-1/3">
        <div class="w-40 h-40 md:w-72 md:h-72 rounded-full shadow-lg overflow-hidden">
          <img :src="perfilImg" alt="Madu Alves"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Tech Stack + Role -->
      <div class="flex flex-col items-start dark:text-gray-100 text-gray-900 space-y-4 w-full md:w-1/3">
        <div class="flex space-x-4">
          <!-- Vue.js -->
          <img class="w-6 h-6 transition-transform transform hover:scale-110"
               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
               alt="Vue.js" />

          <!-- Flutter -->
          <img class="w-6 h-6 transition-transform transform hover:scale-110"
               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
               alt="Flutter" />

          <!-- Node.js -->
          <img class="w-6 h-6 transition-transform transform hover:scale-110"
               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
               alt="Node.js" />

          <!-- PostgreSQL -->
          <img class="w-6 h-6 transition-transform transform hover:scale-110"
               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
               alt="PostgreSQL" />

          <!-- Firebase -->
          <img class="w-6 h-6 transition-transform transform hover:scale-110"
               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
               alt="Firebase" />
        </div>
        <!-- Typing Animation para Role -->
        <p class="text-2xl md:text-3xl font-normal leading-tight">
          <span class="typing-text">{{ displayedRole }}</span>
          <span class="typing-cursor">|</span>
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import perfilImg from '../assets/img/perfil.png'

const { t } = useI18n()

// Typing Animation
const roles = [
  'Full Stack Developer',
  'Flutter Developer',
  'Vue.js Developer',
  'Mobile Developer'
]

const currentRoleIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
const displayedRole = ref('')

let typingInterval = null
const typingSpeed = 100
const deletingSpeed = 50
const pauseAfterTyping = 2000
const pauseAfterDeleting = 500

function typeRole() {
  const currentRole = roles[currentRoleIndex.value]

  if (!isDeleting.value) {
    // Digitando
    if (currentCharIndex.value < currentRole.length) {
      displayedRole.value = currentRole.substring(0, currentCharIndex.value + 1)
      currentCharIndex.value++
      typingInterval = setTimeout(typeRole, typingSpeed)
    } else {
      // Terminou de digitar, espera e começa a apagar
      typingInterval = setTimeout(() => {
        isDeleting.value = true
        typeRole()
      }, pauseAfterTyping)
    }
  } else {
    // Apagando
    if (currentCharIndex.value > 0) {
      displayedRole.value = currentRole.substring(0, currentCharIndex.value - 1)
      currentCharIndex.value--
      typingInterval = setTimeout(typeRole, deletingSpeed)
    } else {
      // Terminou de apagar, passa para próxima role
      isDeleting.value = false
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
      typingInterval = setTimeout(typeRole, pauseAfterDeleting)
    }
  }
}

onMounted(() => {
  typeRole()
})

onUnmounted(() => {
  if (typingInterval) {
    clearTimeout(typingInterval)
  }
})
</script>

<style scoped>
.typing-cursor {
  animation: blink 1s infinite;
  font-weight: 100;
  color: #9333ea;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>
