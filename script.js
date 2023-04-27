

function in__home_v3() {

    let splides = $('.in__home_v3');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {
      // Desktop on down
        perPage: 3,
        perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: 'loop', // 'loop' or 'slide'
      gap: '2em', // space between slides
      arrows: 'slider', // 'slider' or false
      pagination: false, // 'slider' or false
      speed : 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind : true, // go back to beginning when reach end
      rewindSpeed : 400,
      waitForTransition : false,
      updateOnMove : true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
            991: {
            // Tablet
          perPage: 1,
          gap: '4vw',
            },
        767: {
            // Mobile Landscape
          perPage: 1,
          gap: '4vw',
            },
        479: {
            // Mobile Portrait
          perPage: 1,
          gap: '16px',
            }
        }
    } ).mount();
    }
    
    }
    in__home_v3();
    


function venue_vendor() {

    let splides = $('.venue_vendor');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 3,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: 'slider', // 'slider' or false
            pagination: false, // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 30, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: true, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            autoplay: true,
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 1,
                    gap: '4vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 1,
                    gap: '4vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1,
                    gap: '4vw',
                }
            }
        }).mount();
    }

}
venue_vendor();


function decoration_vendor() {

    let splides = $('.decoration_vendor');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 3,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: 'slider', // 'slider' or false
            pagination: false, // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 30, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: true, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            autoplay: true,
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 1,
                    gap: '4vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 1,
                    gap: '4vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1,
                    gap: '4vw',
                }
            }
        }).mount();
    }

}
decoration_vendor();

function wedding_success() {

    let splides = $('.wedding_success');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 2,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: false, // 'slider' or false
            pagination: false, // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 30, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: true, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            autoplay: true,
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 1,
                    gap: '4vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 1,
                    gap: '4vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1,
                    gap: '4vw',
                }
            }
        }).mount();
    }

}
wedding_success();

Array.from(document.querySelectorAll('#left-arrow')).forEach(function (el) {
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.splide__arrow--prev')).forEach((el) => {
            el.click()
        })
    })
})


Array.from(document.querySelectorAll('#right-arrow')).forEach(function (el) {
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.splide__arrow--next')).forEach((el) => {
            el.click()
        })
    })
})




Array.from(document.querySelectorAll('.splide__arrow--next')).forEach((el) => {
    el.style.display = 'none';
})

Array.from(document.querySelectorAll('.splide__arrow--prev')).forEach((el) => {
    el.style.display = 'none';
})
