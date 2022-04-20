// Acciones necesarias para conseguir un resultado satisfactorio
var desarrollo = new Promise (function(resolve,reject){
    setTimeout(()=> {
        const proyecto = "caja";
        var aleatorio = Math.random();
        if(aleatorio < 0.4)
            resolve(proyecto);
        else
            reject("No entregado a tiempo");
    },1500)
});

desarrollo
    .then((proyecto)=> console.log(proyecto))
    .catch((Error) => console.log(Error))
    .finally(()=> console.log("finalizado"))