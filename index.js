
$(window).scroll(function(){
    if($(window).scrollTop() >= ($('main').offset().top - window.screen.height * 2 / 3)) {
        $('nav').removeClass('navinvisible').addClass('navbgc')
    }
    // else{
    //     $('nav').addClass('navinvisible').removeClass('navbgc')
    // }
})

$('.navbtn').click(function(){
    console.log('nav button click');
    $('.nav-full').toggleClass('nminvisible')
})
