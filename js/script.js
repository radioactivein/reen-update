
$(document).ready(function(){
    $('.toggle-bt').click(function(){
        $('.toggle-bt').toggleClass('toggled');
        $('header nav ul').toggleClass('toggled');
    });
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
