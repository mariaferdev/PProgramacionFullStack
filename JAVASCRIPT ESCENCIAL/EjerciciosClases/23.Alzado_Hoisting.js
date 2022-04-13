console.log("Primer ejemplo con variables inicializadas y funciones declaradas: ");
function sumar (a,b){
    var x = sumar(a*a,b*b);
    return x; 
    function sumar(c,d){
        var a = c+d;
        return a;
    }
}
console.log(sumar(2,4));

console.log("Segundo ejemplo con expresiones funcionales tartadas como asignaciones: ");
function mostrarNumero (){

    var expresionFuncional = function(){
        console.log("retornando 11");
        return 11;
    }

    return expresionFuncional();

    var expresionFuncional = function(){
        console.log("retornando 30");
        return 30;
    }

}
mostrarNumero();