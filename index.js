
$(window).scroll(function(){
    if($(window).scrollTop() >= ($('main').offset().top - window.screen.height * 2 / 3)) {
        $('nav').addClass('navvisible')
    }
    else{
        $('nav').removeClass('navvisible')
    }
})