import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from "../stores/auth/loginStore";

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/home',
    component: () => import('../components/layout/Container.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../components/Index.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: { requiresAuth: true },
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token") || !useLoginStore().validateSesion()) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
});
export default router
