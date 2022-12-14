// 路由组件
const routerComponents = {
  // 基础页面 layout
  Tabs: () => import('@/layouts/tabs'),
  BlankView: () => import('@/layouts/BlankView'),
  PageView: () => import('@/layouts/PageView'),
  Exception403: () => import(/* webpackChunkName: "error" */ '@/pages/exception/403'),
  Exception404: () => import(/* webpackChunkName: "error" */ '@/pages/exception/404'),
  Exception500: () => import(/* webpackChunkName: "error" */ '@/pages/exception/500'),

  // 需要动态引入的组件
  Login: () => import('@/pages/login'),
  MenuManage: () => import('@/pages/system/menu/MenuManage'),
  UserManage: () => import('@/pages/system/user/UserManage'),
  RoleManage: () => import('@/pages/system/role/RoleManage'),

  OperateLog: () => import('@/pages/observability/logs/operate/OperateLog'),
  LoginLog: () => import('@/pages/observability/logs/login/LoginLog'),
  SpringBootAdmin: () => import('@/pages/observability/sba/SpringBootAdmin')
}

export default routerComponents
