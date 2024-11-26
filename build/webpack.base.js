const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); // 引入webpack打包速度分析插件
const path = require("path");

const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;
const isDev = process.env.NODE_ENV === "development"; // 是否是开发模式

const styleLoadersArray = [
  isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
  {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[path][name]__[local]--[hash:5]",
      },
    },
  },
  "postcss-loader",
];

const baseConfig = {
  cache: {
    type: "filesystem", // 使用文件缓存
  },
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  // 打包出口文件
  output: {
    filename: "static/js/[name].[chunkhash:8].js", // // 加上[chunkhash:8]
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  // loader 配置
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: "babel-loader",
      },
      {
        test: cssRegex, //匹配 css 文件
        use: styleLoadersArray,
      },
      {
        test: sassRegex,
        use: [...styleLoadersArray],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
  // plugins
  plugins: [
    new SpeedMeasurePlugin(),
    new HtmlWebpackPlugin({
      // 复制 'index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: path.join(__dirname, "../public/index.html"),
      inject: true, // 自动注入静态资源
      hash: true,
      cache: false,
      // 压缩html资源
      minify: {
        collapseWhitespace: true, //去空格
        removeComments: true, // 去注释
        minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        minifyCSS: true, // 缩小CSS样式元素和样式属性
      },
    }),
    new WebpackBar({
      color: "#85d", // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
  ],
};

module.exports = baseConfig;
