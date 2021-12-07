//載入jquery
import $ from "jquery";
import './style.scss';

//PAGE LOADER
$(window).on("load", function () {
  "use strict";
  $(".loader").fadeOut(800);
  $('.side-menu').removeClass('opacity-0');
});
//PAGE LOADER END