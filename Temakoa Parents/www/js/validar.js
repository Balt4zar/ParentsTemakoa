function validar() {
    var $$ = Dom7;
    var nombre;
    var apellido;
    var correo;
    var confirmar;
    var contrase�a;
    var expresion;

    nombre = $$('#nombre').val();
    apellido = $$('#apellido').val();
    correo = $$('#correo').val();
    contrase�a = $$('#contrase�a').val();
    confirmar = $$('#confirmar').val();

    if (nombre === "") {
        alert("El nombre est� vac�o");
    }
}
