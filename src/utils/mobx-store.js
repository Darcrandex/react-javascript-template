import { action, isComputedProp, isObservableProp, set } from 'mobx'

function createStore(modules = {}) {
  for (const key in modules) {
    if (modules.hasOwnProperty(key)) {
      const m = modules[key]
      Object.defineProperties(m, {
        $getStores: {
          value: () => modules,
        },
      })
    }
  }

  return modules
}

class StoreModule {
  // 获取所有的store模块
  $getStores() {}

  // 批量修改属性值
  $set(nextState = {}) {
    action((state = {}) => {
      for (const [key, value] of Object.entries(state)) {
        if (isObservableProp(this, key) && !isComputedProp(this, key)) {
          set(this, key, value)
        } else {
          console.error(
            new Error(
              `mobx action "$set": 当前 store 实例中不存在 "${key}", 或者 "${key}" 不是一个可观察属性(observable)`
            )
          )
        }
      }
    })(nextState)
  }
}

export default createStore
export { StoreModule }
