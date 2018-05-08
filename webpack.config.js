var path = require('path');
var webpack = require ('webpack');

module.exports = {
    entry: { "main": "./js/main.js" },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './wwwroot/dist'),  
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    mode: 'development'
}