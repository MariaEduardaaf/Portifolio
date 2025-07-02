import { faVuejs, faWordpress, faJs, faHtml5, faCss3, faFlutter, faApple, faGooglePlay, faGithub } from '@fortawesome/free-brands-svg-icons'

export const projects = [
  {
    id: 1,
    slug: 'enem-ninja',
    title: 'Enem Ninja',
    shortDescription: {
      pt: 'App educacional para preparação do ENEM com simulados, questões e cronômetro',
      en: 'Educational app for ENEM preparation with mock tests, questions and timer',
      es: 'App educativa para preparación del ENEM con simulacros, preguntas y cronómetro',
      ru: 'Образовательное приложение для подготовки к ENEM с тестами, вопросами и таймером',
      de: 'Bildungs-App für ENEM-Vorbereitung mit Übungstests, Fragen und Timer'
    },
    description: {
      pt: 'Aplicativo móvel desenvolvido em Flutter para ajudar estudantes brasileiros na preparação para o ENEM. Oferece simulados completos, banco de questões organizadas por matéria, cronômetro para treino de tempo e sistema de acompanhamento de desempenho.',
      en: 'Mobile application developed in Flutter to help Brazilian students prepare for ENEM. Offers complete mock tests, question bank organized by subject, timer for time training and performance tracking system.',
      es: 'Aplicación móvil desarrollada en Flutter para ayudar a estudiantes brasileños en la preparación para el ENEM. Ofrece simulacros completos, banco de preguntas organizadas por materia, cronómetro para entrenamiento de tiempo y sistema de seguimiento de rendimiento.',
      ru: 'Мобильное приложение, разработанное на Flutter, чтобы помочь бразильским студентам подготовиться к ENEM. Предлагает полные пробные тесты, банк вопросов, организованный по предметам, таймер для тренировки времени и систему отслеживания результатов.',
      de: 'Mobile Anwendung entwickelt in Flutter, um brasilianischen Studenten bei der Vorbereitung auf ENEM zu helfen. Bietet vollständige Übungstests, Fragenbank nach Fächern organisiert, Timer für Zeittraining und Leistungsüberwachungssystem.'
    },
    technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    techIcons: [faFlutter],
    image: '/images/projects/enem-ninja/cover.jpg',
    screenshots: [
      '/images/projects/enem-ninja/screenshot-1.jpg',
      '/images/projects/enem-ninja/screenshot-2.jpg',
      '/images/projects/enem-ninja/screenshot-3.jpg',
      '/images/projects/enem-ninja/screenshot-4.jpg'
    ],
    features: {
      pt: [
        'Simulados completos do ENEM',
        'Banco de questões por matéria',
        'Cronômetro personalizado',
        'Relatórios de desempenho',
        'Interface intuitiva e moderna',
        'Funcionamento offline'
      ],
      en: [
        'Complete ENEM mock tests',
        'Question bank by subject',
        'Custom timer',
        'Performance reports',
        'Intuitive and modern interface',
        'Offline functionality'
      ],
      es: [
        'Simulacros completos del ENEM',
        'Banco de preguntas por materia',
        'Cronómetro personalizado',
        'Informes de rendimiento',
        'Interfaz intuitiva y moderna',
        'Funcionamiento sin conexión'
      ],
      ru: [
        'Полные пробные тесты ENEM',
        'Банк вопросов по предметам',
        'Настраиваемый таймер',
        'Отчеты о производительности',
        'Интуитивный и современный интерфейс',
        'Автономная работа'
      ],
      de: [
        'Vollständige ENEM-Übungstests',
        'Fragenbank nach Fächern',
        'Anpassbarer Timer',
        'Leistungsberichte',
        'Intuitive und moderne Benutzeroberfläche',
        'Offline-Funktionalität'
      ]
    },
    challenges: {
      pt: [
        'Implementação de banco de dados local eficiente',
        'Criação de cronômetro preciso e responsivo',
        'Design de interface amigável para estudantes',
        'Otimização de performance para dispositivos diversos'
      ],
      en: [
        'Implementation of efficient local database',
        'Creation of accurate and responsive timer',
        'Student-friendly interface design',
        'Performance optimization for various devices'
      ],
      es: [
        'Implementación de base de datos local eficiente',
        'Creación de cronómetro preciso y responsivo',
        'Diseño de interfaz amigable para estudiantes',
        'Optimización de rendimiento para dispositivos diversos'
      ],
      ru: [
        'Реализация эффективной локальной базы данных',
        'Создание точного и отзывчивого таймера',
        'Дизайн дружественного интерфейса для студентов',
        'Оптимизация производительности для различных устройств'
      ],
      de: [
        'Implementierung einer effizienten lokalen Datenbank',
        'Erstellung eines genauen und responsiven Timers',
        'Studentenfreundliches Interface-Design',
        'Leistungsoptimierung für verschiedene Geräte'
      ]
    },
    learnings: {
      pt: [
        'Desenvolvimento mobile com Flutter',
        'Gerenciamento de estado complexo',
        'Design de UX/UI para educação',
        'Otimização de aplicações móveis'
      ],
      en: [
        'Mobile development with Flutter',
        'Complex state management',
        'UX/UI design for education',
        'Mobile application optimization'
      ],
      es: [
        'Desarrollo móvil con Flutter',
        'Gestión de estado complejo',
        'Diseño de UX/UI para educación',
        'Optimización de aplicaciones móviles'
      ],
      ru: [
        'Мобильная разработка с Flutter',
        'Сложное управление состоянием',
        'UX/UI дизайн для образования',
        'Оптимизация мобильных приложений'
      ],
      de: [
        'Mobile Entwicklung mit Flutter',
        'Komplexe Zustandsverwaltung',
        'UX/UI-Design für Bildung',
        'Mobile Anwendungsoptimierung'
      ]
    },
    githubUrl: null,
    liveUrl: 'https://apps.apple.com/br/app/enem-ninja/id1635328727',
    isCompanyProject: false,
    platforms: ['iOS', 'Android'],
    category: 'mobile',
    status: 'published',
    year: 2022
  },
  {
    id: 2,
    slug: 'zapfacil',
    title: 'ZapFácil',
    shortDescription: {
      pt: 'SaaS para automação de WhatsApp Business com chatbots inteligentes',
      en: 'SaaS for WhatsApp Business automation with intelligent chatbots',
      es: 'SaaS para automatización de WhatsApp Business con chatbots inteligentes',
      ru: 'SaaS для автоматизации WhatsApp Business с умными чат-ботами',
      de: 'SaaS für WhatsApp Business Automatisierung mit intelligenten Chatbots'
    },
    description: {
      pt: 'Plataforma SaaS desenvolvida em Vue.js para automação de atendimento no WhatsApp Business. Permite criação de chatbots inteligentes, gerenciamento de contatos, envio de mensagens em massa e análise de métricas de atendimento.',
      en: 'SaaS platform developed in Vue.js for WhatsApp Business customer service automation. Allows creation of intelligent chatbots, contact management, bulk messaging and customer service metrics analysis.',
      es: 'Plataforma SaaS desarrollada en Vue.js para automatización de atención al cliente en WhatsApp Business. Permite creación de chatbots inteligentes, gestión de contactos, envío de mensajes masivos y análisis de métricas de atención.',
      ru: 'SaaS платформа, разработанная на Vue.js для автоматизации обслуживания клиентов в WhatsApp Business. Позволяет создавать умных чат-ботов, управлять контактами, отправлять массовые сообщения и анализировать метрики обслуживания.',
      de: 'SaaS-Plattform entwickelt in Vue.js für WhatsApp Business Kundenservice-Automatisierung. Ermöglicht die Erstellung intelligenter Chatbots, Kontaktverwaltung, Bulk-Messaging und Analyse von Kundenservice-Metriken.'
    },
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'WhatsApp API', 'WebSocket'],
    techIcons: [faVuejs, faJs],
    image: '/images/projects/zapfacil/cover.jpg',
    screenshots: [
      '/images/projects/zapfacil/screenshot-1.jpg',
      '/images/projects/zapfacil/screenshot-2.jpg',
      '/images/projects/zapfacil/screenshot-3.jpg',
      '/images/projects/zapfacil/screenshot-4.jpg'
    ],
    features: {
      pt: [
        'Chatbots inteligentes personalizáveis',
        'Gerenciamento avançado de contatos',
        'Envio de mensagens em massa',
        'Dashboard com métricas em tempo real',
        'Integração com WhatsApp Business API',
        'Agendamento de mensagens',
        'Relatórios detalhados de atendimento'
      ],
      en: [
        'Customizable intelligent chatbots',
        'Advanced contact management',
        'Bulk messaging',
        'Real-time metrics dashboard',
        'WhatsApp Business API integration',
        'Message scheduling',
        'Detailed customer service reports'
      ],
      es: [
        'Chatbots inteligentes personalizables',
        'Gestión avanzada de contactos',
        'Envío masivo de mensajes',
        'Dashboard con métricas en tiempo real',
        'Integración con WhatsApp Business API',
        'Programación de mensajes',
        'Informes detallados de atención'
      ],
      ru: [
        'Настраиваемые умные чат-боты',
        'Расширенное управление контактами',
        'Массовые сообщения',
        'Панель метрик в реальном времени',
        'Интеграция с WhatsApp Business API',
        'Планирование сообщений',
        'Подробные отчеты об обслуживании'
      ],
      de: [
        'Anpassbare intelligente Chatbots',
        'Erweiterte Kontaktverwaltung',
        'Bulk-Messaging',
        'Echtzeit-Metriken-Dashboard',
        'WhatsApp Business API Integration',
        'Nachrichtenplanung',
        'Detaillierte Kundenservice-Berichte'
      ]
    },
    challenges: {
      pt: [
        'Integração complexa com WhatsApp Business API',
        'Arquitetura escalável para múltiplos clientes',
        'Interface intuitiva para usuários não técnicos',
        'Processamento em tempo real de mensagens'
      ],
      en: [
        'Complex WhatsApp Business API integration',
        'Scalable architecture for multiple clients',
        'Intuitive interface for non-technical users',
        'Real-time message processing'
      ],
      es: [
        'Integración compleja con WhatsApp Business API',
        'Arquitectura escalable para múltiples clientes',
        'Interfaz intuitiva para usuarios no técnicos',
        'Procesamiento en tiempo real de mensajes'
      ],
      ru: [
        'Сложная интеграция с WhatsApp Business API',
        'Масштабируемая архитектура для множественных клиентов',
        'Интуитивный интерфейс для нетехнических пользователей',
        'Обработка сообщений в реальном времени'
      ],
      de: [
        'Komplexe WhatsApp Business API Integration',
        'Skalierbare Architektur für mehrere Kunden',
        'Intuitive Benutzeroberfläche für nicht-technische Benutzer',
        'Echtzeit-Nachrichtenverarbeitung'
      ]
    },
    learnings: {
      pt: [
        'Desenvolvimento de arquitetura SaaS',
        'Integração com APIs de terceiros',
        'Design de sistemas escaláveis',
        'UX para plataformas empresariais'
      ],
      en: [
        'SaaS architecture development',
        'Third-party API integration',
        'Scalable systems design',
        'UX for enterprise platforms'
      ],
      es: [
        'Desarrollo de arquitectura SaaS',
        'Integración con APIs de terceros',
        'Diseño de sistemas escalables',
        'UX para plataformas empresariales'
      ],
      ru: [
        'Разработка архитектуры SaaS',
        'Интеграция с API третьих сторон',
        'Дизайн масштабируемых систем',
        'UX для корпоративных платформ'
      ],
      de: [
        'SaaS-Architektur-Entwicklung',
        'Drittanbieter-API-Integration',
        'Skalierbare Systemdesign',
        'UX für Unternehmensplattformen'
      ]
    },
    githubUrl: null,
    liveUrl: null,
    isCompanyProject: true,
    platforms: ['Web'],
    category: 'web',
    status: 'private',
    year: 2023
  },
  {
    id: 3,
    slug: 'gerenciamei',
    title: 'GerenciaMEI',
    shortDescription: {
      pt: 'Blog WordPress especializado em gestão para microempreendedores',
      en: 'WordPress blog specialized in management for microentrepreneurs',
      es: 'Blog WordPress especializado en gestión para microempresarios',
      ru: 'Блог WordPress, специализирующийся на управлении для микропредпринимателей',
      de: 'WordPress-Blog spezialisiert auf Management für Mikrounternehmer'
    },
    description: {
      pt: 'Blog educativo desenvolvido em WordPress focado em fornecer conteúdo de qualidade sobre gestão empresarial para microempreendedores individuais (MEI). Inclui artigos sobre finanças, marketing digital, legalização e crescimento de negócios.',
      en: 'Educational blog developed in WordPress focused on providing quality content about business management for individual microentrepreneurs (MEI). Includes articles on finance, digital marketing, legalization and business growth.',
      es: 'Blog educativo desarrollado en WordPress enfocado en proporcionar contenido de calidad sobre gestión empresarial para microempresarios individuales (MEI). Incluye artículos sobre finanzas, marketing digital, legalización y crecimiento de negocios.',
      ru: 'Образовательный блог, разработанный на WordPress, ориентированный на предоставление качественного контента о бизнес-менеджменте для индивидуальных микропредпринимателей (MEI). Включает статьи о финансах, цифровом маркетинге, легализации и росте бизнеса.',
      de: 'Bildungsblog entwickelt in WordPress, fokussiert auf die Bereitstellung von Qualitätsinhalten über Unternehmensführung für individuelle Mikrounternehmer (MEI). Enthält Artikel über Finanzen, digitales Marketing, Legalisierung und Unternehmenswachstum.'
    },
    technologies: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    techIcons: [faWordpress, faJs, faCss3],
    image: '/images/projects/gerenciamei/cover.jpg',
    screenshots: [
      '/images/projects/gerenciamei/screenshot-1.jpg',
      '/images/projects/gerenciamei/screenshot-2.jpg',
      '/images/projects/gerenciamei/screenshot-3.jpg'
    ],
    features: {
      pt: [
        'Conteúdo educativo especializado',
        'Design responsivo e profissional',
        'Sistema de categorias organizado',
        'SEO otimizado para melhor ranking',
        'Newsletter para engajamento',
        'Comentários e interação com leitores'
      ],
      en: [
        'Specialized educational content',
        'Responsive and professional design',
        'Organized category system',
        'SEO optimized for better ranking',
        'Newsletter for engagement',
        'Comments and reader interaction'
      ],
      es: [
        'Contenido educativo especializado',
        'Diseño responsivo y profesional',
        'Sistema de categorías organizado',
        'SEO optimizado para mejor ranking',
        'Newsletter para engagement',
        'Comentarios e interacción con lectores'
      ],
      ru: [
        'Специализированный образовательный контент',
        'Отзывчивый и профессиональный дизайн',
        'Организованная система категорий',
        'SEO оптимизированный для лучшего рейтинга',
        'Рассылка для вовлечения',
        'Комментарии и взаимодействие с читателями'
      ],
      de: [
        'Spezialisierte Bildungsinhalte',
        'Responsives und professionelles Design',
        'Organisiertes Kategoriensystem',
        'SEO-optimiert für besseres Ranking',
        'Newsletter für Engagement',
        'Kommentare und Leserinteraktion'
      ]
    },
    challenges: {
      pt: [
        'Criação de conteúdo relevante e atrativo',
        'Otimização de SEO para nicho específico',
        'Design que inspire confiança em empreendedores',
        'Performance e velocidade de carregamento'
      ],
      en: [
        'Creating relevant and attractive content',
        'SEO optimization for specific niche',
        'Design that inspires trust in entrepreneurs',
        'Performance and loading speed'
      ],
      es: [
        'Creación de contenido relevante y atractivo',
        'Optimización de SEO para nicho específico',
        'Diseño que inspire confianza en emprendedores',
        'Rendimiento y velocidad de carga'
      ],
      ru: [
        'Создание релевантного и привлекательного контента',
        'SEO оптимизация для специфической ниши',
        'Дизайн, вдохновляющий доверие предпринимателей',
        'Производительность и скорость загрузки'
      ],
      de: [
        'Erstellung relevanter und attraktiver Inhalte',
        'SEO-Optimierung für spezifische Nische',
        'Design, das Vertrauen bei Unternehmern schafft',
        'Leistung und Ladegeschwindigkeit'
      ]
    },
    learnings: {
      pt: [
        'Desenvolvimento com WordPress',
        'Estratégias de marketing de conteúdo',
        'SEO e otimização para mecanismos de busca',
        'Design voltado para conversão'
      ],
      en: [
        'WordPress development',
        'Content marketing strategies',
        'SEO and search engine optimization',
        'Conversion-focused design'
      ],
      es: [
        'Desarrollo con WordPress',
        'Estrategias de marketing de contenido',
        'SEO y optimización para motores de búsqueda',
        'Diseño enfocado en conversión'
      ],
      ru: [
        'Разработка на WordPress',
        'Стратегии контент-маркетинга',
        'SEO и оптимизация поисковых систем',
        'Дизайн, ориентированный на конверсию'
      ],
      de: [
        'WordPress-Entwicklung',
        'Content-Marketing-Strategien',
        'SEO und Suchmaschinenoptimierung',
        'Conversion-fokussiertes Design'
      ]
    },
    githubUrl: null,
    liveUrl: 'https://gerenciamei.com.br',
    isCompanyProject: true,
    platforms: ['Web'],
    category: 'web',
    status: 'published',
    year: 2023
  },
  {
    id: 4,
    slug: 'snaprix',
    title: 'Snaprix',
    shortDescription: {
      pt: 'Jogo mobile viciante estilo Tetris desenvolvido em Flutter',
      en: 'Addictive Tetris-style mobile game developed in Flutter',
      es: 'Juego móvil adictivo estilo Tetris desarrollado en Flutter',
      ru: 'Захватывающая мобильная игра в стиле Тетрис, разработанная на Flutter',
      de: 'Süchtig machendes Tetris-ähnliches Handyspiel entwickelt in Flutter'
    },
    description: {
      pt: 'Jogo mobile moderno inspirado no clássico Tetris, desenvolvido com Flutter e Flame Engine. Combina a jogabilidade nostálgica com gráficos modernos, efeitos visuais impressionantes e sistema de pontuação competitivo.',
      en: 'Modern mobile game inspired by classic Tetris, developed with Flutter and Flame Engine. Combines nostalgic gameplay with modern graphics, impressive visual effects and competitive scoring system.',
      es: 'Juego móvil moderno inspirado en el clásico Tetris, desarrollado con Flutter y Flame Engine. Combina la jugabilidad nostálgica con gráficos modernos, efectos visuales impresionantes y sistema de puntuación competitivo.',
      ru: 'Современная мобильная игра, вдохновленная классическим Тетрисом, разработанная с Flutter и Flame Engine. Сочетает ностальгический геймплей с современной графикой, впечатляющими визуальными эффектами и конкурентной системой очков.',
      de: 'Modernes Handyspiel inspiriert vom klassischen Tetris, entwickelt mit Flutter und Flame Engine. Kombiniert nostalgisches Gameplay mit moderner Grafik, beeindruckenden visuellen Effekten und wettbewerbsfähigem Punktesystem.'
    },
    technologies: ['Flutter', 'Dart', 'Flame Engine', 'SQLite'],
    techIcons: [faFlutter],
    image: '/images/projects/snaprix/cover.jpg',
    screenshots: [
      '/images/projects/snaprix/screenshot-1.jpg',
      '/images/projects/snaprix/screenshot-2.jpg',
      '/images/projects/snaprix/screenshot-3.jpg',
      '/images/projects/snaprix/screenshot-4.jpg'
    ],
    features: {
      pt: [
        'Jogabilidade clássica do Tetris modernizada',
        'Gráficos e animações fluidas',
        'Sistema de níveis progressivos',
        'Ranking de pontuações',
        'Efeitos sonoros imersivos',
        'Controles responsivos e intuitivos',
        'Modo offline completo'
      ],
      en: [
        'Modernized classic Tetris gameplay',
        'Smooth graphics and animations',
        'Progressive level system',
        'Score ranking',
        'Immersive sound effects',
        'Responsive and intuitive controls',
        'Complete offline mode'
      ],
      es: [
        'Jugabilidad clásica de Tetris modernizada',
        'Gráficos y animaciones fluidas',
        'Sistema de niveles progresivos',
        'Ranking de puntuaciones',
        'Efectos de sonido inmersivos',
        'Controles responsivos e intuitivos',
        'Modo offline completo'
      ],
      ru: [
        'Модернизированный классический геймплей Тетриса',
        'Плавная графика и анимация',
        'Прогрессивная система уровней',
        'Рейтинг очков',
        'Захватывающие звуковые эффекты',
        'Отзывчивые и интуитивные элементы управления',
        'Полный автономный режим'
      ],
      de: [
        'Modernisiertes klassisches Tetris-Gameplay',
        'Flüssige Grafiken und Animationen',
        'Progressives Level-System',
        'Score-Ranking',
        'Immersive Soundeffekte',
        'Responsive und intuitive Steuerung',
        'Vollständiger Offline-Modus'
      ]
    },
    challenges: {
      pt: [
        'Implementação de física precisa para as peças',
        'Otimização de performance para 60fps consistentes',
        'Balanceamento de dificuldade progressiva',
        'Criação de sistema de controles responsivos'
      ],
      en: [
        'Implementation of precise physics for pieces',
        'Performance optimization for consistent 60fps',
        'Progressive difficulty balancing',
        'Creation of responsive control system'
      ],
      es: [
        'Implementación de física precisa para las piezas',
        'Optimización de rendimiento para 60fps consistentes',
        'Balanceamiento de dificultad progresiva',
        'Creación de sistema de controles responsivos'
      ],
      ru: [
        'Реализация точной физики для деталей',
        'Оптимизация производительности для стабильных 60fps',
        'Балансировка прогрессивной сложности',
        'Создание отзывчивой системы управления'
      ],
      de: [
        'Implementierung präziser Physik für Teile',
        'Leistungsoptimierung für konsistente 60fps',
        'Progressive Schwierigkeitsbalancierung',
        'Erstellung eines responsiven Steuerungssystems'
      ]
    },
    learnings: {
      pt: [
        'Desenvolvimento de jogos com Flame Engine',
        'Otimização de performance em jogos mobile',
        'Design de mecânicas de jogo viciantes',
        'Implementação de sistemas de física'
      ],
      en: [
        'Game development with Flame Engine',
        'Mobile game performance optimization',
        'Addictive game mechanics design',
        'Physics systems implementation'
      ],
      es: [
        'Desarrollo de juegos con Flame Engine',
        'Optimización de rendimiento en juegos móviles',
        'Diseño de mecánicas de juego adictivas',
        'Implementación de sistemas de física'
      ],
      ru: [
        'Разработка игр с Flame Engine',
        'Оптимизация производительности мобильных игр',
        'Дизайн захватывающих игровых механик',
        'Реализация физических систем'
      ],
      de: [
        'Spieleentwicklung mit Flame Engine',
        'Mobile Spiel-Performance-Optimierung',
        'Design süchtig machender Spielmechaniken',
        'Implementierung von Physiksystemen'
      ]
    },
    githubUrl: 'https://github.com/dududueedu/snaprix',
    liveUrl: null,
    isCompanyProject: false,
    platforms: ['iOS', 'Android'],
    category: 'mobile',
    status: 'development',
    year: 2024
  },
  {
    id: 5,
    slug: 'playlistporter-website',
    title: 'PlaylistPorter Website',
    shortDescription: {
      pt: 'Landing page responsiva para ferramenta de transferência de playlists',
      en: 'Responsive landing page for playlist transfer tool',
      es: 'Landing page responsiva para herramienta de transferencia de playlists',
      ru: 'Адаптивная посадочная страница для инструмента передачи плейлистов',
      de: 'Responsive Landing Page für Playlist-Transfer-Tool'
    },
    description: {
      pt: 'Website promocional desenvolvido em HTML, CSS e JavaScript para uma ferramenta que permite transferir playlists entre diferentes plataformas de streaming. Design moderno e responsivo com foco na conversão de usuários.',
      en: 'Promotional website developed in HTML, CSS and JavaScript for a tool that allows transferring playlists between different streaming platforms. Modern and responsive design with focus on user conversion.',
      es: 'Sitio web promocional desarrollado en HTML, CSS y JavaScript para una herramienta que permite transferir playlists entre diferentes plataformas de streaming. Diseño moderno y responsivo con enfoque en la conversión de usuarios.',
      ru: 'Промо-сайт, разработанный на HTML, CSS и JavaScript для инструмента, который позволяет передавать плейлисты между различными потоковыми платформами. Современный и адаптивный дизайн с фокусом на конверсию пользователей.',
      de: 'Promotion-Website entwickelt in HTML, CSS und JavaScript für ein Tool, das die Übertragung von Playlists zwischen verschiedenen Streaming-Plattformen ermöglicht. Modernes und responsives Design mit Fokus auf Benutzerkonversion.'
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    techIcons: [faHtml5, faCss3, faJs],
    image: '/images/projects/playlistporter/cover.jpg',
    screenshots: [
      '/images/projects/playlistporter/screenshot-1.jpg',
      '/images/projects/playlistporter/screenshot-2.jpg',
      '/images/projects/playlistporter/screenshot-3.jpg'
    ],
    features: {
      pt: [
        'Design responsivo para todos os dispositivos',
        'Animações CSS suaves e atrativas',
        'Seções organizadas e informativas',
        'Call-to-actions estrategicamente posicionados',
        'Otimizado para SEO',
        'Performance otimizada'
      ],
      en: [
        'Responsive design for all devices',
        'Smooth and attractive CSS animations',
        'Organized and informative sections',
        'Strategically positioned call-to-actions',
        'SEO optimized',
        'Optimized performance'
      ],
      es: [
        'Diseño responsivo para todos los dispositivos',
        'Animaciones CSS suaves y atractivas',
        'Secciones organizadas e informativas',
        'Call-to-actions estratégicamente posicionados',
        'Optimizado para SEO',
        'Rendimiento optimizado'
      ],
      ru: [
        'Адаптивный дизайн для всех устройств',
        'Плавные и привлекательные CSS анимации',
        'Организованные и информативные разделы',
        'Стратегически расположенные призывы к действию',
        'SEO оптимизированный',
        'Оптимизированная производительность'
      ],
      de: [
        'Responsives Design für alle Geräte',
        'Glatte und attraktive CSS-Animationen',
        'Organisierte und informative Abschnitte',
        'Strategisch platzierte Call-to-Actions',
        'SEO-optimiert',
        'Optimierte Leistung'
      ]
    },
    challenges: {
      pt: [
        'Criação de design atrativo sem frameworks pesados',
        'Otimização de performance com JavaScript vanilla',
        'Implementação de animações fluidas',
        'Compatibilidade cross-browser'
      ],
      en: [
        'Creating attractive design without heavy frameworks',
        'Performance optimization with vanilla JavaScript',
        'Implementation of smooth animations',
        'Cross-browser compatibility'
      ],
      es: [
        'Creación de diseño atractivo sin frameworks pesados',
        'Optimización de rendimiento con JavaScript vanilla',
        'Implementación de animaciones fluidas',
        'Compatibilidad cross-browser'
      ],
      ru: [
        'Создание привлекательного дизайна без тяжелых фреймворков',
        'Оптимизация производительности с vanilla JavaScript',
        'Реализация плавных анимаций',
        'Кроссбраузерная совместимость'
      ],
      de: [
        'Erstellung attraktiven Designs ohne schwere Frameworks',
        'Performance-Optimierung mit Vanilla JavaScript',
        'Implementierung flüssiger Animationen',
        'Cross-Browser-Kompatibilität'
      ]
    },
    learnings: {
      pt: [
        'Desenvolvimento web fundamental (HTML/CSS/JS)',
        'Design responsivo sem frameworks',
        'Otimização de performance web',
        'Princípios de UX para conversão'
      ],
      en: [
        'Fundamental web development (HTML/CSS/JS)',
        'Responsive design without frameworks',
        'Web performance optimization',
        'UX principles for conversion'
      ],
      es: [
        'Desarrollo web fundamental (HTML/CSS/JS)',
        'Diseño responsivo sin frameworks',
        'Optimización de rendimiento web',
        'Principios de UX para conversión'
      ],
      ru: [
        'Основы веб-разработки (HTML/CSS/JS)',
        'Адаптивный дизайн без фреймворков',
        'Оптимизация веб-производительности',
        'Принципы UX для конверсии'
      ],
      de: [
        'Grundlagen der Webentwicklung (HTML/CSS/JS)',
        'Responsives Design ohne Frameworks',
        'Web-Performance-Optimierung',
        'UX-Prinzipien für Konversion'
      ]
    },
    githubUrl: 'https://github.com/dududueedu/playlistporter-website',
    liveUrl: 'https://playlistporter.netlify.app',
    isCompanyProject: false,
    platforms: ['Web'],
    category: 'web',
    status: 'published',
    year: 2023
  },
  {
    id: 6,
    slug: 'foodspot',
    title: 'FoodSpot',
    shortDescription: {
      pt: 'App de delivery de comida com interface moderna e intuitiva',
      en: 'Food delivery app with modern and intuitive interface',
      es: 'App de delivery de comida con interfaz moderna e intuitiva',
      ru: 'Приложение доставки еды с современным и интуитивным интерфейсом',
      de: 'Food-Delivery-App mit moderner und intuitiver Benutzeroberfläche'
    },
    description: {
      pt: 'Aplicativo mobile de delivery de comida desenvolvido em Flutter com foco na experiência do usuário. Inclui catálogo de restaurantes, sistema de pedidos, acompanhamento em tempo real e múltiplos métodos de pagamento.',
      en: 'Mobile food delivery app developed in Flutter with focus on user experience. Includes restaurant catalog, ordering system, real-time tracking and multiple payment methods.',
      es: 'Aplicación móvil de delivery de comida desarrollada en Flutter con enfoque en la experiencia del usuario. Incluye catálogo de restaurantes, sistema de pedidos, seguimiento en tiempo real y múltiples métodos de pago.',
      ru: 'Мобильное приложение доставки еды, разработанное на Flutter с фокусом на пользовательский опыт. Включает каталог ресторанов, систему заказов, отслеживание в реальном времени и множественные способы оплаты.',
      de: 'Mobile Food-Delivery-App entwickelt in Flutter mit Fokus auf Benutzererfahrung. Enthält Restaurant-Katalog, Bestellsystem, Echtzeit-Tracking und mehrere Zahlungsmethoden.'
    },
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    techIcons: [faFlutter],
    image: '/images/projects/foodspot/cover.jpg',
    screenshots: [
      '/images/projects/foodspot/screenshot-1.jpg',
      '/images/projects/foodspot/screenshot-2.jpg',
      '/images/projects/foodspot/screenshot-3.jpg',
      '/images/projects/foodspot/screenshot-4.jpg'
    ],
    features: {
      pt: [
        'Catálogo completo de restaurantes',
        'Sistema de pedidos intuitivo',
        'Acompanhamento de entrega em tempo real',
        'Múltiplos métodos de pagamento',
        'Sistema de avaliações e comentários',
        'Histórico de pedidos',
        'Notificações push personalizadas'
      ],
      en: [
        'Complete restaurant catalog',
        'Intuitive ordering system',
        'Real-time delivery tracking',
        'Multiple payment methods',
        'Review and comment system',
        'Order history',
        'Personalized push notifications'
      ],
      es: [
        'Catálogo completo de restaurantes',
        'Sistema de pedidos intuitivo',
        'Seguimiento de entrega en tiempo real',
        'Múltiples métodos de pago',
        'Sistema de reseñas y comentarios',
        'Historial de pedidos',
        'Notificaciones push personalizadas'
      ],
      ru: [
        'Полный каталог ресторанов',
        'Интуитивная система заказов',
        'Отслеживание доставки в реальном времени',
        'Множественные способы оплаты',
        'Система отзывов и комментариев',
        'История заказов',
        'Персонализированные push-уведомления'
      ],
      de: [
        'Vollständiger Restaurant-Katalog',
        'Intuitives Bestellsystem',
        'Echtzeit-Lieferverfolgung',
        'Mehrere Zahlungsmethoden',
        'Bewertungs- und Kommentarsystem',
        'Bestellhistorie',
        'Personalisierte Push-Benachrichtigungen'
      ]
    },
    challenges: {
      pt: [
        'Integração com APIs de pagamento',
        'Implementação de rastreamento GPS',
        'Design de UX otimizado para conversão',
        'Gerenciamento de estado complexo'
      ],
      en: [
        'Payment API integration',
        'GPS tracking implementation',
        'UX design optimized for conversion',
        'Complex state management'
      ],
      es: [
        'Integración con APIs de pago',
        'Implementación de rastreo GPS',
        'Diseño de UX optimizado para conversión',
        'Gestión de estado complejo'
      ],
      ru: [
        'Интеграция с API платежей',
        'Реализация GPS-отслеживания',
        'UX дизайн, оптимизированный для конверсии',
        'Сложное управление состоянием'
      ],
      de: [
        'Payment-API-Integration',
        'GPS-Tracking-Implementierung',
        'UX-Design optimiert für Konversion',
        'Komplexe Zustandsverwaltung'
      ]
    },
    learnings: {
      pt: [
        'Desenvolvimento de apps de e-commerce',
        'Integração com serviços de localização',
        'Design de fluxos de compra otimizados',
        'Arquitetura de aplicações mobile complexas'
      ],
      en: [
        'E-commerce app development',
        'Location services integration',
        'Optimized purchase flow design',
        'Complex mobile application architecture'
      ],
      es: [
        'Desarrollo de apps de e-commerce',
        'Integración con servicios de localización',
        'Diseño de flujos de compra optimizados',
        'Arquitectura de aplicaciones móviles complejas'
      ],
      ru: [
        'Разработка приложений электронной коммерции',
        'Интеграция с службами местоположения',
        'Дизайн оптимизированных потоков покупок',
        'Архитектура сложных мобильных приложений'
      ],
      de: [
        'E-Commerce-App-Entwicklung',
        'Integration von Standortdiensten',
        'Design optimierter Kaufabläufe',
        'Architektur komplexer mobiler Anwendungen'
      ]
    },
    githubUrl: 'https://github.com/dududueedu/foodspot',
    liveUrl: null,
    isCompanyProject: false,
    platforms: ['iOS', 'Android'],
    category: 'mobile',
    status: 'development',
    year: 2024
  }
]

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug)
}

export function getProjectsByCategory(category) {
  return projects.filter(project => project.category === category)
}

export function getFeaturedProjects() {
  return projects.filter(project => project.status === 'published').slice(0, 3)
}