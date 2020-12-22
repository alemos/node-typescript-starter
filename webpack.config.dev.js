const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = (env, { mode }) =>
  merge(common, {
    mode,
    entry: ["webpack/hot/poll?100", "./main.ts"],
    watch: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 100,
      ignored: "node_modules/**",
    },
    externals: [
      nodeExternals({
        allowlist: ["webpack/hot/poll?100"],
      }),
    ],
    plugins: [
      new NodemonPlugin({
        script: "./dist/main.js",
        watch: path.resolve("./dist"),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
    ],
    devtool: "inline-source-map",
  });
