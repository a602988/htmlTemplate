//載入jquery
import $ from "jquery";

//載入pace-jg 樣式與npm js
import './style.scss';
import Pace from 'pace-js'


//PAGE LOADER
//判斷頁面有id preloader，才執行
if (document.getElementById("preloader")) {
  Pace.start({
    className: 'preloader01'
  });
}

//pace-js 結束後淡出
Pace.on('done', function() {
  $('#preloader').delay(500).fadeOut(800);
});

//PAGE LOADER END
