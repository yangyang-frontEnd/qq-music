import Vue from 'vue'
import VueRouter from 'vue-router'

import Rank from "../components/rank/Rank";
import Recommend from "../components/recommend/Recommend";
import Search from "../components/search/Search";
import Singer from "../components/singer/Singer";

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/rank',
      component:Rank
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/search',
      component: Search
    }
    ,

    {
      path: '/singer',
      component: Singer
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
