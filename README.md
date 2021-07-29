安装
需要安装 Taro 开发工具 @tarojs/cli，Taro 版本需要在 1.0.0-beta.18 以上

npm install -g @tarojs/cli
然后在项目中安装 Taro UI

npm install taro-ui

使用
在代码中 import 需要的组件并按照文档说明使用

import { AtButton } from 'taro-ui'

由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：
h5: {
  esnextModules: ['taro-ui']
}

问题描述：Error:  Could not find "./style/index.scss"；

解决方法
1.将package.json中的taro-ui库删除；
2.在devDependencies中添加如下代码： 
  "devDependencies": {
    "taro-ui": "^3.0.0-alpha"
  }
3.重新 npm install
4.重启项目 yarn dev:weapp 或 yarn add taro-ui@3.0.0-alpha.3
