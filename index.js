


window.addEventListener("load", () => {
    const glider = new Glider(document.querySelector('.list_carrousel'), {
        slidesToScroll: 1,
        slidesToShow: 2,
        draggable: true,
        dots: '.indice_carrousel',
        arrows: {
            prev: '.prev',
            next: '.next'
        },
        responsive: [
            {
                // Pantallas mayores o iguales a 775px
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                }
            }, {
                // Pantallas mayores o iguales a 1024px
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    draggable: true,
                }
            }
        ]
    });

});

//---------------------------------------------------------------------------


window.addEventListener('load', function() {
    var audio = document.getElementById('miAudio');
    audio.play();
  });
  