import React, { ReactElement } from 'react'
import { Breadcrumb, Space } from 'antd'
import * as Icon from '@ant-design/icons'
import { BreadcrumbItem } from 'typings/breadcrumbItem'
import { NavLink, useLocation } from 'react-router-dom'
import { init } from 'locales'

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumb>

const BreadCrumbPro: React.FC<BreadcrumbProps> = (props): ReactElement => {
  const localtion = useLocation()
  const [breadCrumbList, setBreadCrumbList] = React.useState<BreadcrumbItem[]>([])

  React.useEffect(() => {
    const path = localtion.pathname
    const authMenu = JSON.parse(localStorage.getItem('authMenu') || '[]')
    const list = findAllFather(authMenu, path)?.reverse()
    setBreadCrumbList(list)
  }, [localtion])

  /**
   * @description: 根据传入的路由 过滤面包屑路径
   */
  const findAllFather = (authMenu: any[], path:string) => {
    for (const i in authMenu) {
      if (authMenu[i].path === path) {
        // 查询到就返回该数组对象
        return [authMenu[i]]
      }
      if (authMenu[i].children) {
        const node:any = findAllFather(authMenu[i].children, path)
        if (node !== undefined) {
          // 查询到把父节点连起来
          return node.concat(authMenu[i])
        }
      }
    }
  }
  return (
    <Breadcrumb {...props}>
      {
        breadCrumbList && breadCrumbList.map((item: any, index: number) => {
          // @ts-ignore
          const iconfont = item.icon ? React.createElement(Icon[item.icon]) : ''
          return (
            <Breadcrumb.Item key={index}>
              {
                item.path && item.menuType !== 1
                  ? (
                      <NavLink to={item.path}>
                        <Space>
                          {iconfont}
                          {init(item.menuNameId)}
                        </Space>
                      </NavLink>
                    )
                  : (
                      <Space>
                        {iconfont}
                        {init(item.menuNameId)}
                      </Space>
                    )
              }
            </Breadcrumb.Item>
          )
        })
      }
    </Breadcrumb>
  )
}

export default BreadCrumbPro
