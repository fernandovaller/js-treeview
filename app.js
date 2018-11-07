jQuery(document).ready(function($) {
	$.jstree.defaults.core.themes.icons = false;
	//$.jstree.defaults.core.themes.responsive = true;
	$('.jstreeview').jstree();	
	$('.jstree-control').click();
});

$(document).on('click', '.jstree-control', function(event) {
	event.preventDefault();
	var jstree = $('.jstreeview');
	var icon, msg;
	//verificar se possui nós abertos
	//se exitir retorna a qtd de nós
	if ($('.jstree-open', jstree).length) {
		jstree.jstree('close_all');		
		icon = 'glyphicon glyphicon-plus-sign';
		msg = 'Open';
	} else {
		jstree.jstree('open_all');
		icon = 'glyphicon glyphicon-minus-sign';
		msg = 'Close';
	}
	$(this).html('<i class="' + icon + '"></i> ' + msg);
});

function wmodal(url, w, h) {
	// Fixes dual-screen position                         Most browsers      Firefox
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, '', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left, ',menubar=no,toolbar=no,scrollbars=yes,resizable=no,status=no');

	// Puts focus on the newWindow
	if (window.focus) {
		newWindow.focus();
	}
}


//Envia os dados para o form da pagina que chamou o modal
function sendToForm(val, field, val2, field2, form) {
	//Campo 1
	eval("opener.document." + form + "." + field + ".value='" + val + "'");
	//Campo 2
	eval("opener.document." + form + "." + field2 + ".value='" + val2 + "'");
	//Fecha o modal
	window.close();
}