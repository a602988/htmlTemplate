//頁面-正式
const srcPage = "./src/page/";
//頁面-範例
const srcExa = "./src/example/";
//頁面
const srcTem = srcExa;
//公用資源路徑
const srcAssets = "./src/assets";
module.exports = {
  app:[//頁面公用
    srcAssets + '/js/main.js',
  ],
  //範例preloader
  preloader_paceJs_01:srcTem + 'preloader/pace-js/01/index.js',
  preloader_paceJs_02:srcTem + 'preloader/pace-js/02/index.js',
  preloader_paceJs_03:srcTem + 'preloader/pace-js/03/index.js',
  preloader_paceJs_04:srcTem + 'preloader/pace-js/04/index.js',
  preloader_js_01:srcTem + 'preloader/js/01/index.js',
  preloader_js_02:srcTem + 'preloader/js/02/index.js',
  //範例選單
  menu_js_01:srcTem + 'menu/js/01/index.js',
  menu_js_02:srcTem + 'menu/js/02/index.js',
};
