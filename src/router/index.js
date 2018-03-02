import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/IndexPage'
import Canvas from '@/components/CanvasPage'
import Palette from '@/components/PalettePage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: Canvas
    },
    {
      path: '/palette',
      name: 'Palette',
      component: Palette
    }
  ]
})

export default router
