<template>
    <section id="projects"
        class="pt-24 pb-16 bg-background dark:bg-gray-900 transition-colors duration-300 font-poppins overflow-hidden">

        <div class="max-w-7xl mx-auto px-4">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                {{ t('projects.title') }}
            </h1>
            <p class="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                {{ t('projects.subtitle') }}
            </p>

            <!-- Carrossel Infinito -->
            <div
                class="relative pt-8"
                @mouseenter="pauseAutoplay"
                @mouseleave="resumeAutoplay">

                <!-- Track do carrossel -->
                <div
                    ref="track"
                    class="flex gap-6 transition-transform duration-500 ease-out"
                    :style="{ transform: `translateX(${translateX}px)` }">

                    <!-- Cards duplicados para efeito infinito -->
                    <article
                        v-for="(project, index) in infiniteProjects"
                        :key="`${project.id}-${index}`"
                        class="flex-shrink-0 w-[420px] group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600">

                        <!-- Imagem do projeto -->
                        <div class="relative h-56 overflow-hidden bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-purple-900/30 dark:via-gray-800 dark:to-blue-900/30">
                            <!-- Badge de tipo -->
                            <div class="absolute top-3 left-3 z-10">
                                <span :class="getBadgeClass(project)"
                                    class="px-2.5 py-1 text-xs font-medium rounded-full">
                                    {{ getOriginTag(project) }}
                                </span>
                            </div>

                            <!-- Skeleton Loading -->
                            <div v-if="!loadedImages[`${project.id}-${index}`]"
                                 class="absolute inset-0 flex items-center justify-center">
                                <div class="animate-pulse w-full h-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>

                            <!-- Imagem -->
                            <div v-if="project.image && (project.isLogo || project.isAppIcon)"
                                 class="w-full h-full flex items-center justify-center">
                                <img :src="getImageUrl(project.image)"
                                     :alt="project.altText || project.title"
                                     :class="[
                                         project.isAppIcon ? 'w-40 h-40 rounded-2xl shadow-lg' : 'w-52 h-auto',
                                         loadedImages[`${project.id}-${index}`] ? 'opacity-100' : 'opacity-0'
                                     ]"
                                     class="transition-all duration-300 group-hover:scale-110"
                                     loading="lazy"
                                     @load="onImageLoad(project.id, index)"
                                     @error="handleImageError($event, project, index)">
                            </div>
                            <img v-else-if="project.image"
                                 :src="getImageUrl(project.image)"
                                 :alt="project.altText || project.title"
                                 :class="loadedImages[`${project.id}-${index}`] ? 'opacity-100' : 'opacity-0'"
                                 class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                                 loading="lazy"
                                 @load="onImageLoad(project.id, index)"
                                 @error="handleImageError($event, project, index)">
                            <div v-else
                                 class="w-full h-full flex items-center justify-center">
                                <font-awesome-icon :icon="['fas', 'code']" class="text-3xl text-purple-200 dark:text-purple-700" />
                            </div>

                            <!-- Overlay com links -->
                            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <a v-if="project.liveUrl"
                                   :href="project.liveUrl"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-500 hover:text-white transition-colors duration-200"
                                   :aria-label="'Ver projeto'">
                                    <font-awesome-icon :icon="project.isAppStore ? ['fab', 'apple'] : ['fas', 'external-link-alt']" class="text-sm" />
                                </a>
                                <a v-if="project.githubUrl && project.githubUrl !== '#'"
                                   :href="project.githubUrl"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                                   :aria-label="'Ver codigo no GitHub'">
                                    <font-awesome-icon :icon="['fab', 'github']" class="text-sm" />
                                </a>
                            </div>
                        </div>

                        <!-- Conteudo -->
                        <div class="p-4">
                            <!-- Tecnologias -->
                            <div class="flex flex-wrap gap-1.5 mb-2">
                                <span v-for="tag in project.tags.slice(0, 3)" :key="tag"
                                    class="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                                    {{ tag }}
                                </span>
                            </div>

                            <!-- Titulo -->
                            <h3 class="text-base font-bold text-gray-900 dark:text-gray-100 mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
                                {{ t(`projects.items.${project.titleKey}.title`) }}
                            </h3>

                            <!-- Descricao -->
                            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
                                {{ t(`projects.items.${project.titleKey}.description`) }}
                            </p>

                            <!-- Footer -->
                            <div class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                <span class="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                    <font-awesome-icon v-if="project.isAppStore" :icon="['fab', 'apple']" />
                                    {{ project.isAppStore ? 'App Store' : (project.githubUrl === '#' ? t('projects.tags.company') : getOriginTag(project)) }}
                                </span>

                                <a v-if="project.liveUrl"
                                   :href="project.liveUrl"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 transition-colors">
                                    {{ t('projects.buttons.viewProject') }}
                                    <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-xs" />
                                </a>
                                <span v-else class="text-xs text-gray-400 dark:text-gray-500 italic">
                                    {{ t('projects.status.inDevelopment') }}
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <!-- Indicador de progresso -->
            <div class="flex justify-center mt-8">
                <div class="flex gap-1.5">
                    <div
                        v-for="(_, index) in projects"
                        :key="index"
                        :class="[
                            'w-1.5 h-1.5 rounded-full transition-all duration-300',
                            currentIndex % projects.length === index
                                ? 'bg-purple-500 w-4'
                                : 'bg-gray-300 dark:bg-gray-600'
                        ]">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import snaprixImg from '../assets/img/snaprix.png'
import playlistPorterImg from '../assets/img/PlaylistPorterIcon.png'
import doguinhoImg from '../assets/img/doguinhoLogo.png'

const { t } = useI18n()

const track = ref(null)
const currentIndex = ref(0)
const translateX = ref(0)
const cardWidth = 420
const gap = 24
let autoplayInterval = null
let isTransitioning = false
const loadedImages = ref({})

function onImageLoad(projectId, index) {
    loadedImages.value[`${projectId}-${index}`] = true
}

const projects = ref([
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
    {
        id: 2,
        titleKey: 'zapFacil',
        tags: ['Vue.js', 'Firebase', 'REST API'],
        githubUrl: '#',
        liveUrl: 'https://www.zapfacil.com',
        image: 'https://zapfacil-s3.s3.us-west-2.amazonaws.com/Assets/dev//WJLMvPJgMwMIgno.png?t=1642507014149?t=1642507015119',
        altText: 'Logo do aplicativo ZapFacil',
        isLogo: true
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

// Duplica os projetos para criar efeito infinito
const infiniteProjects = computed(() => {
    return [...projects.value, ...projects.value, ...projects.value]
})

function nextSlide() {
    if (isTransitioning) return
    currentIndex.value++
    translateX.value = -currentIndex.value * (cardWidth + gap)

    // Quando chegar no final do segundo conjunto, volta para o primeiro sem animação
    if (currentIndex.value >= projects.value.length * 2) {
        isTransitioning = true
        setTimeout(() => {
            if (track.value) {
                track.value.style.transition = 'none'
                currentIndex.value = projects.value.length
                translateX.value = -currentIndex.value * (cardWidth + gap)

                setTimeout(() => {
                    if (track.value) {
                        track.value.style.transition = 'transform 500ms ease-out'
                    }
                    isTransitioning = false
                }, 50)
            }
        }, 500)
    }
}

function startAutoplay() {
    // Posiciona no meio para permitir scroll infinito
    currentIndex.value = projects.value.length
    translateX.value = -currentIndex.value * (cardWidth + gap)

    autoplayInterval = setInterval(() => {
        nextSlide()
    }, 2000)
}

function pauseAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval)
        autoplayInterval = null
    }
}

function resumeAutoplay() {
    if (!autoplayInterval) {
        autoplayInterval = setInterval(() => {
            nextSlide()
        }, 2000)
    }
}

onMounted(() => {
    startAutoplay()
})

onUnmounted(() => {
    pauseAutoplay()
})

const getImageUrl = (imagePath) => {
    if (!imagePath) return null
    return imagePath
}

const handleImageError = (event, project, index) => {
    event.target.style.display = 'none'
    loadedImages.value[`${project.id}-${index}`] = true
}

const getOriginTag = (project) => {
    if (project.isAppStore) return 'App Store'
    if (project.githubUrl === '#') return t('projects.tags.company')
    if (project.id === 4 || project.id === 5 || project.id === 6) return t('projects.tags.personal')
    return 'Freelance'
}

const getBadgeClass = (project) => {
    if (project.isAppStore) {
        return 'bg-black/80 text-white'
    }
    if (project.githubUrl === '#') {
        return 'bg-blue-500 text-white'
    }
    if (project.id === 4 || project.id === 5 || project.id === 6) {
        return 'bg-green-500 text-white'
    }
    return 'bg-purple-500 text-white'
}
</script>

<style scoped>
.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
