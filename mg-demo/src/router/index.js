import VueRouter from "vue-router";
import Home from "../pages/Home";
import User from "../pages/User";
import ClassMg from '../pages/ClassMg';
import Depart from '../pages/Depart';
import Notice from '../pages/Notice';
import OtherOne from '../pages/OtherOne';
import OtherTwo from '../pages/OtherTwo';
import Students from '../pages/Students';
import Teachers from '../pages/Teachers';



export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/home',
            component:Home
        },
        {
            path:'/user',
            component:User
        },
        {
            path:'/classmg',
            component:ClassMg
        },
        {
            path:'/depart',
            component:Depart
        },
        {
            path:'/notice',
            component:Notice
        },
        {
            path:'/otherone',
            component:OtherOne
        },
        {
            path:'/othertwo',
            component:OtherTwo
        },
        {
            path:'/students',
            component:Students
        },
        {
            path:'/teachers',
            component:Teachers
        },
    ]
})
