// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado10 = 0;
 var total10 = 4;


function evaluar() {
    var p1 = $$('#10-1').prop('checked');
    var p2 = $$('#10-2').prop('checked');
    var p3 = $$('#10-3').prop('checked');
    var p4 = $$('#10-4').prop('checked');


    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado10++;
        console.log(resultado10);
    }
    else {
            console.log(resultado10);
            
    }

    if (p2 == true){
        resultado10++;
        console.log(resultado10);
    }
    else {
            console.log(resultado10);
            
    }

    if (p3 == true){
        resultado10++;
        console.log(resultado10);
    }
    else {
            console.log(resultado10);
            
    }

    if (p4 == true){
        resultado10++;
        console.log(resultado10);
    }
    else {
            console.log(resultado10);
            
    }


    if (resultado10 == total10) {
        $$('#Bien').show();
    }
    else if (resultado10 <= (total10 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado10 >= (total10 / 2) || resultado10 != total10) {
        $$('#Regular').show();
    }

}
