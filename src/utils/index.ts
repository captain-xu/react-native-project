/*
  这里管理全局公用的方法
*/
import * as functions from './functions'
import * as request from './request'

export default {
  ...functions,
  ...request
}