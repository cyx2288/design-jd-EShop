import Vue from 'vue'
import Router from 'vue-router'
import ueMain from '@/components/ue/ueMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ueMain',
      component: ueMain
    }
  ]
})
