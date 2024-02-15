

//

$(window).scroll(function(){

    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 250) sticky.addClass('sticky-nav');
    else sticky.removeClass('sticky-nav');

});



AOS.init({
    once: true,
});

//

$("#mobile-number").intlTelInput();


//



$(document).ready(function() {

    $("nav.navbar .nav-item ul li:has(ul)").prepend('<span class="down"></span>');

    $('.timeline .owl-carousel').owlCarousel({
        // loop: true,
        autoplay: false,
        autoplayTimeout:4000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        margin:0,
        lazyLoad: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items:1,
            },
            1000: {
                items: 3
            },
            1300: {
                items: 3
            },
            1400: {
                items: 5
            }
        }
    });

    //project-carousel
    // $('.project-carousel .owl-carousel').owlCarousel({
    //     // loop: true,
    //     autoplay: false,
    //     autoplayTimeout:4000,
    //     autoplaySpeed: 1500,
    //     smartSpeed: 1500,
    //     margin:30,
    //     lazyLoad: true,
    //     items: 1,
    //     responsiveClass: true,
    //     nav: true,
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items:1,
    //         },
    //         1000: {
    //             items: 1
    //         },
    //         1300: {
    //             items: 1
    //         },
    //         1400: {
    //             items: 1
    //         }
    //     }
    // });

    

    var projectCarousel = $('#projectCarousel');

    projectCarousel.owlCarousel({
            loop: false,
            // nav:true,
            dots:false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            touchDrag:false,
            slideBy: 2,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

    $(".pwNext").click(function() {
        projectCarousel.trigger('next.owl.carousel');
    });
    $(".pwPrev").click(function() {
        projectCarousel.trigger('prev.owl.carousel');
    });



    $(".scroll-down").click(function() {
        $('html, body').animate({
            scrollTop: $("#bodyScroll").offset().top - 200
        }, 2000);
    });

    $('.cms-rd').find('ul').css({'fontWeight':'400'}).parents('li').css({'fontWeight':'700'})

    //

    //
    $('.largerImgBox li').eq(0).show();
    $('.item .thumbsnail').click(function(){
        $('.largerImgBox li').hide();
        var imgId = $(this).attr("data-id");
        console.log(imgId);
        $(".largerImgBox li").css({"z-index": 0});
        $('#' + imgId).css({"z-index":1, opacity:1}).fadeIn().addClass('animate');
    });  

    //
    

    $('.gallery1 .owl-carousel').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        margin: 10,
        lazyLoad: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    //
    $('.test-carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        margin: 20,
        lazyLoad: true,
        items: 1,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    //

    
    $('.training-carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        margin: 40,
        lazyLoad: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            }
        }
    });


    //
    
    $('.ac-carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        margin: 40,
        lazyLoad: true,
        items: 1,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });
    //

    var divs = $(".filter-items > .filter-item");
        for(var i = 0; i < divs.length; i+=5) {
    divs.slice(i, i+5).wrapAll("<div class='new'></div>");
    }


    var divs = $(".sc-gallerys > .sc-gallery");
        for(var i = 0; i < divs.length; i+=4) {
        divs.slice(i, i+4).wrapAll("<div class='sc-row'></div>");
    }

    $("#phone").intlTelInput({})
    
    $("#phone").val('');

    //
    $('.pass-toggle').click(function(){
        $(this).children('i').toggleClass("fa-eye fa-eye-slash");
        var input = $(this).siblings('.pass');
        console.log(input.type)
        if (input.attr("type") === "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
    })

     
});//

  






