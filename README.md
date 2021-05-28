# 🎉基于react17+hooks+ts中后台R-Boot🎉
## 一、序言
​		`R-Boot` 是基于 `create-react-app` 封装的一款脚手架，用于快速搭建 react 中后台项目，内置了国际化解决方案{自己研究的} 权限路由方案，按钮粒度权限解决方案，提炼了经典的中后台业务模型。



## 二、目录结构
```html
├── public
│   └── index.html           # 入口html文件
│   └── favicon.png          # Favicon
├── src
│   ├── api                  # 后台接口服务
│   ├── assets               # 本地静态资源
│   │   └── images                 # 全局图片资源
│   ├── authortiy            # 全局权限设置
│   │   └── AuthButton             # 权限按钮组件
│   ├── components           # 业务通用组件
│   │   └── AppProviders           # App组件包裹组件
│   │   └── LangMessage            # 全局国际化语言组件
│   ├── config               # 全局配置文件
│   │   └── config.ts              # 全局配置文件
│   ├── layouts              # 通用布局
│   ├── locales              # 国际化资源
│   ├── pages                # 业务页面入口和常用模板
│   ├── routers              # 全局路由组件配置
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

- 按钮权限

  - 设计AuthButton组件，实现颗粒度按钮权限控制。

- 语言国际化

  - 结合redux思想，根据redux状态共享，开发语言国际化模块。
  - 设计LangMessage组件，获取redux中的语言数据。
  - 设计ToggleLang组件，做全局国际化语言切换。


