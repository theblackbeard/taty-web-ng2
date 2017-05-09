$(document).ready(function(){
    let form = $("#submitEmail");
    $(form).submit(function(e){
        e.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let body = $("#body").val();
        let query = {};

        if(name == '' | email == '' | body == ''){
            $("#mt-errors").html("<p>Por favor, preencha todos campos obrigatórios</p>");
        }else{
           query = {
               "name" : name,
               "email": email,
               "body": body
           }
          
           $.ajax({
               url: "https://formspree.io/tatianasouza01@gmail.com",
               method: "POST",
               beforeSend: function(){
                   $("#mt-wait").show();
                   $('html, body').animate({scrollTop: ( $("#mt-top").offset().top )}, 500);
                   $('.mt-modal').css({'display': 'block'});
                 },
               complete: function(){$("#mt-wait").fadeOut('slow');  $('.mt-modal').css({'display': 'none'});},
               data: query,
               dataType: "json",
           }).
            done(function(data){
               $(form)[0].reset();
               console.log(data);
             
            })

        }
      

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