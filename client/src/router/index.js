import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homepage
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    }
  ]
})
