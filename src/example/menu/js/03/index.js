//載入jquery
import $ from "jquery";
import './style.scss';
import anime from 'animejs/lib/anime.es.js';

$(function() {

  "use strict";


  /*
  1. 判斷nav的第一層每一個li的x左標
  2. 取得li 下的 dropdown-menu 寬度
  3. 如果寬度+ x座標，大於螢幕寬度
  4. 則所有子層.dropdown-menu 增加 .dropdown-menu-right
  */

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  console.log(windowWidth,windowHeight);

  const elt = document.querySelectorAll('.header-nav-main li.dropdown-x');//次選單為左右展開的
  const submenuW = 200;//子選單寬度
  console.log("elt.length:" + elt.length);
  for (let i = 0; i < elt.length; i++) {
    let val = elt[i].getBoundingClientRect();
    let sub = elt[i].querySelectorAll('dropdown-menu');
    //console.log(val);
    console.log(sub);
    let mW = val.x + submenuW;
    console.log("mW:" + mW);
    if ( mW > windowWidth){
      console.log(sub.length);
      for (let i = 0; i < sub.length; i++) {
        let o = sub[i];
        console.log(sub.length);
        o.setAttribute("class","dropdown-menu-right");
      }
    }
  }
});
