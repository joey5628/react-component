const path = require('path')
const webpack = require('webpack')
const { resolve } = require('./utils')
const config = require('../config')

// px2rem
const px2remConfig = Object.assign({
    remUnit     : 37.5,
    remPrecision: 8,
}, config.px2rem);

module.exports = {
    entry: {
        'app': ['./src/app.js'],
        'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            'immutable',
            'prop-types'
        ]
    },
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
    },
    resolve: {
        alias: {
            'yhbase': resolve('src/yhbase'),
            'yhui': resolve('src/yhui'),
            'containers': resolve('src/containers'),
            'reducers': resolve('src/reducers'),
            'assets': resolve('src/assets'),
            'routes': resolve('src/routes'),
            'constants': resolve('src/constants'),
            'components': resolve('src/components')
        },
        extensions: [".js", ".json", ".less"],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [resolve('src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: 'img/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'px2rem-loader?' + JSON.stringify(px2remConfig), 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'px2rem-loader?' + JSON.stringify(px2remConfig), 'postcss-loader']
            }
        ]
    }
}
