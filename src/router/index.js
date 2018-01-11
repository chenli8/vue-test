import Vue from 'vue'
import Router from 'vue-router'
import MapTool from '@/components/MapTool'
import UploadFile from '@/components/UploadFile'
import Editor from '@/components/Editor'
import Test from '@/components/Test'
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
    },
    {
      path: '/uploadFile',
      name: 'UploadFile',
      component: UploadFile
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
