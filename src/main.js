// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Cakes from './components/Cakes.vue'
import About from './components/About.vue'
import './style.css'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  strict: true,
  state: {
    best: false,
    all: false,
    scrollPosition: 0,
  },
  mutations: {
    goToBest(state, { bool }) {
      state.best = bool
    },
    goToAll(state, { bool }) {
      state.all = bool
    },
    setScrollPosition(state, { y }) {
      state.scrollPosition = y
    },
  },
  actions: {
    setScrollPosition({ commit }, payload) {
      commit('setScrollPosition', payload)
    },
    goToAll({ commit }) {
      commit('goToAll', { bool: true })
      setTimeout(() => {
        commit('goToAll', { bool: false })
      }, 500)
    },

    goToBest({ commit }) {
      commit('goToBest', { bool: true })
      setTimeout(() => {
        commit('goToBest', { bool: false })
      }, 500)
    },
  },
})

const routes = [
  { path: '/cakes', component: Cakes },
  { path: '/about', component: About },
]

const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
})

new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount('#app')
