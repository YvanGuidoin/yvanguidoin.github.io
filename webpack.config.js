const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  cache: true,
  devtool: 'eval',
  entry: './source/index.jsx',
  output: {
    path: path.resolve(__dirname, ''),
    filename: "main.bundle.js",
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
          presets: [['es2015', {modules: false, loose: true}], 'react'],
          plugins: ['lodash', 'transform-runtime', 'transform-object-rest-spread', 'transform-react-inline-elements', 'transform-react-constant-elements']
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
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    // new LodashModuleReplacementPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   compress: {
    //     warnings: false,
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false,
    //   },
    //   exclude: [/\.min\.js$/gi] // skip pre-minified libs
    // }),
    // new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'source/index.html',
      favicon: 'source/assets/favicon.ico'
    })
  ]
}
