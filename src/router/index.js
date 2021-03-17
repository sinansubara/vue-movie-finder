import Vue from 'vue'
import VueRouter from 'vue-router'
import Popular from '../views/Popular.vue'
import Series from '../views/Series.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Popular',
    component: Popular
  },
  {
    path: '/movies',
    name: 'Movies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movies.vue')
  },
  {
    path: '/series',
    name: 'Series',
    component: Series
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
