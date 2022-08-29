$(function () {
  /*visual slid*/
  jQuery(document).ready(function ($) {
    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
      },
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
      var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
      if (refSize) {
        refSize = Math.min(refSize, 1920);
        jssor_1_slider.$ScaleWidth(refSize);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
  });

  /*content3*/
  var tabBtn = $(".content3>.c3_menu>li");
  var tabCont = $(".cont3_in>.c3_box");

  tabCont.hide().eq(0).show();

  tabBtn.click(function (e) {
    //tab 버튼을 클릭했을때
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
  });
}); //function end
