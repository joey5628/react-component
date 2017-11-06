/**
 * Created by zhangyi on 2017/11/6.
 */
const config = require('./index.js')

const API_URL = {
    development: `http://localhost:${config.dev.port}/api/`,

    production: 'https://partner-api.yonghuivip.com/',
    testin: 'http://testin-partner-api.yonghuivip.com/',
    qa3: 'http://partner-rest-api-qa3.yonghuivip.com/',
    performance: 'http://partner-api-qa.yonghuivip.com/',
}

module.exports = API_URL