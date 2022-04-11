 function saludar (nombre, profesion){
    console.log("Hola soy " + nombre + " Y me dedico a " + profesion);
 }
 saludar("Maria", "Vivir para Dios");

 function texto_to_mayuscula (texto){
     return texto.toUpperCase();
 }
 var nombre = texto_to_mayuscula("maria");
 console.log(nombre);