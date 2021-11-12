const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const path = require("path");


const HtmlWebpackPlugin = require('html-webpack-plugin');
//將css獨立出來
const MiniCssExtractPlugin = require('mini-css-extract-plugin')




module.exports = {

    //mode: 'development',
    entry: {
        main: './src/js/main.js',
        vendor: './src/js/vendor.js',
    },

    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },

    // Define development options
    devtool: "source-map",

    // Define loaders
    module: {
        rules: [
            // Use babel for JS files
            {
                test: /\.js$/,//test 属性，识别出哪些文件会被转换。
                exclude: /(node_modules)/,
                use: {//use 属性，定义出在进行转换时，应该使用哪个 loader。
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,//將css獨立出來
                    {
                        loader: "css-loader",//單純將 entry 內相關的 CSS 檔案抽取出來做轉換
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            url: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',//增加了相關的 CSS Prefix 瀏覽器相容度
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',//css內的圖片圖片打包處理
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    // Define used plugins
    plugins: [
        // Load .env file for environment variables in JS
        new Dotenv({
            path: "./.env"
        }),

        // 將css獨立出來
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),

        //add -------
        // html 創建
        new HtmlWebpackPlugin({
            //不壓縮html
           minify: process.env.NODE_ENV == 'development' ? false : false,
        }),
    ],
};