var color = "rojo";
var array = [
        color,
        "maria",
        10*10,
        "maria " + color,
        /*function saludar(){alert("HOLA");}*/
        saludar,
        //Matriz multidimencional
        ["lunes", "martes", "miercoles", ["1","2"]]
];

function saludar(){alert("HOLA");}

console.log("muestro la matriz: " + array);
console.log("Muestro la funcion dentro de la matriz: " + array[4]);

// Llamo a la función a través del indice de la matriz y los ()
array[4]();

// Acceder a matrices multidimencionales
console.log("Intentando acceder a martes: " + array[5][1]);

console.log("Intenrando acceder a 2: " + array[5][3][1]);
