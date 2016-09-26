
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the main entry of our app
  entry: [
    './public/index.js'
  ],
  // output configuration
  output: {
    path: __dirname + '/public/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'public/index.tpl.html',
  //     inject: 'body',
  //     filename: 'index.html'
  //   }),
  //   new webpack.HotModuleReplacementPlugin(),
  // ],
  module: {
    loaders: [
      // process *.vue files using vue-loader
      { test: /\.vue$/, loader: 'vue' },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}