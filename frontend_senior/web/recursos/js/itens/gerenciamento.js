$(function () {

    selecionarMenu('menuGerenciamento');
    if (item != null && item.id != null) {
        $("#pageTitle").html("Edição de Item");
        $("#itemForm [name=nome]").val(item.nome);
        $("#itemForm [name=preco]").val(item.preco);
        $("#itemForm [name=quantidade]").val(item.quantidade);
        $("#itemForm [name=unidadeMedida]").val(item.unidadeMedida);
        onChangeUnidadeMedida();
        $("#itemForm [name=dataValidade]").val(converterParaYYYYMMDD(item.dataValidade, false));
        $("#itemForm [name=dataFabricacao]").val(converterParaYYYYMMDD(item.dataFabricacao, false));
        $("#itemForm [name=perecivel]").prop("checked", item.perecivel);
        $("#itemForm input").trigger('change');
        $("#itemForm select").trigger('change');
    } else {
        $("#pageTitle").html("Cadastro de Item");
    }
});

function validarDataValidade(campo) {
    $("#infoDataValidade").html("");
    var data = $(campo).val();
    if (dataValida(data, 'Data de Validade')) {
        if (new Number(data.replace(/\D/g, '')) < new Number(dataAtual().replace(/\D/g, ''))) {
            $("#infoDataValidade").html("Produto vencido!");
        }
        var dataFabricacao = $("#dataFabricacao").val();
        if (dataFabricacao != null && dataFabricacao != '') {
            validarDataFabricacao($("#dataFabricacao"));
        }
    }
}

function validarDataFabricacao(campo) {
    $("#infoDataFabricacao").html("");
    var data = $(campo).val();
    if (dataValida(data, 'Data de Fabricacao')) {
        var dataValidade = $("#dataValidade").val();
        if (dataValidade != null && dataValidade != '') {
            var perecivel = ($("#perecivel").is(':checked'));
            if ((!perecivel) || (new Number(data.replace(/\D/g, '')) <= new Number(dataValidade.replace(/\D/g, '')))) {
                return true;
            } else {
                alertar("Data de Fabricação não pode ser maior que a Data de Validade caso o produto seja perecível!", "alerta-danger");
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function validarDatas() {

}

function onChangePerecivel(campo) {
    if ($(campo).is(':checked')) {
        var dataFabricacao = $("#dataFabricacao").val();
        if (dataFabricacao != null && dataFabricacao != '') {
            validarDataFabricacao($("#dataFabricacao"));
        }
    }
}

function onChangeUnidadeMedida(campo) {
    $("#addonQuantidade").html(unidadeMedidaAddon($(campo).val()));
}
