import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 用于响应组件中的动作
const actions = {
    addC(context, value){
        context.commit('ADDC', value);
    },
    unaddC(context, value){
        context.commit('UNADDC', value);
    },
    waitJc(context, value){
        if(context.state.sum % 2){
            context.commit('ADDC', value);
        }
    },
    waitAdd(context, value){
        setTimeout(()=>{
            context.commit('ADDC', value); 
        },1000)
    },
}
// 用于操作数据state
const mutations = {
    ADDC(state, value){
        state.sum += value;
    },
    UNADDC(state, value){
        state.sum -= value;
    },
}
// 用于存储数据
const state = {
    sum:0,
}
// 创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})