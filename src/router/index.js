import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import _404 from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
{
    path: '/', name: 'Home', component: Home
},
{
    path: '/about', name: 'About', component: About
},
{
    path: '*', name: '404', component: _404
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
