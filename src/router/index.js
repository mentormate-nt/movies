import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Movie from '../views/Movie.vue';
import User from '../views/User.vue';
import PageNotFound from '../views/PageNotFound.vue';
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.user.is_logged_in) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/movie/:movieId',
    name: 'Movie',
    component: Movie,
    beforeEnter: (to, from, next) => {
      if (!store.state.user.is_logged_in) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/settings',
    name: 'User',
    component: User,
    beforeEnter: (to, from, next) => {
      if (!store.state.user.is_logged_in) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
