//發布的路徑
const distPath = "./";
//來源路徑
const srcPath = "./src/page/";
//相同的設定
const exportsCommon ={
    minify: {
        collapseWhitespace: false,// 不壓縮html
        removeComments: false, // 不移除註釋
    },
}
const minify = JSON.stringify(exportsCommon)
//頁面
module.exports = {
    index:{
        title: "首頁",//首頁
        filename: distPath + 'index.html',
        template: srcPath + 'index/index.pug',
        // minify: {
        //     collapseWhitespace: false,// 不壓縮html
        //     removeComments: false, // 不移除註釋
        // },
        minify
    },
};

console.log(minify);