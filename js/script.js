
$(document).ready(function(){

    $('.toggle-bt').click(function(){
        $('.toggle-bt').toggleClass('toggled');
        $('header nav ul').toggleClass('mobile-active');
        // $('header nav ul').fadeIn();
    });

    $('div').click(function(){
        $('html, body').scrollTop(50);
    })    

    



})






$('p').click(function(){
    // $(this).css("color","red");
    // $(this).toggleClass("clicked");
    // $(this).addClass("clicked");
    // $(this).removeClass("clicked");
    // $(this).removeClass("clicked");
    // $('.feature').toggleClass("clicked");/
    

    // $('html, body').animate({
    // scrollTop: 0
    // }, 100);
  
})

















// $(window).scroll(function(){
//         var scrollTop= $(window).scrollTop();
//         if($(window).scrollTop() >= 200){
//             $('header').addClass('scrolled').fadeIn();
//         }
//         else{
//             $('header').removeClass('scrolled');
//             $(window).scrollTop();
//         }
//     })
