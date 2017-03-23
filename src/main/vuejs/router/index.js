import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Project from '../pages/home/Project'
import Login from '../pages/login/login'
import Slide from 'components/slide/slide'
import Header from 'components/header/header'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      title: '主页',
      components: {
        header: Header,
        slider: Slide,
        main: Home
      },
      children: [
        {
          // path: home/project
          path: 'project',
          component: Project,
          name: 'main'
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      title: '登录',
      component: Login
    }
  ]
})
export default router
