<!-- src/components/Header.vue -->
<template>
    <header class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <!-- Container de fundo estilo pill -->
        <div
            class="bg-gray-200 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-6">
            <nav class="flex items-center gap-6 text-gray-800 dark:text-white text-xl">
                <a v-for="item in navItems" :key="item.key" :href="item.href"
                    :aria-label="t(item.label)"
                    :class="[
                        'relative group p-2 rounded-full transition-colors',
                        activeSection === item.key
                            ? 'bg-purple-500 text-white'
                            : 'hover:bg-gray-300 dark:hover:bg-gray-600'
                    ]">
                    <font-awesome-icon :icon="item.icon" />
                    <!-- Tooltip abaixo do ícone -->
                    <div
                        class="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        {{ t(item.label) }}
                    </div>
                </a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeSection = ref('home')

const navItems = [
    { key: 'home', icon: ['fas', 'home'], href: '#home', label: 'nav.home' },
    { key: 'about', icon: ['fas', 'user'], href: '#about', label: 'nav.about' },
    { key: 'projects', icon: ['fas', 'folder'], href: '#projects', label: 'nav.projects' },
    { key: 'contact', icon: ['fas', 'envelope'], href: '#contact', label: 'nav.contact' },
]

let observer = null

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id
            }
        })
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    })

    // Observar todas as seções
    navItems.forEach(item => {
        const section = document.querySelector(item.href)
        if (section) {
            observer.observe(section)
        }
    })
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>
header {
    overflow: visible;
}

a.group {
    display: inline-flex;
}
</style>
