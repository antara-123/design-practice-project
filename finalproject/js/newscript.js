$(document).ready(function(){      //jquery ready function


    $("p").fadeIn(8000);
    $("p").fadeOut(5000);


    $("p").slideUp(8000);
    $("p").slideDown(5000);

  $(".btn5").click(function(){
  $(".box").animate({

    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px',
    size: '60px',
    margin: '80px',
  });
});

});
// owl-carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    dots:true,
    items:1,
    animateOut:'fadeOut'

})

// maps
$(document).ready(function(){
  $("button").click(function(){
    $("map").animate({
      height: 'toggle'
    });
  });
});
