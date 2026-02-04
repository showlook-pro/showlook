import { isBrowser } from './utils'

const PASSWORD_SCOPE_PREFIX = 'password_scope_'
const PASSWORD_SCOPE_EXPIRE_DAYS = 7

/**
 * 将路由统一转换成 localStorage 使用的 path key
 * @param {string} path
 * @returns {string}
 */
export const getPasswordStoragePath = path => {
  if (!path) {
    return '/'
  }
  const url = new URL(path, isBrowser ? window.location.origin : 'http://x')
  return url.pathname || '/'
}

/**
 * 保存当前页面密码（用于同一路径免输入）
 * @param {string} path
 * @param {string} password
 */
export const savePathPassword = (path, password) => {
  if (!isBrowser || !password) {
    return
  }
  const storagePath = getPasswordStoragePath(path)
  localStorage.setItem('password_' + storagePath, password)
}

/**
 * 保存密码作用域（用于父页+子页共享解锁）
 * @param {string} scope
 * @param {string} password
 * @param {number} expireDays
 */
export const saveScopePassword = (
  scope,
  password,
  expireDays = PASSWORD_SCOPE_EXPIRE_DAYS
) => {
  if (!isBrowser || !scope || !password) {
    return
  }
  const record = {
    password,
    expireAt: Date.now() + expireDays * 24 * 60 * 60 * 1000
  }
  localStorage.setItem(
    PASSWORD_SCOPE_PREFIX + encodeURIComponent(scope),
    JSON.stringify(record)
  )
}

/**
 * 读取作用域密码（过期自动清理）
 * @param {string} scope
 * @returns {string}
 */
const getScopePassword = scope => {
  if (!isBrowser || !scope) {
    return ''
  }
  const key = PASSWORD_SCOPE_PREFIX + encodeURIComponent(scope)
  const raw = localStorage.getItem(key)
  if (!raw) {
    return ''
  }
  try {
    const parsed = JSON.parse(raw)
    if (!parsed?.password || !parsed?.expireAt || parsed.expireAt < Date.now()) {
      localStorage.removeItem(key)
      return ''
    }
    return parsed.password
  } catch (error) {
    localStorage.removeItem(key)
    return ''
  }
}

/**
 * 获取默认密码
 * 用户可以通过url中拼接参数，输入密码
 * 输入过一次的密码会被存储在浏览器中，便于下一次免密访问
 * 返回的是一组历史密码，便于客户端多次尝试
 */
export const getPasswordQuery = (path, scope = '') => {
  // 使用 URL 对象解析 URL
  const url = new URL(path, isBrowser ? window.location.origin : 'http://x')

  // 获取查询参数
  const queryParams = Object.fromEntries(url.searchParams.entries())

  // 请求中带着密码
  if (queryParams.password) {
    // 将已输入密码作为默认密码存放在 localStorage，便于下次读取并自动尝试
    localStorage.setItem('password_default', queryParams.password)
  }

  // 获取路径部分
  const cleanedPath = getPasswordStoragePath(path)

  // 从 localStorage 中获取相关密码
  const storedPassword = localStorage.getItem('password_' + cleanedPath)
  const scopePassword = getScopePassword(scope)
  const defaultPassword = scope ? '' : localStorage.getItem('password_default')

  // 将所有密码存储在一个数组中，并过滤掉无效值
  const passwords = [
    queryParams.password,
    storedPassword,
    scopePassword,
    defaultPassword
  ].filter(Boolean)

  return [...new Set(passwords)]
}
