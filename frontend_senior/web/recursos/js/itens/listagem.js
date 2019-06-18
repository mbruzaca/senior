$(function () {

    selecionarMenu('menuListagem');
    listarItens();


});

function listarItens() {
    loading(true);
    try {
        $("#tableItens").dataTable().fnDestroy();
    } catch (x) {

    }
    $("#tableItens tbody").html("");
    var itens = carregarLocalStorage('itens');
    for (var a = 0; a < itens.length; a++) {
        var trItem = "<tr>";
        trItem += "<td>" + itens[a].id + "</td>";
        trItem += "<td>" + itens[a].nome + "</td>";
        trItem += "<td>" + itens[a].unidadeMedida + "</td>";
        trItem += "<td>" + itens[a].quantidade + " " + unidadeMedidaAddon(itens[a].unidadeMedida) + "</td>";
        trItem += "<td>" + converterDoubleParaReal(itens[a].preco, false) + "</td>";
        trItem += "<td>" + (itens[a].perecivel ? 'Sim' : 'Não') + "</td>";
        trItem += "<td>" + converterParaPtBr(itens[a].dataValidade) + "</td>";
        trItem += "<td>" + converterParaPtBr(itens[a].dataFabricacao) + "</td>";
        trItem += "<td><span onclick='window.location = \"gerenciamento.jsp?id=" + itens[a].id + "\"' title='Editar' class='cursor glyphicon glyphicon-edit'></span></td>";
        trItem += "<td><span onclick='confirmarRemoverItem(" + itens[a].id + ")' title='Remover' class='cursor glyphicon glyphicon-trash'></span></td>";
        trItem += "</tr>";
        $("#tableItens tbody").append(trItem);
    }
    $('#tableItens').DataTable(options_pt_br());
    loading(false);
}

function options_pt_br() {
    return {
        ordering: false,
        autoWidth: false,
        responsive: true,
        language: {
            search: "<span class='glyphicon glyphicon-search'></span>",
            paginate: {
                previous: "Anterior",
                next: "Próxima"
            },
            lengthMenu: "Exibir _MENU_ por página",
            zeroRecords: "Nenhum registro encontrado",
            info: "Exibindo página _PAGE_ de _PAGES_",
            infoEmpty: "Nenhum registro encontrado",
            infoFiltered: "(de _MAX_ registros)"
        }};
}

function confirmarRemoverItem(id) {
    criarDialogConfirmacao('dialogRemoverItem_' + id, 'Deseja realmente excluir o item #' + id + '?', 'Confirmar Exclusão', 'removerItem(\'' + id + '\');fecharDialogConfirmacao(\'dialogRemoverItem_' + id + '\');', '', true);
}

function removerItem(id) {
    try {
        removerLocalStorage(id, 'itens');
        alertar("Registro #" + id + " removido com sucesso!", "alerta-success");
        listarItens();
    } catch (x) {
        alertar("Ocorreu algum erro ao remover o registro #" + id + "!", "alerta-danger");
    }
}