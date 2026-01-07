const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/dev.js",
  devServer: {
    port: 3012,
    hot: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    modules: ['node_modules'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/dev.html",
    }),
  ],
};