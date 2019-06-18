function limparLocalStorage(chave) {
    localStorage.setItem(chave, null);
}

function idExistente(id, chave) {
    var arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
    for (var a = 0; a < arr.length; a++) {
        if (arr[a].id == id) {
            return true;
        }
    }
    return false;
}

function proximoIdLocalStorage(chave) {
    var arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : []
    var id = arr.length + 1;
    while (idExistente(id, 'itens')) {
        id++;
    }
    return id;
}

function removerLocalStorage(idJson, chave) {
    var indexRemove = -1;
    var arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
    for (var a = 0; a < arr.length; a++) {
        if (arr[a].id == idJson) {
            indexRemove = a;
            break;
        }
    }
    if (indexRemove >= 0) {
        arr.splice(indexRemove, 1);
        localStorage.setItem(chave, JSON.stringify(arr));
    }
}

function encontrarLocalStorage(idJson, chave) {
    var indexFind = -1;
    var arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
    for (var a = 0; a < arr.length; a++) {
        if (arr[a].id == idJson) {
            indexFind = a;
            break;
        }
    }
    if (indexFind >= 0) {
        return arr[indexFind];
    } else {
        return null;
    }
}

function persistirLocalStorage(json, chave) {
    var arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
    if (json.editar) {
        var indexFind = -1;
        var arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
        for (var a = 0; a < arr.length; a++) {
            if (arr[a].id == json.id) {
                indexFind = a;
                break;
            }
        }
        arr[indexFind] = json;
    } else {
        arr.push(json);
    }
    localStorage.setItem(chave, JSON.stringify(arr));
}

function carregarLocalStorage(chave) {
    var arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
    return arr;
}