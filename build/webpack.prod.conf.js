const { merge } = require('webpack-merge');
const common = require('./webpack.base.conf');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    //將css獨立出來
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ]
});
