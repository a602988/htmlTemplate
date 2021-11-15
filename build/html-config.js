//發布的路徑
const distPath = "./";
//來源路徑
const srcPath = "./src/page/";
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
        template: srcPath + 'index/index.pug',

    }, ...page},
    // example2: {...{
    //         title: "example2",
    //         filename: distPath + 'example2.html',
    //         template: srcPath + 'example/index.pug',
    //
    // }, ...page},
    // example: {...{
    //         title: "example",
    //         filename: distPath + 'example.html',
    //         template: srcPath + 'example/index.pug',
    //
    // }, ...page},
};
