import Vue from 'vue'
import App from './App.vue'
// 引入store
import store from './store'
// 引入router
import VueRouter from 'vue-router'
import router from './router'
// 按需引入
import { 
  Button, Container, Header, Main, Aside, Menu, Submenu, MenuItem, 
  Image, Input, Table, TableColumn, Form, FormItem, Select, Option, 
  DatePicker, Pagination, Dialog} from 'element-ui'


Vue.use(VueRouter)
// 应用ElementUI
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Button);
Vue.use(Image);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 添加vuex
  store,
  // 添加路由
  router:router,
}).$mount('#app')
