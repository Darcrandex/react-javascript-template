import CryptoJS from 'crypto-js'

export const STORAGE_TYPE = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage',
}

function getStorage(key, type) {
  try {
    const decrypted = CryptoJS.AES.decrypt(window[type].getItem(key) || '', key).toString(CryptoJS.enc.Utf8)
    const { state = {}, updateAt = Date.now() } = JSON.parse(decrypted)
    return { state, updateAt }
  } catch (error) {
    return { state: {}, updateAt: Date.now() }
  }
}

function updateStorage(key, type, { state = {}, updateAt = Date.now() } = {}) {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify({ state, updateAt }), key).toString()
  window[type].setItem(key, encrypted)
}

class Storage {
  constructor(namespace = '', config = {}) {
    this.namespace = namespace
    this.type = config.type || STORAGE_TYPE.LOCAL
    this.maxAge = Math.max(config.maxAge || 0, 0)
    this.defaultState = config.defaultState || {}

    const dataFromStorage = getStorage(this.namespace, this.type)
    this.state = Object.assign({}, this.defaultState, dataFromStorage.state)
    this.updateAt = dataFromStorage.updateAt

    updateStorage(this.namespace, this.type, { state: this.state, updateAt: this.updateAt })
  }

  get(key) {
    if (this.maxAge > 0) {
      const now = Date.now()
      if (now - this.updateAt > this.maxAge) {
        console.error('缓存过期')
        this.reset()
      }
    }

    if (typeof key === 'string' && key.trim()) {
      return this.state[key]
    } else {
      return this.state
    }
  }

  set(patch) {
    this.updateAt = Date.now()
    if (typeof patch === 'object') {
      this.state = Object.assign({}, this.state, patch)
    } else if (typeof patch === 'function') {
      this.state = Object.assign({}, this.state, patch(this.state))
    }

    updateStorage(this.namespace, this.type, { state: this.state, updateAt: this.updateAt })
  }

  reset() {
    this.state = this.defaultState || {}
    this.updateAt = Date.now()
    updateStorage(this.namespace, this.type, { state: this.state, updateAt: this.updateAt })
  }

  destroy() {
    this.state = {}
    this.updateAt = 0

    window[this.type].removeItem(this.namespace)
  }
}

export function createStorage(namespace, config) {
  if (typeof namespace !== 'string' || namespace.length === 0) {
    throw new Error('请指定命名空间')
  }

  if (typeof config === 'object') {
    const { type, maxAge, defaultState } = config

    if (typeof type !== 'undefined' && Object.values(STORAGE_TYPE).every((t) => t !== type)) {
      throw new Error('存储类型错误')
    }

    if (typeof maxAge !== 'undefined' && typeof maxAge !== 'number') {
      throw new Error('存储时间错误')
    }

    if (typeof defaultState !== 'undefined' && typeof defaultState !== 'object') {
      throw new Error('默认数据必须是对象')
    }
  }

  return new Storage(namespace, config)
}
