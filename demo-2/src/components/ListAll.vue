<template>
    <div class="row">
        <div class="card" v-for="user in users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style="width: 100px;">
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ListAll',
        data(){
            return{
                users:[],
            }
        },
        mounted(){
            this.$all.$on('getUsers', (users) => {
                this.users = users;
            })
        }
    }
</script>

<style scoped>
</style>