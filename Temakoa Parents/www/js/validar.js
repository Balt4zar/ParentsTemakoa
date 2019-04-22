function validar() {
    var $$ = Dom7;
    var nombre;
    var apellido;
    var correo;
    var confirmar;
    var contraseña;
    var expresion;

    nombre = $$('#nombre').val();
    apellido = $$('#apellido').val();
    correo = $$('#correo').val();
    contraseña = $$('#contraseña').val();
    confirmar = $$('#confirmar').val();

    if (nombre === "") {
        alert("El nombre está vacío");
    }
}
