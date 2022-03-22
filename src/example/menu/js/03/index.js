//載入jquery
import $ from "jquery";
import './style.scss';
import anime from 'animejs/lib/anime.es.js';

$(function() {

  "use strict";


  /*
  選單左右多層次：li.dropdown.dropdown-x
  1. 判斷nav的第一層每一個li的x左標
  2. 取得li 下的 dropdown-menu 寬度
  3. 如果寬度+ x座標，大於螢幕寬度
  4. 則子層.dropdown-menu 增加 .dropdown-menu-right
  */

  // var windowWidth = window.innerWidth;
  // const elt = document.querySelectorAll('.header-nav-main li.dropdown-x');
  // for (let i = 0; i < elt.length; i++) {
  //   let val = elt[i].getBoundingClientRect();
  //   let sub = elt[i].querySelector('.dropdown-menu');
  //   let subW = sub.getBoundingClientRect();
  //   let mW = val.x + subW.width;
  //   console.log(mW,windowWidth);
  //   if (mW > windowWidth) {
  //     sub.classList.add("dropdown-menu-right");
  //   }
  // }


  //console.log(totalW,windowWidth);
  /*
  選單左右多層次：li.dropdown.dropdown-x
  1. 判斷nav的第一層每一個li的x左標
  2. 取得li 下的 dropdown-menu 所有寬度
  3. 如果所有寬度+ x座標，大於螢幕寬度
  4. 則子層.dropdown-menu 增加 .dropdown-menu-right
  */

  var windowWidth = window.innerWidth;

  const elt = document.querySelectorAll('.header-nav-main > nav > ul > li.dropdown-x');

  for (let i = 0; i < elt.length; i++) {
    let nav = elt[i];//取得第一層選單值
    let navVal = nav.getBoundingClientRect();//取得第一層選單值

    let nav2Ul = nav.querySelector('.dropdown-menu');//取得第二層內選單
    let nav2UlVal = nav2Ul.getBoundingClientRect();//取得第二層內選單 值

    let nav3 = nav2Ul.getElementsByClassName('dropdown-menu');//取得第三層內選單



    let totalW = navVal.x + nav2UlVal.width;// 第一層x位置 + 第二層選單寬度


    if (totalW > windowWidth) {
      nav2Ul.classList.add("dropdown-menu-right");
    }
  }
});
