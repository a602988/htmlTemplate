const { merge } = require('webpack-merge');
const common = require('./webpack.base.conf');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        //將css獨立出來
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
    ]
});