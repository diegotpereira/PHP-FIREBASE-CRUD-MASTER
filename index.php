<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Operações CRUD Usando Google Firebase</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    <!-- JQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container" style="margin-top: 50px;">
       <h4 class="text-center">PHP Operações CRUD Usando Google Firebase DTP Software</h4>
       <h5>Adicionar Usuários</h5>
       <div class="car card-default">
           <div class="card-body">
               <form id="addUsuario" class="form-inline" method="POST" action="">

                   <div class="form-group mb-2">
                       <label for="nome" class="sr-only">Nome</label>
                       <input type="text" name="nome" id="nome" class="form-control" placeholder="Digite seu nome" required autofocus>
                   </div>

                   <div class="form-group mx-sm-3 mb-2">
                       <label for="email" class="sr-only">Email</label>
                       <input type="email" name="email" id="email" class="form-control" placeholder="Digite seu email" required autofocus>
                   </div>

                   <button id="enviarUsuario" type="button" class="btn btn-primary mb-2">Enviar</button>
               </form>
           </div>
       </div>
       <br>
       <h5>Lista de Usuários</h5>
       <table class="table table-bordered">
           <tr>
               <th>Nome</th>
               <th>Email</th>
               <th width="180" class="text-center">Ação</th>
           </tr>
           <tbody id="tbody">

           </tbody>
       </table>
    </div>

    <!-- Atualizar modelo --> 
    <form action="" method="POST" class="usuarios-atualizam-modelo-registro form-horizontal">
        <div id="atualizar-modal" data-backdrop="static" data-keyboard="false" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="width: 55%;">
                <div class="modal-content" style="overflow: hidden;">
                    <div class="modal-header">
                        <h4 class="modal-title" id="custom-width-modalLabel">Atualizar</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                    </div>
                
                    <div class="modal-body" id="atualizarBody"></div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-success atualizarUsuario">Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!-- Excluir modelo --> 
    <form action="" method="POST" class="usuarios-removem-modelo-registro">
        <div id="remover-modal" data-backdrop="static" data-keyboard="false" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-dialog-centered" style="width: 55%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="custom-width-modalLabel">Deletar</h4>
                        <button type="button" class="remover-dados-formulario-exclusao" data-dismiss="modal" aria-hidden="true">X</button>
                    </div>

                    <div class="modal-body">
                        <p>Você quer deletar este registro?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default waves-effect remover-dados-formulario-exclusao" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-danger waves-effect waves-light apagarRegistro">Deletar</button>
                    </div>
                </div>
            </div>
        </div>
    </form>


    <!-- O SDK JS do Firebase principal é sempre necessário e deve ser listado primeiro -->
    <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js"></script>

    <!-- TODO: Adicionar SDKs para produtos Firebase que você deseja usar https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-database.js"></script>

    <!-- Script de Configuração e Serviço --> 
    <script src="js/meuScript.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>