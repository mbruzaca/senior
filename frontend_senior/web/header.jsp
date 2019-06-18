<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <link rel="shortcut icon" href="recursos/img/icon.png" type="image/x-icon" />

        <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/responsive/1.0.6/js/dataTables.responsive.js"></script>
        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
        <!--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>-->

        <script type="text/javascript" src="recursos/js/geral/geral.js" charset="utf-8"></script>
        <script type="text/javascript" src="recursos/js/geral/localStorage.js" charset="utf-8"></script>
        <script type="text/javascript" src="recursos/js/geral/calendario.js" charset="utf-8"></script>
        <script type="text/javascript" src="recursos/js/geral/menu.js" charset="utf-8"></script>
        <script type="text/javascript" src="recursos/js/bibliotecas/maskmoney.js" charset="utf-8"></script>
        <script type="text/javascript" src="recursos/js/bibliotecas/jquery.formatCurrency-1.4.0.js" charset="utf-8"></script>
        <script type="text/javascript" src="recursos/js/bibliotecas/jquery.formatCurrency.pt-BR.js" charset="utf-8"></script>

        <link rel='stylesheet' href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" type="text/css" >        
        <link rel="stylesheet" href="//cdn.datatables.net/responsive/1.0.6/css/dataTables.responsive.css" type="text/css" >
        <link rel="stylesheet" href="//cdn.datatables.net/tabletools/2.2.4/css/dataTables.tableTools.css" type="text/css" >
        <link rel='stylesheet' href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" type="text/css" >
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <link rel="stylesheet" href="recursos/css/geral.css"/>
        <link rel="stylesheet" href="recursos/css/menu.css"/>

        <meta name="viewport" content="initial-scale = 1, user-scalable = no">
        <title>Desafio FrontEnd</title>
    </head>
    <body ng-app="moduloItens">        
        <div id="divMenuEsquerdo">
            <img src="recursos/img/logoSenior.png" id="logoMenu" height="40" style="border-radius: 5px;">
            <div id="topoMenuEsquerdo" onclick="">
                <span class="glyphicon glyphicon-menu-hamburger" id="iconeMenu" onclick="expandirMenu();"></span>
            </div>
            <div id="menuEsquerdo"></div>
        </div>
        <div class="divConteudo">
            <div id="alertContainerTop" style="position: fixed;right:80px;top:100px;width: 65%;z-index: 2000;"></div>
            <div class="newBox" id="accountBox" style="z-index: 105; display:none; width: 250px; position: absolute; right: 17px; top: 48px; padding: 10px;">
                <span class="glyphicon glyphicon-user" style="vertical-align: top; font-size: 40px; border: 1px rgba(204,204,204,0.4) solid; padding: 20px; display: inline-block;"></span>
                <div style="display: inline-block; vertical-align: top; text-align: left; width: 135px; padding-top: 5px; margin-left: 5px;">
                    <div style="font-size: 14px; font-weight: 600; overflow-x: hidden; overflow-y: hidden; white-space: nowrap;">${Usuario.nome}</div>
                    <span style="font-size: 12px;">Administrador</span>
                </div>
                <center>
                    <button type="button" style="width: 100%; margin-top: 10px;" class="newButton newButtonDanger" onclick="alertar('Não Implementado!', 'alerta-danger');expandirConta();">SAIR</button>
                </center>
            </div>
            <div class="barraTopoDireito">                
                <div class="contaTopo">
                    <span class="glyphicon glyphicon-user" style="display: inline-block; margin-top: -5px; border: 1px #CCCCCC solid; border-radius: 100px; padding: 5px; font-size: 18px;"></span>
                    <div class="contaTopoUsuarioLogado" id="contaTopoUsuarioLogado" onclick="expandirConta();" style="display: inline-block; vertical-align: top; margin-left: 2px;">                       
                        <span id="contaUsuario">Matheus Bruzaca</span>
                        <span class="glyphicon glyphicon-menu-down" id="setaConta" style="vertical-align: -1px; font-size: 12px;"></span>
                    </div>
                </div>
            </div>
            <div class="conteudo">
                <input type="hidden" id="x">

