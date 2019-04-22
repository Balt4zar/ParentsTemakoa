function validar() {
    var $$ = Dom7;
    var nombre;
    var apellido;
    var correo;
    var confirmar;
    var contraseña;
    var expresion;
    expresion = /\w+@\+\.+[a-z]/;

    nombre = $$('#nombre').val();
    apellido = $$('#apellido').val();
    correo = $$('#correo').val();
    contraseña = $$('#contraseña').val();
    confirmar = $$('#confirmar').val();

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
    else if (confirmar != contraseña) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    else if (nombre.lenght > 25) {
        alert("El nombre es demasiado largo");
        return false;
    }
    


}

