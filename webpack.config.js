const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  let isProd = (env.production === 'production');
  let devToolToUse = (isProd) ? 'cheap-source-map' : 'eval';

  let pluginsProduction = [
    new webpack.DefinePlugin({ 'process.env': {
      NODE_ENV: JSON.stringify('production'),
      BROWSER: JSON.stringify(true)
    }}),
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
      }
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ];

  let commonsPlugins = [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico'
    })
  ];

  let pluginsToUse;
  if (isProd) pluginsToUse = commonsPlugins.concat(pluginsProduction);
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
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
              loader: "css-loader",
              options: {
                minimize: true
              }
            }]
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              },
              "sass-loader"]
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader?name=/assets/[name].[ext]"
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=/assets/[name].[ext]'
        },
        {
          test: /\.ttf$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=/assets/[name].[ext]'
        },
        {
          test: /\.eot$/,
          loader: 'file-loader?name=/assets/[name].[ext]'
        }
      ]
    },
    plugins: pluginsToUse
  }
}
