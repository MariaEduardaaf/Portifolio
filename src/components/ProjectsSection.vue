<template>
    <section id="projects"
        class="pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins">

        <div class="max-w-7xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-32 text-center">
                {{ t('projects.title') }}
            </h1> 
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                <div v-for="project in projects" :key="project.id"
                    class="project-card bg-white dark:bg-gray-700 rounded-2xl shadow-sm group relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden cursor-pointer"
                    @click="navigateToProject(project.id)">

                    <!-- Imagem ou preview -->
                    <div
                        class="bg-gray-50 dark:bg-gray-600 h-96 flex items-center justify-center border-b border-gray-200 dark:border-gray-500 relative overflow-hidden transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                        
                        <!-- Imagem direta (API ou local) -->
                        <img v-if="project.image" 
                             :src="getImageUrl(project.image)" 
                             :alt="project.title"
                             class="w-full h-full object-cover" 
                             @error="handleImageError($event, project)">
                        
                        <!-- Screenshot automático quando não há imagem direta -->
                        <img v-else-if="project.liveUrl" 
                             :src="getScreenshotUrl(project.liveUrl)" 
                             :alt="project.title + ' preview'"
                             class="w-full h-full object-cover" 
                             @error="handleImageError($event, project)">
                        
                        <!-- Fallback quando não há imagem -->
                        <div v-else class="text-center space-y-1 p-4 text-sm text-gray-500 dark:text-gray-200">
                            <p class="font-semibold text-gray-700 dark:text-gray-100">{{ project.title }}</p>
                            <p class="dark:text-gray-200">{{ project.shortDescription }}</p>
                            <p class="text-xs dark:text-gray-400">(Preview do Projeto)</p>
                        </div>

                        <!-- Ações sobre hover -->
                        <div
                            class="absolute top-2 right-2 group-hover:top-4 group-hover:right-4 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <!-- GitHub link apenas se não for '#' -->
                            <a v-if="project.githubUrl !== '#'" :href="project.githubUrl" target="_blank"
                                class="p-1 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-white dark:bg-gray-700 rounded shadow border border-gray-200 dark:border-gray-600 transition-colors duration-200"
                                @click.stop>
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                            <!-- Indicador de projeto de empresa -->
                            <div v-if="project.githubUrl === '#'" 
                                class="p-1 text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-700 rounded shadow border border-gray-200 dark:border-gray-600">
                                <span class="text-xs font-semibold">EMPRESA</span>
                            </div>
                            <!-- Link para site ao vivo -->
                            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
                                class="p-1 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-white dark:bg-gray-700 rounded shadow border border-gray-200 dark:border-gray-600 transition-colors duration-200"
                                @click.stop>
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
                            <img v-else-if="tag === 'Flutter'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                alt="Flutter" class="w-6 h-6" />
                            <img v-else-if="tag === 'Dart'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                                alt="Dart" class="w-6 h-6" />
                            <img v-else-if="tag === 'JavaScript'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="JavaScript" class="w-6 h-6" />
                            <img v-else-if="tag === 'HTML'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                alt="HTML" class="w-6 h-6" />
                            <img v-else-if="tag === 'CSS'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                alt="CSS" class="w-6 h-6" />
                            <img v-else-if="tag === 'Tailwind'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                alt="Tailwind" class="w-6 h-6" />
                            <img v-else-if="tag === 'PostgreSQL'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                alt="PostgreSQL" class="w-6 h-6" />
                            <img v-else-if="tag === 'Firebase'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                alt="Firebase" class="w-6 h-6" />
                            <img v-else-if="tag === 'TypeScript'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                alt="TypeScript" class="w-6 h-6" />
                            <img v-else-if="tag === 'WordPress'"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
                                alt="WordPress" class="w-6 h-6" />
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
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const navigateToProject = (projectId) => {
    router.push({ name: 'ProjectDetail', params: { id: projectId } })
}

const getScreenshotUrl = (url) => {
    if (!url) return null
    // Generate a placeholder image for website preview using DummyImage
    const domain = new URL(url).hostname.replace('www.', '')
    return `https://dummyimage.com/1200x800/9333ea/ffffff&text=${encodeURIComponent(domain)}`
}

const getImageUrl = (imagePath) => {
    if (!imagePath) return null
    return imagePath
}

const handleImageError = (event, project) => {
    console.log(`Falha ao carregar imagem para ${project.title}:`, event.target.src)
    
    // Se há screenshots alternativos (para apps como Enem Ninja), tenta usar
    if (project.screenshots && project.screenshots.length > 0) {
        event.target.src = project.screenshots[0]
        project.screenshots.shift() // Remove the first screenshot to avoid infinite loop
        return
    }
    
    // Se há liveUrl, tenta placeholder automático
    if (project.liveUrl && !event.target.src.includes('dummyimage.com')) {
        event.target.src = getScreenshotUrl(project.liveUrl)
        return
    }
    
    // Se tudo falhar, esconde a imagem e mostra o fallback
    event.target.style.display = 'none'
}

const projects = ref([
    { 
        id: 1, 
        title: 'Enem Ninja', 
        shortDescription: t('projects.enemninja.description'), 
        tags: ['Flutter', 'Dart', 'Firebase'], 
        githubUrl: '#', 
        liveUrl: 'https://apps.apple.com/es/app/enem-ninja/id6478286547',
        image: '/projects/enem-ninja.svg',
        screenshots: [
            'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/64/d3/f4/64d3f4e8-5b69-bac4-4815-e70b8ec0f442/96c372e0-8941-4d4e-8fc3-4b31ffbd6a12_5pol-Home.png/626x0w.png',
            'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/1f/a7/51/1fa7510d-cf71-e854-c335-469e45c2be36/98b5b8a0-9ac0-4340-a9b4-72ef12494aa1_5pol-Simulados.png/626x0w.png',
            'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ae/1e/c1/ae1ec1ae-5f2c-2a9c-f042-08c13d9e3bd2/dadab3b8-7088-4feb-a352-be7f56d2e37d_5pol-Trilha.png/626x0w.png'
        ]
    },
    { 
        id: 2, 
        title: 'ZapFácil', 
        shortDescription: t('projects.zapfacil.description'), 
        tags: ['Vue', 'TypeScript', 'PostgreSQL'], 
        githubUrl: '#', 
        liveUrl: 'https://www.zapfacil.com',
        image: null
    },
    { 
        id: 3, 
        title: 'Gerenciamei', 
        shortDescription: t('projects.gerenciamei.description'), 
        tags: ['WordPress', 'JavaScript', 'SEO'], 
        githubUrl: '#', 
        liveUrl: 'https://solicitar.gerenciamei.com',
        image: null
    },
    { 
        id: 4, 
        title: 'Snaprix', 
        shortDescription: t('projects.snaprix.description'), 
        tags: ['Flutter', 'Dart', 'Game'], 
        githubUrl: 'https://github.com/MariaEduardaaf/Snaprix', 
        liveUrl: null,
        image: '/projects/snaprix.svg'
    },
    { 
        id: 5, 
        title: 'PlaylistPorter Website', 
        shortDescription: t('projects.playlistporter.description'), 
        tags: ['HTML', 'JavaScript', 'CSS'], 
        githubUrl: 'https://github.com/MariaEduardaaf/playlistporter-website', 
        liveUrl: 'https://playlistporter-website.vercel.app',
        image: null
    },
    { 
        id: 6, 
        title: 'FoodSpot', 
        shortDescription: t('projects.foodspot.description'), 
        tags: ['Flutter', 'Dart', 'Mobile'], 
        githubUrl: 'https://github.com/MariaEduardaaf/foodspot', 
        liveUrl: null,
        image: '/projects/foodspot.svg'
    }
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
