<template>
    <section id="projects"
        class="pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins">

        <div class="max-w-7xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                {{ t('projects.title') }}
            </h1> 
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                <div v-for="project in projects" :key="project.id"
                    class="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-sm group relative transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl overflow-hidden">

                    <!-- Tag de origem no topo -->
                    <div class="absolute top-3 left-3 z-10">
                        <span :class="getOriginTagClass(project)"
                            class="px-2 py-1 text-xs font-semibold rounded-full">
                            {{ getOriginTag(project) }}
                        </span>
                    </div>

                    <!-- Imagem do projeto -->
                    <div class="relative h-48 bg-gray-50 dark:bg-gray-700 overflow-hidden">
                        <img v-if="project.image" 
                             :src="getImageUrl(project.image)" 
                             :alt="project.title"
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                             @error="handleImageError($event, project)">
                        
                        <img v-else-if="project.liveUrl" 
                             :src="getScreenshotUrl(project.liveUrl)" 
                             :alt="project.title + ' preview'"
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                             @error="handleImageError($event, project)">
                        
                        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900">
                            <font-awesome-icon :icon="['fas', 'code']" class="text-4xl text-purple-600 dark:text-purple-300" />
                        </div>
                    </div>

                    <!-- Conteúdo do card -->
                    <div class="p-4 space-y-3">
                        <!-- Título -->
                        <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {{ project.title }}
                        </h3>

                        <!-- Descrição curta -->
                        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                            {{ project.shortDescription }}
                        </p>

                        <!-- Tecnologias -->
                        <div class="flex flex-wrap gap-2 py-2">
                            <div v-for="tag in project.tags" :key="tag" 
                                class="flex items-center justify-center w-7 h-7 bg-gray-100 dark:bg-gray-700 rounded-lg hover:scale-110 transition-transform duration-200" 
                                :title="tag">
                                <img v-if="getTechIcon(tag)"
                                    :src="getTechIcon(tag)"
                                    :alt="tag" 
                                    :aria-label="tag"
                                    class="w-5 h-5" />
                                <span v-else class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ tag.slice(0, 2) }}</span>
                            </div>
                        </div>

                        <!-- Footer com link do projeto -->
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                            <div class="flex items-center space-x-2">
                                <!-- Link para GitHub se disponível -->
                                <a v-if="project.githubUrl && project.githubUrl !== '#'" 
                                   :href="project.githubUrl" 
                                   target="_blank"
                                   class="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
                                   :aria-label="`Ver código do ${project.title} no GitHub`">
                                    <font-awesome-icon :icon="['fab', 'github']" class="text-sm" />
                                </a>
                            </div>
                            
                            <!-- Botão Ver Projeto -->
                            <a v-if="project.liveUrl" 
                               :href="project.liveUrl" 
                               target="_blank"
                               :class="project.isAppStore 
                                   ? 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-md'
                                   : 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105'"
                               :aria-label="project.isAppStore 
                                   ? `Ver ${project.title} na App Store` 
                                   : `Ver projeto ${project.title} ao vivo`">
                                <span>{{ project.isAppStore ? 'Ver na App Store' : 'Ver Projeto' }}</span>
                                <font-awesome-icon :icon="project.isAppStore ? ['fab', 'apple'] : ['fas', 'external-link-alt']" class="text-xs" />
                            </a>
                            <span v-else class="text-xs text-gray-400 dark:text-gray-500 italic">
                                Em desenvolvimento
                            </span>
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

const getScreenshotUrl = (url) => {
    if (!url) return null
    const domain = new URL(url).hostname.replace('www.', '')
    return `https://dummyimage.com/400x300/9333ea/ffffff&text=${encodeURIComponent(domain)}`
}

const getImageUrl = (imagePath) => {
    if (!imagePath) return null
    return imagePath
}

const handleImageError = (event, project) => {
    console.log(`Falha ao carregar imagem para ${project.title}:`, event.target.src)
    
    if (project.screenshots && project.screenshots.length > 0) {
        event.target.src = project.screenshots[0]
        project.screenshots.shift()
        return
    }
    
    if (project.liveUrl && !event.target.src.includes('dummyimage.com')) {
        event.target.src = getScreenshotUrl(project.liveUrl)
        return
    }
    
    event.target.style.display = 'none'
}

const getOriginTag = (project) => {
    if (project.isAppStore) return 'Publicado na App Store'
    if (project.githubUrl === '#') return 'Empresa'
    if (project.id === 4 || project.id === 5 || project.id === 6) return 'Projeto Pessoal'
    return 'Freelancer'
}

const getOriginTagClass = (project) => {
    const origin = getOriginTag(project)
    switch (origin) {
        case 'Publicado na App Store':
            return 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 dark:bg-gradient-to-r dark:from-orange-900 dark:to-red-900 dark:text-orange-300 ring-1 ring-orange-300 dark:ring-orange-600'
        case 'Empresa':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
        case 'Projeto Pessoal':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        case 'Freelancer':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
}

const getTechIcon = (tech) => {
    const icons = {
        'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
        'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
        'Web': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
        'Game': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
        'Mobile': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        'SEO': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
        'AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    }
    return icons[tech] || null
}

const projects = ref([
    // Projetos da App Store em destaque
    { 
        id: 7, 
        title: 'Cartões Fácil', 
        shortDescription: 'Assistente para comparar e escolher cartões de crédito com recomendações personalizadas', 
        tags: ['Flutter', 'Firebase'], 
        githubUrl: null, 
        liveUrl: 'https://apps.apple.com/br/app/cart%C3%A3o-f%C3%A1cil/id1251949878',
        image: null,
        isAppStore: true
    },
    { 
        id: 8, 
        title: 'Jogo da Bíblia: Estudo Diário', 
        shortDescription: 'App de quiz bíblico com sistema de pontuação e ranking diário', 
        tags: ['Flutter', 'Firebase'], 
        githubUrl: null, 
        liveUrl: 'https://apps.apple.com/es/app/jogo-da-b%C3%ADblia-estudo-di%C3%A1rio/id6463932846',
        image: null,
        isAppStore: true
    },
    { 
        id: 9, 
        title: 'CaloTrack: Monitor de Calorias', 
        shortDescription: 'App de nutrição com análise por IA e planejamento alimentar', 
        tags: ['Flutter', 'Firebase', 'AI'], 
        githubUrl: null, 
        liveUrl: 'https://apps.apple.com/es/app/calotrack-monitor-de-calorias/id6463879811',
        image: null,
        isAppStore: true
    },
    // Outros projetos
    { 
        id: 1, 
        title: 'Enem Ninja', 
        shortDescription: 'App educacional gamificado para preparação do ENEM', 
        tags: ['Flutter', 'Dart', 'Firebase'], 
        githubUrl: '#', 
        liveUrl: 'https://apps.apple.com/es/app/enem-ninja/id6478286547',
        image: '/projects/enem-ninja.svg',
        isAppStore: true
    },
    { 
        id: 2, 
        title: 'ZapFácil', 
        shortDescription: 'SaaS para automação de WhatsApp Business', 
        tags: ['Vue', 'TypeScript', 'PostgreSQL'], 
        githubUrl: '#', 
        liveUrl: 'https://www.zapfacil.com',
        image: null
    },
    { 
        id: 3, 
        title: 'Gerenciamei', 
        shortDescription: 'Blog WordPress especializado em gestão para MEI', 
        tags: ['WordPress', 'JavaScript', 'SEO'], 
        githubUrl: '#', 
        liveUrl: 'https://solicitar.gerenciamei.com',
        image: null
    },
    { 
        id: 4, 
        title: 'Snaprix', 
        shortDescription: 'Jogo mobile viciante estilo Tetris', 
        tags: ['Flutter', 'Dart', 'Game'], 
        githubUrl: 'https://github.com/MariaEduardaaf/Snaprix', 
        liveUrl: null,
        image: '/projects/snaprix.svg'
    },
    { 
        id: 5, 
        title: 'PlaylistPorter Website', 
        shortDescription: 'Landing page responsiva para transferência de playlists', 
        tags: ['HTML', 'JavaScript', 'CSS'], 
        githubUrl: 'https://github.com/MariaEduardaaf/playlistporter-website', 
        liveUrl: 'https://playlistporter-website.vercel.app',
        image: null
    },
    { 
        id: 6, 
        title: 'FoodSpot', 
        shortDescription: 'App de delivery de comida com interface moderna', 
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
    border: 2px solid transparent;
    border-radius: 1rem;
    overflow: hidden;
    z-index: 0;
    transition: all 0.3s ease;
}

.project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 2px;
    background: linear-gradient(90deg, #6b21a8, #9333ea, #8b5cf6, #9333ea, #6b21a8);
    background-size: 300% 100%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.project-card:hover::before {
    opacity: 1;
    animation: border-glow 2s linear infinite;
}

@keyframes border-glow {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 0%; }
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>