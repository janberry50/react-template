var path = require('path');
var webpack = require ('webpack');

module.exports = {
    entry: { "main": "./js/main.js" },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './wwwroot/dist'),  
        publicPath: '/dist/'
    },
    mode: 'development'
}