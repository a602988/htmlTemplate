//載入jquery

//載入pace-jg 樣式與npm js
import './style.scss';
import Pace from 'pace-js'

//PAGE LOADER

//判斷頁面有id preloader，才執行
if (document.getElementById("preloader")) {
  Pace.start({
    className: 'preloader02'
  });
}


//PAGE LOADER END