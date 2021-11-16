//載入jquery
import $ from "jquery";

//載入pace-jg 樣式與npm js
import './style.scss';
import Pace from 'pace-js'

//pace-jg 設定
window.paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};

//pace-jg 執行
Pace.start();

//pace-jg 結束後淡出
Pace.on('done', function() {
  $('#preloader').delay(500).fadeOut(800);
});


