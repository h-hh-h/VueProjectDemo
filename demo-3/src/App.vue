<template>
  <div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about">Go About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Go Home</router-link>
        </div>
      </div> 
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>  
  </div> 
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
</style>
