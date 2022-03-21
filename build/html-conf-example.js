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
        chunks: ['app'],

    }, ...page},

    preloader_paceJs_01: {...{
            title: "preloader_paceJs_01",
            filename: distPath + 'preloader_paceJs_01.html',
            template: srcTem + 'preloader/pace-js/01/index.pug',
            chunks: ['app','preloader_paceJs_01'],

    }, ...page},
    preloader_paceJs_02: {...{
        title: "preloader_paceJs_02",
        filename: distPath + 'preloader_paceJs_02.html',
        template: srcTem + 'preloader/pace-js/02/index.pug',
        chunks: ['app','preloader_paceJs_02'],

    }, ...page},

    preloader_paceJs_03: {...{
      title: "preloader_paceJs_03",
      filename: distPath + 'preloader_paceJs_03.html',
      template: srcTem + 'preloader/pace-js/03/index.pug',
      chunks: ['app','preloader_paceJs_03'],

    }, ...page},

    preloader_paceJs_04: {...{
      title: "preloader_paceJs_04",
      filename: distPath + 'preloader_paceJs_04.html',
      template: srcTem + 'preloader/pace-js/04/index.pug',
      chunks: ['app','preloader_paceJs_04'],

    }, ...page},

    preloader_js_01: {...{
      title: "preloader_js_01",
      filename: distPath + 'preloader_js_01.html',
      template: srcTem + 'preloader/js/01/index.pug',
      chunks: ['app','preloader_js_01'],

    }, ...page},

    preloader_js_02: {...{
      title: "preloader_js_02",
      filename: distPath + 'preloader_js_02.html',
      template: srcTem + 'preloader/js/02/index.pug',
      chunks: ['app','preloader_js_02'],

    }, ...page},

    menu_js_01: {...{
      title: "menu_js_01",
      filename: distPath + 'menu_js_01.html',
      template: srcTem + 'menu/js/01/index.pug',
      chunks: ['app','menu_js_01'],

    }, ...page},

    menu_js_02: {...{
            title: "menu_js_02",
            filename: distPath + 'menu_js_02.html',
            template: srcTem + 'menu/js/02/index.html',
            chunks: ['app','menu_js_02'],

        }, ...page},
    menu_js_03: {...{
      title: "menu_js_03",
      filename: distPath + 'menu_js_03.html',
      template: srcTem + 'menu/js/03/index.pug',
      chunks: ['app','menu_js_03'],

    }, ...page},
    test_es6_01: {...{
      title: "test_es6_01",
      filename: distPath + 'test_es6_01.html',
      template: srcTem + 'test/es6/01/index.html',
      chunks: ['app','test_es6_01'],

    }, ...page},

    test_es6_02: {...{
      title: "test_es6_02",
      filename: distPath + 'test_es6_02.html',
      template: srcTem + 'test/es6/02/index.html',
      chunks: ['app'],

    }, ...page},


};
