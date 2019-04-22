// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado11 = 0;
var total11 = 3;

function evaluar() {
    
    var p1 = $$('#11-1').prop('checked');
    var p2 = $$('#11-2').prop('checked');
    var p3 = $$('#11-3').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);

    if (p1 == true){
        resultado11++;
        console.log(resultado11);
    }
    else {
            console.log(resultado11);
            
    }

    if (p2 == true){
        resultado11++;
        console.log(resultado11);
    }
    else {
            console.log(resultado11);
            
    }

    if (p3 == true){
        resultado11++;
        console.log(resultado11);
    }
    else {
            console.log(resultado11);
            
    }
     
    if (resultado11 == total11) {
        $$('#Bien').show();
    }
    if (resultado11 < total11 && resultado11 != 0) {
        $$('#Regular').show();
    }
    if (resultado11 == 0) {
        $$('#Mal').show();
    }
}

