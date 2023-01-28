<template>
    <div>
        <el-menu router class="leftMenu">
            <el-submenu v-for="item in menuMsg" :key="item.id" :index="item.id">
              <!-- 插槽插入菜单中 -->
                <span slot="title">{{ item.title }}</span>
                <el-menu-item 
                    class="leftMenuItem" 
                    v-for="iitem in item.childItem" 
                    :key="iitem.iid" 
                    :index="iitem.iid" 
                    :route="{
                        path:iitem.ipath
                    }"
                    @click="CHANGETITLE(iitem.ititle)"
                >
                    <span slot="title">{{ iitem.ititle }}</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name:'MgitemMenu',
        data(){
            return{
                menuMsg:[
                    {
                        id:'1',
                        title:'信息管理',
                        childItem:[
                            {
                                iid:'1-1',
                                ititle:'用户管理',
                                ipath:'/user'
                            },
                            {
                                iid:'1-2',
                                ititle:'教师信息管理',
                                ipath:'/teachers'
                            },
                            {
                                iid:'1-3',
                                ititle:'学生信息管理',
                                ipath:'/students'
                            },
                        ]
                    },
                    {
                        id:'2',
                        title:'教务管理',
                        childItem:[
                            {
                                iid:'2-1',
                                ititle:'通知管理',
                                ipath:'/notice'
                            },
                            {
                                iid:'2-2',
                                ititle:'课程管理',
                                ipath:'/classmg'
                            },
                            {
                                iid:'2-3',
                                ititle:'学院管理',
                                ipath:'/depart'
                            },
                        ]
                    },
                    {
                        id:'3',
                        title:'更多应用',
                        childItem:[
                            {
                                iid:'3-1',
                                ititle:'其他页1',
                                ipath:'/otherone'
                            },
                            {
                                iid:'3-2',
                                ititle:'其他页2',
                                ipath:'/othertwo'
                            },
                        ]
                    },
                    {
                        id:'4',
                        title:'校园中心',
                        childItem:[
                            {
                                iid:'4-1',
                                ititle:'主页',
                                ipath:'/home'
                            },
                        ]
                    },
                ]
            }
        },
        methods:{
            ...mapMutations(['CHANGETITLE']),
        }
    }
</script>

<style scoped>
.leftMenu{
    background-color: rgb(51, 51, 51);
}
.leftMenu span{
    color: rgb(222, 216, 208);
}
.leftMenuItem{
    background-color: rgb(51, 51, 51);
}
</style>