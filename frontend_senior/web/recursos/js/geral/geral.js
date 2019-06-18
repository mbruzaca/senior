var app = angular.module("moduloItens", [])
        .controller("controladorItens", function ($scope) {
            
        });


$(function () {
    criarMenu('menuInicio', 'index.jsp', 'home', 'Início');
    criarMenu('menuListagem', 'listagem.jsp', 'list-alt', 'Listagem de Itens');
    criarMenu('menuGerenciamento', 'gerenciamento.jsp', 'plus-sign', 'Gerenciamento de Itens');
    $("html").bind("click", function (e) {
        if ($("#accountBox").css('display') == 'block') {
            if (e.target.id != 'contaUsuario' && e.target.id != 'contaTopoUsuarioLogado' && e.target.id != 'setaConta' && e.target.id != 'accountBox' && !$(event.target).closest('#accountBox').length) {
                expandirConta();
            }
        }
    });
    loading(false);
});

function fecharDialogConfirmacao(id) {
    $("#" + id).modal("hide");
    setTimeout('$("#' + id + '").remove();', 200);
}

function criarDialogConfirmacao(id, texto, titulo, funcaoConfirmacao, funcaoNegacao, abrir) {
    id = id != '' ? id : (Math.random() * 100000).toFixed(0);
    var dialog = '<div class="modal fade" id="' + id + '" style="margin-top: 13%;"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" onclick="fecharDialogConfirmacao(\'' + id + '\')" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title">' + titulo + '</h4></div><div class="modal-body">' + texto + '</center></div><div class="modal-footer"><button type="button" class="newButton newButtonSuccess" id="confirmar_' + id + '">SIM</button><button type="button" class="newButton newButtonDanger" id="negar_' + id + '">NÃO</button></div></div></div></div>';
    $("body").prepend(dialog);
    $("#confirmar_" + id).attr("onclick", funcaoConfirmacao);
    $("#negar_" + id).attr("onclick", funcaoNegacao != '' ? funcaoNegacao : 'fecharDialogConfirmacao(\'' + id + '\')');
    if (abrir) {
        $("#" + id).modal("show");
    }
    return id;
}

function alertar(msg, tipo) {
    var id = (Math.random() * 100000).toFixed(0);
    $("#alertContainer").append("<div id='alerta_" + id + "' class='alerta " + tipo + " fade in'><button onclick=\"$('#alerta_" + id + "').remove();\" type='button' class='glyphicon glyphicon-remove' style='position: absolute; right: 5px; top: 7px; font-size: 20px; border: 0px; background-color: transparent;'></button>" + msg + "</div>");
    var tempo = msg.length * 0.12 * 1000;
    if (tempo < 4000) {
        tempo = 4000;
    }
    setTimeout("$('#alerta_" + id + "').fadeOut(250);", tempo);
    setTimeout("$('#alerta_" + id + "').remove();", new Number(tempo + 300));
}

function loading(v) {
    if (v || v == 'open') {
        $("#loadingContainer").show();
    } else {
        $("#loadingContainer").hide();
    }
}

