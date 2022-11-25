
if (typeof contenedorMenu !== 'undefined') {
    (function () {
        let menuDespliegue = document.getElementById('menuDespliegue');
        let contenedorMenu = document.getElementById('contenedorMenu');
        // console.log(movil,menu);
    
        menuDespliegue.addEventListener ('click', function(){
            contenedorMenu.style.display = contenedorMenu.style.display == 'flex' ? 'none' : 'flex';
        });
    
    }) () ;
  }