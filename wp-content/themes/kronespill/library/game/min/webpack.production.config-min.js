var path = require('path')
var webpack = require('webpack')
var {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var WorkboxPlugin = require('workbox-webpack-plugin')
var TerserPlugin = require('terser-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/';
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
})

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, './src/main.js')
    ],
  },
  output: {
    publicPath: '/wp-content/themes/kronespill/library/game/dist/',
  },

  plugins: [
    definePlugin,
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      filename:  path.resolve(__dirname, 'dist', 'index.html'),
      template: './index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      hash: true
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/assets',
        to: 'assets'
      } ]
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  module: {
    rules: [
    {
      test: /\.(png|jpe?g|gif|ogg|mp3)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
