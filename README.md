## alias

`jsconfig.json`

```json
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
```

`config/webpack.config.js`

```js
"@": path.resolve(__dirname, "../src"),
```

## polyfill

> [浏览器支持](https://create-react-app.dev/docs/supported-browsers-features/#supported-language-features)

```
yarn add react-app-polyfill
```

`src/index.js`

```js
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
```

## less module

```
yarn add less less-loader@^5 style-resources-loader -D
```

`config/webpack.config.js`

```js
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

const styleResourceLoader = {
  loader: 'style-resources-loader',
  options: {
    patterns: path.resolve(__dirname, '../src/styles/*.less'),
    injector: 'prepend',
  },
}

const cssModuleClassName = isEnvDevelopment ? '[path]__[name]__[local]' : '[hash:base64:10]'
```

## antd

```
yarn add antd@3.26.15
```

`config/webpack.config.js`

```js
javascriptEnabled: true, //支持less可以使用变量
```

新建`src/antd-theme.less`并在`src/index.js`中引入.

如果使用[按需加载](https://3x.ant.design/docs/react/introduce-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD),[自定义主题](https://3x.ant.design/docs/react/customize-theme-cn#%E5%9C%A8-create-react-app-%E4%B8%AD%E5%AE%9A%E5%88%B6%E4%B8%BB%E9%A2%98)就无法使用

## proxy axios

> [dev proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)

```
yarn add http-proxy-middleware -D
```

新建`src/setupProxy.js`

```
yarn add axios
```

新建`src/utils/http.js`

## mobx

```
yarn add mobx@4.15.4 mobx-react //兼容ie9+
yarn add @babel/plugin-proposal-decorators -D
```

## 打包后的资源引用路径

`package.json`

```json
"homepage": "./"
```

## 自定义环境变量

> [create-react-app 选项](https://create-react-app.dev/docs/adding-custom-environment-variables)

直接对应模式的文件中添加即可. 获取时使用`process.env`

### cross-env(选装)

安装这个插件可以强制修改环境变量. **_注意: 只能修改已经定义的变量, 无法添加新变量_**

```
yarn add cross-env -D
```

在`package.json`中的`script`字段中使用

```json
"scripts": {
  "start": "cross-env YOUR_VALUE=abcdef node scripts/start.js",
  "build": "node scripts/build.js",
  "test": "node scripts/test.js"
},
```
