const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave:false,
  devServer:{
    proxy:'http://192.168.1.19:8000'
  }
})
