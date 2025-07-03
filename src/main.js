// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import './styles/tailwind.css'

// FontAwesome core & component
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Brand icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// Solid icons (incluindo header)
import {
  faArrowDown,
  faSun,
  faMoon,
  faGlobe,
  faHome,
  faUser,
  faFolder,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

// adiciona tudo na biblioteca
library.add(
  faLinkedin,
  faGithub,
  faArrowDown,
  faSun,
  faMoon,
  faGlobe,
  faHome,
  faUser,
  faFolder,
  faEnvelope
)

const app = createApp(App)

// registra o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

// vue-i18n
import pt from './locales/pt.json'
import en from './locales/en.json'
import es from './locales/es.json'
import ru from './locales/ru.json'
import de from './locales/de.json'

const messages = { pt, en, es, ru, de }
const savedLocale = localStorage.getItem('locale') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages,
})

app
  .use(i18n)
  .use(router)
  .mount('#app')
