//載入jquery
import $ from "jquery";
import './style.scss';
import anime from 'animejs/lib/anime.es.js';

$(function() {

  "use strict";

  //let elem = document.querySelector('.test1').getBoundingClientRect();

  const nav = document.querySelector('.header-nav-main > nav > .nav .dropdown-submenu');
  const sub = nav.getElementsByTagName("dropdown-menu");
  //
  // var testElements = document.getElementsByClassName('.header-nav-main > nav > .nav .dropdown-submenu');
  // var testDivs = Array.prototype.filter.call(testElements, function(testElement){
  //
  //   return testElement.nodeName === 'ul';
  // });
  // console.log(testDivs);


  var element= document.getElementsByClassName('dropdown-submenu');
  for(var i=0;i<element.length;i++){
    console.log(element.length);
  }

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
});
