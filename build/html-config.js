//發布的路徑
const HtmlWebpackPlugin = require("html-webpack-plugin");
const distPath = "./";
//來源路徑
const srcPath = "./src/page/";

//頁面
module.exports = {
    index:{
        title: "首頁",
        filename: distPath + 'index.html',
        template: srcPath + 'index/index.html',
        inject: 'body',
        minify: {
            collapseWhitespace: false,// 不壓縮html
            removeComments: false, // 不移除註釋
        },
    },
    example:{
        title: "範例",
        filename: distPath + 'example.html',
        template: srcPath + 'example/index.pug',
        inject: 'body',
        minify: {
            collapseWhitespace: false,// 不壓縮html
            removeComments: false, // 不移除註釋
        },
    },
};
