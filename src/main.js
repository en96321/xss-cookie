import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Message from './pages/Message.vue'
import Cookie from './pages/Cookie.vue'
import Steal from './steal'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/message',
      component: Message
    },
    {
      path: '/cookie',
      component: Cookie
    },
    {
      path: '/',
      redirect: '/message'
    }
  ]
})
createApp(App).use(router).use(Steal).mount('#app')
