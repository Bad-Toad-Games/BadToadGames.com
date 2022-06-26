import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tabletop',
    name: 'tabletop',
    component: () => import('../views/TabletopView.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/GamesView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/contributors',
    name: 'contributers',
    component: () => import('../views/ContributersView.vue')
  },
  {
    path: '/nav',
    name: 'navigation',
    component: () => import('../views/NavigationView.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/JoinView.vue')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/SupportView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/newsletter',
    name: 'newsletter',
    component: () => import('../views/NewsletterView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/HomeView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
