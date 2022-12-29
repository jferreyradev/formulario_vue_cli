import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/formulario',
    name: 'formulario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioView.vue')
  },
  {
    path: '/listaformulario',
    name: 'listaformulario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaFormularioView.vue')
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
