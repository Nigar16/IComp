$(function(){
$('.carousel').carousel({
    interval: false,
  });

  $('.category-header').on("click",function(){
    $(".category-body").toggleClass("passive");
  })

})


