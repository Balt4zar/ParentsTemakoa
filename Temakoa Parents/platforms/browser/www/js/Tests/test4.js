// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado4 = 0;
    var total4 = 5;


function evaluar() {
    var p1 = $$('#4-1').prop('checked');
    var p2 = $$('#4-2').prop('checked');
    var p3 = $$('#4-3').prop('checked');
    var p4 = $$('#4-4').prop('checked');
    var p5 = $$('#4-5').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado4++;
        console.log(resultado4);
    }
    else {
            console.log(resultado4);
            
    }

    if (p2 == true){
        resultado4++;
        console.log(resultado4);
    }
    else {
            console.log(resultado4);
            
    }

    if (p3 == true){
        resultado4++;
        console.log(resultado4);
    }
    else {
            console.log(resultado4);
            
    }

    if (p4 == true){
        resultado4++;
        console.log(resultado4);
    }
    else {
            console.log(resultado4);
            
    }

    if (p5 == true){
        resultado4++;
        console.log(resultado4);
    }
    else {
            console.log(resultado4);
            
    }

    if (resultado4 == total4) {
        $$('#Bien').show();
    }
    else if (resultado4 <= (total4 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado4 >= (total4 / 2) || resultado4 != total4) {
        $$('#Regular').show();
    }

}
