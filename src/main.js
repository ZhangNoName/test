// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';    // （1）
import 'element-ui/lib/theme-chalk/index.css';    // （2）
import UmyUi from 'umy-ui'
import 'umy-ui/lib/theme-chalk/index.css';// 引入样式

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })  
Vue.use(UmyUi);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
