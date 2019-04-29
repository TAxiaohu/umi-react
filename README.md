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
  ```
    ├── dist/                          // 默认的 build 输出目录
    ├── mock/                          // mock 文件所在目录，基于 express
    ├── config/
        ├── config.js                  // umi dev 配置
        └── config.prod.js             // umi 生产配置
    └── src/                           // 源码目录，可选
        ├── layouts/index.js           // 全局布局
        ├── pages/                     // 页面目录，里面的文件即路由
            ├── .umi-production/       // build 临时目录，会自动删除
            ├── document.ejs           // HTML 模板
            ├── 404.js                 // 404 页面
            ├── page1.js               // 页面 1，任意命名，导出 react 组件
            ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
            └── page2.js               // 页面 2，任意命名
        ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
        ├── global.js                  // 可以在这里加入 polyfill
        ├── app.js                     // 运行时配置文件config.js，二选一
    ├── .env                           // 环境变量
    └── package.json
  ```