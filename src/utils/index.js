/**
 * @description 保留小数点
 * @param {number} num 要处理的数值
 * @param {number} count 小数位数
 * @returns {number}
 */
export function toFixed(num = 0, count = 2) {
  if (typeof num !== 'number') {
    throw new Error("argument 'num' must be a Number")
  }
  if (typeof count !== 'number') {
    throw new Error("argument 'count' must be a Number")
  }

  const _c = Math.max(1, Math.min(10, count))
  return parseFloat(num.toFixed(_c))
}

/**
 * @description 随机字符串
 * @param {number} len 字符串长度
 * @returns {string}
 */
export function randomStr(len = 16) {
  const l = Math.max(1, Math.min(100, len))
  let str = '_'

  while (str.length < l) {
    str += Math.random().toString(36).slice(2)
  }

  return str.slice(0, l)
}

/**
 * @description 数值边界
 * @param {number} num 需要处理的数值
 * @param {number} min 最小边界值
 * @param {number} max 最大边界值
 * @returns {number}
 */
export function boundary(num, min = -Infinity, max = Infinity) {
  return Math.max(min, Math.min(max, num))
}
