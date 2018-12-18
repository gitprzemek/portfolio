/*BACK TO TOP AFTER REFRESH PAGE*/
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// REFERESH PAGE AFTER CLICK START
document.getElementById("start").addEventListener("click", function () {
    window.location.reload();
    window.scrollTo(0, 0);
})

/* SMOOTH SCROOLING*/
$('a[href^="#"]').on('click', function (event) {
    let target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


// ROTATE LOGO IN NAV AFTER SCROLLING
window.addEventListener('scroll', function (e) {
    // get how far we've scrolled from the top of our screen
    let offset = $(window).scrollTop();
    let imgScroll = document.getElementById("img-scroll");
    offset = offset / 8;
    // apply the offset as a css transform to our buttons
    imgScroll.style.transform = "rotate(" + offset + "deg)";
});

// SHOW NAV AFTER SCROLL
window.addEventListener('scroll', function (e) {
    let scrollOnTop = document.documentElement.scrollTop;
    let nav = document.getElementById("nav");
    let myTopnav = document.getElementById("myTopnav");
    if (scrollOnTop >= 100) {
        nav.classList.add("scrolling-two");
        myTopnav.style.visibility = "visible";
    } else {
        nav.classList.remove("scrolling-two");
    }
});

/*RESPONSIVE NAVIGATION- HAMBURGER show li block after click*/
const btnBurger = document.getElementById("burger");
function showMenuList() {
    const navList = document.getElementById("myTopnav");
    if (navList.className === "topnav") {
        navList.className += " responsive";
    } else {
        navList.className = "topnav";
    }
}
btnBurger.addEventListener("click", showMenuList);

/* remove class after click li(hide nav) */
let $link = $(".topnav li:not(:last-child)");
$link.click(function () {
    if ($("#myTopnav").hasClass("responsive")) {
        $("#myTopnav").removeClass("responsive");
    }
})

/*****SETTINGS FOR vTICKER*****/
$('.curtain__first_col').vTicker({
    speed: 300,
    pause: 3000,
    showItems: 1,
    animation: 'fade',
    mousePause: false,
    height: "70px",
    direction: 'down'
});


/*****HOVER ON TEXT in ABOUT SECTION*****/
/*JIM CAREY*/
$(document).ready(function () {
    let jim = document.getElementById("jim");
    let jimImg = document.getElementById("img-slide1");
    let kaboomImg = document.getElementById("img-slide2");
    let blizz = document.getElementById("blizzard");
    let orcImg = document.getElementById("img-slide3");
    let taurenImg = document.getElementById("img-slide4");

    jim.addEventListener('click', function (e) {
        jimImg.classList.add("jimcarey");
        setTimeout(function () {
            jimImg.classList.remove("jimcarey");
        }, 6000);
    });
    /*KABOM*/
    jim.addEventListener('click', function (e) {
        kaboomImg.classList.add("kabom");
        setTimeout(function () {
            kaboomImg.classList.remove("kabom");
        }, 2000);
    });
    /*orc*/
    blizz.addEventListener('click', function (e) {
        orcImg.classList.add("dance_orc");
        setTimeout(function () {
            orcImg.classList.remove("dance_orc");
        }, 10000);
    });
    /*tauren*/
    blizz.addEventListener('click', function (e) {
        taurenImg.classList.add("dance_tauren");
        setTimeout(function () {
            taurenImg.classList.remove("dance_tauren");
        }, 10000);
    });


});


// ADD SCROLL AFTER CLICK TEXT LINK ON MOBILE TO PHOTO
$(".about__secret-slide").click(function () {
    if (window.innerWidth < 500) {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 300);
    }
});


/*****SLIDER IN CERTIFICATE SECTION*****/
function mySlider() {
    let prevBtn = document.getElementById("prev");
    let nextBtn = document.getElementById("next");
    let listImg = document.getElementsByClassName("slider__img-item");
    let listArt = document.getElementsByClassName("slider__art-item");
    let currentSlide = 1;
    let currentArticle = 1;
    showSlide(currentSlide);
    showArticle(currentArticle);

    // SHOW NEXT ONE OR PREV IMG
    function showSlide() {
        let i;
        if (currentSlide > listImg.length) {
            currentSlide = 1
        }
        if (currentSlide < 1) {
            currentSlide = listImg.length
        }
        for (i = 0; i < listImg.length; i++) {
            listImg[i].style.display = "none";
        }
        listImg[currentSlide - 1].style.display = "block";
    }

    // SHOW NEXT ONE OR PREV ARTICLE
    function showArticle() {
        let i;
        if (currentArticle > listArt.length) {
            currentArticle = 1
        }
        if (currentArticle < 1) {
            currentArticle = listArt.length
        }
        for (i = 0; i < listArt.length; i++) {
            listArt[i].style.display = "none";
        }
        listArt[currentArticle - 1].style.display = "block";
    }
    nextBtn.addEventListener("click", function () {
        showSlide(currentSlide += 1);
        showArticle(currentArticle += 1);
    });
    prevBtn.addEventListener("click", function () {
        showSlide(currentSlide += -1);
        showArticle(currentArticle += -1);
    });
}


// HEADER SECTION CURTAIN ************************************************************************************************************
function curtain() {
    let current = $(window).scrollTop();
    console.log(current);
    let windowHeight = $(window).height();
    let total = $(window).height() - current;
    let eleLeft = $(".curtain__half--left");
    let eleRight = $(".curtain__half--right");
    let eleBlock = $(".curtain");
    let currPositionLeft = eleLeft.position().left;
    let currPositionRight = eleRight.position().right;
    let trackLength = 70;
    let headerHeaight = $("#header").height();
    let halfBlockWidth = $(".curtain__half").width();
    let windowWidth = $(window).width();
    let navRight = $("#myTopnav");
    let halfBlock = $(".curtain__half");
    let distance = windowWidth / windowHeight;
    let aboutSec = document.getElementById("about");
    const header = document.getElementById("header");

    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () {
            window.scrollTo(x, y);
        };
    }

    function enableScrolling() {
        window.onscroll = function () {};
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
        if (current >= 60) {

            enableScrolling();
        } else {
            disableScrolling();
        }
        if (current < 60) {
            $("#header").css({
                "pointer-events": "initial"
            });
        } else {
            $("#header").css({
                "pointer-events": "none"
            });
        }
        // ADD BOX SHADOW TO SIDE BLOCKS AFTER SCROLL 1px
        if (current > 1 && current < 60) {
            halfBlock.addClass("block-shadow");
        } else {
            halfBlock.removeClass("block-shadow");
        }
        // hide shadows when is 0
        if (current > 0) {
            $(".curtain__container--sides").css({
                "opacity": "0",
                "transition": "all 0.1s linear",
            });
        } else {
            $(".curtain__container--sides").css({
                "opacity": "1",
                "transition": "all 1.2s ease-in"
            });
        }


        // BLUR HEADER AFTER SCROLL BLOCKS
        const widthWindow = window.innerWidth;
        let aboutSecBlur = Math.floor((60 - current) / 15);
        
        console.log(current);
        console.log("blur "+aboutSecBlur);
        if (widthWindow > 1025) {
            aboutSec.style.filter = "blur(" + aboutSecBlur + "px)";
        };

        // SCROLL BLOCKS TO SIDE WALL
        eleLeft.css({
            left: "-" + current + '%'
        });
        eleRight.css({
            right: "-" + current + '%'
        });
    }



    $('body').on('wheel', function (event) {
        // left and right should not move when we're not on top
        if ($(window).scrollTop() > 0) {
            return;
        }
        // NORMALIZE SCROLL VALUE TO 1px. SAME FOR ALL BROWSERS
        let deltaNewY;
        if (event.originalEvent.deltaY >= 1) {
            deltaNewY = 1;
        } else {
            deltaNewY = -1;
        }

        current += deltaNewY * 5;
        // position bounded between 0 and 60
        updateCurrent(event);
    });
    let initialClientY = 0;

    // EVENT FOR TOUCH SCREEN
    $('body').bind('touchstart', function (event) {
        initialClientY = event.originalEvent.touches[0].clientY;
        current = 60;
        console.log(initialClientY);
        updateCurrent(event);
    });
    // console.log(initialClientY);
    $('body').bind('touchmove', function (event) {
        // left and right should not move when we're not on top
        if ($(window).scrollTop() > 0) {
            return;
        }
        current += -(event.originalEvent.touches[0].clientY - initialClientY) / 1.2;
        console.log(current);
        // position bounded between 0 and 50
        updateCurrent(event);
    });
    
    header.addEventListener("click", function(event){
        current = 60;
        updateCurrent(event);
    });

}
/***********************RUN FUNCTION*************************/
mySlider();
curtain();

/***********************END RUN FUNCTION*************************/


// END













// PARALLAX BG change bg after section projects is visible on window **********************************
// const projectSec = document.getElementById("projects");
// let isInViewport = function (elem) {
//     let bounding = projectSec.getBoundingClientRect();
//     return (
//         bounding.top - 900 <= (window.innerHeight || document.documentElement.clientHeight)
//     );
// };

// window.addEventListener('scroll', function (event) {
//     if (isInViewport(projectSec)) {
//         projectSec.classList.add("bg-fixed")
//     } else {
//         projectSec.classList.remove("bg-fixed")
//     }
// }, false);

//   HEADER CLONE TEXT SLIDER OUTSIDE PARENT

// if (window.innerWidth < 480) {
//     function cloneFn() {
//         var itm = document.getElementById("name-container");
//         var cln = itm.cloneNode(true);
//         document.getElementById("header").appendChild(cln);
//     }
//     cloneFn();
// } 

// $('.curtain__first_col').vTicker({
//     speed: 300,
//     pause: 3000,
//     showItems: 1,
//     animation: 'fade',
//     mousePause: false,
//     height: "70px",
//     direction: 'down'
// });

// REFRESH PAGE AFTER RESIZE WINDOW <1000 px
// $(document).ready(function () {
//     var initialSize = $(window).width();
//     //otherwise continue
//     $(window).on('resize', function () {
//         if ($(window).width() < 800) {
//             location.reload(); // refresh page 
//         }
//     });
// });
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