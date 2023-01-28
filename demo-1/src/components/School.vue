<template>
    <div>
        <h2>学校名：{{ schoolName }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="showInfo">提示</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return{
                schoolName:'123',
                address:'456'
            }
        },
        methods: {
            showInfo(){
                alert(this.address)
            }
        },
    }
</script>

<style>

</style>