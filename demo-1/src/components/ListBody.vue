<template>
    <ul class="wholeBody">
        <!-- <ListItem 
            v-for="item in todos" 
            :key="item.id" 
            :todos="item"
            :changeItem="changeItem"
            :deleteItem="deleteItem"
        /> -->
        <ListItem 
            v-for="item in todos" 
            :key="item.id" 
            :todos="item"
        />
    </ul>
</template>

<script>
    import ListItem from './ListItem.vue';
    export default {
        name:'ListBody',
        components:{
            ListItem
        },
        // props:['todos', 'changeItem', 'deleteItem'],
        props:['todos'],
        // data(){
        //     return{
        //         todos:[
        //         {id:'001',title:'敲代码',done:true},
        //         {id:'002',title:'吃饭',done:false},
        //         {id:'003',title:'睡觉',done:false},
        //         ]
        //     }
        // },
    }
</script>

<style scoped>
    .wholeBody{
        width: 400px;
        box-sizing: border-box;
        /* height: 400px; */
        /* border: 1px black solid; */
        border-bottom: none;
    }
</style>