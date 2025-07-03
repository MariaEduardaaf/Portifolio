<template>
    <section id="about"
        class="pt-24 pb-16 px-6 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins max-w-7xl mx-auto">
        <h1
            class="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-20 text-center  decoration-gray-400 dark:decoration-gray-600 decoration-2 ">
            {{ t('about.title') }}
        </h1>
        <div class="flex flex-col lg:flex-row gap-12">
            <!-- Coluna Esquerda -->
            <div class="flex flex-col items-start lg:w-1/2 space-y-6 text-gray-700 dark:text-gray-200">
                <div class="max-w-md w-full flex flex-col items-center space-y-6">
                    <div class="w-48 h-48 rounded-full overflow-hidden shadow-md">
                        <img :src="perfilImg"
                            alt="Foto da Duda" class="w-full h-full object-cover" />
                    </div>
                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                        {{ t('about.subtitle') }}
                    </h2>
                    <div class="flex flex-wrap gap-2 justify-center w-full">
                        <a href="https://www.linkedin.com/in/eduardaalvesfr/" target="_blank"
                            class="group bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105 hover:text-purple-600">
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-purple-600" />
                            Linkedin
                        </a>
                        <a href="https://github.com/MariaEduardaaf" target="_blank"
                            class="group bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105 hover:text-purple-600">
                            <font-awesome-icon :icon="['fab', 'github']" class="text-purple-600" />
                            Github
                        </a>
                    </div>
                </div>
                <p class="leading-relaxed text-sm max-w-md">
                    {{ t('about.description') }}
                </p>
                <div class="h-px bg-gray-300 dark:bg-gray-600 my-6 w-full max-w-md self-start"></div>
                <div class="w-full max-w-md flex justify-center">
                    <button
                        class="bg-black text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm hover:bg-gray-800 hover:scale-105 transition-all">
                        {{ t('about.download') }}
                        <font-awesome-icon :icon="['fas', 'download']" class="text-purple-600" />
                    </button>
                </div>
            </div>

            <!-- Coluna Direita: Habilidades + Timeline -->
            <div class="lg:w-1/2 space-y-16">
                <!-- Habilidades -->
                <div>
                    <h3
                        class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6  decoration-gray-400 dark:decoration-gray-600 decoration-2 underline-offset-4">
                        {{ t('about.skillsTitle') }}
                    </h3>
                    <div class="flex justify-start">
                        <div ref="grid" class="grid grid-cols-4 grid-rows-2 gap-5 ml-4 mt-4 w-max">
                            <div v-for="tech in skills" :key="tech.name"
                                class="skill-card relative flex items-center justify-center w-[70px] h-[70px] bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer"
                                @mouseenter="onHover" @mouseleave="onLeave">
                                <img :src="tech.icon" :alt="tech.name" class="w-10 h-10" />
                                <div class="tooltip">{{ tech.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Timeline -->
                <div>
                    <h3
                        class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6  decoration-gray-400 dark:decoration-gray-600 decoration-2 underline-offset-4">
                        {{ t('about.timelineTitle') }}
                    </h3>
                    <div class="relative">
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-400 dark:bg-purple-600">
                        </div>
                        <div class="space-y-12">
                            <div v-for="(item, index) in timeline" :key="item.title"
                                class="relative flex items-center w-full">
                                <div :class="index % 2 === 0
                                    ? 'flex w-1/2 justify-end pr-8 text-right'
                                    : 'flex w-1/2 ml-auto justify-start pl-8 text-left'">
                                    <div
                                        class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md w-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-purple-500 hover:ring-offset-2">
                                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.periodo }}</p>
                                        <p class="text-base font-bold text-gray-800 dark:text-gray-100">{{ item.title }}
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.local }}</p>
                                    </div>
                                </div>
                                <div
                                    class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 dark:bg-purple-400 rounded-full border-2 border-white">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import perfilImg from '../assets/img/perfil.png'

const { t } = useI18n()

const skills = [
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
]

const timeline = [
    { periodo: '2021 - 2022', title: 'Desenvolvedora Front End - Next', local: 'Presencial' },
    { periodo: '2023', title: 'Desenvolvedora Full Stack - Freelancer', local: 'Remoto' },
    { periodo: '2023 - 2024', title: 'Desenvolvedora Full Stack - Grupo Genneration', local: 'Presencial' },
    { periodo: '2024', title: 'Intercâmbio Acadêmico – Curso intensivo de inglês (nível B2)', local: 'Malta' }
]

const grid = ref(null)
const COLUMNS = 4

function onHover(event) {
    const card = event.currentTarget
    const cards = Array.from(grid.value.children)
    const idx = cards.indexOf(card)
    const tooltip = card.querySelector('.tooltip')
    const style = getComputedStyle(tooltip)
    const margin = parseFloat(style.marginRight) || 0
    const shift = tooltip.offsetWidth + margin + 8

    const row = Math.floor(idx / COLUMNS)
    const rowStart = row * COLUMNS

    for (let i = rowStart; i < idx; i++) {
        const prev = cards[i]
        prev.style.transform = `translateX(-${shift}px)`
        prev.style.zIndex = '10'
    }
}

function onLeave(event) {
    const card = event.currentTarget
    const cards = Array.from(grid.value.children)
    const idx = cards.indexOf(card)

    const row = Math.floor(idx / COLUMNS)
    const rowStart = row * COLUMNS

    for (let i = rowStart; i < idx; i++) {
        const prev = cards[i]
        prev.style.transform = ''
        prev.style.zIndex = ''
    }
}
</script>

<style scoped>
.skill-card {
    position: relative;
    transition: transform 0.3s ease;
}

.tooltip {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(5px);
    margin-right: 0.5rem;
    background: #f3f4f6;
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    font-size: 0.75rem;
    white-space: nowrap;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 50;
    opacity: 0;
    pointer-events: none;
}

.skill-card:hover .tooltip {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
    pointer-events: auto;
}
</style>