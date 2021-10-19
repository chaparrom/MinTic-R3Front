/**
 * Rutinas para acceder información Clientes
 */
function consultarCliente(){
    $("#resultadoCliente").empty();
    $("#idCliente").val("");
    $("#name").val("");
    $("#email").val("");
    $("#age").val("");
    $("#password").val("");
    $.ajax({
        url:'http://132.226.250.48:8080/api/Client/all',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaCliente="<table border='1'>";
            tablaCliente+="<tr>";
            tablaCliente+="<th> Código </th>";
            tablaCliente+="<th> Nombre </th>";
            tablaCliente+="<th> Correo Electrónico </th>";
            tablaCliente+="<th> Edad </th>";
            tablaCliente+="</tr>";

            for(i=0;i<respuesta.length;i++){
                tablaCliente+="<tr>";
                tablaCliente+="<td align='center' style='width: 45px'>" + respuesta[i].idClient + "</td>";
                tablaCliente+="<td style='width: 210px'>" + respuesta[i].name + "</td>";
                tablaCliente+="<td style='width: 210px'>" + respuesta[i].email + "</td>";
                tablaCliente+="<td align='center' style='width: 40px'>" + respuesta[i].age + "</td>";
                tablaCliente+="</tr>";
            }
            tablaCliente+="</table>";
            $("#resultadoCliente").append(tablaCliente);
        }
    });
}
function adicionarCliente(){
    if ($("#name").val() != "" && $("#email").val() != "" && $("#age").val() != "" && $("#password").val() != "") {
        let dataJSON = {
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val(),
            password:$("#password").val()
            
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"http://132.226.250.48:8080/api/Client/save",
            contentType: "application/json; charset=utf-8",
            type:"POST",
            data:dataToSend,
            datatype:"JSON",
            success:function(respuesta){
                consultarCliente();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}
/**
 * Rutinas para acceder información Cabañas
 */
 function consultarCabaña(){
    $("#resultadoCabaña").empty();
    $("#idCabaña").val("");
    $("#brand").val("");
    $("#rooms").val("");
    $("#description").val("");
    $("#name1").val("");
    $.ajax({
        url:'http://132.226.250.48:8080/api/Cabin/all',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaCabaña="<table border='1'>";
            tablaCabaña+="<tr>";
            tablaCabaña+="<th> Código </th>";
            tablaCabaña+="<th> Nombre </th>";
            tablaCabaña+="<th> Tipo </th>";
            tablaCabaña+="<th> Habitaciones </th>";
            tablaCabaña+="<th> Descripcion </th>";
            tablaCabaña+="</tr>";

            for(i=0;i<respuesta.length;i++){
                tablaCabaña+="<tr>";
                tablaCabaña+="<td align='center' style='width: 45px'>" + respuesta[i].id + "</td>";
                tablaCabaña+="<td style='width: 200px'>" + respuesta[i].name + "</td>";
                tablaCabaña+="<td style='width: 210px'>" + respuesta[i].brand + "</td>";
                tablaCabaña+="<td align='center' style='width: 80px'>" + respuesta[i].rooms + "</td>";
                tablaCabaña+="<td style='width: 200px'>" + respuesta[i].description + "</td>";
                tablaCabaña+="</tr>";
            }
            tablaCabaña+="</table>";
            $("#resultadoCabaña").append(tablaCabaña);
        }
    });
}
function adicionarCabaña(){
    if ($("#brand").val() != "" && $("#rooms").val() != "" && $("#description").val() != "" && $("#name1").val() != "") {
        let dataJSON = {
            brand:$("#brand").val(),
            rooms:$("#rooms").val(),
            description:$("#description").val(),
            name:$("#name1").val()
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"http://132.226.250.48:8080/api/Cabin/save",
            contentType: "application/json; charset=utf-8",
            type:"POST",
            data:dataToSend,
            datatype:"JSON",
            success:function(respuesta){
                consultarCabaña();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}
/**
 * Rutinas para acceder información Mensajes
 */
 function consultarMensaje(){
    $("#resultadoMensaje").empty();
    $("#idMensaje").val("");
    $("#messagetext").val("");
    $.ajax({
        url:'http://132.226.250.48:8080/api/Message/all',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaMensaje="<table border='1'>";
            tablaMensaje+="<tr>";
            tablaMensaje+="<th> Mensaje </th>";

            for(i=0;i<respuesta.length;i++){
                tablaMensaje+="<tr>";
                tablaMensaje+="<td style='width: 600px'>" + respuesta[i].messageText + "</td>";
                tablaMensaje+="</tr>";
            }
            tablaMensaje+="</table>";
            $("#resultadoMensaje").append(tablaMensaje);
        }
    });
}
function adicionarMensaje(){
    if ($("#messagetext").val() != "") {
        let dataJSON = {
            messageText:$("#messagetext").val()
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"http://132.226.250.48:8080/api/Message/save",
            contentType: "application/json; charset=utf-8",
            type:"POST",
            data:dataToSend,
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                consultarMensaje();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}
/**
 * Rutinas para acceder información Categoría
 */
function consultarCategoria(){
    $("#resultadoCategoria").empty();
    $("#idCategoria").val("");
    $("#name2").val("");
    $("#description2").val("");
    $.ajax({
        url:'http://132.226.250.48:8080/api/Category/all',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaCategoria="<table border='1'>";
            tablaCategoria+="<tr>";
            tablaCategoria+="<th> Nombre </th>";
            tablaCategoria+="<th> Descripción </th>";

            for(i=0;i<respuesta.length;i++){
                tablaCategoria+="<tr>";
                tablaCategoria+="<td style='width: 100px'>" + respuesta[i].name + "</td>";
                tablaCategoria+="<td style='width: 205px'>" + respuesta[i].description + "</td>";
                tablaCategoria+="</tr>";
            }
            tablaCategoria+="</table>";
            $("#resultadoCategoria").append(tablaCategoria);
        }
    });
}
function adicionarCategoria(){
    if ($("#name2").val() != "" && $("#description2").val() != "") {
        let dataJSON = {
            name:$("#name2").val(),
            description:$("#description2").val(),
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:'http://132.226.250.48:8080/api/Category/save',
            contentType: "application/json; charset=utf-8",
            type:"POST",
            data:dataToSend,
            datatype:"JSON",
            success:function(respuesta){
                consultarCategoria();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}
/**
 * Rutinas para acceder información Reservación
 */
function consultarReservacion(){
    $("#resultadoReservacion").empty();
    $("#idReservacion").val("");
    $("#startDate").val("");
    $("#endDate").val("");
    $("#status").val("");
    $("#score").val("");
    $.ajax({
        url:'http://132.226.250.48:8080/api/Reservation/all',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaReservacion="<table border='1'>";
            tablaReservacion+="<tr>";
            tablaReservacion+="<th> Código </th>";
            tablaReservacion+="<th> Fecha Inicio </th>";
            tablaReservacion+="<th> Fecha Devolucion </th>";
            tablaReservacion+="<th> Estado </th>";
            tablaReservacion+="<th> Calificación </th>";

            for(i=0;i<respuesta.length;i++){
                var start = new Date(respuesta[i].startDate);
                var sY = start.getFullYear();
                var sM = start.getMonth() + 1;
                var sD = start.getDate() + 1;
                var st = sY + "-" + sM + "-" + sD;
                var end = new Date(respuesta[i].devolutionDate);
                var eY = end.getFullYear();
                var eM = end.getMonth() + 1;
                var eD = end.getDate() + 1;
                var en = eY + "-" + eM + "-" + eD;

                tablaReservacion+="<tr>";
                tablaReservacion+="<td align='center' style='width: 45px'>" + respuesta[i].idReservation + "</td>";
                tablaReservacion+="<td align='center' style='width: 150px'>" + st + "</td>";
                tablaReservacion+="<td align='center' style='width: 150px'>" + en + "</td>";
                tablaReservacion+="<td style='width: 100px'>" + respuesta[i].status + "</td>";
                tablaReservacion+="<td style='width: 100px'>" + respuesta[i].score + "</td>";
                tablaReservacion+="</tr>";
            }
            tablaReservacion+="</table>";
            $("#resultadoReservacion").append(tablaReservacion);
        }
    });
}
function adicionarReservacion(){
    if ($("#startDate").val() != "" && $("#endDate").val() != "" && $("status").val() != "" && $("#score").val() != "") {
        let dataJSON = {
            startDate:$("#startDate").val(),
            devolutionDate:$("#endDate").val(),
            status:$("#status").val(),
            score:$("#score").val()
        };
        console.log($("#startDate").val());
        console.log(dataJSON);
        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"http://132.226.250.48:8080/api/Reservation/save",
            contentType: "application/json; charset=utf-8",
            type:"POST",
            data:dataToSend,
            datatype:"JSON",
            success:function(respuesta){
                consultarReservacion();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}