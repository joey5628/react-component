/**
 * Created by zhangyi on 2017/10/18.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].bundle.[hash:4].js'
    },

    devtool: '#source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyjsWebpackPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin('css/[name].[hash:4].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.bundle.[hash:4].js'
        }),
        new HtmlWebpackPlugin({
            title: config.title,
            filename: 'index.[hash:4].html',
            template: 'index.html'
        })
    ]
})

