#千牛组件库开发手册

### 环境安装

1. 安装 Taro 的开发环境，基于 3.2.5 版本开发
2. 获取关于 gitlab 千牛端 PC [组件库](http://gitlab.platdep.shuyun.com/fe/public/taro-qn-components)的代码资源
3. 切出关于自己的开发分支，例如 dev-button 分支进行开发，开发完毕后统一提审到 dev 分支进行合并
4. 安装代码库管理工具 `lerna`

5. 在项目根目录下安装依赖 `lerna bootstrap`
6. 初始化依赖执行命令 `cd packages/taro-qn-demo && npm i ../taro-qn-components --save && cd ../../`
7. 开启组件编译 `npm run watch`
8. link 组件库到本地 `cd packages/taro-qn-components && npm link && cd ../../`
9. 在 demo 项目中 link 组件库 `cd packages/taro-qn-demo && npm link taro-qn-components`
10. 开启示例 demo 编译 `npm run dev:qn`
11. 打开小程序工具 taro-qn-demo/dist/qn 下项目
12. 最终预览成果

   ![](https://brand-guide.shuyun.com/IAM/6e78b54aa5e2.png)
