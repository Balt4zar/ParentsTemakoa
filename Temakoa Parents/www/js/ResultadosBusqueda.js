//These profiles are just examples and not real persons
////////////////////////////////////////////////////////////


var t0 = new Array ("Andres Plasencia", "45412", "901298392", "100","33453212","andres.plasencia@gmail.com");
var t1 = new Array ("Berta Flores", "46478", "28463784", "100","33456523","B4rtaflores@gmail.com");
var t2 = new Array ("Sandra Alvarez", "45412", "103849238", "120","334597076","sandralvarez@gmail.com");
var t3 = new Array ("Lizette Baltazar", "45417", "09834183", "100","33789034","Lizbaltazar@gmail.com");
var t4 = new Array ("Janet Castillo", "45412", "391287353", "75","34093423","Castillo.Janet@gmail.com");
var t5 = new Array ("Angel Orozco", "45415", "112357539", "100","33568650","AngelOrozco@gmail.com");
var t6 = new Array ("Salvador Flores", "46478", "128655632", "80","33562497","salv.flores@gmail.com");
var t7 = new Array ("Maria Tadeo", "46480", "293847283", "100","35753490","Tadeo.mary@gmail.com");
var t8 = new Array ("Duilio Castillo", "45416", "381927384", "90","34212343","CastilloDuili0@gmail.com");
var t9 = new Array("Emiliano Vilchis", "45413", "2918378278", "130", "33451087", "VilchisEmil@gmail.com");

///////////////////////////////////////////////////////////
var Nombre;
var CP;
var CD;
var Prc;
var Numero;
var Correo;


///////////////////////////////////////////////////////////

function Filtrar() {
    var CPInput = $$('#CP').val();
    var PrcInput = $$('#Prc').val();
    var i;

    for (i = 0; i <= 4; i++) {

    
        if (CPInput === t0[i]) {
            $$('#resultados').append("<li id='1' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>"+ t0[0] + "</br>" + t0[1] + "</br>" + t0[2] + "</br>" + t0[3] + "</br></li>");
            console.log(t0[i]);

        }
        if (CPInput === t1[i]) {
            $$('#resultados').append("<li id='2' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t1[0] + "</br>" + t1[1] + "</br>" + t1[2] + "</br>" + t[3] + "</br></li>");
            console.log(t1[i]);
           
        }
        if (CPInput === t2[i]) {
            $$('#resultados').append("<li id='3' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t2[0] + "</br>" + t2[1] + "</br>" + t2[2] + "</br>" + t2[3] + "</br></li>");
            console.log(t2[i]);

        }
        if (CPInput === t3[i]) {
            $$('#resultados').append("<li id='4' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t3[0] + "</br>" + t3[1] + "</br>" + t3[2] + "</br>" + t3[3] + "</br></li>");
            console.log(t3[i]);

        }
        if (CPInput === t4[i]) {
            $$('#resultados').append("<li id='5' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t4[0] + "</br>" + t4[1] + "</br>" + t4[2] + "</br>" + t4[3] + "</br></li>");
            console.log(t4[i]);

        }
        if (CPInput === t5[i]) {
            $$('#resultados').append("<li id='6' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t5[0] + "</br>" + t5[1] + "</br>" + t5[2] + "</br>" + t5[3] + "</br></li>");
            console.log(t5[i]);

        }
        if (CPInput === t6[i]) {
            $$('#resultados').append("<li id='7' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t6[0] + "</br>" + t6[1] + "</br>" + t6[2] + "</br>" + t6[3] + "</br></li>");
            console.log(t6[i]);

        }
        if (CPInput === t7[i]) {
            $$('#resultados').append("<li id='8' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t7[0] + "</br>" + t7[1] + "</br>" + t7[2] + "</br>" + t7[3] + "</br></li>");
            console.log(t7[i]);

        }
        if (CPInput === t8[i]) {
            $$('#resultados').append("<li id='9' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t8[0] + "</br>" + t8[1] + "</br>" + t8[2] + "</br>" + t8[3] + "</br></li>");
            console.log(t8[i]);

        }
        if (CPInput === t9[i]) {
            $$('#resultados').append("<li id='10' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t9[0] + "</br>" + t9[1] + "</br>" + t9[2] + "</br>" + t9[3] + "</br></li>");
            console.log(t9[i]);

        }

        $$('#1').once('click', function () {
            Nombre = t0[0];
            CP = t0[1];
            CD = t0[2];
            Prc = t0[3];
            Numero = t0[4];
            Correo = t0[5];

            
            $$('#1').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");


        })
        $$('#2').once('click', function () {

            Nombre = t1[0];
            CP = t1[1];
            CD = t1[2];
            Prc = t1[3];
            Numero = t1[4];
            Correo = t1[5];

            
            $$('#2').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#3').once('click', function () {

            Nombre = t2[0];
            CP = t2[1];
            CD = t2[2];
            Prc = t2[3];
            Numero = t2[4];
            Correo = t2[5];

            
            $$('#3').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#4').once('click', function () {

            Nombre = t3[0];
            CP = t3[1];
            CD = t3[2];
            Prc = t3[3];
            Numero = t3[4];
            Correo = t3[5];

            
            $$('#4').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#5').once('click', function () {

            Nombre = t4[0];
            CP = t4[1];
            CD = t4[2];
            Prc = t4[3];
            Numero = t4[4];
            Correo = t4[5];

            
            $$('#5').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#6').once('click', function () {

            Nombre = t5[0];
            CP = t5[1];
            CD = t5[2];
            Prc = t5[3];
            Numero = t5[4];
            Correo = t5[5];

            
            $$('#6').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#7').once('click', function () {

            Nombre = t6[0];
            CP = t6[1];
            CD = t6[2];
            Prc = t6[3];
            Numero = t6[4];
            Correo = t6[5];

            
            $$('#7').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#8').once('click', function () {

            Nombre = t7[0];
            CP = t7[1];
            CD = t7[2];
            Prc = t7[3];
            Numero = t7[4];
            Correo = t7[5];

            
            $$('#8').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#9').once('click', function () {

            Nombre = t8[0];
            CP = t8[1];
            CD = t8[2];
            Prc = t8[3];
            Numero = t8[4];
            Correo = t8[5];

            
            $$('#9').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })
        $$('#10').once('click', function () {

            Nombre = t9[0];
            CP = t9[1];
            CD = t9[2];
            Prc = t9[3];
            Numero = t9[4];
            Correo = t9[5];

            
            $$('#10').append("<li><div class='card'id='info' style='font-size:11px;'><label class='fas fa-user-plus' id='add'style=' color:#ba0556; float: left;'></label><l>" + Nombre + "</p><p>" + CP + "</p><p>" + CD + "</p><p>" + Prc + "</p><p>" + Numero + "</label><p>" + Correo + "</p> </div></li>");

        })

        //PRECIO

        if (PrcInput === t0[i]) {
            $$('#resultados').append("<li id='1' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t0[0] + "</br>" + t0[1] + "</br>" + t0[2] + "</br>" + t0[3] + "</br></li>");
            console.log(t0[i]);

        }
        if (PrcInput === t1[i]) {
            $$('#resultados').append("<li id='2' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t1[0] + "</br>" + t1[1] + "</br>" + t1[2] + "</br>" + t1[3] + "</br></li>");
            console.log(t1[i]);

        }
        if (PrcInput === t2[i]) {
            $$('#resultados').append("<li id='3' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t2[0] + "</br>" + t2[1] + "</br>" + t2[2] + "</br>" + t2[3] + "</br></li>");
            console.log(t2[i]);

        }
        if (PrcInput === t3[i]) {
            $$('#resultados').append("<li id='4' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t3[0] + "</br>" + t3[1] + "</br>" + t3[2] + "</br>" + t3[3] + "</br></li>");
            console.log(t3[i]);

        }
        if (PrcInput === t4[i]) {
            $$('#resultados').append("<li id='5' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t4[0] + "</br>" + t4[1] + "</br>" + t4[2] + "</br>" + t4[3] + "</br></li>");
            console.log(t4[i]);

        }
        if (PrcInput === t5[i]) {
            $$('#resultados').append("<li id='6' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t5[0] + "</br>" + t5[1] + "</br>" + t5[2] + "</br>" + t5[3] + "</br></li>");
            console.log(t5[i]);

        }
        if (PrcInput === t6[i]) {
            $$('#resultados').append("<li id='7' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t6[0] + "</br>" + t6[1] + "</br>" + t6[2] + "</br>" + t6[3] + "</br></li>");
            console.log(t6[i]);

        }
        if (PrcInput === t7[i]) {
            $$('#resultados').append("<li id='8' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t7[0] + "</br>" + t7[1] + "</br>" + t7[2] + "</br>" + t7[3] + "</br></li>");
            console.log(t7[i]);

        }
        if (PrcInput === t8[i]) {
            $$('#resultados').append("<li id='9' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t8[0] + "</br>" + t8[1] + "</br>" + t8[2] + "</br>" + t8[3] + "</br></li>");
            console.log(t8[i]);

        }
        if (PrcInput === t9[i]) {
            $$('#resultados').append("<li id='10' class='card' style='margin:4px; border-top-width:2px; border-bottom-width:1px; border-left-width:1px; border-right-width:1px; border-color:grey;'>" + t9[0] + "</br>" + t9[1] + "</br>" + t9[2] + "</br>" + t9[3] + "</br></li>");
            console.log(t9[i]);

        }

        
    }
}


function anadir() {

    $$('#add').css(
        'color', '#1fc665;');
    alert("Se ha notificado al usuario la solicitud. En cuanto se tenga respuesta le informaremos. Gracias.");

}