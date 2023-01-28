import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// 引入store，要在使用vuex之后
import store from './store'

Vue.config.productionTip = false

//使用插件
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$all = this;
  }
}).$mount('#app')
