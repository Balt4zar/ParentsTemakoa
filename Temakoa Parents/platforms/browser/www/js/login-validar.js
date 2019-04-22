function validar() {

    var $$ = Dom7;
    var nombre;
    var correo;
    var contraseña;
    var expresion;
    expresion = /\w+@\+\.+[a-z]/;

    nombre = $$('#UsuarioLogin').val();
    correo = $$('#CorreoLogin').val();
    contraseña = $$('#ContraseñaLogin').val();

    if (nombre === "") {
        alert("El nombre está vacío");
        return false;
    }
    else if (apellido === "") {
        alert("El apellido está vacío");
        return false;
    }
    else if (correo === "") {
        alert("El correo electrónico está vacío")
        return false;
    }
    else if (!expresion.test(correo)) {
        alert("El correo no es válido")
        return false;
    }
    else if (contraseña === "") {
        alert("Introduce tu contraseña");
        return false;

    }
    else if (nombre.lenght > 25) {
        alert("El nombre es demasiado largo");
        return false;
    }



}
