<template>
    <div>
      <h2>Home</h2>
      <router-link to="/home/about">About</router-link>
      <hr>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  }
  </script>
  