<template>
    <div>
        <button @click="handleShow(isShow)">显示/隐藏</button>
        <transition>
            <h2 v-show="isShow">??????????</h2>
        </transition>
    </div>
</template>

<script>
    export default{
        name:'Animation',
        data(){
            return{
                isShow:true
            }
        },
        methods:{
            handleShow(isShow){
                this.isShow = !isShow;
            }
        }
    }  
</script>

<style scoped>
    h2{
        width: 800px;
        background-color: aqua;
    }

    .v-enter-active{
        animation: goGo 0.3s;
    }
    .v-leave-active{
        animation: goGo 0.3s reverse;
    }
    /* 定义一个动画 */
    @keyframes goGo {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>