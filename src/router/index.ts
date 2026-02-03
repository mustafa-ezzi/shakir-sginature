import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue' // or wherever your current page is
import LookBook from '../components/LookBook.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lookbook',
    name: 'LookBook',
    component: LookBook
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Recommended: Scroll to top when navigating to the lookbook
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router