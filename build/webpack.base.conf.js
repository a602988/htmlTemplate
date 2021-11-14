const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const path = require("path");

//將css獨立出來
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//清除dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 產出 html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlconfig =require("./html-config");
const htmlarr=[];
for(let i in htmlconfig) {
    htmlarr.push(new HtmlWebpackPlugin(htmlconfig[i]));
}


module.exports = {
    entry: {
        main: './src/js/main.js',
        vendor: './src/js/vendor.js',
    },

    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },

    devtool: "source-map",

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
            {

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
        // // Load .env file for environment variables in JS
        new Dotenv({
            path: "./.env"
        }),

        // 將css獨立出來
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),

        // 創建html
        // new HtmlWebpackPlugin({
        //    //不壓縮html
        //    minify: process.env.NODE_ENV == 'development' ? false : false,
        // }),
        //清除dist
        new CleanWebpackPlugin(),
        ...htmlarr,
    ],
};