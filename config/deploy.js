import config from './'

export const THEME = 'rtm'

const PRODUCT_PATH = 'http://140.143.239.174:6060'
    // 'http://chtcmotorzuul.dev.virtueit.net'
    // 'http://chtcmotor.dev.virtueit.net'
const DEVELOP_PATH = 'http://127.0.0.1:6060'
// const DEVELOP_PATH = 'http://172.16.0.120:8080'

// TODO: NEEDS TO BE REPLACED WITH THE REAL PATH
export const _DOMAIN = (process.env.NODE_ENV === 'production') ? PRODUCT_PATH : (config.dev.proxyTable ? '/cros' : DEVELOP_PATH)

export const _APPS = {
    sp_mds: {
        model: 'spmds',
        ver: 'v0'
    },
    sp_obs: {
        model: 'spobs',
        ver: 'v0'
    },
    sp_iam: {
        model: 'spiam',
        ver: 'v0'
    },
    sp_vds: {
        model: 'spvds',
        ver: 'v0'
    },
    sp_oss: {
        model: 'sposs',
        ver: 'v0'
    },
    sp_vss: {
        model: 'spvss',
        ver: 'v0'
    },
    gw_device: {
        model: 'gwdevice',
        ver: 'v0'
    },
    bd_rt: {
        model: 'bdrt',
        ver: 'v0'
    }
}

