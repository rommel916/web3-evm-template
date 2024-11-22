const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const host = '127.0.0.1'
const port = '8082'

// 合并公共配置,并添加开发环境配置
const devConfig = merge(baseConfig, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host,
    port,
    open: false, // 是否自动打开
    compress: false, // gzip压缩,开发环境不开启，提升热更新速度
    hot: true, // 开启热更新
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, 'public') // 托管静态资源public文件夹
    }
  }
})

module.exports = devConfig
