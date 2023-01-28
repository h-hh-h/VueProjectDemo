<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search</h3>
        <div>
            <input type="text" placeholder="输入地址" v-model="keyWord">&nbsp;
            <button @click="searchUsers">搜索</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Search',
        data(){
            return{
                keyWord:'',
            }
        },
        methods: {
            searchUsers(){
            //GitHub请求地址为：https://api.github.com/search/users?q=xxx
                // axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                //     response => {
                //         console.log('请求成功了', response.data.items);
                //         this.$all.$emit('getUsers', response.data.items)
                //     },
                //     error => {
                //         console.log('请求失败了', error.message);
                //     }
                // )

                // console.log(this);
                // 使用vue-resource
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        console.log('请求成功了', response.data.items);
                        this.$all.$emit('getUsers', response.data.items)
                    },
                    error => {
                        console.log('请求失败了', error.message);
                    }
                )
            }
        },
    }
</script>

<style scoped>
    /* 使用了bootstrap样式 */
</style>