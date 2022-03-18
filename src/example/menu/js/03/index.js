//載入jquery
import $ from "jquery";
import './style.scss';
import anime from 'animejs/lib/anime.es.js';

$(function() {

  "use strict";

  //let elem = document.querySelector('.test1').getBoundingClientRect();
  //
  // const nav = document.querySelector('.header-nav-main > nav > .nav .dropdown-submenu');
  // const sub = nav.getElementsByTagName("dropdown-menu");
  // //
  // var testElements = document.getElementsByClassName('.header-nav-main > nav > .nav .dropdown-submenu');
  // var testDivs = Array.prototype.filter.call(testElements, function(testElement){
  //
  //   return testElement.nodeName === 'ul';
  // });
  // console.log(testDivs);


  // var element= document.getElementsByClassName('dropdown-submenu');
  // for(var i=0;i<element.length;i++){
  //   console.log(element.length);
  // }

  // if(nav.nodeName = "dropdown-menu"){
  //   console.log(1);
  // }
  // console.log(sub.getBoundingClientRect);
  // nav.addEventListener('mouseover',function(e){
  //
  //
  //   if (sub){
  //     const subData = sub.clientWidth;
  //     console.log(sub);
  //   }
  //   //console.log(sub.childNodes);
  //  //console.log(nav.getBoundingClientRect());
  // },false)
  /*
  1. 判斷nav的第一層每一個li的x左標
  2. 取得li 下的 dropdown-menu 寬度
  3. 如果寬度+ x座標，大於螢幕寬度
  4. 則所有子層.dropdown-menu 增加 .dropdown-menu-right
  */

  let nav1_li = document.querySelector('test1');
  //console.log(nav1_li.getBoundingClientRect());


  var testElements = document.getElementsByClassName('test1');
  var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    let li = testElement.nodeName === 'LI';
    return li;
  });
  //console.log(testDivs);

  testDivs.forEach(function (item, i) {
    let w = testDivs[i].offsetWidth;//取得物件寬度
    let x = testDivs[i].offsetLeft;//
    console.log(w);
    console.log(x);
  });
});
