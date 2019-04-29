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
| 命令                                   | 作用&效果                  |
| --------------------------------------|---------------------------|
| $ npm run build:dev or yarn build:dev | 打包用于测试环境(dev)代码    |
| $ npm run build:prod or yarn build:prod | 打包用于生产环境(prod)代码 |
| $ umi g page <page> or npx umi g page <page> | 在src/pages/添加页面 |
```

## 目录结构
  ```
    + config/ # webpack && umi 配置目录
        + config.js 开发环境配置
        + config.prod.js 生产环境配置
    + mock/ # mock 测试数据目录
    + node_modules/ # npm管理的所有包及其依赖
    + dist # 编译后生成的所有代码、资源
    + src/ # 当前项目源码，开发都在此目录
        + assets/ # 静态资源文件目录
        + components/ # 公用组件目录
        + layouts/ # 布局组件目录
        + models/ # 
  ```