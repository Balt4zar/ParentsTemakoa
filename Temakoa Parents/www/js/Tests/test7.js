// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado7 = 0;
    var total7 = 5;


function evaluar() {
    var p1 = $$('#7-1').prop('checked');
    var p2 = $$('#7-2').prop('checked');
    var p3 = $$('#7-3').prop('checked');
    var p4 = $$('#7-4').prop('checked');
    var p5 = $$('#7-5').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado7++;
        console.log(resultado7);
    }
    else {
            console.log(resultado7);
            
    }

    if (p2 == true){
        resultado7++;
        console.log(resultado7);
    }
    else {
            console.log(resultado7);
            
    }

    if (p3 == true){
        resultado7++;
        console.log(resultado7);
    }
    else {
            console.log(resultado7);
            
    }

    if (p4 == true){
        resultado7++;
        console.log(resultado7);
    }
    else {
            console.log(resultado7);
            
    }

    if (p5 == true){
        resultado7++;
        console.log(resultado7);
    }
    else {
            console.log(resultado7);
            
    }


    if (resultado7 == total7) {
        $$('#Bien').show();
    }
    else if (resultado7 <= (total7 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado7 >= (total7 / 2) || resultado7 != total7) {
        $$('#Regular').show();
    }

}
