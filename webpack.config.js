const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  devtool: 'cheap-module-source-map',
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
        exclude: /node_modules/,
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/assets/[name].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'source/index.html',
      favicon: 'source/assets/favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify('production')}
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({})
  ]
}
