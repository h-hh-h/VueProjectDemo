import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex)

const actions = {
    getStudentData(context, currentPage){
        // if(context.state.totalData.length === 0){
            // console.log('发送请求');
            axios({
                //请求方法
                method:'GET',
                //url
                url:'http://localhost:3000/studentData',
            }).then(arrObj => {
                context.commit("GETSTUDENTDATA", {arrObj, currentPage});
                // console.log(state);
                
            })
        // }else{
        //     console.log('未发送请求');
        // }
    }
}
const mutations = {
    // 修改当前显示页面的标题
    CHANGETITLE(state, value){
        state.title = value;
    },
    // 处理请求到的student数据，value参数是一个自定义对象
    GETSTUDENTDATA(state, value){
        // 保存请求到的所有学生信息
        state.totalData = value.arrObj.data;
        // 先将要渲染的数组清空
        state.studentData = []
        // console.log(value);
        // 起始位置
        let startPage = 10*(value.currentPage-1);
        // 结束位置
        let endPage = 10 * value.currentPage;
        // 总长度
        state.totalPage = value.arrObj.data.length;
        // 根据当前页面位置显示对应table数据
        for(startPage; startPage < endPage; startPage++){
            // console.log(startPage, value.data[startPage]);
            state.studentData.push(value.arrObj.data[startPage]);
        }
    },
    // 控制student表单显示
    SHOWFORM(state, value){
        state.formShow = !value;
    },
    // 获取student表单数据
    GETFORMDATA(state, value){
        if(value.sex === 'male'){
            value.sex = '男';
        }
        else if(value.sex === 'female'){
            value.sex = '女';
        }
        if(!value.id){
            alert("未填写学号！");
        }
        else if(!value.stName){
            alert("未填写姓名！");
        }
        else if(!value.sPart){
            alert("未填写学院！");
        }
        else if(!value.className){
            alert("未填写所选课程！");
        }
        else if(!value.sex){
            alert("未填写性别！");
        }
        else if(!value.date){
            alert("未填写选课日期！");
        }
        else{
            value.date = value.date.toLocaleDateString();
            // 添加到显示的数组中
            state.studentData.unshift(value);
            // 添加到总数组中
            state.totalData.unshift(value);
            state.formShow = false;
        }
    },
    // 根据学号搜索学生信息，value是学号
    SEARCHSTUDENTDATA(state, value){
        // 判断是否输入学号
        if(value === ''){
            alert('请输入学号');
        }else{
            // 保存查询结果
            let resultData = [];
            // 记录查询是否成功
            let flag = false;
            state.totalData.forEach(element => {
                if(element.id === value){
                    console.log('search');
                    flag = true;
                    resultData.push(element);
                    // 总条目数设置为1
                    state.totalPage = 1;
                }
            });
            if(flag){
                state.studentData = resultData;
            }else{
                alert('查无此人');
            }
        }  
    },
    // 移除表格元素
    REMOVEITEM(state, id){
        console.log('remove');
        state.studentData = state.studentData.filter(item => item.id !== id);
    }
}
const state = {
    title:'x',
    formShow:false,
    totalData:[],
    studentData:[],
    // 表格总条目数
    totalPage: 0,
}
const getters = {

}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})