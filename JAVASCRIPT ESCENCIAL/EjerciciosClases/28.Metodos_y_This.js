var persona = {
    nombre: "juan",
    edad: "36",
    caminar: function() {
        console.log("Estoy caminando");
    },
    saludar: function(){
        console.log("Hola me llamo " + this.nombre);
        var that = this

        var fn = function name() {
            console.log("Hola  that me llamo " + that.nombre);
            console.log("Hola this me llamo " + this.nombre);
        }.bind(this);
        fn();
    }
};

persona.caminar();
persona.saludar();