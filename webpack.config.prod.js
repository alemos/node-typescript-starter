const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = (env, { mode }) =>
  merge(common, {
    mode: mode,
    entry: ["./main.ts"],
    externals: [nodeExternals()],
    plugins: [new CleanWebpackPlugin(), new TerserPlugin()],
  });
