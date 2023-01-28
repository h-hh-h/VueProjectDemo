<template>
    <div>
        <input class="in"  type="text" placeholder="输入任务" v-model="title" @keyup.enter="createItem"/>
        <button @click="getData">数据来</button>
    </div>

</template>

<script>
    import {nanoid} from 'nanoid';
    import axios from 'axios';
    export default {
        name:'ListHeader',
        // props:['addItem'],
        data(){
            return{
                title:''
            }
        },
        methods:{
            createItem(){
                if(!this.title.trim()) return alert('输入不能为空');
                const todoObj = {id:nanoid(), title:this.title, done:false};
                // console.log(todoObj);
                this.$emit('addItem', todoObj);
                this.title = '';
            },

            getData(){
                axios.get('http://localhost:8000/server').then(
                    response => {
                        console.log("请求成功", response.data);
                    },
                    error => {
                        console.log("请求失败", error.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .in{
        width: 400px;
        box-sizing: border-box;
        margin: 5px 0;
    }
</style>