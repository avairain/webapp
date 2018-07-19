import {
  _DOMAIN
  // _APPS
} from 'config/deploy'
import axios from 'axios'
// import bus from './bus.js'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8'
if (window.sessionStorage.getItem('rtm_user_token')) {
  axios.defaults.headers.common['token'] = window.sessionStorage.getItem('rtm_user_token')
}
let path = `${_DOMAIN}`
console.log(path)
let api_path_add = `${path}/add`
let api_path_getList = `${path}/getList`
// let sp_mds = `${_DOMAIN}/${_APPS['sp_mds'].ver}/${_APPS['sp_mds'].model}`

export function add (params) {
  return _postData(
    api_path_add,
    params
  )
}

export function getList (params) {
  return _postData(
    api_path_getList,
    params
  )
}

export function getCaptcha () {
  return _getData(
    api_path_getCaptcha
  )
}

function _getData (_url, _data) {
  if (/provinces/.test(_url) || /cities/.test(_url)) {
  } else {
  }
  return axios.get(_url, (_data) ? { params: _data || {} } : { data: _data || {} }
  ).then(res => {
    if (/provinces/.test(_url) || /cities/.test(_url)) {
    } else {
    }
    return Promise.resolve(res.data)
  }).catch(err => {
    if (/provinces/.test(_url) || /cities/.test(_url)) {
    } else {
      bus.$emit('hasLoading')
    }
    return Promise.resolve(err.data)
  })
}

function _postData (_url, _data) {
  // return axios.post(_url, qs.stringify(_data), {
  if (/findRtLocInfo/.test(_url) || /findVehDataMoniInfo/.test(_url) || /addVehInfoUI/.test(_url) || /addVehModelUI/.test(_url) || /findGroups/.test(_url)) {
  } else {
  }
  return axios.post(_url, _data || {})
    .then(res => {
      return Promise.resolve(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.resolve(err.data)
    })
}
