var colores = ["Azul", "Rojo", "Negro"];
console.log(colores[1]);
console.log(colores.indexOf("Azul"));
console.log(colores.indexOf("Verde"));
colores.push("Verde");
console.log(colores.indexOf("Verde"));
colores.push("verde");
console.log(colores.indexOf("verde"));

//Probando la función
console.log("Matriz inicial: " + colores);
var new_array = delete_array_element(colores, "verdes")
console.log("nueva matriz: " + new_array);

//Función que elimene elementos de una matriz
function delete_array_element(array, elemento){
    var index = array.indexOf(elemento);
    if(index== -1)
        alert("Elemento no encontrado");
    else{
        array.splice(index,1);
        alert("Elemento " + elemento + " ha sido eliminado de la matriz");
        return array
    }

}