/*BACK TO TOP AFTER REFRESH PAGE*/

window.onbeforeunload = function(){ 
    window.scrollTo(0,0); 
}

// REFERESH PAGE AFTER CLICK START
document.getElementById("start").addEventListener("click", function(){
    window.location.reload();
    window.scrollTo(0,0);
    
})
/* SMOOTH SCROOLING*/
$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});
/*NAVBAR AFTER SCROLL*/

/*$(window).scroll(function(){
    let winHeight = $(window).height();
    if($(document).scrollTop() >= 0){
        $("nav").addClass("scrolling-one");
        $("#myTopnav").css({visibility: "visible"});
    } else if ($(document).scrollTop() > winHeight){
        $("nav").addClass("scrolling-two");
        $("#myTopnav").css({visibility: "visible"});
        
    } else {
        $("nav").removeClass("scrolling-one scrolling-two");
        $("#myTopnav").css({visibility: "hidden"});
    }
    // if($(document).scrollTop() > winHeight){
    //     $("nav").addClass("scrolling-two");
    //     $("#myTopnav").css({visibility: "visible"});
    // } else {
    //     $("nav").removeClass("scrolling-two");
    //     $("#myTopnav").css({visibility: "hidden"});
    // }    
}); */



// DICPLAY NONE ON HEADER AFTER SCROLL


// ROTATE LOGO AFTER SCROLLING


    $(window).scroll(function() {

        // get how far we've scrolled from the top of our screen
        var offset = $(window).scrollTop();
        offset     = offset / 8;

        // apply the offset as a css transform to our buttons
        $('#img-scroll').css({
            '-moz-transform': 'rotate(' + offset + 'deg)',
            '-webkit-transform': 'rotate(' + offset + 'deg)',
            '-o-transform': 'rotate(' + offset + 'deg)',
            '-ms-transform': 'rotate(' + offset + 'deg)',
            'transform': 'rotate(' + offset + 'deg)',
        });

    });

/*RESPONSIVE NAVIGATION- show li block after click*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* remove class after click li(hide nav) */

var $link = $(".topnav li:not(:last-child)");
$link.click(function(){
    if ($("#myTopnav").hasClass("responsive")){
        $("#myTopnav").removeClass("responsive");
}
})

/*SETTINGS FOR vTICKER*/
$('.first_col').vTicker({
   speed: 300,
   pause: 3000,
   showItems: 1,
   animation: 'fade',
   mousePause: false,
   height: "70px",
   direction: 'down'
});

/*-----------HOVER ON TEXT in ABOUT SECTION*/
/*JIM CAREY*/
$(document).ready(function(){
    $("#jim").click(function(){
         $("#img-slide1").addClass("jimcarey");
        setTimeout(function(){
           $("#img-slide1").removeClass("jimcarey"); 
        }, 6000);
    });
   }); 
/*KABOM*/
    $(document).ready(function(){
    $("#jim").click(function(){
         $("#img-slide2").addClass("kabom");
        setTimeout(function(){
           $("#img-slide2").removeClass("kabom"); 
        }, 2000);
    });
});
/*BLIZZARD*/
/*orc*/
    $(document).ready(function(){
    $("#blizzard").click(function(){
         $("#img-slide3").addClass("dance_orc");
        setTimeout(function(){
           $("#img-slide3").removeClass("dance_orc"); 
        }, 10000);
    });
});
/*tauren*/
   $(document).ready(function(){
    $("#blizzard").click(function(){
         $("#img-slide4").addClass("dance_tauren");
        setTimeout(function(){
           $("#img-slide4").removeClass("dance_tauren"); 
        }, 10000);
    });
});

// ADD SCROLL ON MOBILE TO PHOTO


    $(".secret-slide").click(function() {
        if(window.innerWidth < 500) {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 300);
        }}
    );
    
// WAYPOINT EFFECTS
/*ABOUT EFFECT*/
// $(document).ready(function(){
//     // hide our element on page load
//     $('.about').css('opacity', 0);
   
//     $('.about').waypoint(function() {
//         $('.about').addClass('fadeInUp');
//     }, { offset: '70%' });
//   });
// CERTYFICAT EFFECT
 /* $(document).ready(function(){
    // hide our element on page load
    $('.cert').css('opacity', 0);
   
    $('.cert').waypoint(function() {
        $('.cert').addClass('fadeInUp');
    }, { offset: '70%' });
  }); */
/* SKILLS ICON EFFECT*/
// $(document).ready(function(){
//   // hide our element on page load
//   $('.skills').css('opacity', 0);
 
//   $('.skills').waypoint(function() {
//       $('.skills').addClass('fadeInUp');
//   }, { offset: '70%' });
// });

// PROJECTS EFFECT
// $(document).ready(function(){
//     $('.projects').css('opacity', 0);
   
//     $('.projects').waypoint(function() {
//         $('.projects').addClass('fadeInUp');
//     }, { offset: '70%' });
//   });
// $(document).ready(function(){
//     $('.avengers').css('opacity', 0);

//     $('.avengers').waypoint(function() {
//         $('.avengers').addClass('fadeIn');
//         $('.avengers').css('opacity', 1);
//     }, { offset: '70%' });
// });

// $(document).ready(function(){
//     var widthS = $(window).width();
//     if (widthS > 768){
//         $('.destroyer').css('opacity', 0);
    
//         $('.destroyer').waypoint(function() {
//             $('.destroyer').addClass('animate-ship');
//             $('.destroyer').css('opacity', 1);
//     }, { offset: '70%' });
//     }else{
//         $('.destroyer').css('opacity', 0);
    
//         $('.destroyer').waypoint(function() {
//             $('.destroyer').addClass('zoomIn');
//             $('.destroyer').css('opacity', 1);
//     }, { offset: '70%' })
//     };
// });
$(document).ready(function(){
    $('.myportfolio').css('opacity', 0);

    
        $('.myportfolio').waypoint(function() {
        $('.myportfolio').addClass('slideInRight');
        $('.myportfolio').css('opacity', 1);
    }, { offset: '70%' });
    
});
/*SLIDER IN CERT S4ECTION*/
if (document.documentElement.lang == "en"){
    var images = [];
images.push("<img src ='../img/dyploms/Akademia108.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/javascript.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/front-end.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/PSDtoHTML.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/gitvsc.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/angielski.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/MTM-UAS1.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/MTM-UAS2.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/award4.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/award1.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/award2.jpg' class = 'opacImg'>");
images.push("<img src ='../img/dyploms/award3.jpg' class = 'opacImg'>");
}else{
    var images = [];
images.push("<img src ='img/dyploms/Akademia108.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/javascript.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/front-end.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/PSDtoHTML.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/gitvsc.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/angielski.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/MTM-UAS1.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/MTM-UAS2.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award4.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award1.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award2.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award3.jpg' class = 'opacImg'>");
}




var curIndex = 0 ;
var mainDiv = document.getElementById("my-image-slider");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

mainDiv.innerHTML = images[0];

function getElement() {
    mainDiv.innerHTML = images[curIndex];
    /*images.style.opacity = 1;*/
};

function goNext() {
    var nextIndex = curIndex + 1;
    if (nextIndex === images.length) {
        return 0;
    } else {
        return nextIndex;
    }
};

nextBtn.addEventListener("click", function () {
    curIndex = goNext();
    getElement();
});

function goPrev() {
    var prevIndex = curIndex - 1;
    if (prevIndex === -1) {
        return images.length-1;
    } else {
        return prevIndex;
    }
};

prevBtn.addEventListener("click", function () {
    curIndex = goPrev();
    getElement();
});

/* ARTICLE TO SLIDER*/
if (document.documentElement.lang == "en"){
    var articles = [];
    articles.push("<h3>Programming school</h3><br><p>Bootcamp course Front-end developer at Akademia 108</p>");
    articles.push("<h3>JavaScript course</h3><br><p>Javascript course from the basics to the advanced level.</p>");
    articles.push("<h3>Front-end course</h3><br><p>Website creation course with CSS3 and Bootstrap technologies.</p>");
    articles.push("<h3>PSD to HTML course</h3><br><p>Website creation course based on PSD templates.</p>");
    articles.push("<h3>Git w Visual Studio Code course</h3><br><p>Git course use VS code editor.</p>");
    articles.push("<h3>English language course</h3><br><p>Completing the B1 + level English language course.</p>");
    articles.push("<h3>Certificate MTM-UAS</h3><br><p>Obtaining qualifications to use the MTM-UAS module system.</p>");
    articles.push("<h3>MTM-1</h3><br><p>Obtaining qualifications for the use of MTM process blocks.</p>");
    articles.push("<h3>Best project</h3><br><p>I place in the competition for the best project of the year 'Optimization of the logistics window'.</p>");
    articles.push("<h3>Best project</h3><br><p>Second place in the competition for the best project of the year. 'Application for delivering parts for production'.</p>");
    articles.push("<h3>Best project</h3><br><p>3rd place in the competition for the best project of the year 'Implementation FIFO system in the warehouse'.</p>");
    articles.push("<h3>Best project</h3><br><p>Distinction in the competition for the best project of the year 'Rack for parts'.</p>");
}else{
    var articles = [];
    articles.push("<h3>Szkoła programowania</h3><br><p>Kurs bootcamp Front-end developer w szkole Akademia 108</p>");
    articles.push("<h3>Kurs Javascript</h3><br><p>Kurs Javascript od podstaw do poziomu zawansowanego.</p>");
    articles.push("<h3>Kurs Front-end</h3><br><p>Kurs tworzenia stron z technologiami CSS3 i Bootstrap.</p>");
    articles.push("<h3>Kurs PSD do HTML</h3><br><p>Kurs tworzenia stron na podstawie szablonów PSD.</p>");
    articles.push("<h3>Kurs Git w Visual Studio Code</h3><br><p>Kurs obsługi Git w edytorze VS Code</p>");
    articles.push("<h3>Kurs języka angielskiego</h3><br><p>Ukończenie kursu języka angielskiego poziom B1+</p>");
    articles.push("<h3>Certyfikat MTM-UAS</h3><br><p>Uzyskanie kwalifikacji do zastosowania systemu modułów MTM-UAS</p>");
    articles.push("<h3>MTM-1</h3><br><p>Uzyskanie kwalifikacji do zastosowania bloków procesowych MTM</p>");
    articles.push("<h3>Najlepszy projekt</h3><br><p>I miejsce w konkursie na najlepszy projekt roku 'Optymalizacja okna logistycznego'</p>");
    articles.push("<h3>Najlepszy projekt</h3><br><p>II miejsce w konkursie na najlepszy projekt roku 'Aplikacja dotowarowania segmentu GFT20'</p>");
    articles.push("<h3>Najlepszy projekt</h3><br><p>III miejsce w konkursie na najlepszy projekt roku 'Wprowadzenie FIFO na magazynie'</p>");
    articles.push("<h3>Najlepszy projekt</h3><br><p>Wyróżnienie w konkursie na najlepszy projekt roku 'Stojak na części'</p>");
}



var curIndexArt = 0 ;
var mainDivArt = document.getElementById("slider-article");
var nextBtnArt = document.getElementById("next");
var prevBtnArt = document.getElementById("prev");

mainDivArt.innerHTML = articles[0];

function getElementArt() {
    mainDivArt.innerHTML = articles[curIndexArt];
};

function goNextArt() {
    var nextIndexArt = curIndexArt + 1;
    if (nextIndexArt === articles.length) {
        return 0;
    } else {
        return nextIndexArt;
    }
};

nextBtnArt.addEventListener("click", function () {
    curIndexArt = goNextArt();
    getElementArt();
});

function goPrevArt() {
    var prevIndexArt = curIndexArt - 1;
    if (prevIndexArt === -1) {
        return articles.length-1;
    } else {
        return prevIndexArt;
    }
};

prevBtnArt.addEventListener("click", function () {
    curIndexArt = goPrevArt();
    getElementArt();
});

// HEADER SECTION CURTAIN ************************************************************************************************************

let current = $(window).scrollTop();
console.log(current);
let windowHeight = $(window).height();
// console.log(windowHeight);
let total = $(window).height() - current;
let eleLeft = $(".cd-half-left");
let eleRight = $(".cd-half-right");
let eleBlock = $(".cd-block");

let currPositionLeft = eleLeft.position().left;
let currPositionRight = eleRight.position().right;
let trackLength = 70;
let headerHeaight = $(".cd-section").height();
let halfBlockWidth = $(".cd-half-block").width();
let windowWidth = $(window).width();

let navRight = $("#myTopnav");
let halfBlock = $(".cd-half-block");

let distance = windowWidth/ windowHeight;
// console.log(distance);

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
function updateCurrent(event) {
	if (current >= 60) {
        current = 60;
  } else {
    if (current <= 0) {
      current = 0;
    }
    // if below 50 we cancel the event to prevent the scroll
    event.originalEvent.preventDefault();
  }
  let enebleScrolling = enableScrolling();
//   FIX BUG WITH SCROLLING BODY WHEN BLOCKS DONT REACH 50%
if (current >= 50){
    
    enableScrolling();
} else {
    disableScrolling();
}
if(current < 50){
    $("#header").css({
        "pointer-events": "initial"
    });
}else {
    $("#header").css({
        "pointer-events": "none"
    });
}
        // ADD BOX SHADOW TO SIDE BLOCKS AFTER SCROLL 1px
        if(current > 1 && current < 50){
            halfBlock.addClass("block-shadow");
        }else{
            halfBlock.removeClass("block-shadow");
        }

    let aboutSec = document.getElementById("about");
    let aboutSecBlur = (50 - current) / 5;
    aboutSec.style.filter = "blur("+aboutSecBlur+"px)";
    
  eleLeft.css({left:"-"+current+'%'});
  eleRight.css({right:"-"+current+'%'});
}

// SHOW NAV AFTER SCROLL
$(window).scroll(function(){
    let winHeight = ($(window).height())*0.9;
    if($(document).scrollTop() >= 100){
        $("nav").addClass("scrolling-two");
        $("#myTopnav").css({visibility: "visible"});
    }  else {
        $("nav").removeClass("scrolling-two");
    }
    
});

$('body').on('wheel', function(event){
	// left and right should not move when we're not on top
    if ($(window).scrollTop() > 0) {
    	return;
    }
    // NORMALIZE SCROLL VALUE TO 1px. SAME FOR ALL BROWSERS
    let deltaNewY;
    if (event.originalEvent.deltaY >= 1){
        deltaNewY = 1;
    }else {
        deltaNewY = -1;
    }
    console.log(deltaNewY);
    current += deltaNewY * 5;
    console.log(current);
    console.log(event.originalEvent.deltaY);
    // position bounded between 0 and 60
    updateCurrent(event);
});
let initialClientY = 0;
$('body').bind('touchstart', function (event) {
    initialClientY = event.originalEvent.touches[0].clientY;
    console.log(initialClientY);
});
console.log(initialClientY);
$('body').bind('touchmove', function (event) {
		// left and right should not move when we're not on top
		if ($(window).scrollTop() > 0) {
    	return;
    }
    current += -(event.originalEvent.touches[0].clientY - initialClientY) / 4;
    console.log(current);
    // position bounded between 0 and 50
    updateCurrent(event);
});











// DELETE TEXT FROM THE HEADER AFTER SCROLL
// $(window).scroll(function(){
//     if($(document).scrollTop() > $(window).height()){
//         $("#header").css({
//             "visibility": "hidden"
//         });
//     } else {
//         $("#header").css({
//             "visibility": "visible"
//         });
//     }    
// });
// $(window).scroll(function(){
//     if($(document).scrollTop() > 5){
//         $(".header-text-display").css({
//             "opacity": "0",
//             "transition": "all 0.1s linear",
//         });
//     } else {
//         $(".header-text-display").css({
//             "opacity": "1",
//             "transition": "all 0.1s linear"
//         });
//     }    
// });
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

