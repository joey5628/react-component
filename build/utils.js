/**
 * Created by zhangyi on 2017/10/19.
 */
const path = require('path')

exports.resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}
