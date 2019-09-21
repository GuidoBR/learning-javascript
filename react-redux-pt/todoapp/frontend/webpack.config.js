const webpack = require('webpack');                                                                                                                                                                         
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = { 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './bundle.js'
    },  
    devServer: {
        port: 5000,
        contentBase: './public'
    },  
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },  
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: { 
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [
                    '@babel/plugin-proposal-object-rest-spread',
                ]
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.tff|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}