//載入jquery
import $ from "jquery";

//載入pace-jg 樣式與npm js
import './style.scss';
import Pace from 'pace-js'

//pace-js 設定
Pace.paceOptions = {
  ajax: true,//監視頁面上的所有ajax請求
  document: true,//檢查檔案readyState
  eventLag: false,//檢查事件迴圈滯後訊號，表明正在執行javascript
  elements: {//檢查頁面上是否存在特定元素
    selectors: ['#preloader']
  },
  //className: 'preloader01'
};

//判斷頁面有id preloader，才執行
if (document.getElementById("preloader")) {
  Pace.start();
}

//pace-js 結束後淡出
Pace.on('done', function() {
  $('#preloader').delay(500).fadeOut(800);
});


