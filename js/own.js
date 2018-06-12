function myFunction() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("copy");
      }


$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:2,
            nav:true
          },
          600:{
            items:3,
            nav:false
          },
          1000:{
            items:6,
            nav:true,
            loop:false
          }
        }
      })

