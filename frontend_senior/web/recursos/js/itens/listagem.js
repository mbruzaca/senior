$(function () {

    selecionarMenu('menuListagem');
    limparLocalStorage('itens');
    persistirLocalStorage({id: 1, nome: 'Banana', unidadeMedida: 'Quilograma', quantidade: 1, preco: 3.5, perecivel: true, dataValidade: '23/12/2019', dataFabricacao: '15/02/2019'}, 'itens');
    persistirLocalStorage({id: 2, nome: 'Abacaxi', unidadeMedida: 'Quilograma', quantidade: 1, preco: 5.7, perecivel: true, dataValidade: '11/10/2019', dataFabricacao: '11/02/2019'}, 'itens');
    persistirLocalStorage({id: 3, nome: 'Laranja', unidadeMedida: 'Quilograma', quantidade: 1, preco: 4.0, perecivel: true, dataValidade: '22/12/2019', dataFabricacao: '05/01/2019'}, 'itens');
    persistirLocalStorage({id: 4, nome: 'Açucar', unidadeMedida: 'Unidade', quantidade: 1, preco: 2.25, perecivel: false, dataValidade: '31/12/2019', dataFabricacao: '01/01/2019'}, 'itens');
    persistirLocalStorage({id: 5, nome: 'Leite', unidadeMedida: 'Litro', quantidade: 1, preco: 1.90, perecivel: false, dataValidade: '25/10/2019', dataFabricacao: '17/03/2019'}, 'itens');
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
        trItem += "<td>" + itens[a].preco + "</td>";
        trItem += "<td>" + (itens[a].perecivel ? 'Sim' : 'Não') + "</td>";
        trItem += "<td>" + itens[a].dataValidade + "</td>";
        trItem += "<td>" + itens[a].dataFabricacao + "</td>";
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