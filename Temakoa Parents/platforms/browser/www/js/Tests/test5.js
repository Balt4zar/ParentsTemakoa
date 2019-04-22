// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado5 = 0;
    var total5 = 6;


function evaluar() {
    var p1 = $$('#5-1').prop('checked');
    var p2 = $$('#5-2').prop('checked');
    var p3 = $$('#5-3').prop('checked');
    var p4 = $$('#5-4').prop('checked');
    var p5 = $$('#5-5').prop('checked');
    var p6 = $$('#5-6').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado5++;
        console.log(resultado5);
    }
    else {
            console.log(resultado5);
            
    }

    if (p2 == true){
        resultado5++;
        console.log(resultado5);
    }
    else {
            console.log(resultado5);
            
    }

    if (p3 == true){
        resultado5++;
        console.log(resultado5);
    }
    else {
            console.log(resultado5);
            
    }

    if (p4 == true){
        resultado5++;
        console.log(resultado5);
    }
    else {
            console.log(resultado5);
            
    }

    if (p5 == true){
        resultado5++;
        console.log(resultado5);
    }
    else {
            console.log(resultado5);
            
    }

    if (p6 == true){
        resultado5++;
        console.log(resultado5);
    }
    else {
            console.log(resultado5);
            
    }

    if (resultado5 == total5) {
        $$('#Bien').show();
    }
    else if (resultado5 <= (total5 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado5 >= (total5 / 2) || resultado5 != total5) {
        $$('#Regular').show();
    }

}
