var usuario = prompt("Ingrese su usuario");
if (usuario && usuario.trim()){
    var confirmar = confirm ("¿Es " + usuario + " correcto?");
    if (confirmar)
        alert("usuario correcto");
    else
        alert("usuario incorrecto");
}
else
    alert("No ingreso nada");

//console.log(" esto es un string ".trim());