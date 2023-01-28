<template>
    <div>
        <!-- 头部 -->
        <div class="funPart">
            <el-button size="small" class="addSt" type="primary" @click="addStudent">
                <span>添加</span>
            </el-button>
            <div class="searchPart">
                <el-input style="width: 260px;" type="text" size="small" v-model="searchValue" placeholder="请输入学号进行搜索"></el-input>
                <el-button size="small" class="searchSt" type="primary" @click="searchStudent">
                    <span>搜索</span>
                </el-button>
                <el-button size="small" class="searchSt" type="primary" @click="reFresh">
                    <span>还原</span>
                </el-button>
            </div>
        </div>
        <!-- 表格部分 -->
        <div class="stuTable">
            <el-table
                :data="studentData"
            >
                <el-table-column
                    prop="id"
                    label="学号"
                ></el-table-column>
                <el-table-column
                    prop="stName"
                    label="姓名"
                ></el-table-column>
                <el-table-column
                    prop="sPart"
                    label="学院"
                ></el-table-column>
                <el-table-column
                    prop="className"
                    label="课程名称"
                ></el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别"
                ></el-table-column>
                <el-table-column
                    prop="date"
                    label="选课时间"
                ></el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="100"
                >
                    <template slot-scope="scope">
                        <el-button @click="editIten(scope.row)" type="text" size="small">编辑</el-button>
                        <el-button @click="removeIten(scope.row)" type="text" size="small">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </div>
        <el-pagination
            small
            layout="prev, pager, next"
            :total="totalPage"
            :current-page.sync="currentPage"
            @current-change="currentChange"
        >
        </el-pagination>
        <!-- 表单 -->
        <el-dialog
            title="学生数据" 
            :visible.sync="formShow"
        >
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="学号">
                    <el-input v-model="form.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.stName"></el-input>
                </el-form-item>
                <el-form-item label="学院">
                    <el-input v-model="form.sPart"></el-input>
                </el-form-item>
                <el-form-item label="所选课程名称">
                    <el-input v-model="form.className"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="form.sex" placeholder="请选择学生性别">
                        <el-option label="男" value="male"></el-option>
                        <el-option label="女" value="female"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选课时间">
                    <el-date-picker type="date" placeholder="请选择选课日期" v-model="form.date"></el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button type="danger" @click="cancelForm">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    // import FormGet from '@/components/FormGet.vue';
    import { mapState } from 'vuex';
    export default {
        name:'Students',
        data(){
            return{
                // 搜索框输入内容
                searchValue:'',
                // 表格当前页数
                currentPage: 1,
                // 表单数据
                form:{
                    id:'',
                    stName:'',
                    sPart:'',
                    className:'',
                    sex:'',
                    date:''
                },
            }
        },
        methods:{
            // 添加学生
            addStudent(){
                this.$store.commit('SHOWFORM', this.formShow)
            },
            // 取消表单
            cancelForm(){
                this.$store.commit('SHOWFORM', true);
                // this.isShow = false;
            },
            // 提交表单
            onSubmit(){
                this.$store.commit('GETFORMDATA', this.form);
                // 清空表单内容
                this.form = {
                    id:'',
                    stName:'',
                    sPart:'',
                    className:'',
                    sex:'',
                    date:''
                };
            },
            // 搜索
            searchStudent(){
                this.$store.commit('SEARCHSTUDENTDATA', this.searchValue);
                // console.log(this.searchValue);
            },
            // 页标变化时请求对应数据
            currentChange(){
                this.$store.dispatch('getStudentData', this.currentPage)
            },
            // 搜索后还原
            reFresh(){
                this.$store.dispatch('getStudentData', this.currentPage)
            },
            // 编辑单个学生信息
            editIten(row){
                console.log(row);
            },
            // 移除单个学生信息
            removeIten(row){
                this.$store.commit('REMOVEITEM', row.id);
                // console.log(row);
            }
        },
        components:{
        },
        computed:{
            ...mapState(['formShow', 'studentData', 'totalPage']),
        },
        mounted(){
            // 发送Ajax请求
            this.$store.dispatch('getStudentData', this.currentPage)
        }
    }
</script>

<style scoped>
.funPart{
    display: flex;
    justify-content: space-between;
}
.searchPart{
    padding: 5px;
}
.searchSt{
    margin-left: 5px;
}
.addSt{
    display: inline;
}
.form{
    position: absolute;
    /* top: 100px; */
    z-index: 100;
    box-shadow: 100% 100% beige ;
}
</style>