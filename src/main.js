import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Button } from 'vant'
import "amfe-flexible"
import "./utils/register-vant"
// 引入全局css
import "./styles/index.less"
// Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
