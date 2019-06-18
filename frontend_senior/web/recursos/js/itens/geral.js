function unidadeMedidaAddon(valor) {
    switch (valor) {
        case "Litro":
            return "lt ";
        case "Quilograma":
            return "kg";
        case "Unidade":
            return "un";
    }
    return "&nbsp&nbsp";
}