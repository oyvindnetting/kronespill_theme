var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/main.js')]
  },
  mode: 'development',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'build'),
    publicPath: './build/',
    filename: 'bundle.js'
  },
  devServer: {
    allowedHosts: [
      'kronespill.local',
      'kronespill.wpengine.com'
    ]
  },
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new BrowserSyncPlugin({
      server: {
		baseDir: ['./'],
		middleware: function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			next();
		  }
	  },
	  notify: false,
	  cors: true,


	})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src/assets')
      },
      {
        test: /\.(png|jpe?g|gif|ogg|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
}
