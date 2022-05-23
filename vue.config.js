// const path = require("path");
module.exports = {
  lintOnSave: false,
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [
  //       //这个是加上自己的路径，
  //       //注意：试过不能使用别名路径
  //       path.resolve(__dirname, "./src/assets/css/index.less")
  //     ]
  //   }
  // }
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      less: {
        javascriptEnabled: true, //less 配置
      },
    }, // css预设器配置项
    modules: false, // 启用 CSS modules for all css / pre-processor files.
  },
  // devServer: {
  //   open: false,
  //   proxy: {
  //     //配置跨域
  //     "/": {
  //       target: "152.67.217.198:10089", //这里后台的地址模拟的;应该填写你们真实的后台接口
  //       changeOrigin: true, //允许跨域
  //       pathRewrite: {
  //         "^/": "", //请求的时候使用这个api就可以
  //       },
  //     },
  //   },
  // },
};
