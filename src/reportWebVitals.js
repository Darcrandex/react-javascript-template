// 这个函数是用来检测项目性能的
// 在 '/src/index.js' 引入这个函数. 然后在文件的最后一行添加:
// reportWebVitals(console.log)

// 详情内容:https://github.com/GoogleChrome/web-vitals

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
