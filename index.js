
$(window).scroll(function(){
    if($(window).scrollTop() > 0) {
        $('nav').removeClass('navinvisible').addClass('navbgc')
    }
    else{
        $('nav').addClass('navinvisible').removeClass('navbgc')
    }
})

$('.nav-btn').click(function(){
    console.log('nav button click');
    $('.nav-full').toggleClass('d-none');
    // $('.nav-full').toggleClass('nminvisible');
    $('.nav-menu').toggleClass('trans');
    $('.m-links').toggleClass('trans');
    // $('.nav-menu .mobile').toggleClass('t-mobile')
    // $('.nav-menu .blog').toggleClass('t-blog')
    // $('.nav-menu .twitter').toggleClass('t-twitter')
    // $('.nav-menu .wall').toggleClass('t-wall')
    // $('.nav-menu .pp').toggleClass('t-pp')
})
$('.nav-btn').click(function(){
    $('nav').toggleClass('navinvisible')
})

$('nfbtn').click(function(){
    console.log('nav-full button click');
    $('.nav-full').toggleClass('nminvisible')
})

$(window).scroll(function(){
    if($(window).scrollTop() >= ($('.contact').offset().top - $(window).height() * 2 / 3)) {
        $('.btnTOP').css({opacity : 1})
    }
    else{
        $('.btnTOP').css({opacity : 0})
    
    }
})