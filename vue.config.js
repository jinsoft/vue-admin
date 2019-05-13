'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue admin'

module.exports = {
    lintOnSave: process.env.NODE_ENV === 'development',
    configureWebpack:{
        name:name,
        resolve:{
            alias:{
                '@':resolve('src')
            }
        }
    },
    chainWebpack: config => {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}