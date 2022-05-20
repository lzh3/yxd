const path = require("path");
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
};
