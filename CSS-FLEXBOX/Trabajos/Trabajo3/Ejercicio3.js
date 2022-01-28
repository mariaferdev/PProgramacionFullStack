(function () {
    let movil = document.getElementById('movil');
    let contenedorMenu = document.getElementById('contenedorMenu');
    // console.log(movil,menu);

    movil.addEventListener ('click', function(){
        contenedorMenu.style.display = contenedorMenu.style.display == 'flex' ? 'none' : 'flex';
    });

}) () ;