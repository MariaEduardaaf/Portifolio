<template>
    <section id="projects"
        class="pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins">

        <div class="max-w-7xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-32 text-center">
                {{ t('projects.title') }}
            </h1> 
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                <div v-for="project in projects" :key="project.id"
                    class="project-card bg-white dark:bg-gray-700 rounded-2xl shadow-sm group relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden">

                    <!-- Imagem ou preview -->
                    <div
                        class="bg-gray-50 dark:bg-gray-600 h-96 flex items-center justify-center border-b border-gray-200 dark:border-gray-500 p-4 relative text-sm text-gray-500 dark:text-gray-200 transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                        <div class="text-center space-y-1">
                            <p class="font-semibold text-gray-700 dark:text-gray-100">{{ project.title }}</p>
                            <p class="dark:text-gray-200">{{ project.shortDescription }}</p>
                            <p class="text-xs dark:text-gray-400">(Preview do Projeto)</p>
                        </div>

                        <!-- Ações sobre hover -->
                        <div
                            class="absolute top-2 right-2 group-hover:top-4 group-hover:right-4 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <a :href="project.githubUrl" target="_blank"
                                class="p-1 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-white dark:bg-gray-700 rounded shadow border border-gray-200 dark:border-gray-600 transition-colors duration-200">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                            <a :href="project.liveUrl" target="_blank"
                                class="p-1 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-white dark:bg-gray-700 rounded shadow border border-gray-200 dark:border-gray-600 transition-colors duration-200">
                                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                            </a>
                        </div>
                    </div>

                    <!-- Tags -->
                    <div class="p-3 flex items-center justify-center space-x-4 bg-white dark:bg-gray-700">
                        <div v-for="tag in project.tags" :key="tag" class="flex items-center justify-center w-6 h-6">
                            <img v-if="tag === 'Vue'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                alt="Vue" class="w-6 h-6" />
                            <img v-else-if="tag === 'Tailwind'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                alt="Tailwind" class="w-6 h-6" />
                            <img v-else-if="tag === 'Web'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="Web"
                                class="w-6 h-6" />
                            <span v-else class="text-gray-700 dark:text-gray-200 text-sm">{{ tag }}</span>
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

const { t } = useI18n()

const projects = ref([
    { id: 1, title: 'Projeto Web 1', shortDescription: 'Descrição breve do projeto web.', tags: ['Vue', 'Tailwind', 'Web'], githubUrl: 'https://github.com/usuario/repositorio1', liveUrl: 'https://example.com/1' },
    { id: 2, title: 'App Mobile XPTO', shortDescription: 'Aplicativo para plataforma móvel.', tags: ['Tailwind', 'Web'], githubUrl: 'https://github.com/usuario/repositorio2', liveUrl: 'https://example.com/2' },
    { id: 3, title: 'API Central', shortDescription: 'Backend e integração de serviços.', tags: ['Vue', 'Web'], githubUrl: 'https://github.com/usuario/repositorio3', liveUrl: 'https://example.com/3' }
])
</script>

<style scoped>
.project-card {
    position: relative;
    border: 2px solid #1f2937;
    /* padrão light mode */
    border-radius: 1rem;
    overflow: hidden;
    z-index: 0;
    transition: border 0.2s ease;
}

.dark .project-card {
    /* dark mode sem hover: roxo mais presente */
    border-color: rgba(147, 51, 234, 0.35);
}

.project-card.group:hover {
    border: none;
}

/* pseudo-elemento que simula a borda animada */
.project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 4px;
    /* grossura da borda animada */
    background: linear-gradient(90deg,
            #6b21a8,
            #9333ea,
            #8b5cf6,
            #9333ea,
            #6b21a8);
    background-size: 300% 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

/* hover (light ou dark): mostra o gradiente vibrante */
.project-card.group:hover::before {
    opacity: 1;
    animation: border-glow 2s linear infinite;
}

@keyframes border-glow {
    0% {
        background-position: 0% 0%;
    }

    100% {
        background-position: 200% 0%;
    }
}
</style>
