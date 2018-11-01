import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/songs/Index'
import AddSong from '@/components/AddSong'
import ViewSong from '@/components/viewsong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'AddSong',
      component: AddSong
    },
    {
      path: '/songs/:songId',
      name: 'ViewSong',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'EditSong',
      component: EditSong
    }
  ]
})
