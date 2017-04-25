const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = function(env) {
  let isProd = (env.production === 'production');
  let devToolToUse = (isProd) ? 'cheap-source-map' : 'eval';

  let pluginsProduction = [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ];

  let commonsPlugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico'
    })
  ];

  let pluginsToUse;
  if (isProd) pluginsToUse = pluginsProduction.concat(commonsPlugins);
  else pluginsToUse = commonsPlugins;

  return {
    cache: true,
    devtool: devToolToUse,
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, ''),
      filename: "main.bundle.js",
      pathinfo: true
    },
    resolve: {
      extensions: ['.jsx', '.js']
    },
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true
          }
        },
        {
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
          ]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader?name=/assets/[name].[ext]"
        }
      ]
    },
    plugins: pluginsToUse
  }
}
