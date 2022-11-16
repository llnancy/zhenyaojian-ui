import { LOGIN, LOGOUT, USER_MENU, USER_INFO, ROUTES } from '@/services/api'
import { request, METHOD } from '@/utils/request'

const { GET, POST } = METHOD

/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export function login(parameter) {
  return request({
    url: LOGIN,
    method: POST,
    data: parameter
  })
}

export function getUserMenu() {
  return request({
    url: USER_MENU,
    method: GET
  })
}

export function getUserInfo() {
  return request({
    url: USER_INFO,
    method: GET
  })
}

export function logout() {
  return request({
    url: LOGOUT,
    method: POST
  })
}

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET)
}