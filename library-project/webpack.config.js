const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    clean: true,
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jsx|js)$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /.html$/,
        use: [
          {
            loader: require.resolve("html-loader"),
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
