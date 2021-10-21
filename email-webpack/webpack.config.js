const path = require("path");

module.exports = {
  mode: "development",

  entry: "./jsx/app.jsx",
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/",
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx$/i,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
    ],
  },
};
