
import React from 'react'
import { Spin } from 'antd'
import Loadable from 'react-loadable'

const LoadingComponent = () => {
  return (
    <Spin
      size='large'
      style={{
        width: '100%',
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  )
}
/**
 * @description: 本地所有路由信息映射
 */
const allAuthRouter:{[key:string]: any} = {
  home: Loadable({
    loader: () => import(/* webpackChunkName: "Home" */'pages/Home/Home'),
    loading: LoadingComponent
  }),
  analysis: Loadable({
    loader: () => import(/* webpackChunkName: "Analysis" */'pages/Dashbord/Analysis/Analysis'),
    loading: LoadingComponent
  }),
  monitor: Loadable({
    loader: () => import(/* webpackChunkName: "Monitor" */'pages/Dashbord/Monitor/Monitor'),
    loading: LoadingComponent
  }),
  rolesmanage: Loadable({
    loader: () => import(/* webpackChunkName: "RolesManage" */'pages/AuthManage/RolesManage/RolesManage'),
    loading: LoadingComponent
  }),
  accountsmanage: Loadable({
    loader: () => import(/* webpackChunkName: "AccountsManage" */'pages/AuthManage/AccountsManage/AccountsManage'),
    loading: LoadingComponent
  }),
  menusmanage: Loadable({
    loader: () => import(/* webpackChunkName: "MenusManage" */'pages/AuthManage/MenusManage/MenusManage'),
    loading: LoadingComponent
  }),
  systemconfig: Loadable({
    loader: () => import(/* webpackChunkName: "MenusManage" */'pages/System/SystemConfig/SystemConfig'),
    loading: LoadingComponent
  })
}

/**
 * 动态路由映射函数
 */
export const userDynamicRouters = (rightRouters: any) => {
  const userRouters: any = []
  const recursionMap = (arr: any) => {
    arr.forEach((item: any) => {
      if (item.children && item.children.length) {
        recursionMap(item.children)
      } else {
        const component = item.component?.toLowerCase()
        if (allAuthRouter[component]) {
          userRouters.push({ ...item, component: allAuthRouter[component] })
        }
      }
    })
  }
  recursionMap(rightRouters)
  return userRouters
}

/**
 * @description: 权限路由,根据请求回来的路由,过滤有权限的路由
 * @param {*}
 * @return {*}
 */
export const authRouter = (authMenu: any[]): any => {
  const newArr = authMenu.filter((menu: any) => menu.auth)
  return newArr.map((item: any) => {
    if (item.children && item.children.length) {
      item.children = authRouter(item.children)
    }
    return item
  })
}
