import  MobileMenu  from "./modules/mobile-menu";
import $ from "jquery";
import * as slick from "slick-carousel";

new MobileMenu();

$(document).ready(function(){
    $('.testimonials-list').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        arrows:false
    });
  });