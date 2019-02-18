const path = require('path')

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'development') {
      return {
        devServer: {
          // host: 'localhost',
          // port: 8888,
          public: '127.0.0.1:8888',
          watchOptions: {poll: true, ignored: /(node_modules|dist|build|vendor|Docker|tests|backup|\.lock|\.git)/},
          disableHostCheck: true,
          historyApiFallback: true
        },
        devtool: 'source-map'
      }
    } else {
      return {
      }
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', path.resolve('src'))
  }
}
