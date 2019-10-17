// ***Reloj
// MToday = new Date();
// hr = MToday.getHours();
// min = MToday.getMinutes();
// sec = MToday.getSeconds();

// HoraImprimir = hr + ":" + min + ":" + sec;

// document.getElementById('MostrarHr').innerHTML = HoraImprimir;

$(document).ready(function(){

	$('#BtnMenuShow').click(function() {
		$('.AllDashboard').toggleClass('Dash_Show');
		$('.AllSideBar').toggle("fast");
	});
	$('[data-toggle="tooltip"]').tooltip();

	// Fullscreen Pantalla
	function toggleFullScreen() {
		if ((document.fullScreenElement && document.fullScreenElement !== null) ||
		(!document.mozFullScreen && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	}
	$('.toggle-fullscreen').click(function() {
		toggleFullScreen();
	});
	$('#Olvidar_Pass').click(function() {
		Swal.fire(
			'¡Enviado!',
			'¡Se te envió a tu correo la contraseña!',
			'success'
		)
	});
	$('.BorrarBtn').click(function() {
		Swal.fire(
			'Borrado!',
			'¡Tu documento fué borrado!',
			'success'
		)
	});
	$('#BtnCrear').click(function() {
		Swal.fire({
			title: 'Usuario Nuevo',
			text: '¿Estás seguro de crear el usuario {nombre}?',
			type: 'success',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
			}).then((result) => {
			if (result.value) {
			Swal.fire(
				'¡Creado!',
				'El usuario {nombre} ha sido creado',
				'success'
			)
			} else if (result.dismiss === Swal.DismissReason.cancel) {
			Swal.fire(
				'Cancelado',
				'El usuario no fué creado',
				'error'
			)
			}
		});
	});
});