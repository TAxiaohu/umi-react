## 项目介绍
本项目采用 umi + dva + roadhog架构 基于react + antd 开发

## 使用说明
推荐使用 yarn
- 下载依赖包
```
$ npm install or yarn install
```

- 启动开发服务器
```
$ npm start or yarn install or npx umi dev
```

- 其他常用命令
```
| 命令            | 作用&效果          |
| --------------- | ------------- |
| $ npm run build:dev or yarn build:dev | 打包用于测试环境(dev)代码 |
| $ npm run build:prod or yarn build:prod | 打包用于生产环境(prod)代码 |
| $ umi g page <page> or npx umi g page <page> | 在src/pages/ 添加页面 |
```

## 目录结构
-
  ```
    ├─config # webpack && umi 配置目录
    └─
    ├─supplierDist # 编译后生成的所有代码、资源，开发环境
    ├─test # 编译后生成的所有代码、资源，测试环境
    ├─bin # node脚本
    ├─node_modules # 利用npm管理的所有包及其依赖
    ├─package.json # npm的配置文件
    ├─webpack # 存放分拆后的webpack配置文件
    ├─webpack.config.js # webpack配置文件
    |-public # 公用方法
    |-components # 公用组件
    ├─src_admin # 当前项目的源码，所有开发都在此目录中
    ├─pages # 页面存放位置，以页面名称作为子文件夹
    └─router # 项目路由的配置，引用等目录
    └─redux # action, reducer, store等目录
    └─template # 保存打包用的html模板
    └─less # 常规less配置
  ```