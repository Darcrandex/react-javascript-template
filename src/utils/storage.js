import CryptoJS from "crypto-js";

// 两种存储方式
export const STORAGE_TYPES = {
  LOCALSTORAGE: "localStorage",
  SESSIONSTORAGE: "sessionStorage",
};

// 额外注入的判断缓存是否过期的 key
// 初始化的 state 对象中不要使用这个 key
const UPDATE_AT_KEY = "_update_at";

// 加密秘钥
const ENCODE_KEY = window.location.hostname;

// 将对象转化成加密的字符串
function encode(data = {}) {
  if (typeof data !== "object") {
    throw new Error("加密的数据必须为 'object' 类型");
  }

  const str = JSON.stringify(data);
  const encodeStr = CryptoJS.AES.encrypt(str, ENCODE_KEY).toString();
  return encodeStr;
}

// 将加密字符串还原为对象
function decode(encodeStr = "") {
  if (typeof encodeStr !== "string") {
    return {};
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encodeStr, ENCODE_KEY);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    const decrypted = JSON.parse(plaintext);
    return decrypted;
  } catch (err) {
    console.error("aes 解密失败");
    return {};
  }
}

/**
 * @desc 创建一个单例的 storage 对象
 * @param {string} namespace 命名空间
 * @param {object} [initState = {}] 初始数据
 * @param {string} type 缓存类型
 * @param {number} [maxAge = 0] 缓存最长有效时间, 单位毫秒(ms)
 */
export function createStorage(
  namespace = "",
  initState = {},
  type = STORAGE_TYPES.LOCALSTORAGE,
  maxAge = 0
) {
  if (typeof namespace !== "string" || namespace.trim().length === 0) {
    throw new Error("命名空间错误");
  }

  if (
    type !== STORAGE_TYPES.LOCALSTORAGE &&
    type !== STORAGE_TYPES.SESSIONSTORAGE
  ) {
    throw new Error("storage 类型错误");
  }

  // 是否设置有效时间(如果是 sessionStorage 则忽略)
  const hasMaxAge =
    type === STORAGE_TYPES.LOCALSTORAGE &&
    typeof maxAge === "number" &&
    maxAge > 0;

  const storage = {
    // 更新
    set(nextState = {}) {
      const str = window[type].getItem(namespace);
      const prevState = decode(str);

      window[type].setItem(
        namespace,
        encode(
          Object.assign(
            {},
            prevState,
            nextState,
            // 判断是否需要添加有效时间
            hasMaxAge ? { [UPDATE_AT_KEY]: Date.now() } : {}
          )
        )
      );
    },

    // 获取
    get(key = undefined) {
      const str = window[type].getItem(namespace);
      const currState = decode(str);
      const updateAt = currState[UPDATE_AT_KEY];
      const now = Date.now();

      // 是否过期
      const isOutOfDate = hasMaxAge && now > updateAt + maxAge;

      // 过期后,重置
      if (isOutOfDate) {
        console.error("缓存过期");
        storage.reset();
      }

      // 把 _update_at 先过滤出来
      delete currState[UPDATE_AT_KEY];

      // 如果传 key ,则返回指定的值
      // 否则返回整个数据对象
      if (typeof key === "string" && key.trim().length > 0) {
        return isOutOfDate ? initState[key] : currState[key];
      } else {
        return isOutOfDate ? initState : currState;
      }
    },

    // 移除其中的一个 key
    remove(key = undefined) {
      if (typeof key !== "string" || key.trim().length === 0) {
        console.error("要删除的 key 错误");
        return;
      }
      const str = window[type].getItem(namespace);
      const currState = decode(str);
      delete currState[UPDATE_AT_KEY];

      if (Object.prototype.hasOwnProperty.call(currState, key)) {
        delete currState[key];
        window[type].setItem(namespace, encode(currState));
      }
    },

    // 根据默认值重置
    reset() {
      window[type].setItem(namespace, encode(initState));
    },

    // 把整个数据对象清除
    destroy() {
      window[type].removeItem(namespace);
    },
  };

  // 初始创建时, 配置默认的数据(根据已经缓存的数据进行合并)
  const str = window[type].getItem(namespace);
  const prevState = decode(str);
  window[type].setItem(
    namespace,
    encode(Object.assign({}, initState, prevState))
  );

  return storage;
}
