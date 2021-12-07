//載入jquery
import $ from "jquery";

//載入pace-jg 樣式與npm js
import './style.scss';
import Pace from 'pace-js'


//PAGE LOADER
Pace.options = {
  // ajax: false,
  // restartOnRequestAfter: false,
  // restartOnPushState: false,
  // document: false, // disabled
  // //eventLag: false, // disabl
  // target: 'html',//插入在哪個元素下
  // elements: {
  //   selectors: ['.my-page']
  // }
}

if (document.getElementById("preloader")) {
  Pace.start({
    className: 'preloader04',
    target: 'body',//插入在哪個元素下
    restartOnPushState: false,
  });
}
//pace-js 結束後淡出
Pace.on('done', function() {
  //$('#preloader').delay(500).fadeOut(800);
});

//PAGE LOADER END
