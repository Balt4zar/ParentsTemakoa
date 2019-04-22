// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

function EvaluarPrimaria() {

var TotalCogPri = 22;
var TotalPmPri = 8;
var TotalPsPri = 8;

//Cognoscitivo

    var CPri1 = parseInt($$('#CPri1').val());
    var CPri2 = parseInt($$('#CPri2').val());
    var CPri3 = parseInt($$('#CPri3').val());
    var CPri4 = parseInt($$('#CPri4').val());
    var CPri5 = parseInt($$('#CPri5').val());
    var CPri6 = parseInt($$('#CPri6').val());
    var CPri7 = parseInt($$('#CPri7').val());
    var CPri8 = parseInt($$('#CPri8').val());
    var CPri9 = parseInt($$('#CPri9').val());
    var CPri10 = parseInt($$('#CPri10').val());
    var CPri11 = parseInt($$('#CPri11').val());
    var CPri12 = parseInt($$('#CPri12').val());
    var CPri13 = parseInt($$('#CPri13').val());
    var CPri14 = parseInt($$('#CPri14').val());
    var CPri15 = parseInt($$('#CPri15').val());
    var CPri16 = parseInt($$('#CPri16').val());
    var CPri17 = parseInt($$('#CPri17').val());
    var CPri18 = parseInt($$('#CPri18').val());
    var CPri19 = parseInt($$('#CPri19').val());
    var CPri20 = parseInt($$('#CPri20').val());
    var CPri21 = parseInt($$('#CPri21').val());
    var CPri22 = parseInt($$('#CPri22').val());

    //Psicomotriz
    var PmPri1 = parseInt($$('#PmPri1').val());
    var PmPri2 = parseInt($$('#PmPri2').val());
    var PmPri3 = parseInt($$('#PmPri3').val());
    var PmPri4 = parseInt($$('#PmPri4').val());
    var PmPri5 = parseInt($$('#PmPri5').val());
    var PmPri6 = parseInt($$('#PmPri6').val());
    var PmPri7 = parseInt($$('#PmPri7').val());
    var PmPri8 = parseInt($$('#PmPri8').val());

    //Psicosocial
    var PsPri1 = parseInt($$('#PsPri1').val());
    var PsPri2 = parseInt($$('#PsPri2').val());
    var PsPri3 = parseInt($$('#PsPri3').val());
    var PsPri4 = parseInt($$('#PsPri4').val());
    var PsPri5 = parseInt($$('#PsPri5').val());
    var PsPri6 = parseInt($$('#PsPri6').val());
    var PsPri7 = parseInt($$('#PsPri7').val());
    var PsPri8 = parseInt($$('#PsPri8').val());

var ResultadoCogPrimaria =CPri1 + CPri2 + CPri3 + CPri4 + CPri5 + CPri6 + CPri7 + CPri8 + CPri9 + CPri10 + CPri11 + CPri12 + CPri13 + CPri14 + CPri15 + CPri16 + CPri17 + CPri18 + CPri19 + CPri20 + CPri21 + CPri22;
var ResultadoPmPrimaria =PmPri1 + PmPri2 + PmPri3 + PmPri4 + PmPri5 + PmPri6 + PmPri7 + PmPri8;
var ResultadoPsPrimaria =PsPri1 + PsPri2 + PsPri3 + PsPri4 + PsPri5 + PsPri6 + PsPri7 + PsPri8;



    $$("#PrimariaRes").show();
    console.log(ResultadoCogPrimaria);
    console.log(ResultadoPmPrimaria);
    console.log(ResultadoPsPrimaria);

    //COG
    if (ResultadoCogPrimaria === TotalCogPri) {

        $$('#CogPriBien').show();
    }
     else if (ResultadoCogPrimaria >= (TotalCogPri / 2)) {

        $$('#CogPriRegular').show();
    }
     else if (ResultadoCogPrimaria <= (TotalCogPri / 2)) {

        $$('#CogPriMal').show();
    }

    //PM
     if (ResultadoPmPrimaria === TotalPmPri) {

        $$('#PmPriBien').show();
    }
     else if (ResultadoPmPrimaria >= (TotalPmPri / 2)) {

        $$('#PmPriRegular').show();
    }
     else if (ResultadoPmPrimaria <= (TotalPmPri / 2)) {

        $$('#PmPriMal').show();
    }

    //PS
     if (ResultadoPsPrimaria === TotalPsPri) {

        $$('#PsPriBien').show();
    }
    else if (ResultadoPsPrimaria >= (TotalPsPri / 2) || ResultadoPsPrimaria == (TotalPsPri/2)) {

        $$('#PsPriRegular').show();
    }
     else if (ResultadoPsPrimaria <= (TotalPsPri / 2)) {

        $$('#PsPriMal').show();
    }
}