<template>
  <!-- <div class="container">
    <Search/>
    <ListAll/>
  </div> -->
  <!-- <div class="container">
    <Category/>
    <Category/>
    <Category/>
  </div> -->
  <div>
    <Count/>
  </div>
</template>

<script>
  import ListAll from './components/ListAll.vue';
  import Search from './components/Search.vue';
  import Category from './components/Category.vue';
  import Count from './components/Count.vue';
  export default {
    name: 'App',
    components: {
      ListAll,
      Search,
      Category,
      Count
    },
    mounted(){
      // console.log('APP',this)
    }
  }
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
