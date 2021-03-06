import {
  _DOMAIN
  // _APPS
} from 'config/deploy'
import axios from 'axios'
// import bus from './bus.js'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8'
let path = `${_DOMAIN}`
console.log(path)
let api_path_add = `${path}/add`
let api_path_getList = `${path}/getList`
let api_path_update = `${path}/update`
let api_path_delete = `${path}/delete`
let api_path_getInfoList = `${path}/get508InfoList`
let api_path_add508Member = `${path}/add508Member`
let api_path_delete50Member = `${path}/delete50Member`
let api_path_update508Member = `${path}/update508Member`
let api_path_ydyl = `${path}/ydyl`
// let sp_mds = `${_DOMAIN}/${_APPS['sp_mds'].ver}/${_APPS['sp_mds'].model}`

export function add (params) {
  return _postData(
    api_path_add,
    params
  )
}

export function update (params) {
  return _postData(
    api_path_update,
    params
  )
}

export function deleteInfo (params) {
  return _postData(
    api_path_delete,
    params
  )
}

export function getList (params) {
  return _postData(
    api_path_getList,
    params
  )
}

export function getInfoList (params) {
  return _postData(
    api_path_getInfoList,
    params
  )
}

export function add508Member (params) {
  return _postData(
    api_path_add508Member,
    params
  )
}

export function delete50Member (params) {
  return _postData(
    api_path_delete50Member,
    params
  )
}

export function update508Member (params) {
  return _postData(
    api_path_update508Member,
    params
  )
}

export function ydyl (params) {
  return _postData(
    api_path_ydyl,
    params,
    {responseType: 'arraybuffer'}
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

function _postData (_url, _data, _header) {
  // return axios.post(_url, qs.stringify(_data), {
  if (/findRtLocInfo/.test(_url) || /findVehDataMoniInfo/.test(_url) || /addVehInfoUI/.test(_url) || /addVehModelUI/.test(_url) || /findGroups/.test(_url)) {
  } else {
  }
  return axios.post(_url, _data || {}, _header)
    .then(res => {
      return Promise.resolve(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.resolve(err.data)
    })
}
