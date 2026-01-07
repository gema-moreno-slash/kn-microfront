const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3022,
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
    new ModuleFederationPlugin({
      name: "microDogRemote",
      filename: "microDog.js",
      exposes: {
        "./DogShow": "./src/dog-show.vue",
      },
      shared: {
        vue: { singleton: true, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};