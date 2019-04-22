// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado3 = 0;
    var total3 = 6;


function evaluar() {
    var p1 = $$('#3-1').prop('checked');
    var p2 = $$('#3-2').prop('checked');
    var p3 = $$('#3-3').prop('checked');
    var p4 = $$('#3-4').prop('checked');
    var p5 = $$('#3-5').prop('checked');
    var p6 = $$('#3-6').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado3++;
        console.log(resultado3);
    }
    else {
            console.log(resultado3);
            
    }

    if (p2 == true){
        resultado3++;
        console.log(resultado3);
    }
    else {
            console.log(resultado3);
            
    }

    if (p3 == true){
        resultado3++;
        console.log(resultado3);
    }
    else {
            console.log(resultado3);
            
    }

    if (p4 == true){
        resultado3++;
        console.log(resultado3);
    }
    else {
            console.log(resultado3);
            
    }

    if (p5 == true){
        resultado3++;
        console.log(resultado3);
    }
    else {
            console.log(resultado3);
            
    }

    if (p6 == true){
        resultado3++;
        console.log(resultado3);
    }
    else {
            console.log(resultado3);
            
    }

    if (resultado3 == total3) {
        $$('#Bien').show();
    }
    else if (resultado3 <= (total3 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado3 >= (total3 / 2) || resultado3 != total3) {
        $$('#Regular').show();
    }

}
