import { message } from 'antd'
import { loginApi, getAuthInfoApi } from 'api/EntryScreenApi/EntryScreenApi'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router'
import { filterAuthRoutes } from 'routers/userDynamicRouters'
import { errorCodeZH } from 'api/errorCode'

export interface ILogin {
  username: string,
  password: string
}

/**
 * @description:  中后台登录服务
 * @param {*}
 * @return {*}
 */
export const useLogin = () => {
  const history = useHistory()
  const onFinish = async (values: any) => {
    const bool = await loginFetch(values)
    if (bool) {
      await getAuthInfoAction()
      history.push('/home')
    }
  }

  /**
   * @description: 调用登录的接口
   */
  const loginFetch = async (values: ILogin) => {
    const { data } = await loginApi(values)
    // 存储过滤好的权限路由信息
    console.log(`data`, data)
    if (data.code === 0) {
      localStorage.setItem('userInfo', JSON.stringify(data.data))
      Cookies.set('R-Boot-token', data.data.token)
      message.success('🎉登录成功!')
      return true
    } else {
      message.error(`${errorCodeZH[data.code]}`)
      return false
    }
  }

  /**
   * @description: 获取菜单路由权限信息/按钮权限信息
   */
  const getAuthInfoAction = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
    if (userInfo.token) {
      const { data } = await getAuthInfoApi({ token: userInfo.token })
      console.log(data)
      if (data.code === 0 && data.data.authMenu) {
        localStorage.setItem('authMenu', JSON.stringify(filterAuthRoutes(data.data.authMenu)))
        localStorage.setItem('authButton', JSON.stringify(data.data.authButton))
      } else {
        message.error('权限信息获取失败,请联系管理员!')
      }
    }
  }
  return {
    onFinish
  }
}

/**
 * @description: 退出中后台系统配置
 * @param {*}
 * @return {*}
 */
export const useLogout = () => {
  const logout = () => {
    localStorage.clear()
    Cookies.remove('R-Boot-token')
    window.location.reload()
  }
  return {
    logout
  }
}
