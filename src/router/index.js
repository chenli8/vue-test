import Vue from 'vue'
import Router from 'vue-router'
import MapTool from '@/components/MapTool'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mapTool',
      component: MapTool
    },
    {
      path: '/mapTool',
      name: 'mapTool',
      component: MapTool
    }
  ]
})
