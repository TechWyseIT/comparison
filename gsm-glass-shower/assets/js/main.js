"use strict";

let w_width = $(window).width();
// Slim Header

let header = 0;
function scrollHead() {
  if ($(document).scrollTop() > 100) {
    if (header == 0) {
      header = 1;
      $(".project_header").addClass("slim");
    }
  } else {
    if (header == 1) {
      header = 0;
      $(".project_header").removeClass("slim");
    }
  }
}
scrollHead();
$(window).scroll(scrollHead);

$(document).ready(function () {
  // Custom Modal Popup Window
  $("[data-target]").on("click", function () {
    let target = $(this).attr("data-target");
    let pointer = $(`#${target}`);
    let titleValue = $(this).attr("data-title");
    console.log(target);
    console.log(pointer);
    if (pointer.length > 0) {
      pointer.addClass("showed");
      pointer.find(".tw-modal-header").html(titleValue);
    } else {
      console.warn(`There is no Modal found with an id ${target}`);
    }
    if (target === "book_demo_popup") {
      var product_name = $(this).closest(".product_grid").find(".product_name").text();
      $("#"+target+" .prdct_name").val(product_name.toUpperCase());
    }
    if(target==="play_video"){
      var iframe_url = $(this).closest('figure').data('iframe');
      $("#"+target+" iframe").attr('src',iframe_url);
    }
  });
  $(".tw-modal-close-button,.modal-close-wrapper").on("click", function () {
    $(this).parents().find(".tw-modal-wrapper").removeClass("showed");

     if($(this).closest('.myPopupOpen').attr('id')==="play_video"){
      $("#play_video iframe").attr('src','');
    }
    
  });

  // Accordion
  $(".faq_accordion li .title").append("<i class='expand'></i>");
  $(".faq_accordion li:first-child .faq_content").css("display", "block");
  $(".faq_accordion li:first-child").addClass("opened");
  $(".faq_accordion li .title").click(function () {
    let depth = $(this).parents().length;
    if ($(this).closest("li").parents().length == depth - 1) {
      if ($(this).closest("li").hasClass("opened")) {
        console.log($(this).parent());
        $(this)
          .parent()
          .removeClass("opened")
          .children()
          .find(".submenu")
          .removeClass("opened");
        $(this).parent().find(".faq_content").slideUp();
      } else {
        $(this).closest("li").siblings().removeClass("opened");
        $(this).closest("li").addClass("opened");
        $(this).parent().children(".faq_content").first().slideDown();
      }
      $(this).closest("li").siblings().find(".faq_content").slideUp();
    }
  });
});

$(".project_header .container").append("<div class='overlay'></div>");
// Back Button
$(window).scroll(function () {
  if (
    $(window).scrollTop() + $(window).height() >
    $(document).height() - 1000
  ) {
    $(".back-btn").addClass("back-open");
  } else {
    $(".back-btn").removeClass("back-open");
  }
});
//$("<a href='javascript:history.go(-1)' class='back-btn' title=''>Back</a>").clone().appendTo(".project_footer");
// Goto Top of the Page
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $("#back-to-top").addClass("visible");
    } else {
      $("#back-to-top").removeClass("visible");
    }
  });
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  // Interlinking
  $(".interlinks a[href^='#']").on("click",function(e){
    e.preventDefault();
    let offTop = $(".project_header").height() + 20;
    var position = $($(this).attr("href")).offset().top - offTop;
    $("body, html").animate({
      scrollTop: position,
    },1000)
  })
});

$("<button id='back-to-top'><span>Top</span></button>")
  .clone()
  .appendTo(".project_footer");

function displayWindowResize() {
  var screenw = document.documentElement.clientWidth;
  var screenh = document.documentElement.clientHeight;
  if (screenw >= 1200) { }
  if (screenw >= 992) { }
  if (screenw <= 1199) {}
  if (screenw <= 767) {
  }
}
window.addEventListener("resize", displayWindowResize);
displayWindowResize();
$('.screen_slides').slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  adaptiveHeight: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

$(document).ready(function () {
  $(function () {
    $('img.svg').each(function () {
      var $img = $(this); var imgID = $img.attr('id'); var imgClass = $img.attr('class'); var imgURL = $img.attr('src'); $.get(imgURL, function (data) {
        var $svg = $(data).find('svg'); if (typeof imgID !== 'undefined') { $svg = $svg.attr('id', imgID); }
        if (typeof imgClass !== 'undefined') { $svg = $svg.attr('class', imgClass + ' replaced-svg'); }
        $svg = $svg.removeAttr('xmlns:a'); $img.replaceWith($svg);
      }, 'xml');
    });
  })
});