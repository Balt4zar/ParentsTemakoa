
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

function EvaluaPre() {

var TotalCogPre = 22;
var TotalPmPre = 8;
var TotalPsPre = 8;

 //Cognoscitivo

    var CPre1 = parseInt($$('#CPre1').val());
    var CPre2 = parseInt($$('#CPre2').val());
    var CPre3 = parseInt($$('#CPre3').val());
    var CPre4 = parseInt($$('#CPre4').val());
    var CPre5 = parseInt($$('#CPre5').val());
    var CPre6 = parseInt($$('#CPre6').val());
    var CPre7 = parseInt($$('#CPre7').val());
    var CPre8 = parseInt($$('#CPre8').val());
    var CPre9 = parseInt($$('#CPre9').val());
    var CPre10 = parseInt($$('#CPre10').val());
    var CPre11 = parseInt($$('#CPre11').val());
    var CPre12 = parseInt($$('#CPre12').val());
    var CPre13 = parseInt($$('#CPre13').val());
    var CPre14 = parseInt($$('#CPre14').val());
    var CPre15 = parseInt($$('#CPre15').val());
    var CPre16 = parseInt($$('#CPre16').val());
    var CPre17 = parseInt($$('#CPre17').val());
    var CPre18 = parseInt($$('#CPre18').val());
    var CPre19 = parseInt($$('#CPre19').val());
    var CPre20 = parseInt($$('#CPre20').val());
    var CPre21 = parseInt($$('#CPre21').val());
    var CPre22 = parseInt($$('#CPre22').val());

    //Psicomotor
    var PmPre1 = parseInt($$('#PmPre1').val());
    var PmPre2 = parseInt($$('#PmPre2').val());
    var PmPre3 = parseInt($$('#PmPre3').val());
    var PmPre4 = parseInt($$('#PmPre4').val());
    var PmPre5 = parseInt($$('#PmPre5').val());
    var PmPre6 = parseInt($$('#PmPre6').val());
    var PmPre7 = parseInt($$('#PmPre7').val());
    var PmPre8 = parseInt($$('#PmPre8').val());

    //Psicosocial
    var PsPre1 = parseInt($$('#PsPre1').val());
    var PsPre2 = parseInt($$('#PsPre2').val());
    var PsPre3 = parseInt($$('#PsPre3').val());
    var PsPre4 = parseInt($$('#PsPre4').val());
    var PsPre5 = parseInt($$('#PsPre5').val());
    var PsPre6 = parseInt($$('#PsPre6').val());
    var PsPre7 = parseInt($$('#PsPre7').val());
    var PsPre8 = parseInt($$('#PsPre8').val());

    console.log($$('#CPre1').val());

var ResultadoCogPre = CPre1 + CPre2 + CPre3 + CPre4 + CPre5 + CPre6 + CPre7 + CPre8 + CPre9 + CPre10 + CPre11 + CPre12 + CPre13 + CPre14 + CPre15 + CPre16 + CPre17 + CPre18 + CPre19 + CPre20 + CPre21 + CPre22;
var ResultadoPmPre = PmPre1 + PmPre2 + PmPre3 + PmPre4 + PmPre5 + PmPre6 + PmPre7 + PmPre8;
var ResultadoPsPre = PsPre1 + PsPre2 + PsPre3 + PsPre4 + PsPre5 + PsPre6 + PsPre7 + PsPre8;


    $$("#PreescolarRes").show();
   
    console.log(ResultadoCogPre);
    console.log(ResultadoPmPre);
    console.log(ResultadoPsPre);
    //Preescolar

 
    //COG
    if (ResultadoCogPre === TotalCogPre) {
        $$('#CogPreBien').show();
        
    }
    else if (ResultadoCogPre >= (TotalCogPre / 2)) {

        $$('#CogPreRegular').show();
    }
    else if (ResultadoCogPre <= (TotalCogPre / 2)) {

        $$('#CogPreMal').show();
    }

    //PM
     if (ResultadoPmPre === TotalPmPre) {

        $$('#PmPreBien').show();
    }
     else if (ResultadoPmPre >= (TotalPmPre / 2)) {

        $$('#PmPreRegular').show();
    }
    else if (ResultadoPmPre <= (TotalPmPre / 2)) {

        $$('#PmPreMal').show();
    }

    //PS
     if (ResultadoPsPre === TotalPsPre) {
        $$('#PsPreBien').show();
    }
    else if (ResultadoPsPre >= (TotalPsPre / 2) || ResultadoPsPre == (TotalPsPre/2)) {
        $$('#PsPreRegular').show();
    }
    else if (ResultadoPsPre <= (TotalPsPre / 2)) {

        $$('#PsPreMal').show();
    }

}
