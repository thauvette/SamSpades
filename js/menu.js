jQuery(document).ready(function($) {
  
// toggles our menu
$("#menu-btn-1").mouseenter(function(){
  $("#menu-btn-1 .fa").addClass('fa-long-arrow-left').removeClass('fa-bars');
});
$("#menu-btn-1").mouseleave(function(){
  $("#menu-btn-1 .fa").addClass('fa-bars').removeClass('fa-long-arrow-left');
});

$("#menu-close-1").mouseenter(function(){
  $('#menu-close-1 .fa').addClass('fa-long-arrow-right').removeClass('fa-times');
});
$("#menu-close-1").mouseleave(function(){
  $('#menu-close-1 .fa').addClass('fa-times').removeClass('fa-long-arrow-right');
});


$("#menu-btn-1").click(function(){
  $(this).animate({"opacity":"0"}, 500);
  $("menu").delay(200).animate({"right":"0"}, "slow");
  $("#menu-close-1").delay(500).animate({"opacity":"1"}, "slow");
  if( $(window).width() > 900){$(".page_content").animate({"marginLeft":"-37%"},"slow");}
  if( $(window).width() <= 900){$(".page_content, #footer").animate({"marginLeft":"-75%"},"slow");}
});

$("#menu-close-1, .menu-item").click(function(){
  $("menu").animate({"right":"-450px"}, "slow");
  $(".menu-btn").delay(200).animate({"height":"64px","opacity":"1"}, "slow");
  $("#menu-close-1").delay(500).animate({"opacity":"0"}, "slow");
  $(".page_content").animate({"marginLeft":"0"},"slow");
});

});
