var expresionFuncional = function () {
    console.log("Se invoca expresion funcionañ");
};

expresionFuncional();

console.log("\n");

var matriz = [1,2,3,4,5,6];
matriz.forEach(function(elem){
    console.log(elem);
});

console.log("\n");

(function(){
    console.log("Hola desde IIFE");
    //Inmediately Invoked Function Expresision
})();