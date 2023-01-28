<template>
    <div>
        <button @click="handleShow(isShow)">显示/隐藏</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeIn"
            leave-active-class="animate__bounceOut"
        >
            <h2 v-show="!isShow" key="1">??????????</h2>
            <!-- <h2 v-show="isShow" key="2">0000000000</h2> -->
        </transition-group>
    </div>
</template>

<script>
    import 'animation.css'
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
</style>