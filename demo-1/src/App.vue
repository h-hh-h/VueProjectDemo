<template>
    <div class="all">
        <ListHeader @addItem="addItem"/>
        <!-- 如下第一个注释不用恢复 -->
        <!-- <ListBody 
            :todos="todos" 
            :changeItem="changeItem"
            :deleteItem="deleteItem"
        /> -->
        <ListBody :todos="todos"/>
        <ListFooter 
            :doneTodos="doneTodos" 
            :todos="todos"
            @allChange="allChange"
            @deleteAll="deleteAll"
        />
    </div>
    <!-- <div>
        <AnimationCss/>
    </div> -->
</template>

<script>
    //引入组件
    import pubsub from 'pubsub-js';
    // import School from './components/School.vue'
    import ListHeader from './components/ListHeader.vue';
    import ListBody from './components/ListBody.vue';
    import ListFooter from './components/ListFooter.vue';
    import Animation from './components/animation.vue';
    import AnimationCss from './components/animationCss.vue';

    export default {
        name:'App',
        components:{
            ListHeader,
            ListBody,
            ListFooter,
            Animation,
            AnimationCss
        },
        data(){
            return{
                // doneTodos: 0,
                todos:[
                {id:'001',title:'敲代码',done:true},
                {id:'002',title:'吃饭',done:false},
                {id:'003',title:'睡觉',done:false},
                ]
            }
        },
        methods:{
            addItem(x){
                this.todos.unshift(x);
            },
            changeItem(id){
                this.todos.forEach((todos)=>{
                    if(todos.id === id){
                        todos.done = !todos.done;
                    }
                })
            },
            deleteItem(_, id){
                // this.todos.forEach((item, index) => {
                //     if(item.id === id) this.todos.splice(index, 1);
                // })
                // console.log(this);
                this.todos = this.todos.filter( item => item.id !== id);
            },
            updateTodo(id, value){
                this.todos.forEach((todos) => {
                    if(todos.id === id)
                        todos.title = value;
                })
            },
            allChange(checked){
                this.todos.forEach(item => {
                    item.done = checked;
                })
            },
            deleteAll(){
                this.todos = this.todos.filter(item => !item.done);
            }
        },
        computed:{
            doneTodos(){
                //pre初始指定为了0，表示从数组第0个元素开始遍历。current是上一次调用reduce的返回值
                return this.todos.reduce((pre, current) =>  pre + (current.done ? 1: 0), 0)
                // return this.todos.filter(item => item.done === true).length
            },
        },
        mounted(){
            this.$fir.$on('changeItem', this.changeItem);
            this.$fir.$on('updateTodo', this.updateTodo);
            // this.$fir.$on('deleteItem', this.deleteItem);
            this.pid = pubsub.subscribe('deleteItem', this.deleteItem);

        },
        beforeDestroy(){
            this.$fir.$off('changeItem');
            this.$fir.$off('updateTodo');
            // this.$fir.$off('deleteItem');
            pubsub.unsubscribe(this.pid);
        }
    }
</script>

<style>
    .all{
        height: auto;
        width: 400px;
        margin: auto;
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
    }
</style>