<template>
    <div class="all">
        <h3>当前求和:{{ $store.state.sum }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addC">+</button>
        <button @click="unaddC">-</button>
        <button @click="waitJc">当前求和为奇数再加</button>
        <button @click="waitAdd">等一等再加</button>
    </div>
</template>
  
<script>
export default {
    name: 'Count',
    data(){
        return{
            n:1
        }
    },
    methods:{
        addC(){
            // this.$store.dispatch('addC', this.n);
            // 无额外业务逻辑时也可以直接commit
            this.$store.commit('ADDC', this.n);
        },
        unaddC(){
            // this.$store.dispatch('unaddC', this.n);
            // 无额外业务逻辑时也可以直接commit
            this.$store.commit('UNADDC', this.n);
        },
        waitJc(){
            this.$store.dispatch('waitJc', this.n);
        },
        waitAdd(){
            this.$store.dispatch('waitAdd', this.n);
        }
    },
    components: {
    }
}
</script>
  
<style>
    .all{
        background-color: skyblue;
        width: 300px;
        height: 300px;
    }
</style>