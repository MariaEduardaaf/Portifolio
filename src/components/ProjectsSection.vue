<template>
    <section id="projects"
        class="pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins">

        <div class="max-w-7xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                {{ t('projects.title') }}
            </h1> 
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                <div v-for="project in projects" :key="project.id"
                    class="project-card rounded-xl border border-purple-300 bg-purple-100 dark:bg-purple-900 shadow-sm group relative transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:ring-2 hover:ring-purple-500 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-gray-900 overflow-hidden min-h-[480px] flex flex-col">

                    <!-- Tag de origem no topo -->
                    <div class="absolute top-3 left-3 z-10">
                        <span :class="getOriginTagClass(project)"
                            class="px-2 py-1 text-xs font-semibold rounded-full">
                            {{ getOriginTag(project) }}
                        </span>
                    </div>

                    <!-- Imagem do projeto -->
                    <div class="relative h-48 overflow-hidden rounded-t-xl">
                        <div v-if="project.image && project.isLogo" 
                             class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-800">
                            <img :src="getImageUrl(project.image)" 
                                 :alt="project.altText || project.title"
                                 :class="project.id === 4 ? 'w-28 h-auto transition-transform duration-300 group-hover:scale-105' : 'w-40 h-auto transition-transform duration-300 group-hover:scale-105'"
                                 @error="handleImageError($event, project)"
                        </div>
                        
                        <div v-else-if="project.image && project.isAppIcon" 
                             class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-800">
                            <img :src="getImageUrl(project.image)" 
                                 :alt="project.altText || project.title"
                                 class="w-24 h-24 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                                 @error="handleImageError($event, project)">
                        </div>
                        
                        <img v-else-if="project.image" 
                             :src="getImageUrl(project.image)" 
                             :alt="project.altText || project.title"
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                             @error="handleImageError($event, project)">
                        
                        <img v-else-if="project.liveUrl && !project.iconEmoji" 
                             :src="getScreenshotUrl(project.liveUrl)" 
                             :alt="project.title + ' preview'"
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                             @error="handleImageError($event, project)">
                        
                        <div v-else-if="project.iconEmoji" 
                             class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-800">
                            <div class="text-5xl mb-2">{{ project.iconEmoji }}</div>
                        </div>
                        
                        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-800">
                            <font-awesome-icon :icon="['fas', 'code']" class="text-4xl text-purple-600 dark:text-purple-300" />
                        </div>
                    </div>

                    <!-- Conteúdo do card -->
                    <div class="p-4 bg-white dark:bg-gray-800 rounded-b-xl flex-grow flex flex-col justify-between">
                        <!-- Conteúdo superior -->
                        <div class="space-y-3">
                            <!-- Título -->
                            <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                {{ t(`projects.items.${project.titleKey}.title`) }}
                            </h3>

                            <!-- Subtítulo -->
                            <p class="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                                {{ t(`projects.items.${project.titleKey}.subtitle`) }}
                            </p>

                            <!-- Descrição curta -->
                            <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                                {{ t(`projects.items.${project.titleKey}.description`) }}
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
                        </div>

                        <!-- Footer com link do projeto -->
                        <div class="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
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
                                   ? 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-md'
                                   : 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105'"
                               :aria-label="project.isAppStore 
                                   ? `Ver ${project.title} na App Store` 
                                   : `Ver projeto ${project.title} ao vivo`">
                                <span>{{ project.isAppStore ? t('projects.buttons.viewAppStore') : t('projects.buttons.viewProject') }}</span>
                                <font-awesome-icon :icon="project.isAppStore ? ['fab', 'apple'] : ['fas', 'external-link-alt']" class="text-xs" />
                            </a>
                            <span v-else class="text-xs text-gray-400 dark:text-gray-500 italic">
                                {{ t('projects.status.inDevelopment') }}
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
import snaprixImg from '../assets/img/snaprix.png'
import playlistPorterImg from '../assets/img/PlaylistPorterIcon.png'
import doguinhoImg from '../assets/img/doguinhoLogo.png'

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
    if (project.isAppStore) return t('projects.tags.appStore')
    if (project.githubUrl === '#') return t('projects.tags.company')
    if (project.id === 4 || project.id === 5 || project.id === 6) return t('projects.tags.personal')
    return t('projects.tags.freelancer')
}

const getOriginTagClass = (project) => {
    if (project.isAppStore) {
        return 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:bg-gradient-to-r dark:from-purple-800 dark:to-purple-900 dark:text-purple-300 ring-1 ring-purple-300 dark:ring-purple-600'
    }
    if (project.githubUrl === '#') {
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    }
    if (project.id === 4 || project.id === 5 || project.id === 6) {
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    }
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
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
        'AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        'REST API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
    }
    return icons[tech] || null
}

const projects = ref([
    // Projetos da App Store em destaque
    { 
        id: 7, 
        titleKey: 'cartoesFacil',
        tags: ['Flutter', 'Firebase'], 
        githubUrl: null, 
        liveUrl: 'https://apps.apple.com/br/app/cart%C3%A3o-f%C3%A1cil/id1251949878',
        image: 'https://play-lh.googleusercontent.com/m_NB3ZjECKAScPBKafXGo0oHbeBSHrTGflxi-NFcTS_OL2aNScFDuLVZoJtndRnjpG0F=w480-h960-rw',
        isAppStore: true,
        isAppIcon: true
    },
    { 
        id: 8, 
        titleKey: 'jogoBiblia',
        tags: ['Flutter', 'Firebase'], 
        githubUrl: null, 
        liveUrl: 'https://apps.apple.com/es/app/jogo-da-b%C3%ADblia-estudo-di%C3%A1rio/id6463932846',
        image: 'https://play-lh.googleusercontent.com/4KIygsh_v1cmEjw4c5E-sDfXoKgna7CGluAtldQZsFqrelqJHw6SRLu24GQexFFP5J62=w480-h960',
        isAppStore: true,
        isAppIcon: true
    },
    { 
        id: 9, 
        titleKey: 'caloTrack',
        tags: ['Flutter', 'Firebase', 'AI'], 
        githubUrl: null, 
        liveUrl: 'https://apps.apple.com/es/app/calotrack-monitor-de-calorias/id6463879811',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c5/03/31/c503312c-d83a-af79-a803-9f154c85f47e/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/1024x1024bb.png',
        isAppStore: true,
        isAppIcon: true
    },
    { 
        id: 1, 
        titleKey: 'enemNinja',
        tags: ['Flutter', 'Firebase'], 
        githubUrl: '#', 
        liveUrl: 'https://apps.apple.com/es/app/enem-ninja/id6478286547',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/95/1b/40951bbe-7b2a-84bc-c40b-298d4c1161cf/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/1024x1024bb.png',
        isAppStore: true,
        isAppIcon: true
    },
    // Outros projetos
    { 
        id: 2, 
        titleKey: 'zapFacil',
        tags: ['Flutter', 'Firebase', 'REST API'], 
        githubUrl: '#', 
        liveUrl: 'https://www.zapfacil.com',
        image: 'https://zapfacil-s3.s3.us-west-2.amazonaws.com/Assets/dev//WJLMvPJgMwMIgno.png?t=1642507014149?t=1642507015119',
        altText: 'Logo do aplicativo ZapFácil',
        isLogo: true,
        year: 2023
    },
    { 
        id: 3, 
        titleKey: 'gerenciaMei',
        tags: ['WordPress', 'JavaScript', 'SEO'], 
        githubUrl: '#', 
        liveUrl: 'https://solicitar.gerenciamei.com',
        image: 'https://play-lh.googleusercontent.com/E5zhNMUB5DIQbHwBA5m49nfoLo09xj_e4wxwBVW_2RcW4HEaXmkHtl8E6xz7bXbWPN0=w480-h960',
        isAppIcon: true
    },
    { 
        id: 4, 
        titleKey: 'snaprix',
        tags: ['Flutter', 'Dart', 'Game'], 
        githubUrl: 'https://github.com/MariaEduardaaf/Snaprix', 
        liveUrl: null,
        image: snaprixImg,
        altText: 'Logo do aplicativo Snaprix',
        isLogo: true
    },
    { 
        id: 5, 
        titleKey: 'playlistPorter',
        tags: ['HTML', 'JavaScript', 'CSS'], 
        githubUrl: 'https://github.com/MariaEduardaaf/playlistporter-website', 
        liveUrl: 'https://playlistporter-website.vercel.app',
        image: playlistPorterImg,
        altText: 'Logo do PlaylistPorter',
        isLogo: true
    },
    { 
        id: 6, 
        titleKey: 'petCare',
        tags: ['HTML', 'CSS', 'JavaScript'], 
        githubUrl: 'https://github.com/MariaEduardaaf/projeto-doguinho', 
        liveUrl: 'https://projeto-doguinho.vercel.app',
        image: doguinhoImg,
        altText: 'Logo do PetCare Platform',
        isLogo: true
    }
])
</script>

<style scoped>
.project-card {
    position: relative;
    border-radius: 0.75rem;
    overflow: hidden;
    z-index: 0;
    transition: all 0.3s ease;
}


.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>