function dataValida(dataString, campo) {
    // Verificar expressão
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dataString)) {
        alertar(campo + " inválida! Favor informar uma data válida no formato pt-Br! Ex: " + converterParaPtBr(dataAtual()), "alerta-danger");
        return false;
    }

    // Dividir em inteiros
    var partes = dataString.split("-");
    var dia = parseInt(partes[2], 10);
    var mes = parseInt(partes[1], 10);
    var ano = parseInt(partes[0], 10);

    //Verificar os limites de anos e meses
    if (ano < 1000 || ano > 3000 || mes == 0 || mes > 12) {
        alertar(campo + " inválida! Favor informar uma data válida no formato pt-Br! Ex: " + converterParaPtBr(dataAtual()), "alerta-danger");
        return false;
    }

    var diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verificação de ano bissexto
    if (ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0))
        diasPorMes[1] = 29;

    // Verificar o dia
    if (dia > 0 && dia <= diasPorMes[mes - 1]) {
        return true;
    } else {
        alertar(campo + " inválida! Favor informar uma data válida no formato pt-Br! Ex: " + converterParaPtBr(dataAtual()), "alerta-danger");
        return false;
    }
}

function converterParaPtBr(dt) {
    return dt.substring(8, 10) + "/" + dt.substring(5, 7) + "/" + dt.substring(0, 4);

}

function converterParaYYYYMMDD(dt, numero) {
    var x = dt.substring(6) + (!numero ? "-" : "") + dt.substring(3, 5) + (!numero ? "-" : "") + dt.substring(0, 2);
    return (numero ? new Number(x) : x);
}

function dataAtual() {
    var data = new Date();
    var dd = ((data.getDate()) < 10 ? ('0' + (data.getDate())) : ((data.getDate())));
    var mm = ((data.getMonth() + 1) < 10 ? ('0' + (data.getMonth() + 1)) : ((data.getMonth() + 1)));
    var yyyy = data.getFullYear();
//    return dd + '/' + mm + '/' + yyyy;
    return yyyy + "-" + mm + "-" + dd;
}