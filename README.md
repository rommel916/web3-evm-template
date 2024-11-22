# Eth 链开发模版

1. 技术栈
   React、TypeScript、React-Redux、Webpack5、Sass
2. Web3 插件
   web3、@web3-react/core（获取钱包登陆信息）、@web3-onboard/react（登陆插件）

3. 快速开发
   Node > 20
   Web3-Onboard官网: url[https://onboard.blocknative.com/docs/overview/introduction]
   

## 项目架构

```javascript
├─ build/            # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ assets/         # 放置需要经由 Webpack 处理的静态文件
│   ├─ components/     # 组件（COMPONENT）
│   ├─ hooks/     # hook组件
│   ├─ contexts/     # 钱包数据管理
│   ├─ redux/          # Redux
│   │   ├─ actions/      # （ACTION）
│   │   ├─ reducers/     # （REDUCER）
│   │   ├─ store/        # （STORE）
│   ├── routes/        # 路由（ROUTE）
│   ├── sushi/      # 服务（SERVICE，用于统一管理合约请求）
│   ├── utils/         # 工具库（UTIL）
│   ├── views/         # 路由视图基页
│   ├── App.tsx        # 全局布局
│   ├── index.tsx        # 启动文件
│   ├── index.html     # 静态基页
├── .babelrc         # Babel 转码配置
├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc        # ESLint 配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json
```
