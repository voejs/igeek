const path = require('path');
const webpack = require('webpack');
const VoeRuntime = require('@voejs/runtime/voe');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { vue, less, css } = require('./webpack.loaders');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../node_modules/@voejs/voe/runtime.js'),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|eot|woff|ttf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      vue(),
      less(),
      css()
    ]
  },
  output: {
    publicPath: '/'
  },
  resolve: {
    alias: {
      "@voe-cache": path.resolve(__dirname, '../.voecache.js'),
      "@voe-cwd": path.resolve(__dirname, '..'),
    }
  },
  plugins: [
    new VoeRuntime(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin({
      version: '1.0.1',
      ServiceWorker: {
        events: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '..'),
    compress: true,
    port: 9090,
    host: '0.0.0.0'
  }
};