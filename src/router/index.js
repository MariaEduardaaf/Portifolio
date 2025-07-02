// Router configuration
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
