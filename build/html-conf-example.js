//發布的路徑
const distPath = "./";
//來源路徑-正式
const srcPage = "./src/page/";
//來源路徑-範例
const srcExa = "./src/example/";
//來源路徑
const srcTem = srcExa;

//頁面共用設定
const page = {
    inject: 'body',
    minify: {
        collapseWhitespace: false,// 不壓縮html
        removeComments: false, // 不移除註釋
    },
}
//頁面
module.exports = {
    index: {...{
        title: "首頁",
        filename: distPath + 'index.html',
        template: srcTem + 'index/index.pug',

    }, ...page},
    preloader: {...{
            title: "preloader",
            filename: distPath + 'preloader.html',
            template: srcTem + 'preloader/pace-js/index.pug',
            chunks: ['app','preloader'],

    }, ...page},

};
