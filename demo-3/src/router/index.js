// 专门用于创建整个应用的路由器
// 引入库
import VueRouter from "vue-router";
// 引入需要的组件
import About from "../pages/About";
import Home from "../pages/Home";

// 创建并暴露路由
export default new VueRouter({
    mode:'history',
    // 配置路由
    routes:[
        {
            // 自定义路径名
            path:'/about',
            // 对应的组件
            component:About   
        },
        {
            path:'/home',
            component:Home,
            // 多级路由的配置
            children:[
                {
                    // 路径前不加 / 
                    path:'about',
                    component:About
                },                
            ]
        },
    ]
})