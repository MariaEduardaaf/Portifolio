<template>
  <a href="#main-content"
     class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-purple-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg">
    {{ t('accessibility.skipToContent') }}
  </a>
  <Header />
  <main id="main-content">
    <router-view />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Header from './components/Header.vue'

const { t } = useI18n()
</script>
