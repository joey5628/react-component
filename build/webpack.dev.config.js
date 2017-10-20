const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
    // devtool: '#eval-source-map',
    devtool: 'inline-source-map',

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // new UglifyjsWebpackPlugin({
        //     sourceMap: true
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // names: ['vendor', 'manifest'],
            // filename: 'js/vendor.js'
            // names: ['vendor', 'manifest']
            // minChunks: 2
        }),

        new HtmlWebpackPlugin({
            title: config.title,
            filename: 'index.html',
            template: 'index.html'
        })
    ]
})
