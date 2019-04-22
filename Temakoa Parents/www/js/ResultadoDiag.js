var $$ = Dom7;

function mostrarResultado() {

    //Primaria
    if (ResultadoCogPrimaria === 0 && ResultadoPmPrimaria === 0 && ResultadoPsPrimaria === 0) {
        $$('#PrimariaRes').hide();
        console.log("No hay nada amiko");
    }
  

    //COG
    else if (ResultadoCogPrimaria === TotalCogPri) {

        $$('#CogPriBien').show();
    }
    else if (ResultadoCogPrimaria >= (TotalCogPri / 2)) {

        $$('#CogPriRegular').show();
    }
    else if (ResultadoCogPrimaria <= (TotalCogPri / 2)) {

        $$('#CogPriMal').show();
    }

    //PM
    else if (ResultadoPmPrimaria === TotalPmPri) {

        $$('#PmPriBien').show();
    }
    else if (ResultadoPmPrimaria >= (TotalPmPri / 2)) {

        $$('#PmPriRegular').show();
    }
    else if (ResultadoPmPrimaria <= (TotalPmPri / 2)) {

        $$('#PmPriMal').show();
    }

    //PS
    else if (ResultadoPsPrimaria === TotalPsPri) {

        $$('#PsPriBien').show();
    }
    else if (ResultadoPsPrimaria >= (TotalPsPri / 2)) {

        $$('#PsPriRegular').show();
    }
    else if (ResultadoPsPrimaria <= (TotalPsPri / 2)) {

        $$('#PsPriMal').show();
    }

//Preescolar

    else if (ResultadoCogPre === 0 && ResultadoPmPre === 0 && ResultadoPsPre === 0) {
        $$('#PreescolarRes').hide();
        console.log("Nada por acá amiwo");
    }

   

    //COG
    else if (ResultadoCogPre === TotalCogPre) {
        $$('#CogPreBien').show();
    }
    else if (ResultadoCogPre >= (TotalCogPre / 2)) {

        $$('#CogPreRegular').show();
    }
    else if (ResultadoCogPre <= (TotalCogPre / 2)) {

        $$('#CogPreMal').show();
    }

    //PM
    else if (ResultadoPmPre === TotalPmPre) {

        $$('#PmPreBien').show();
    }
    else if (ResultadoPmPre >= (TotalPmPre / 2)) {

        $$('#PmPreRegular').show();
    }
    else if (ResultadoPmPre <= (TotalPmPre / 2)) {

        $$('#PmPreMal').show();
    }

    //PS
    else if (ResultadoPsPre === TotalPsPre) {

        $$('#PsPreBien').show();
    }

    else if (ResultadoPsPre >= (TotalPsPre / 2)) {
        $$('#PsPreRegular').show();
    }
    else if (ResultadoPsPre <= (TotalPsPre / 2)) {

        $$('#PsPreMal').show();
    }


}

