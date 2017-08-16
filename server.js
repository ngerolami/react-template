require('dotenv').config({ silent: true })
const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./config/webpack.config.dev.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(express.static(`${__dirname}/public`))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log, // eslint-disable-line
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}))

app.use('/*', express.static(`${__dirname}/public/index.html`))

const server = app.listen(process.env.PORT, function() {
  const port = server.address().port
  console.log('Development server listening at port %s', port) // eslint-disable-line
})
