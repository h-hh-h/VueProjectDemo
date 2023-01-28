import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //因为引入的是不完整的vuejs
  render: h => h(App),
  //配置全局事件总线
  beforeCreate(){
    Vue.prototype.$fir = this;
  },
}).$mount('#app')