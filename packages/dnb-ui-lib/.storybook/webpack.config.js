/**
 * Storybook Webpack config
 *
 */

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\/font.*\.(woff|woff2|ttf|eot|otf|svg)/,
        loader: 'url-loader'
      },
      { test: /\.(txt|md)$/, use: 'raw-loader' }
    ]
  }
}
