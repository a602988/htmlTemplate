const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//頁面 js 路徑
const srcJsPath = './src/page';

// 產出 html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlconfig =require("./html-config");
const htmlarr=[];
for(let i in htmlconfig) {
    htmlarr.push(new HtmlWebpackPlugin(htmlconfig[i]));
}


module.exports = {
    devServer: {
        static: './dist',
        hot: true,
    },
    entry: {
        app:[//頁面用
            srcJsPath + '/index/index.js',
        ],

    },
    output: {
        filename: '[name].js',
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
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
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
};