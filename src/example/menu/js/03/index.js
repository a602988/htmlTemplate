//載入jquery
import $ from "jquery";
import './style.scss';
import Class from 'src/assets/js/components/class.js'

$(function() {

  "use strict";

  //console.log(totalW,windowWidth);
  /*
  選單左右多層次：li.dropdown.dropdown-x
  適用：大於1440的螢幕，不要超過三層，會有響應式超出問題
  1. 判斷nav的第一層每一個li的x左標
  2. 取得li 下的 dropdown-menu 所有寬度
  3. 如果2的寬度+ x座標，大於螢幕寬度
  4. 則子層.dropdown-menu 增加 .dropdown-menu-right
  5. 如果有第三層，底下子層 .dropdown-menu 增加 .dropdown-menu-right
  */

  let windowWidth = window.innerWidth;

  const elt = document.querySelectorAll('.header-nav-main > nav > ul > li.dropdown-x');
  const eltNum = elt.length;


  for (let i = 0; i < eltNum; i++) {
    const nav = elt[i];//取得第一層選單值
    let navVal = nav.getBoundingClientRect();//取得第一層選單值

    const nav2Ul = nav.querySelector('.dropdown-menu');//取得第二層內選單
    let nav2UlVal = nav2Ul.getBoundingClientRect();//取得第二層內選單 值


    let totalW = navVal.x + nav2UlVal.width;// 第一層x位置 + 第二層選單寬度
    let nav3 = nav2Ul.getElementsByClassName('dropdown-menu');//取得第三層內選單
    const nav3Num = nav3.length;

    if (nav3Num > 0){
      let mixW = 0;
      let totalW2 = 0;// 第一層x位置 + 第二層選單寬度
      for (let i = 0; i < nav3Num; i++) {
        let nav3UlVal = nav3[i].getBoundingClientRect();//取得第三層內選單 值
        if (nav3UlVal.width > mixW){
          mixW = nav3UlVal.width;
        }
        totalW2 = navVal.x + nav2UlVal.width + mixW;// 第一層x位置 + 第二層選單寬度
      }
      console.log(navVal.x , nav2UlVal.width,mixW,totalW2);
      if (totalW2 > windowWidth) {
        Class.addClass(nav2Ul, 'dropdown-menu-right')
        if (nav3Num > 0){
          // for (let i = 0; i < nav3Num; i++) {
          //   Class.addClass(nav3[i], 'dropdown-menu-right')
          //
          // }
          let navMap = Array.prototype.map.call(nav3, function(obj) {
            return Class.addClass(obj, 'dropdown-menu-right')
          });
        }
      }
    }

    if (totalW > windowWidth) {
      Class.addClass(nav2Ul, 'dropdown-menu-right')
      if (nav3Num > 0){
        for (let i = 0; i < nav3Num; i++) {
          Class.addClass(nav3[i], 'dropdown-menu-right')

        }
      }
    }

  }


});
