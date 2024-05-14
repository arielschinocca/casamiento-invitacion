




//-----------------------------------------------------------------------------
//                      CARROUSEL
// ----------------------------------------------------------------------------


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
// MODAL
let botonModal = document.getElementById("botonModal");
let modal = document.getElementById("contenedorModal");

botonModal.addEventListener( "click", ()=>{


    if( modal.style.display == "none"){
        modal.style.display = "block";
        return;
    }

    modal.style.display ="none";
})

let botonCerrarModal = document.getElementById("botonCerrarModal");
let cerrarModal = document.getElementById("contenedorModal");

botonCerrarModal.addEventListener( "click", ()=>{

    cerrarModal.style.display ="none";
})
//-------------------------------------------------------------------------