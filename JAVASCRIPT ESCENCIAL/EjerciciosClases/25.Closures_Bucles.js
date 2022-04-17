/*for(var i=0;i<=5;i++ ){
    function closure_sobre_i() {
        var copia_i = i;
        setTimeout(function(){
            console.log(copia_i);
        },copia_i*1000);
    }
    closure_sobre_i();
}*/

/*for(var i=0;i<=5;i++ ){
    function closure_sobre_i(copia_i) {
        setTimeout(function(){
            console.log(copia_i);
        },copia_i*1000);
    } 
    closure_sobre_i(i);
}*/

for(var i=0;i<=5;i++ ){
    (function closure_sobre_i(copia_i) {
        setTimeout(function(){
            console.log(copia_i);
        },copia_i*1000);
    })(i);
}