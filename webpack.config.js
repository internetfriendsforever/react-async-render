const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  devServer: {
    stats: {
      modules: false
    }
  }
}
