module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 老版本的写法，会报错
    // ["es2015", { "modules": false }]
    // 修改
    ["@babel/preset-env", { "modules": false }]

  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
