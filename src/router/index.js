import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import deviceMangager from '@/components/deviceMangager'
import testMangager from '@/components/testMangager'
import userMangager from '@/components/userMangager'
import visualList from '@/components/visualList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/components/deviceMangager',
      children:[
        {
          path:'/components/deviceMangager',
          name:'deviceMangager',
          component:deviceMangager
        },
        {
          path:'/components/testMangager',
          name:'testMangager',
          component:testMangager
        },
        {
            path:'/components/userMangager',
            name:'userMangager',
            component:userMangager
        },
        {
            path:'/components/visualList',
            name:'visualList',
            component:visualList
        }
      ]
    }, 
  ]
})
