const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const path = require("path");
//頁面 js 路徑
const srcJsPath = './src/page';
//將css獨立出來
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        app:[//頁面用
            srcJsPath + '/index/index.js',
        ],
        example:[//範例展示用
            srcJsPath + '/example/index.js',
            srcJsPath + '/index/index.js',
        ],
    },

    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "../dist"),
        clean: true,
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
            // {
            //     test: /\.(scss|css)$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,//將css獨立出來
            //         {
            //             loader: "css-loader",//單純將 entry 內相關的 CSS 檔案抽取出來做轉換
            //             options: {
            //                 importLoaders: 2,
            //                 sourceMap: true,
            //                 url: false,
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 postcssOptions: {
            //                     plugins: [
            //                         'autoprefixer',//增加了相關的 CSS Prefix 瀏覽器相容度
            //                     ]
            //                 }
            //             }
            //         },
            //         'sass-loader',
            //
            //     ],
            // },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'img/[name].[hash:6][ext]', // 局部指定输出位置
            //         // publicPath:'./img',
            //         // outputPath:'img/'
            //     },
            //     // parser: {
            //     //     dataUrlCondition: {
            //     //         maxSize: 8 * 1024 // 限制于 8kb，小於此的將轉為base64
            //     //     }
            //     // }
            // },
            {
                test: /\.html$/i,
                loader: "html-loader",
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
            {
                test:/\.html$/,
                loader:'html-loader',
            }
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
        ...htmlarr,
    ],
    resolve: {
        alias: {
            //別名新增，用於js or css 載入時 import '@/css/index.css
            '@': path.resolve(__dirname, '../src'),
            // 下面可以继续新增别名
        }
    }

};