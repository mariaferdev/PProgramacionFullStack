(function () {
    let movil = document.getElementById('movil');

    let contenedorMenu = document.getElementById('contenedorMenu');

    // console.log(movil,menu);

    movil.addEventListener('click', function(){

	if (contenedorMenu.style.display === 'none') {
		contenedorMenu.style.display = 'flex';
	} else {
		contenedorMenu.style.display = 'none';
	}

    });

}) () ;
