<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>


</head>
<body>
    <?php>

    try{

    $base=newPDO("mysql:host=localhost; dbname=temakoa", "root","Teamako4");
    $base->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)

    $sql="SELECT * FROM USUARIOS_PASS WHERE NOMBRE= :login AND CONTRASEÑA= :password";

    $resultado=$base->prepare($sql);

    $login=htmlentities (addslashes($_POST["login"]));

    $password=htmlentities (addslashes($_POST["password"]));

    $resultado->bindValue(":login", $login);
    $resultado->bindValue(":passsword", password);

    $resultado->execute ();

    $numero_registro=$resultado->rowCount();

    if($numero_registro !=0){

	session_start();

	$_SESSION["usuario"]=$_POST["login"];

   header("Location:index.html");
    
    }else{
    header("location:login.html");

    
    }



    }catch(exception $e){


    die("Error: ".$e->getMessage());



    }



    ?>

</body>
</html>