// Inicialize o Firebase
var config = {
    apiKey: "AIzaSyDogrE49NV3trk_lItcvx0cDxclo65WDes",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:cf89ff2f2175de389f6321",
    measurementId: "290738945"
};

firebase.initializeApp(config);
firebase.analytics();

var database = firebase.database();

var ultimoIndice = 0;

// Obter dados
firebase.database().ref('Usuarios/').on('value', function(snapshot) {
    var value = snapshot.val();
    var htmls = [];

    $.each(value, function(index, value) {
        if (value) {
            htmls.push('<tr>\
                        <td>' + value.nome + '</td>\
                        <td>' + value.email + '</td>\
                        <td><button data-toggle="modal" data-target="#atualizar-modal" class="btn btn-info atualizarDado" data-id="' + index + '">Atualizar</button>\
                            <button data-toggle="modal" data-target="#remover-modal"  class="btn btn-danger removerDados" data-id="' + index + '">Deletar</button></td>\
                        </tr>');
        }
        ultimoIndice = index;
    });
    $('#tbody').html(htmls);
    $("#enviarUsuario").removeClass('desabled');
});

// Add Data
$('#enviarUsuario').on('click', function() {
    var values = $("#addUsuario").serializeArray();

    var nome = values[0].value;
    var email = values[1].value;
    var usuarioID = ultimoIndice + 1;

    console.log(values);

    firebase.database().ref('Usuarios/' + usuarioID).set({
        nome: nome,
        email: email,
    });

    // Reatribuir o valor ultimoID
    ultimoIndice = usuarioID;
    $("#addUsuario input").val("");
});


// Dados de atualização
var atualizarID = 0;
$('body').on('click', '.atualizarDado', function() {
    atualizarID = $(this).attr('data-id');
    firebase.database().ref('Usuarios/' + atualizarID).on('value', function(snapshot) {
        var values = snapshot.val();
        var atualizarDado = '<div class="form-group">\
                                <label for="nome" class="col-md-12 col-form-label">Nome</label>\
                                <div class="col-md-12">\
                                    <input id="nome" type="text" class="form-control" name="nome" value="' + values.nome + '" required autofocus>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="email" class="col-md-12 col-form-label">Email</label>\
                                <div class="col-md-12">\
                                    <input id="email" type="text" class="form-control" name="email" value="' + values.email + '" required autofocus>\
                                </div>\
                            </div>';

        $('#atualizarBody').html(atualizarDado);
    });
});

$('.atualizarUsuario').on('click', function() {
    var values = $(".usuarios-atualizam-modelo-registro").serializeArray();
    var dadosPostagem = {
        nome: values[0].value,
        email: values[1].value,
    };

    var atualizar = {};
    atualizar['/Usuarios/' + atualizarID] = dadosPostagem;

    firebase.database().ref().update(atualizar);

    $("#atualizar-modal").modal('hide');
});

// Remover Dados
$("body").on('click', '.removerDados', function() {
    var id = $(this).attr('data-id');
    $('body').find('.usuarios-removem-modelo-registro').append('<input name="id" type="hidden" value="' + id + '">');
});

$('.apagarRegistro').on('click', function() {
    var values = $(".usuarios-removem-modelo-registro").serializeArray();
    var id = values[0].value;

    firebase.database().ref('Usuarios/' + id).remove();

    $('body').find('.usuarios-removem-modelo-registro').find("input").remove();
    $("#remover-modal").modal('hide');
});

$('.remover-dados-formulario-exclusao').click(function() {
    $('body').find('.usuarios-removem-modelo-registro').find("input").remove();
});