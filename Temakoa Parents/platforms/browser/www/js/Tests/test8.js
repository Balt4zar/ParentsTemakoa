// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var resultado8 = 0;
    var total8 = 4;


function evaluar() {
    var p1 = $$('#8-1').prop('checked');
    var p2 = $$('#8-2').prop('checked');
    var p3 = $$('#8-3').prop('checked');
    var p4 = $$('#8-4').prop('checked');

    //var fecha = $$("#react1").prop('checked');
    //console.log("Reactiivo 1 " + fecha);



    if (p1 == true){
        resultado8++;
        console.log(resultado8);
    }
    else {
            console.log(resultado8);
            
    }

    if (p2 == true){
        resultado8++;
        console.log(resultado8);
    }
    else {
            console.log(resultado8);
            
    }

    if (p3 == true){
        resultado8++;
        console.log(resultado8);
    }
    else {
            console.log(resultado8);
            
    }

    if (p4 == true){
        resultado8++;
        console.log(resultado8);
    }
    else {
            console.log(resultado8);
            
    }



    if (resultado8 == total8) {
        $$('#Bien').show();
    }
    else if (resultado8 <= (total8 / 2)) {
        $$('#Mal').show();
    }
    else if (resultado8 >= (total8 / 2) || resultado8 != total8) {
        $$('#Regular').show();
    }

}
