const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { isMainThread } = require('worker_threads');
module.exports={
  mode: "production",
  entry: "./src/use_main",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css.loader只负责将css文件进行加载
        //style-loader 负责将样式添加到DOM中
        //使用多个loader时，顺序从右到左
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权Banner测试'),
    new HtmlWebpackPlugin()
  ]
};