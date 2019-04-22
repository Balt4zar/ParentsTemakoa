// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado6 = 0;
    var total6 = 5;


function evaluar() {
    var p1 = $$('#6-1').prop('checked');
    var p2 = $$('#6-2').prop('checked');
    var p3 = $$('#6-3').prop('checked');
    var p4 = $$('#6-4').prop('checked');
    var p5 = $$('#6-5').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado6++;
        console.log(resultado6);
    }
    else {
            console.log(resultado6);
            
    }

    if (p2 == true){
        resultado6++;
        console.log(resultado6);
    }
    else {
            console.log(resultado6);
            
    }

    if (p3 == true){
        resultado6++;
        console.log(resultado6);
    }
    else {
            console.log(resultado6);
            
    }

    if (p4 == true){
        resultado6++;
        console.log(resultado6);
    }
    else {
            console.log(resultado6);
            
    }

    if (p5 == true){
        resultado6++;
        console.log(resultado6);
    }
    else {
            console.log(resultado6);
            
    }

    if (resultado6 == total6) {
        $$('#Bien').show();
    }
    else if (resultado6 <= (total6 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado6 >= (total6 / 2) || resultado6 != total6) {
        $$('#Regular').show();
    }

}
