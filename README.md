# VEAdmin
## 项目介绍
VEAdmin是一个基于Vue + ElementUI开发的后台前端解决方案，采用mock.js模拟后端接口，可随机生成所需数据，可模拟对数据的增删改查。

## 项目特点
+ 页面布局不同于现目前存在的后台解决方案
+ 前后端分离，适应当前潮流

## 主要技术
vue全家桶 + ElementUI + ppcharts + mock.js

## 主要功能
```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 菜单权限
  - 用户权限

- 全局功能
  - i18n国际化
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
- 图表
  - 柱状图
  - 折线图
  - 地图
  - 饼状图
 ```
 
  ## 目录结构
  ```bash
  ├── build                      # 构建相关
  ├── mock                       # 项目mock 模拟数据
  ├── public                     # 静态资源
  │   │── favicon.ico            # favicon图标
  ├── src                        # 源代码
  │   ├── api                    # 所有请求
  │   ├── assets                 # 主题 字体等静态资源
  │   ├── components             # 全局公用组件
  │   ├── layout                 # 全局 layout
  │   ├── router                 # 路由
  │   ├── store                  # 全局 store管理
  │   ├── utils                  # 全局公用方法
  │   ├── views                  # views 所有页面
  │   ├── App.vue                # 入口页面
  │   ├── main.js                # 入口文件 加载组件 初始化等
  ├── vue.config.js              # vue-cli 配置
  ├── package-lock.json          # package-lock.json
  └── package.json               # package.json
  ```
  
 ## 安装
 ```
 ### 克隆项目
 git clone git@github.com:CoderBeam/VEAdmin.git
 
 ### 进入项目
 cd VEAdmin
 
 ### 安装依赖
 npm install
 
 ### 启动服务
 npm run dev
 ```
  
 ## 其他
 ```
 ### 安装依赖
 npm install

 ### 启动服务
 npm run serve
 
 ### 打包
 npm run build
 ```
 
 ## 项目截图
 
