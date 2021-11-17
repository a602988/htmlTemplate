const path = require('path');
//可讀取.env檔
const Dotenv = require('dotenv-webpack');
//獨立css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// entry js進入的檔案內容
const jsconfig =require("./js-conf-example");

// 產出 html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlconfig =require("./html-conf-example");
const htmlarr=[];
for(let i in htmlconfig) {
    htmlarr.push(new HtmlWebpackPlugin(htmlconfig[i]));
}


module.exports = {
    devServer: {
        static: './dist',
        hot: true,
    },
    entry: jsconfig,
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },
        clean: true,
    },
    optimization: { //自動拆出共用的js
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },
            {   //解析html原始碼與圖片
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: false,
                },
            },
            {
                //解析pug原始碼與圖片
                test: /\.(pug)$/,
                use: [
                    {   //編譯html內的檔案，例如圖片
                        loader: 'html-loader',
                        options: {
                            // 不壓縮 HTML
                            minimize: false
                        }
                    },
                    {   //編譯pug檔案
                        loader: 'pug-html-loader',
                        options: {
                            // 美化 HTML 的編排 (不壓縮HTML的一種)
                            pretty: true

                        }
                    }
                ],

            },

        ],
    },
    plugins: [
        // // Load .env file
        new Dotenv({
            path: "./.env"
        }),
        //將css獨立出來
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        ...htmlarr,

    ],
    resolve: {
        alias: {
            //路徑別名
            //原始檔案
            'src': path.resolve(__dirname, '../src'),
            //資源
            'assets': path.resolve(__dirname, '../src/assets'),
            //圖片
            'images': path.resolve(__dirname, '../src/assets/img'),
        }
    }
};