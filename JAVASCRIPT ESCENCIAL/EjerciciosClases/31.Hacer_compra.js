var comprar = "carrito ";

function hacerLaCompra() {
    return new Promise(function(resolve){
        setTimeout(function() {
            comprar += "caja ";
            console.log(comprar);
            resolve();
        },2000)
    })
}

hacerLaCompra()
    .then(() => hacerLaCompra())
    .then(() => hacerLaCompra())