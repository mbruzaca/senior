function criarMenu(id, pagina, icone, texto) {
    var menu = '<div class="itemMenu"><div class="divItemMenu" id="' + id + '" onclick="selecionarMenu(\'' + menu + '\');window.location = \'' + pagina + '\';"><div class="itemMenuExpandivel"><span class="glyphicon glyphicon-' + icone + ' iconeMenu"></span><span class="textoMenu">' + texto + '</span></div></div></div>';
    $("#menuEsquerdo").append(menu);
}

function selecionarMenu(id) {
    $(".divItemMenu").removeClass('menuSelecionado');
    $("#" + id).addClass('menuSelecionado');
}
function selecionarSubMenu(id) {
    var idPai = $("#" + id).parent().attr("id").toString().replace("subMenu", "menu");
    $(".divItemMenu").removeClass('menuSelecionado');
    $("#" + idPai).addClass('menuSelecionado');
    $(".subMenu").removeClass("subMenuSelecionado");
    $("#" + id).addClass("subMenuSelecionado");
}

function expandirMenu() {
    var width = 300;
    if ($("#divMenuEsquerdo").width() > 70) {
        width = 70;
        $("#logoMenu").fadeOut(250);
        $(".divSubMenu").fadeOut(250);
        $(".textoMenu").fadeOut(250);
        $(".setasMenu").fadeOut(250);
        $(".setasMenu").removeClass("glyphicon-menu-up");
        $(".setasMenu").addClass("glyphicon-menu-down");
    } else {
        $(".setasMenu").fadeIn(750);
        $(".textoMenu").fadeIn(750);
        $("#logoMenu").fadeIn(750);
    }
    $("#divMenuEsquerdo").animate({
        width: width
    });
    if (width == 300 && $("#paginaExpandida").val() != '') {
        expandirSubMenu($("#paginaExpandida").val());
        $("#paginaExpandida").val('');
    }
}

function expandirSubMenu(id) {
    if ($("#divMenuEsquerdo").width() == 70) {
        $(".textoMenu").fadeIn(750);
        $("#logoMenu").fadeIn(750);
        $("#divMenuEsquerdo").animate({
            width: 300
        });
    }
    $(".setasMenu").fadeIn(750);
    if ($("#" + id).css("display") == 'none') {
        $("#" + id).slideDown("slow");
        $("#" + id + "Seta").removeClass("glyphicon-menu-down");
        $("#" + id + "Seta").addClass("glyphicon-menu-up");
    } else {
        $("#" + id).slideUp("slow");
        $("#" + id + "Seta").removeClass("glyphicon-menu-up");
        $("#" + id + "Seta").addClass("glyphicon-menu-down");
    }
}

function expandirConta() {
    if ($("#setaConta").hasClass("glyphicon-menu-down")) {
        $("#setaConta").removeClass("glyphicon-menu-down");
        $("#setaConta").addClass("glyphicon-menu-up");
        $("#accountBox").slideDown();
    } else {
        $("#setaConta").removeClass("glyphicon-menu-up");
        $("#setaConta").addClass("glyphicon-menu-down");
        $("#accountBox").slideUp();
    }
}