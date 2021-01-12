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
// 为了兼容ie9
yarn add antd@3.26.15
```

`config/webpack.config.js`

```js
javascriptEnabled: true, //支持less可以使用变量
```

新建`src/antd-theme.less`并在`src/index.js`中引入.

如果使用[按需加载](https://3x.ant.design/docs/react/introduce-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD),[自定义主题](https://3x.ant.design/docs/react/customize-theme-cn#%E5%9C%A8-create-react-app-%E4%B8%AD%E5%AE%9A%E5%88%B6%E4%B8%BB%E9%A2%98)就无法使用. 目前`js`部分默认会按需加载, css 部分则会使用完整的文件(400+ kb).

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

> [使用装饰器](https://mobx.js.org/best/decorators.html#enabling-decorator-syntax)

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

## 打包后引用路径的问题

默认打包后,资源引用的路径是'/',这可能会导致在部署的时候,资源引用错误(单个服务器下有多个项目)

```
// package.json
"homepage": "./"
```

## 动态项目配置

项目打包之后依然可以便捷的重新修改配置.

具体内容和原理请查看 [react 使用 window 全局变量](https://darcrandex.github.io/src/posts/react-use-global-variables.html)

```json
// /public/config.json
{
  "PRODUCTION_OPTION_A": "anything you want",
  "PRODUCTION_OPTION_B": { "key": "value" }
}
```

## 集成 eslint+prettier

> [参考链接](https://segmentfault.com/a/1190000022110632)

`vscode`安装插件`eslint`,`prettier`

安装依赖

```sh
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

新增配置文件: `.eslintrc.js`, `.eslintignore`, `prettierrc.js`

## 添加打包时间

> html 模版可使用[ejs 语法](https://ejs.bootcss.com/#about)

`/public/index.html`

```html
<meta name="build-date" content="<%= new Date().toLocaleString() %>" />
```
