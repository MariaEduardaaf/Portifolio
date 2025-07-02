<template>
  <div class="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
    <!-- Navigation Header -->
    <nav class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link 
            to="/" 
            class="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            <span class="font-medium">{{ t('navigation.back') }}</span>
          </router-link>
          
          <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {{ project?.title || t('projects.loading') }}
          </h1>
          
          <div class="w-20"></div> <!-- Spacer for center alignment -->
        </div>
      </div>
    </nav>

    <!-- Project Content -->
    <div v-if="project" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Project Image/Preview -->
        <div class="space-y-4">
          <div class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img 
              v-if="project.image" 
              :src="getImageUrl(project.image)" 
              :alt="project.title"
              class="w-full h-full object-cover"
              @error="handleImageError($event, project)">
            
            <img 
              v-else-if="project.liveUrl" 
              :src="getScreenshotUrl(project.liveUrl)" 
              :alt="project.title + ' preview'"
              class="w-full h-full object-cover"
              @error="handleImageError($event, project)">
            
            <div v-else class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <div class="text-center">
                <font-awesome-icon :icon="['fas', 'code']" class="text-4xl mb-4" />
                <p class="text-lg font-medium">{{ project.title }}</p>
              </div>
            </div>
          </div>

          <!-- Screenshots Gallery -->
          <div v-if="project.screenshots && project.screenshots.length > 0" class="grid grid-cols-3 gap-2">
            <div 
              v-for="(screenshot, index) in project.screenshots.slice(0, 3)" 
              :key="index"
              class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                :src="screenshot" 
                :alt="`${project.title} screenshot ${index + 1}`"
                class="w-full h-full object-cover">
            </div>
          </div>
        </div>

        <!-- Project Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {{ project.title }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ project.description || project.shortDescription }}
            </p>
          </div>

          <!-- Technologies -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {{ t('projects.technologies') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <div 
                v-for="tag in project.tags" 
                :key="tag"
                class="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                <img 
                  v-if="getTechIcon(tag)" 
                  :src="getTechIcon(tag)" 
                  :alt="tag" 
                  class="w-5 h-5">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ tag }}</span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-wrap gap-4">
            <a 
              v-if="project.githubUrl && project.githubUrl !== '#'" 
              :href="project.githubUrl" 
              target="_blank"
              class="inline-flex items-center space-x-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
              <font-awesome-icon :icon="['fab', 'github']" />
              <span>{{ t('projects.viewCode') }}</span>
            </a>
            
            <a 
              v-if="project.liveUrl" 
              :href="project.liveUrl" 
              target="_blank"
              class="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
              <span>{{ t('projects.viewLive') }}</span>
            </a>

            <div 
              v-if="project.githubUrl === '#'" 
              class="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-6 py-3 rounded-lg font-medium">
              <font-awesome-icon :icon="['fas', 'building']" />
              <span>{{ t('projects.companyProject') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Details -->
      <div v-if="project.features || project.challenges || project.learnings" class="space-y-8">
        <!-- Features -->
        <div v-if="project.features" class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {{ t('projects.features') }}
          </h3>
          <ul class="space-y-2">
            <li 
              v-for="feature in project.features" 
              :key="feature"
              class="flex items-start space-x-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-600 dark:text-gray-300">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Challenges -->
        <div v-if="project.challenges" class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {{ t('projects.challenges') }}
          </h3>
          <ul class="space-y-2">
            <li 
              v-for="challenge in project.challenges" 
              :key="challenge"
              class="flex items-start space-x-3">
              <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-orange-500 mt-1 flex-shrink-0" />
              <span class="text-gray-600 dark:text-gray-300">{{ challenge }}</span>
            </li>
          </ul>
        </div>

        <!-- Learnings -->
        <div v-if="project.learnings" class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {{ t('projects.learnings') }}
          </h3>
          <ul class="space-y-2">
            <li 
              v-for="learning in project.learnings" 
              :key="learning"
              class="flex items-start space-x-3">
              <font-awesome-icon :icon="['fas', 'lightbulb']" class="text-blue-500 mt-1 flex-shrink-0" />
              <span class="text-gray-600 dark:text-gray-300">{{ learning }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="flex items-center justify-center min-h-[50vh]">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p class="text-gray-600 dark:text-gray-400">{{ t('projects.loading') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const project = ref(null)

const projects = [
  { 
    id: 1, 
    title: 'Enem Ninja', 
    shortDescription: 'App mobile para preparação do ENEM com simulados, questões e estatísticas de desempenho.',
    description: 'Aplicativo mobile desenvolvido em Flutter para ajudar estudantes na preparação para o ENEM. O app oferece simulados completos, banco de questões organizadas por matéria, estatísticas detalhadas de desempenho e sistema de gamificação para manter o engajamento dos usuários.',
    tags: ['Flutter', 'Dart', 'Firebase'], 
    githubUrl: '#', 
    liveUrl: 'https://apps.apple.com/es/app/enem-ninja/id6478286547',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a4/2d/b3/a42db32a-fe3d-aeba-1b54-00ebde6f3cb4/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/64/d3/f4/64d3f4e8-5b69-bac4-4815-e70b8ec0f442/96c372e0-8941-4d4e-8fc3-4b31ffbd6a12_5pol-Home.png/626x0w.png',
      'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/1f/a7/51/1fa7510d-cf71-e854-c335-469e45c2be36/98b5b8a0-9ac0-4340-a9b4-72ef12494aa1_5pol-Simulados.png/626x0w.png',
      'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ae/1e/c1/ae1ec1ae-5f2c-2a9c-f042-08c13d9e3bd2/dadab3b8-7088-4feb-a352-be7f56d2e37d_5pol-Trilha.png/626x0w.png'
    ],
    features: [
      'Simulados completos baseados no ENEM real',
      'Banco de questões organizadas por matéria e dificuldade',
      'Estatísticas detalhadas de desempenho',
      'Sistema de gamificação com conquistas',
      'Interface intuitiva e responsiva',
      'Suporte offline para questões baixadas'
    ],
    challenges: [
      'Implementação de sistema de pontuação complexo',
      'Otimização de performance para grandes volumes de dados',
      'Sincronização de progresso entre dispositivos',
      'Design responsivo para diferentes tamanhos de tela'
    ],
    learnings: [
      'Aprofundamento em Flutter e Dart',
      'Integração com Firebase para backend',
      'Implementação de gamificação em apps educacionais',
      'Otimização de UX para aplicações de estudo'
    ]
  },
  { 
    id: 2, 
    title: 'ZapFácil', 
    shortDescription: 'SaaS para gestão de comunicação empresarial via WhatsApp com automação e analytics.',
    description: 'Plataforma SaaS desenvolvida em Vue.js para pequenas e médias empresas gerenciarem sua comunicação via WhatsApp. Oferece automação de mensagens, gestão de contatos, analytics avançados e integração com CRM.',
    tags: ['Vue', 'TypeScript', 'PostgreSQL'], 
    githubUrl: '#', 
    liveUrl: 'https://www.zapfacil.com',
    image: null,
    features: [
      'Automação de mensagens do WhatsApp',
      'Dashboard com métricas de engajamento',
      'Gestão centralizada de contatos',
      'Integração com APIs de CRM',
      'Sistema de templates de mensagens',
      'Relatórios detalhados de performance'
    ],
    challenges: [
      'Integração complexa com API do WhatsApp Business',
      'Implementação de sistema de billing recorrente',
      'Otimização de performance para alta concorrência',
      'Compliance com regulamentações de privacidade'
    ],
    learnings: [
      'Desenvolvimento de SaaS escalável',
      'Arquitetura de microserviços',
      'Integração com APIs de terceiros',
      'Implementação de sistemas de billing'
    ]
  },
  { 
    id: 3, 
    title: 'Gerenciamei', 
    shortDescription: 'Blog WordPress especializado em gestão de MEI com foco em SEO e conteúdo educacional.',
    description: 'Blog desenvolvido em WordPress focado em educação financeira e gestão para Microempreendedores Individuais (MEI). Implementação de estratégias de SEO avançadas, design responsivo e sistema de conteúdo otimizado.',
    tags: ['WordPress', 'JavaScript', 'SEO'], 
    githubUrl: '#', 
    liveUrl: 'https://solicitar.gerenciamei.com',
    image: null,
    features: [
      'Design responsivo e otimizado',
      'Estratégia de SEO avançada',
      'Sistema de comentários integrado',
      'Newsletter automatizada',
      'Formulários de contato customizados',
      'Analytics detalhados de tráfego'
    ],
    challenges: [
      'Otimização para Core Web Vitals',
      'Implementação de schema markup',
      'Performance em mobile devices',
      'Estratégia de link building'
    ],
    learnings: [
      'SEO técnico avançado',
      'Otimização de performance WordPress',
      'Estratégias de content marketing',
      'Analytics e métricas de engajamento'
    ]
  },
  { 
    id: 4, 
    title: 'Snaprix', 
    shortDescription: 'Jogo Tetris desenvolvido em Flutter com Flame engine, incluindo sistema de pontuação e níveis.',
    description: 'Reimplementação moderna do clássico jogo Tetris usando Flutter e Flame engine. Inclui sistema de pontuação, níveis progressivos, efeitos visuais e controles intuitivos para dispositivos móveis.',
    tags: ['Flutter', 'Dart', 'Game'], 
    githubUrl: 'https://github.com/MariaEduardaaf/Snaprix', 
    liveUrl: null,
    image: '/projects/snaprix.svg',
    features: [
      'Mecânica clássica do Tetris',
      'Sistema de pontuação e níveis',
      'Efeitos visuais e sonoros',
      'Controles otimizados para mobile',
      'Sistema de high scores',
      'Pausar e retomar jogo'
    ],
    challenges: [
      'Implementação da lógica de rotação das peças',
      'Otimização de performance para 60fps',
      'Sistema de detecção de linhas completas',
      'Balanceamento de dificuldade progressiva'
    ],
    learnings: [
      'Game development com Flutter/Flame',
      'Implementação de game loops',
      'Otimização de performance em jogos',
      'Design de UX para games mobile'
    ]
  },
  { 
    id: 5, 
    title: 'PlaylistPorter Website', 
    shortDescription: 'Landing page promocional desenvolvida com HTML, CSS e JavaScript vanilla.',
    description: 'Website promocional desenvolvido com tecnologias web fundamentais (HTML5, CSS3, JavaScript) para divulgar um aplicativo de transferência de playlists entre plataformas de música.',
    tags: ['HTML', 'JavaScript', 'CSS'], 
    githubUrl: 'https://github.com/MariaEduardaaf/playlistporter-website', 
    liveUrl: 'https://playlistporter-website.vercel.app',
    image: null,
    features: [
      'Design responsivo mobile-first',
      'Animações CSS personalizadas',
      'Formulário de contato funcional',
      'Otimização para SEO',
      'Performance otimizada',
      'Cross-browser compatibility'
    ],
    challenges: [
      'Compatibilidade entre navegadores',
      'Otimização de imagens e assets',
      'Implementação de animações suaves',
      'Design responsivo sem frameworks'
    ],
    learnings: [
      'Fundamentos sólidos de web development',
      'CSS Grid e Flexbox avançado',
      'JavaScript vanilla moderno',
      'Otimização de performance web'
    ]
  },
  { 
    id: 6, 
    title: 'FoodSpot', 
    shortDescription: 'App Flutter para descoberta de restaurantes com geolocalização e avaliações.',
    description: 'Aplicativo mobile desenvolvido em Flutter para descoberta de restaurantes próximos, com sistema de avaliações, favoritos e recomendações personalizadas baseadas em localização.',
    tags: ['Flutter', 'Dart', 'Mobile'], 
    githubUrl: 'https://github.com/MariaEduardaaf/foodspot', 
    liveUrl: null,
    image: '/projects/foodspot.svg',
    features: [
      'Busca por restaurantes próximos',
      'Sistema de avaliações e comentários',
      'Lista de favoritos pessoal',
      'Filtros por tipo de cozinha',
      'Integração com mapas',
      'Recomendações personalizadas'
    ],
    challenges: [
      'Integração com APIs de geolocalização',
      'Implementação de sistema de ratings',
      'Otimização de busca e filtros',
      'Design de UX intuitivo para descoberta'
    ],
    learnings: [
      'Integração com Google Maps API',
      'Implementação de geolocalização',
      'Design patterns para apps de descoberta',
      'Sistemas de recomendação simples'
    ]
  }
]

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  return imagePath
}

const getScreenshotUrl = (url) => {
  if (!url) return null
  const domain = new URL(url).hostname.replace('www.', '')
  return `https://dummyimage.com/1200x800/9333ea/ffffff&text=${encodeURIComponent(domain)}`
}

const handleImageError = (event, project) => {
  if (project.screenshots && project.screenshots.length > 0) {
    event.target.src = project.screenshots[0]
    return
  }
  
  if (project.liveUrl && !event.target.src.includes('dummyimage.com')) {
    event.target.src = getScreenshotUrl(project.liveUrl)
    return
  }
  
  event.target.style.display = 'none'
}

const getTechIcon = (tech) => {
  const iconMap = {
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
    'Web': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'
  }
  return iconMap[tech] || null
}

onMounted(() => {
  const projectId = parseInt(route.params.id)
  project.value = projects.find(p => p.id === projectId)
})
</script>

<style scoped>
/* Additional styles if needed */
</style>