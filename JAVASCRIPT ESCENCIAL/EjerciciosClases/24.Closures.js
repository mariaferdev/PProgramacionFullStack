function funcion1 (){
    var miVariable = 1;

    function funcionInterna() {
        console.log(miVariable);    
    }

    return funcionInterna;
}

var variableExterna = funcion1();
variableExterna();
