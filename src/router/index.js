import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Dashboard from '@/views/index'
const routes = [{
  path: '/',
  name: 'dashboard',
  component: Dashboard,
}]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
