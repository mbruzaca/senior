<%@include file="header.jsp"%>
<script src="recursos/js/itens/geral.js" type="text/javascript" charset="utf-8"></script>
<script src="recursos/js/itens/gerenciamento.js" type="text/javascript" charset="utf-8"></script>

<div ng-controller="controladorItens">


    <h3 id="pageTitle"></h3>

    <div style="font-size: 10px;">(<span style="color: red;">*</span> representa a obrigatoriedade dos campos)</div>
    <br>

    <form name="itemForm" id="itemForm">
        <table class="tableForm">
            <tr>
                <td>
                    Nome
                    <span style="color: red;" ng-show="!itemForm.nome.$valid">*</span>
                </td>
                <td width="10"></td>
                <td>
                    <input maxlength="50" required type="text" ng-model="nome" class="form-control" name="nome" placeholder="Descrição do item">
                </td>
            </tr>
            <tr>
                <td>
                    Un. Medida
                    <span style="color: red;" ng-show="itemForm.unidadeMedida.$modelValue == null || itemForm.unidadeMedida.$modelValue == ''">*</span>
                </td>
                <td width="10"></td>
                <td>
                    <select class="form-control" onchange="onChangeUnidadeMedida(this);" ng-model="unidadeMedida" name="unidadeMedida">
                        <option value="">Selecione</option>
                        <option>Litro</option>
                        <option>Quilograma</option>
                        <option>Unidade</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Quantidade</td>
                <td width="10"></td>
                <td>
                    <div class="input-group">
                        <input id="quantidade" type="number" class="form-control comAddon" name="quantidade">
                        <span class="input-group-addon" id="addonQuantidade" style="font-family: 'Courier';">&nbsp&nbsp</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    Preço
                    <span style="color: red;" ng-show="!itemForm.preco.$valid">*</span>
                </td>
                <td width="10"></td>
                <td>
                    <input class="form-control" type="text" name="preco" required ng-model="preco">
                </td>
            </tr>
            <tr>
                <td>Perecível</td>
                <td width="10"></td>
                <td>
                    <input onchange="onChangePerecivel(this);" style="transform: scale(1.3); margin-left: 2px;" class="cursor" type="checkbox" name="perecivel" id="perecivel" ng-model="perecivel">
                </td>
            </tr>
            <tr>
                <td>
                    Data Validade
                    <span style="color: red;" ng-show="!itemForm.dataValidade.$valid">*</span>
                </td>
                <td width="10"></td>
                <td>
                    <input class="form-control" onblur="validarDataValidade(this);" name="dataValidade" id="dataValidade" ng-model="dataValidade" name="dataValidade" ng-required='itemForm.perecivel.$modelValue' type="date">         
                    <span style="color: red; margin-left: 2px;" id="infoDataValidade"></span>
                </td>
            </tr>
            <tr>
                <td>
                    Data Fabricação
                    <span style="color: red;" ng-show="!itemForm.dataFabricacao.$valid">*</span>
                </td>
                <td width="10"></td>
                <td>
                    <input class="form-control" onblur="validarDataFabricacao(this)" name="dataFabricacao" id="dataFabricacao" ng-model="dataFabricacao" required type="date">                
                </td>
            </tr>
        </table>

        <br>

        <center>
            <button type="button" class="newButton newButtonDanger" onclick="window.location = 'listagem.jsp';">CANCELAR</button>
            <button type="" class="newButton newButtonAlt">SALVAR</button>
        </center>
    </form>

</div>

<script>
    var item = null;
    <%
        if (request.getParameter("id") != null) {
            out.print("var id = '" + request.getParameter("id") + "';");
            out.print("item = encontrarLocalStorage(id,'itens')");
        }
    %>
</script>

<%@include file="footer.jsp"%>