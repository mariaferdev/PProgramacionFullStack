var matriz = ["lunes", "martes", "miercoles"];
var tamM = matriz.length;

//Usando bucle for
for (var i=0; i < tamM; i++)
    console.log(matriz[i]);

console.log("\n");

//Usando el forEach
function mostrarElem (elemento){
    console.log(elemento);
}
matriz.forEach(mostrarElem);

console.log("\n");

//Usando for..of
for (const elemento of matriz) {
    console.log(elemento);
}
