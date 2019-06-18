$(function () {

    $("#itemForm [name=preco]").maskMoney({symbolStay: true, allowZero: true, showSymbol: true, symbol: "R$ ", decimal: ",", thousands: "."});
    selecionarMenu('menuGerenciamento');
    if (item != null && item.id != null) {
        $("#pageTitle").html("Edição de Item");
        $("#itemForm [name=id]").val(item.id);
        $("#itemForm [name=nome]").val(item.nome);
        $("#itemForm [name=preco]").val(converterDoubleParaReal(item.preco, true));
        $("#itemForm [name=unidadeMedida]").val(item.unidadeMedida);
        $("#itemForm [name=unidadeMedida]").trigger('change');
        $("#itemForm [name=quantidade]").val(item.quantidade);
        $("#itemForm [name=dataValidade]").val(item.dataValidade, false);
        $("#itemForm [name=dataFabricacao]").val(item.dataFabricacao, false);
        $("#itemForm [name=perecivel]").prop("checked", item.perecivel);
        $("#itemForm input").trigger('change');
        validarDataValidade($("#dataValidade"));
        validarDataFabricacao($("#dataFabricacao"));
    } else {
        $("#pageTitle").html("Cadastro de Item");
    }
});

function salvar() {
    if (validarDataValidade()) {
        if (validarDataFabricacao()) {
            try {
                loading(true);
                var edicao = $("#itemForm [name=id]").val() != '' ? true : false;
                var json = {
                    id: $("#itemForm [name=id]").val() != '' ? $("#itemForm [name=id]").val() : proximoIdLocalStorage('itens'),
                    editar: edicao,
                    nome: $("#itemForm [name=nome]").val(),
                    unidadeMedida: $("#itemForm [name=unidadeMedida]").val(),
                    quantidade: $("#itemForm [name=quantidade]").val(),
                    preco: converterRealParaDouble($("#itemForm [name=preco]").val()),
                    perecivel: $("#itemForm [name=perecivel]").is(':checked'),
                    dataValidade: $("#itemForm [name=dataValidade]").val(),
                    dataFabricacao: $("#itemForm [name=dataFabricacao]").val()
                };
                persistirLocalStorage(json, 'itens');
                alertar("Registro " + (edicao ? "editado" : "cadastrado") + " com sucesso!", "alerta-success");
            } catch (x) {
                alertar("Ocorreu algum erro inesperado, contate o administrador!", "alerta-danger");
            }
            loading(false);
        }
    }
    return false;
}

function validarDataValidade() {
    $("#infoDataValidade").html("");
    var data = $("#itemForm [name=dataValidade]").val();
    if (dataValida(data, 'Data de Validade')) {
        if (new Number(data.replace(/\D/g, '')) < new Number(dataAtual().replace(/\D/g, ''))) {
            $("#infoDataValidade").html("Produto vencido!");
        }
        var dataFabricacao = $("#itemForm [name=dataFabricacao]").val();
        if (dataFabricacao != null && dataFabricacao != '') {
            validarDataFabricacao();
        }
        return true;
    }
    return false;
}

function validarDataFabricacao() {
    $("#infoDataFabricacao").html("");
    var data = $("#itemForm [name=dataFabricacao]").val();
    if (dataValida(data, 'Data de Fabricacao')) {
        var dataValidade = $("#itemForm [name=dataValidade]").val();
        if (dataValidade != null && dataValidade != '') {
            var perecivel = ($("#itemForm [name=perecivel]").is(':checked'));
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

function onChangePerecivel() {
    if ($("#itemForm [name=perecivel]").is(':checked')) {
        var dataFabricacao = $("#dataFabricacao").val();
        if (dataFabricacao != null && dataFabricacao != '') {
            validarDataFabricacao($("#dataFabricacao"));
        }
    }
}

function onChangeUnidadeMedida(campo) {
    $("#itemForm [name=quantidade]").val('');
    $("#addonQuantidade").html(unidadeMedidaAddon($(campo).val()));
    switch ($(campo).val()) {

    }
}
