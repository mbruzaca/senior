function limparLocalStorage(chave) {
    localStorage.setItem(chave, null);
}

function removerLocalStorage(idJson, chave) {
    var indexRemove = -1;
    var arr = [];
    arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
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
    var arr = [];
    arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
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
    var arr = [];
    arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
    arr.push(json);
    localStorage.setItem(chave, JSON.stringify(arr));
}

function carregarLocalStorage(chave) {
    var arr = [];
    arr = JSON.parse(localStorage.getItem(chave)) != null ? JSON.parse(localStorage.getItem(chave)) : [];
    return arr;
}