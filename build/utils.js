/**
 * Created by zhangyi on 2017/10/19.
 */
const path = require('path')

exports.resolve = resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}

exports.getApiUrl = function (env) {
    const path = resolve('config/api-url-config.js')

    let apiUrl = ''
    try {
        const apiUrlConfig = require(path)
        console.log('apiUrlConfig:', apiUrlConfig)
        if (apiUrlConfig && apiUrlConfig[env]) {
            apiUrl = apiUrlConfig[env]
        } else {
            thorw `环境参数 ${env} 在配置文件 ${path} 中不存在`
        }
    } catch(e) {
        thorw `解析 ${path} 配置文件失败`
    }

    return apiUrl
}
