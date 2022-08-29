$(function () {
  /* 스크롤 부드럽게 */
  $("nav a, .dott a").click(function (e) {
    $.scrollTo(this.hash || 0, 300);
  });

  /*header_menu(pc)*/
  $(".header_menu .m").on("mouseover focus", function () {
    $(".header_menu").stop().animate({ height: "270px" }, 500);
    $(".submenu").fadeIn(500);
  });

  $(".header_menu").on("mouseleave blur", function () {
    $(".header_menu").animate({ height: "70px" }, 500);
    $(".submenu").fadeOut(500);
  });

  /*header_menu(mt)*/
  $(".h_menubar").on("click", function () {
    $(".menu_nav").animate({ marginLeft: "250px" }, 500);
    $(".black_back").css("display", "block");
  });

  $(".nav_close,.black_back").on("click", function () {
    $(".menu_nav").animate({ marginLeft: "-250px" }, 500);
    $(".black_back").css("display", "none");
  });

  /*menu_mt*/
  $(".gnb_mt>li").on("mouseover focus", function () {
    $(this).find(".sub_mt").stop().slideDown();
  });

  $(".gnb_mt>li").on("mouseleave blur", function () {
    $(this).find(".sub_mt").stop().slideUp();
  });

  /*scroll*/
  $("#scroll").scrollbox({
    linear: true,
    step: 1,
    delay: 0,
    speed: 50,
  });

  /*search_open*/
  $(".search").on("click", function () {
    $(".search_open").css("display", "block");
  });

  $(".search_close").on("click", function () {
    $(".search_open").css("display", "none");
  });
}); //function end
