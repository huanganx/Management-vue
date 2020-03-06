/**
 * 权限校验函数
 * auth.js 演示 使用路由管理用户权限
 * @CrabFort
 */

// 获取当前用户权限
export function getCurrentAuthority() {
  return ["user"];
}

// 权限校验
export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}

// 登录检验
export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
