console.log("Usando el closure con una funcion que retorna una funcion interna: ");
function funcion1 (){
    var miVariable = 1;

    function funcionInterna() {
        console.log(miVariable);    
    }

    return funcionInterna;
}

var variableExterna = funcion1();
variableExterna();

// ========================================== //

console.log("Usando el closure pasando la funcion interna como parametro: ");

function funcion2() {
    var miVariable = 2;
    function funcionInterna(){
        console.log(miVariable);
    }
    funcionAfuera_Aparte(funcionInterna);
}

function funcionAfuera_Aparte(funcion) {
    //Me va a recibir una funcion y la va a ejecutar
    funcion();
}

funcion2();

// ========================================== //

console.log("Usando closure con setTimeout: ");

function espera(mensaje) {
    /*setTimeout(function(){
        console.log(mensaje)
    },2000);*/
    setTimeout(console.log(mensaje),2000);
}

espera("Hola");