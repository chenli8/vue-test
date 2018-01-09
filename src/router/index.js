import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/Map'
import Map1 from '@/components/Map1'
import Map2 from '@/components/Map2'
import MapTool from '@/components/MapTool'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/map1',
      name: 'map1',
      component: Map1
    },
    {
      path: '/map2',
      name: 'map2',
      component: Map2
    },
    {
      path: '/mapTool',
      name: 'mapTool',
      component: MapTool
    }
  ]
})
