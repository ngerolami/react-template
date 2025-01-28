const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugion = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugion({
      template: './index.ejs',
      filename: 'index.html',
    }),
  ],
  module: {
{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
```
resolve: {
        extensions: ['.js', '.jsx'],
      },
```
- Add a `resolve.extensions` configuration to automatically resolve file extensions, such as `.js` and `.jsx`, to improve readability.

src/index.js:
```

```
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
    ],
  },
}
