function validar() {
    var $$ = Dom7;
    var nombre;
    var apellido;
    var correo;
    var confirmar;
    var contrase�a;
    var expresion;
    expresion = /\w+@\+\.+[a-z]/;

    nombre = $$('#nombre').val();
    apellido = $$('#apellido').val();
    correo = $$('#correo').val();
    contrase�a = $$('#contrase�a').val();
    confirmar = $$('#confirmar').val();

    if (nombre === "") {
        alert("El nombre est� vac�o");
        return false;
    }
    else if (apellido === "") {
        alert("El apellido est� vac�o");
        return false;
    }
    else if (correo === "") {
        alert("El correo electr�nico est� vac�o")
        return false;
    }
    else if (!expresion.test(correo)) {
        alert("El correo no es v�lido")
        return false;
    }
    else if (contrase�a === "") {
        alert("Introduce tu contrase�a");
        return false;

    }
    else if (confirmar != contrase�a) {
        alert("Las contrase�as no coinciden");
        return false;
    }
    else if (nombre.lenght > 25) {
        alert("El nombre es demasiado largo");
        return false;
    }
    


}

