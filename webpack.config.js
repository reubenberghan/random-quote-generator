'use strict';

const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        },
        test: /\.js?/,
        exclude: /node_modules/
      },
      {
        test: /\.scss?/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
