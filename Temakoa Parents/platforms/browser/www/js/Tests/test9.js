// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado9 = 0;
    var total9 = 3;


function evaluar() {
    var p1 = $$('#9-1').prop('checked');
    var p2 = $$('#9-2').prop('checked');
    var p3 = $$('#9-3').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado9++;
        console.log(resultado9);
    }
    else {
            console.log(resultado9);
            
    }

    if (p2 == true){
        resultado9++;
        console.log(resultado9);
    }
    else {
            console.log(resultado9);
            
    }

    if (p3 == true){
        resultado9++;
        console.log(resultado9);
    }
    else {
            console.log(resultado9);
            
    }


    if (resultado9 == total9) {
        $$('#Bien').show();
    }
    else if (resultado9 <= (total9 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado9 >= (total9 / 2) || resultado9 != total9) {
        $$('#Regular').show();
    }

}
