$(document).ready(function(){

   $("li").hover(function(){
       $(this).addClass("wBorder");
   }, function(){
       $(this).removeClass("wBorder");
   })     

   // init Masonry
   var $grid = $('.grid').masonry({
       // options...
   });
   // layout Masonry after each image loads
   $grid.imagesLoaded().progress(function () {
       $grid.masonry('layout');
   });

})