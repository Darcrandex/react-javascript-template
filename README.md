## 构建过程

### 创建初始项目[CRA](https://create-react-app.dev/docs/getting-started)

```cmd
yarn create react-app my-react-app
```

### 创建配置文件

```cmd
cd my-react-app
touch craco.config.js
```

### 修改`package.json`

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  }
}
```

### 安装并配置`antd@x`(兼容 IE9)

```cmd
yarn add craco-antd -D
yarn add antd@^3
```

创建`antd`自定义样式文件. ([antd@3.x 支持的自定义变量](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less))

```cmd
cd ./src
touch antd.customize.less
```

> 查看`/craco.config.js`

### 使用 less,并支持 css-module

```cmd
yarn add craco-less -D
```

> 查看`/craco.config.js`

### 使用 less 全局变量

安装插件

```cmd
yarn add -D craco-plugin-style-resources-loader
```

> 注意: 由于同时安装了`craco-antd`, 这个插件必须配置在`craco-antd`的后面
> 查看`/craco.config.js`

### 使用 mobx@4.x

```cmd
yarn add mobx@^4 mobx-react@^6
```

> 允许使用装饰器

```cmd
yarn add @babel/plugin-proposal-decorators -D
```

> 查看`/craco.config.js`

`/jsconfig.json`

```json
{ "experimentalDecorators": true }
```

### 使用 react-router

```cmd
yarn add react-router
```

### polyfill

`babel@7.x`开始, 使用以下方式

```cmd
yarn add core-js regenerator-runtime --save
```

在`./src/index.js`头部引入

```js
import "core-js";
import "regenerator-runtime";
```

[CRA 浏览器支持](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)

```cmd
yarn add react-app-polyfill --save
```

在`./src/index.js`头部引入

```js
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
```

### 引入 eslint

```cmd
yarn add eslint -D
```

新增配置文件: `/.eslint.js`,`.eslintignore`
