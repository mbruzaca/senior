<%@include file="header.jsp"%>

<script src="recursos/js/itens/geral.js" type="text/javascript" charset="utf-8"></script>
<script src="recursos/js/itens/listagem.js" type="text/javascript" charset="utf-8"></script>

<h3>Listagem de Itens</h3>

<br>


<table id="tableItens" class="display">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Unidade de Medida</th>
            <th>Qtd</th>
            <th>Preço</th>
            <th>Perecível</th>
            <th>Data Val.</th>
            <th>Data Fab.</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>

<br>
<br>

<center>
    <button class="newButton newButtonAlt" onclick="window.location='gerenciamento.jsp'">NOVO ITEM</button>
</center>

<%@include file="footer.jsp"%>