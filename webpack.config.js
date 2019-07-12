const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "./src/index.js")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist")
  },
  devServer: {
    hot: true,
    port: 1234,
    contentBase: path.join(__dirname, "./dist"),
    overlay: {
      error: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: "babel-loader",
        exclude: [path.join(__dirname, "./node_modules")]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "react-webpack",
      filename: "index.html",
      template: path.join(__dirname, "./index.html")
    })
  ]
};
