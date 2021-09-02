import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/view/index'
import APage from '@/view/a-page'
import BPage from '@/view/b-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/APage',
      name: 'APage',
      component: APage
    },
  ]
})
