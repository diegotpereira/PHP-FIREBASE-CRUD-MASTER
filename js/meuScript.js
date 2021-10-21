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
                            <button data-toggle="modal" data-target="#remover-modal"   class="btn btn-danger removerDado" data-id="' + index + '">Deletar</button>\
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