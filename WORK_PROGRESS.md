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

### 千牛端使用手册

1. 从淘宝官网下载<img src="https://brand-guide.shuyun.com/IAM/cbe82c60a97d.png" alt="淘宝开发者工具" style="zoom:30%;" />，[下载链接](https://developer.taobao.com/)

2. 首先申请自己的淘宝账号为开发者账号（收集账号统一开权限）

3. 运行开发者工具，会出现图片中的画面，点击左侧打开项目，按照图片所示的内容进行选择

   ![](https://brand-guide.shuyun.com/IAM/542fb3d34516.png)

4. 项目成功运行

   ![](https://brand-guide.shuyun.com/IAM/6512ab0ca81f.png)

5. 复制链接，千牛端真实环境预览

   ![](https://brand-guide.shuyun.com/IAM/6c2c8cb85f95.png)

6. 下载[千牛工作台](https://cts.alibaba.com/product/qianniu.htm)（只适用于 windows 系统， 苹果端无法调适，只能使用虚拟机）。

7. 申请千牛端数云食堂子账号后可登入系统进行调试预览（搜集账号后进行授权）

8. 进入系统，点击右上角设置按钮，呼出系统设置后，按快捷键调出开发者模式 window 系统 ctrl + shift + 鼠标右键（mac 下 command+shift+点击触控板）, 将淘宝小程序开发者工具复制的链接复制到红框后即可打开预览

   ![](https://brand-guide.shuyun.com/IAM/28f4a2ba0c0f.png)

9. 最终预览成果

   ![](https://brand-guide.shuyun.com/IAM/6e78b54aa5e2.png)

### 开发手册

1. 文件目录结构

   ![](https://brand-guide.shuyun.com/IAM/80932f215656.png)

2. 组件库组件构成要素
   - tsx 组件开发（优先 hooks 开发）及样式 less 文件
   - types 文件夹下的.d.ts,声明要有注释
   - md 文档，对组件的使用阐述及参数说明 （可参考组件 Carousel 组件）

![](https://brand-guide.shuyun.com/IAM/47e29fab6ac2.png)

3. md 文档展示，运行 npm run start, 浏览器打开 localhost:8000 进行文档预览效果

![](https://brand-guide.shuyun.com/IAM/0efde5298c1b.png)

4. Demo 编写

   在 pages 下找到组件属于的层级，进行创建页面，创建好页面后，将当前创建页面的链接增加到 app.config.js 中，进行 demo 展示。尽可能详细的将你的组件的使用参数与使用方法都展示在 demo 中，便于使用者能更多的获取组件的能力。

![](https://brand-guide.shuyun.com/IAM/95b722d3035e.png)
