//List js



var fechas = new Array();

function agregaFecha() {
    var fecha = $$("#date_val").val();

    if (fecha == "") {
        alert("¡Hey! ¡Falta la fecha!");
        console.log(">:c");
    }
    else {
        console.log("Fecha " + fecha);

        fechas.push(fecha);
        console.log("Fechas " + fechas.length);
        $$("#div_salida").html("");

        for (var i = 0; i < fechas.length; i++) {
            $$("#div_salida").append("<li id='" + [i] + "'>" + fechas[i] + " " + "<i type='button' class='fas fa-times' style='color:red; float:right;' name='eliminar' id='" + [i] + "'  onClick='eliminarFechas(this.id)'></i></li>");
        }
        $$("#date_val").val("");
    }
}

function eliminarFechas(X) {

    fechas.splice(X, 1);
    console.log(fechas);
    $$("#div_salida").html("");

    for (var i = 0; i < fechas.length; i++) {
        $$("#div_salida").append("<li id='" + [i] + "'>" + fechas[i] + " " + "<i type='button' class='fas fa-times' style='color:red; float:right;' name='eliminar' id='" + [i] + "' onClick='eliminarFechas(this.id)'/></i></li>");
    }
}


//Editar

function Editar(){
    $$('#Guardarbtn').show();
    $$('#Editarbtn').hide();
    $$('#NombreYApellido').prop("disabled", false);
    $$('#NombreYApellido').removeAttr('placeholder');
    $$('#CodigoPostal').prop("disabled", false);
    $$('#CodigoPostal').removeAttr('placeholder');

    console.log("Ora compa :3");
}


//Guardar
function Guardar() {
    $$('#Guardarbtn').hide();
    $$('#Editarbtn').show();
    $$('#NombreYApellido').prop("disabled", true);
    $$('#CodigoPostal').prop("disabled", true);
    console.log($$('#NombreYApellido').val());
    console.log($$('#CodigoPostal').val());


}