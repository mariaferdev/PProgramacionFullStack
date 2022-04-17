//Para saber de donde viene la propiedad aplicada
var persona = {
    nombre: "fg",
}
console.log(persona.hasOwnProperty("nombre"));
//Una forma de crear un método y usarlo en diferentes objetos
var juan = {
    nombre: "Juan",
    saludar =  function (){
        console.log("Hola me llamo " + this.nombre);
    }
}
var andres = {
    nombre: "andres",
    saludar =  function (){
        console.log("Hola me llamo " + this.nombre);
    }
}