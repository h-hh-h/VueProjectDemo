<template>
    <div>
    <el-container class="leftAll">
        <el-aside>
            <!-- 左侧导航栏 -->
            <MgitemMenu v-show="isShow"/>
        </el-aside>
        <el-container>
            <!-- 组件头部 -->
            <el-header class="leftHead">
                <div class="leftMsg">
                    <el-button 
                        class="msgBtn" 
                        type="info" 
                        size="mini" 
                        icon="el-icon-s-fold"
                        @click="foldLeft"
                    ></el-button>
                    <span>{{ title }}</span>
                </div>
                <el-image class="userImage" src="./logo.png" fit="fill"></el-image>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>     
    </el-container>
  </div>
</template>
<script>
    import MgitemMenu from './MgitemMenu.vue';
    import { mapState } from 'vuex';


    export default {
        name:'MgItem',
        data(){
            return{
                isShow:true,
            }
        },
        components:{
            MgitemMenu
        },
        computed:{
            ...mapState(['title']),
        },
        methods:{
            foldLeft(){
                console.log(this.isShow);
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style scoped>
.leftAll{
  /* width: 260px; */
  height: 100%;
  /* background-color: azure; */
}
.leftHead{
    background-color: rgb(51, 51, 51);
    /* text-align: center; */
    padding: 18px;
    /* margin-top: 20px; */
    height: 30px;
    display: flex;
    justify-content: space-between;
}
.leftHead span{
    color: rgb(222, 216, 208);
}
.leftMsg span{
    margin-left: 15px;
}
.userImage{
    width: 30px;
    height: 30px;
    border: 1px white solid;
    border-radius: 50%;
    margin-right: 10px;
}
</style>