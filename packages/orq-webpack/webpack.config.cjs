const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: './dist',
    port: 3020,
    // open: true,
    hot: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        reactRemote: "microCat@http://localhost:3021/microCatEntry.js",
        // vueRemote: "microDog@http://localhost:3012/microDogEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        // vue: { singleton: true, requiredVersion: false },
      },
    }),
  ],
  resolve: {
    extensions: ['.js']
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