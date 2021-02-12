// vue.config.js
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  publicPath: './',
  outputDir: 'isz_microPlatform',
  // webpack-dev-server 相关配置
  devServer: {
    proxy: {
        '/api': {
            target: 'http://30.99.136.48:8770/', //target为后台请求地址
            pathRewrite: {
                '^/api/api-admin/': '/api/'
            }
        }
    }
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // }
  },
//  devServer: {
//     open: process.platform === 'darwin',
//     host: '0.0.0.0',
//     port: 8080,
//     https: false,
//     hotOnly: false,
//     proxy: null, // 设置代理
//     before: app => {}
//    },
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //   } else {
  //       console.log(config);
  //     // 为开发环境修改配置...
  //   }
  // },
  configureWebpack: {
    externals: {
      'AMap': 'AMap',
      'AMapUI': 'AMapUI'
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16,
            minPixelValue: 3,
            propList: ['*']
          })
        ]
      }
    }
  },
  lintOnSave : false
};
