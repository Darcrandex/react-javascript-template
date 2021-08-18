const path = require("path");
const CracoAntDesignPlugin = require("craco-antd");
const CracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");
const cracoPluginStyleResourcesLoader = require("craco-plugin-style-resources-loader");

const isDevelopmentMode = process.env.NODE_ENV === "development";

module.exports = {
  // 允许使用装饰器语法
  // https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy
  babel: {
    assumptions: {
      setPublicClassFields: true,
    },
    presets: ["@babel/preset-env"],
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  },

  plugins: [
    // 使用路径别名
    {
      plugin: CracoAlias,
      options: {
        // 从 '/jsconfig.json' 中的获取配置
        source: "jsconfig",
      },
    },

    // 使用 antd
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // 自定义样式 .less 文件路径
        customizeThemeLessPath: path.resolve(
          __dirname,
          "./src/antd.customize.less"
        ),
        babelPluginImportOptions: {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true,
        },
      },
    },

    // 使用 less, 并支持 css-module
    {
      // 1. 一般的'.less'
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.less$/;
          lessRule.exclude = /\.module\.less$/;
          return lessRule;
        },
      },
    },
    {
      // 2.使用 css-module 的'.module.less'
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.module\.less$/;
          lessRule.exclude = undefined;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: isDevelopmentMode
              ? "[path]__[name]__[local]_[hash:base64:5]" // 开发模式,显示完整的less文件路径,方便调试
              : "[hash:base64:10]",
          },
        },
      },
    },

    // 全局 less 变量/混入
    // 注意: 需要配置在 'CracoAntDesignPlugin' 的后面,否则会报错
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        patterns: path.join(__dirname, "./src/styles/*.less"),
        styleType: "less",
      },
    },
  ],
};
