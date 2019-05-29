<%-- 
    Document   : listagem_produto
    Created on : 23/10/2015, 17:25:18
    Author     : Usuario
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
    <head>
    </head>
    <body>

        Olá <b>Senior</b>, este é o meu Webservice!
        <br>
        <br>
        Segue abaixo um exemplo das chamadas baseado nos requisitos:
        <br><br>
        1. Ler o arquivo CSV das cidades para a base de dados;<br>
        <a href="cidades/popularBaseDados">cidades/popularBaseDados</a><br><br>
        2. Retornar somente as cidades que são capitais ordenadas por nome;<br>
        <a href="cidades/capitais">cidades/capitais</a><br><br>
        3. Retornar o nome do estado com a maior e menor quantidade de cidades e a
        quantidade de cidades;<br>
        <a href="cidades/maiorEstado">cidades/maiorEstado</a><br>
        <a href="cidades/menorEstado">cidades/menorEstado</a><br><br>
        4. Retornar a quantidade de cidades por estado;<br>
        <a href="cidades/porEstado">cidades/porEstado</a><br><br>
        5. Obter os dados da cidade informando o id do IBGE;<br>
        <a href="cidades/ibge/3550308">cidades/ibge/3550308</a><br><br>
        6. Retornar o nome das cidades baseado em um estado selecionado;<br>
        <a href="cidades/porEstado/SC">cidades/porEstado/SC</a><br><br>
        7. Permitir adicionar uma nova Cidade;<br>
        <a href="cidades/cadastrar?ibgeId=999&nome=MyCity&uf=SC&latitude=0&longitude=0&nomeSemAcentuacao=MyCity&capital=0&nomeAlternativo=&mesorregiao=Nao Tem&microrregiao=Nao Tem">cidades/cadastrar?ibgeId=999&nome=MyCity&uf=SC&latitude=0&longitude=0&nomeSemAcentuacao=MyCity&capital=0&nomeAlternativo=&mesorregiao=Nao Tem&microrregiao=Nao Tem</a><br><br>
        8. Permitir deletar uma cidade;<br>
        <a href="cidades/remover/3550308">cidades/remover/3550308</a><br><br>
        9. Permitir selecionar uma coluna (do CSV) e através dela entrar com uma string para filtrar. retornar assim todos os objetos que contenham tal string;<br>
        <a href="cidades/filtrar/uf/RS">cidades/filtrar/uf/RS</a><br><br>
        10. Retornar a quantidade de registro baseado em uma coluna. Não deve contar itens
        iguais;<br>
        <a href="cidades/filtrarDistinto/nome/Itajai">cidades/filtrarDistinto/nome/Itajai</a><br><br>
        11. Retornar a quantidade de registros total;<br>
        <a href="cidades/quantidade">cidades/quantidade</a><br><br>
        12. Dentre todas as cidades, obter as duas cidades mais distantes uma da outra com base
        na localização (distância em KM em linha reta);<br>
        <a href="cidades/maiorDistancia">cidades/maiorDistancia</a><br><br>


    </body>
</html>

