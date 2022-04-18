var Video_juego = function(){
    nombre = "mario bross",
    jugar = function(){
        console.log("Estoy jugando");
    }
};

var Tetris = Object.create(Video_juego);
Tetris.nombre = "Tetris";
console.log(Tetris);


console.log("Saber la función/prototipo Video juego del objeto Tetris: " + 
            Video_juego.isPrototypeOf(Tetris));


//Usando New para crear objetos
function Cod(){
    this.titulo = "Boomb It"
}
Cod.prototype.jugar = function(){
    console.log("Usando new " + 
                "Estoy jugando a " + this.titulo);
};
var Pac_Man = new Cod();
Pac_Man.titulo = "Pac Man";
console.log("Saber la función/prototipo Cod del objeto Pac man: " + 
            Cod.isPrototypeOf(Pac_Man));
console.log(Pac_Man);