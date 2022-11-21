
$(window).scroll(function(){
    if($(window).scrollTop() >= ($('main').offset().top - window.screen.height * 2 / 3)) {
        $('nav').removeClass('navinvisible').addClass('navbgc')
    }
    else{
        $('nav').addClass('navinvisible').removeClass('navbgc')
    }
})

$('.navbtn').click(function(){
    console.log('nav button click');
    $('.nav-full').toggleClass('nminvisible');
    $('.nav-menu').toggleClass('trans');
    $('.m-links').toggleClass('trans');
})
$('.navbtn').click(function(){
    $('nav').toggleClass('navinvisible')
})

$('.nfbtn').click(function(){
    console.log('nav-full button click');
    $('.nav-full').addClass('nminvisible')
})