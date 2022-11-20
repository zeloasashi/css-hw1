
$(window).scroll(function(){
    if($(window).scrollTop() >= ($('main').offset().top - window.screen.height * 2 / 3)) {
        $('nav').addClass('navvisible')
    }
    else{
        $('nav').removeClass('navvisible')
    }
})

$('.nav-btn button').click(function(){
    $('.nav-btn button').addClass('onone').removeClass('d-none')
})