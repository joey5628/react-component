/**
 * Created by zhangyi on 2017/10/18.
 */
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.config');
const config = require('../config');

// const argv = require('yargs').argv;
// console.log('argv:', argv.name)

const port = config.dev.port || 4000;

webpackConfig.entry.app.unshift("webpack-dev-server/client?http://0.0.0.0:"+ port +"/", "webpack/hot/dev-server")

const complier = webpack(webpackConfig)
const server = new webpackDevServer(complier, {
    noInfo: false,
    hot: true,
    stats: { colors: true }
}).listen(port, '0.0.0.0', function (err) {
    console.log('listen');
})

module.exports = server

