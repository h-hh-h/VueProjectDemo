<template>
    <div class="whole" v-show="totalTodos">
        <label>
            <input type="checkbox" v-model="allCheck"/>
            <span>已完成{{ doneTodos }}/全部{{ totalTodos }}</span>
            <button @click="clearAll">删除所有已完成任务</button>
        </label>
    </div>
</template>

<script>
    export default {
        name:'ListFooter',
        props:['doneTodos', 'todos'],
        methods:{
            clearAll(){
                if(confirm('确定清空已完成任务吗？'))
                    this.$emit('deleteAll');
            }
        },
        computed:{
            totalTodos(){
                return this.todos.length
            },
            allCheck:{
                get(){
                    return this.doneTodos === this.totalTodos && this.doneTodos > 0;
                },
                set(value){
                    // console.log(value)
                    this.$emit('allChange', value);
                }
            }
        }
    }
</script>

<style scoped>
    .whole{
        /* height: 36px; */
        /* border: 1px black solid; */
        padding: 3px 0;
    }
    label input{
        vertical-align: middle;
        float: left;
    }
    label button{
        float: right;
    }
</style>