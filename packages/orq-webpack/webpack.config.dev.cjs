const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/dev.js',
  output: {
    filename: 'dev.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: './dist',
    port: 3010,
    open: true,
    hot: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/dev.html'
    })
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};