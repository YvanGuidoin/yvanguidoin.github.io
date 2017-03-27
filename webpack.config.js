const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  devtool: 'eval',
  entry: './source/index.jsx',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'main.bundle.js',
    pathinfo: true
  },
  resolve: {
      extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   comments: false,
    //   compress: {
    //     unused: true,
    //     dead_code: true,
    //     warnings: false,
    //     pure_getters: true,
    //     drop_debugger: true,
    //     conditionals: true,
    //     evaluate: true,
    //     drop_console: true,
    //     sequences: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true,
    //     booleans: true
    //   },
    //   output: {
    //     comments: false,
    //   }
    // }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'source/index.html',
      favicon: 'source/assets/favicon.ico'
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
