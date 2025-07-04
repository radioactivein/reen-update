
// $(document).ready(function(){
// 
    // $('.toggle-bt').click(function(){
    //     $('.toggle-bt').toggleClass('toggled');
    //     $('header nav ul').toggleClass('mobile-active');
    //     // $('header nav ul').fadeIn();
    // });


// scroll top function
    // $('.scroll-bt').click(function(){
    //     $('html').scrollTop(0);
    // })    

// code to get text from an elemnt
//      $('#submit').click(function(){
//         var x = 2;
//         var y = 4;
//         var z= x+y;
//        alert(z);
//     })  

// })

$(window).scroll(function(){

    var scrolled= $(this).scrollTop();

    if (scrolled>=50){
        $('header').css("background","white")
    }
    else{
        $('header').css("background","none")
    }
})



// $(window).scroll(function(){
//     var x = $(this).scrollTop();

//     if( x >= 500){
//         $('header').addClass('white-bg');
//         $('.header-2').css("background","red");
//     }
//     else{
//         $('header').removeClass('white-bg');
//         $('.header-2').css("background","white");

//     }
// })









// $(document).load(function(){
//     $('p').click(function(){

//     })
// })

$(window).scroll(function(){

    var scrolled = $(window).scrollTop();

    if(scrolled >= 50 ){
        // $('header').addClass('header-scrolled')
        $('header').css("background","green")
        $('header').css("background","green")
    }
    else{
        $('header').css("background","white")
        // $('header').removeClass('header-scrolled')
    }

})  



// $('selector').event(function(){
//     $('selector').method();
//     $('selector').method();
//     $('selector').method();
//     $('selector').method();
// })

// selector = .class, #id , element - html, window, documnet
// event =  mouse       keyboard    form        load

        //  click	    keypress	submit	    load
        //  dblclick	keydown	    change	    resize
        //  mouseenter	keyup	    focus	    scroll
        //  mouseleave	            blur	    unload

// methods =    addClass,   removeClass,    toggleClass,    scrollTop(),    
        //      text(),     html(),         show(),         hide(),
        //      alert(),    append(),       prepend(),      css(),  
                      
        // more on https://www.w3schools.com/Jquery/jquery_ref_html.asp



// $('selector').event(function(){
//     // $('selector').method();
//     // $('selector').method();
//     // $('selector').method();
// })

$('.scroll-bt').click(function(){
    $('html').scrollTop(0);
})


$(window).scroll(function(){

    var scrolledHeight = $(window).scrollTop();

    if( scrolledHeight >=50){
        $('header').addClass('updated')
    }
    else{
        $('header').removeClass('updated')
    }
})








// $('.scroll-bt').click(function(){
//     $('html, body').scrollTop(0);
//     // $('selector').method();
//     // $('selector').method();
//     // $('selector').method();
// })



$('.feature').dblclick(function(){
    $('.scroll-bt').css("background","red");
    $('.scroll-bt').toggleClass('dummy');
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
