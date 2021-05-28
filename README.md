# 🎉基于react17+hooks+ts中后台R-Boot🎉
## 一、序言
​		`R-Boot` 是基于 `create-react-app` 封装的一款脚手架，用于快速搭建 react 中后台项目，内置了国际化解决方案{自己研究的} 权限路由方案，按钮粒度权限解决方案，提炼了经典的中后台业务模型。



## 二、目录结构
```html
├── __json__server           #模拟后台请求的mock服务器
├── public
│   └── favicon.png          # Favicon
│   └── index.html           # 入口html文件
├── src
│   ├── api                  # 后台接口服务
│   ├── appAuthority         # 项目控制权限相关
│   │   └── AppConfig              # 全局App控制
│   │   └── AppProviders           # App组件包裹组件
│   │   └── AuthButton             # 全局权限按钮
│   │   └── AuthRoute              # 全局权限路由,token过期,跳转登录页
│   ├── assets               # 本地静态资源
│   │   └── images                 # 全局图片资源
│   ├── components           # 业务通用组件
│   │   └── AdvancedSearch         # Form高级搜索
│   │   └── AdvancedTable          # Table高级表格
│   │   └── BreadCrumbPro          # 面包屑
│   │   └── Copyright              # footer
│   │   └── CustomLogo             # logo
│   │   └── CustomMenu             # 自定义菜单
│   │   └── LangMessage            # 全局国际化语言组件
│   ├── config               # 全局配置文件
│   │   └── config.ts              # 全局配置文件
│   ├── layouts              # 通用布局
│   ├── locales              # 国际化资源
│   ├── pages                # 业务页面入口和常用模板
│   │   └── EntryScreen             # 登录注册界面
│   ├── routers              # 全局路由组件配置
│   │   └── AsyncComponent          # 异步加载组件
│   │   └── userDynamicRouters      # 动态路由匹配文件
│   ├── service              # 组件逻辑处理
│   ├── store                # 全局状态共享store
│   ├── styles               # 全局样式
│   ├── typings              # 全局TS声明文件
│   ├── utils                # 工具库
│   ├── react-app-env.d.ts   # 全局忽略文件
│   └── index.ts             # 工具库
├── .env.develop             # 开发环境变量配置文件
├── .eslintrc.js             # eslint配置文件
├── .gitignore            	 # git 上传忽略文件
├── config-overrides         # webpack 扩展文件
├── package-lock.json        # 项目配置文件
├── package.json             # 项目配置文件
├── README.md                # 项目介绍文件README
└── tsconfig.json            # ts配置文件
```



## 三、项目依赖

- react 17  -  中后台项目选型使用 react 框架
- react-hooks  -  使用最新的官方推荐的最新的hooks写法
- typescript 4  -  使用更强的typescript语言
- react-router
- react-router-dom
- redux  -  使用redux作为全局状态管理工具
- react-redux  -  使用react-redux插件更便捷使用redux
- eslint  -  使用eslint检测规则
- less  -  使用less作为css预处理器语言
- axios  -  使用axios网络库，请求数据
- antd  -  使用antd组件库快速开发

## 四、功能

- 菜单、路由权限
  - 从服务端获取路由信息
  - 路由信息包含auth字段;
    - auth===ture,则用户对该路由具有可视权限,渲染此菜单和路由;
    - auth===false,则用户对该路由不具有可视权限,并且不会渲染此菜单和该路由;

- 按钮权限

  - 基于Antd Button设计AuthButton组件，实现颗粒度按钮权限控制。
    - 增加 auth 属性, 用户菜单权限数组包含 auth 属性对应的值,则显示此按钮
    - 增加 customtype 属性, 增加Antd Button 按钮的样式  sucess|warning|error|info

- 语言国际化

  - 结合redux思想，根据redux状态共享，开发语言国际化模块。
  - 设计LangMessage组件，获取redux中的语言数据。
  - 设计ToggleLang组件，做全局国际化语言切换。
  - 利用localStorage对语言状态做持久化


