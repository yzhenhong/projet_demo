'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: JSON.stringify('development'),
  // 网站
  WEB_HOST: JSON.stringify('http://localhost:8080'),
  // 请求后台地址
  API_URL: '"https://"',
})
