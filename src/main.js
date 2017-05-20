// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import About from './components/About'
import Param from './components/Param'
import paramdetails from './components/paramdetails'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About },
  { path: '/param', component: Param },
  { path: '/paramdetails', component: paramdetails, name: 'Paramdetails' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
