// Preloader part start Here
$(window).load(function(){
    $('.sub-load').delay(1000).fadeOut(300)
})
// Preloader part End Here


// back-to -top part start Here
$(function(){
$(window).scroll(function(){
    let fixed = $(this).scrollTop()
    if(fixed>300){
        $('.back_to_top').fadeIn(300)
        $('.back_to_top').css('opacity',1)
    }
    else{
        $('.back_to_top').fadeOut(300) 
    }
      if (fixed>300) {
          $(".sub-nav").addClass("sticky_navbar")
        }
         else {
          $(".sub-nav").removeClass("sticky_navbar")
        }  
})

$('.back_to_top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1000)
  })

})
// back-to -top part End Here


// smooth scrolling start Here
var html_body = $('html,body');
$('.menu').on('click', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      html_body.animate({
        scrollTop: target.offset().top - 17
      }, 1500);
      return false;
    }
  }
});
// smooth scrolling End Here

// typed js part start Here
$(".typed").typed({
    strings: ["Designers.", "Developers.", "People."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 150,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 150,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: Infinity,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});

// typed js part End Here