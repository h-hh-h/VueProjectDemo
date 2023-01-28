<template>
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeInLeft"
        leave-active-class="animate__fadeOutRight"
        >
        <li>
            <label>
                <input type="checkBox" :checked="todos.done" @change="changeCheck(todos.id)"/>
                <span v-show="!todos.isEdit">{{ todos.title }}</span>
                <input 
                    v-show="todos.isEdit"
                    type="text" 
                    :value="todos.title" 
                    @blur="handleBlur($event, todos)"
                    ref="inputVal"
                />
            </label>
            <button @click="handleDelete(todos.id)">删除</button>
            <button v-show="!todos.isEdit" @click="handleEdit(todos)">编辑</button>
        </li>
    </transition>
</template>

<script>
    import pubsub from 'pubsub-js';
    import 'animate.css';

    export default {
        name:'ListItem',
        // props:['todos', 'changeItem', 'deleteItem'],
        props:['todos'],
        methods:{
            changeCheck(id){
                this.$fir.$emit('changeItem', id);
            },
            handleDelete(id){
                if(confirm('确定删除吗？')){
                    // console.log('item',id);
                    pubsub.publish('deleteItem', id);
                    // this.$fir.$emit('deleteItem', id);
                }
            },
            handleEdit(todos){
                if(!todos.hasOwnProperty('isEdit')){
                    this.$set(todos, 'isEdit', true);
                }else{
                    todos.isEdit = true;
                }
                this.$nextTick(function(){
                    this.$refs.inputVal.focus();
                })
            },
            handleBlur(e, todos){
                // console.log(e,todos)
                todos.isEdit = false;
                if(!e.target.value.trim())
                    return alert('输入值不能为空!');
                this.$fir.$emit('updateTodo', todos.id, e.target.value);
            }
        }
    }
</script>

<style scoped>
    li{
        list-style-type: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px black solid;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        background-color: rgb(184, 204, 212);
    }
    li:hover button{
        color: rgb(229, 155, 155);
        display: block;
    }
</style>