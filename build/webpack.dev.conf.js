
//合併webpack.conf.js檔案
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            url: false,
                            //modules: true, // 啟用 CSS 模組功能 ，默認為 false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
        ],
    },

});