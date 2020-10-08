
/***classification ***/
$('.classification-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    rtl: true,
    stagePadding: 2,
    smartSpeed: 1000,
    navText: ["<i class='fas fa-long-arrow-alt-right'></i>","<i class='fas fa-long-arrow-alt-left'></i>"],
    responsive:{
        0:{
            items:1,
            margin:5
        },
        540:{
            items:2
        },
        700 :{
          items:3
        },
        1000:{
            items:4
        },
        1200: {
          items:6
        }
    }
});

/*** fin classification ***/

/*** nearest restaurant ***/

$('.nearest-restuarant-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    rtl: true,
    stagePadding: 2,
    smartSpeed: 1000,
    navText: ["<i class='fas fa-long-arrow-alt-right'></i>","<i class='fas fa-long-arrow-alt-left'></i>"],
    responsive:{
        0:{
            items:1,
            margin:5
        },
        540:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/** fin nearest restaurant **/

/**Best selling food **/

$('.Best-selling-food-carousel').owlCarousel({
    loop:true,
    nav:true,
    rtl: true,
    stagePadding: 2,
    margin:30,
    smartSpeed: 1000,
    navText: ["<i class='fas fa-long-arrow-alt-right'></i>","<i class='fas fa-long-arrow-alt-left'></i>"],
    responsive:{
        0:{
            items:1,
            margin:5,
            stagePadding: 0
        },
        600:{
            items:2
        },
        1000:{
            items:3,
        },
        1300:{
          items:3
        }
    }
})


/** fin Best selling food **/

/***navbar fixed **/
$(window).scroll(function(){
  if($(window).scrollTop() > 10) {
      $(".navbar").addClass("fixed");
  } else {
    $(".navbar").removeClass("fixed");
  }
});

/** fin navar fixed ****/

/*** classification page ***/

$(".card-img-top").click(function() {
   alert("ok");
});

$(".card-div4-sub-1").click(function() {
   alert("ok");
});

$(".card-div4-sub-2").click(function() {
   alert("ok");
});

/*** fin classification page ***/

/*** test des champs ***/

$(".your-location button").click(function() {
  if($(".your-location input").val() === ''){
    alert("عليك بملء جميع البيانات");
  }
});

$(".subscribe button").click(function() {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   if($(".subscribe input").val() === ''){
     alert("عليك بملء جميع البيانات");
   }else if(!emailReg.test($(".subscribe input").val())) {
     alert("عليك بملء جميع البيانات");
   }
});

$(".search-commande button").click(function() {
  if($(".search-commande input")){
   alert("عليك بملء جميع البيانات");
  }
});


$(".commande-refuse-form button").click(function() {
  if($(".commande-refuse-form input")){
   alert("عليك بملء جميع البيانات");
  }
});

/*** fin test des champs ***/

/**** progress ar **/
const etapeNumber = 5;
for(let i =0; i< etapeNumber; i++){
  $(".fa-check-circle").eq(i).addClass("active");
  $(".vertical-line").eq(i).attr("src", "images/Line2.png");
  for(let i=0; i< etapeNumber-1; i++){
    $(".lines").eq(i).attr("src", "images/line-2.png");
  }

}
/*$(".fa-check-circle").each(function(e){
    $(this).addClass("active");
})*/

/*** fin progress bar */

/*** close location ***/

$(".enter-your-location-content .fa-times").click(function() {
  $(".enter-your-location-wrapper").css("display", "none");
});

/*** fin close location ***/
