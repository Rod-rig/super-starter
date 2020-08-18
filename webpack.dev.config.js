const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./webpack.config");

module.exports = {
  ...config,
  mode: "development",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
  ],
};
