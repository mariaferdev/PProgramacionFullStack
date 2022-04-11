// typeof retorna una cade na decaracteres
console.log(typeof 36); // tipo number
console.log(typeof "rishf"); // tipo string
var booleano = true;
console.log(typeof booleano); // tipo boolean
var objeto = {clave:"valor"} 
console.log(typeof objeto); // tipo object
var matriz = [1,2,3,4] 
console.log(typeof matriz);// tipo object
var sinInicializar;
console.log( typeof sinInicializar); // tipo underdefined
console.log(typeof null); // tipo object

var rta = 10;
if(typeof rta == "string")
    console.log("OK");
else
    console.log("Error el tipo de valor es " + typeof(rta));
