// JavaScript Document
$.fn.correo=function()
{if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(this).val()))
{return true}else{return false};
}
//la forma de usar seria la siguiente (supongamos un formulario con id="form" y un input con id="email"):
 $('#mensajes_respuesta').css('opacity',0.85);
  $('#contact_information').css('opacity',0.8);
function centrar_mensaje(){
	$('#mensajes_respuesta').css('top','50%');
	$('#mensajes_respuesta').css('left','50%');
	$('#mensajes_respuesta').css('margin-top','-'+mensaje_alto);
	$('#mensajes_respuesta').css('margin-left','-'+mensaje_ancho);
	$('#mensajes_respuesta').css('opacity',0.7);
};
var enviado=false;
var error = false;

$('#btn_enviar').click(function(){
	var nombre= $('#contenedor_contacto #nombre').val();	
	var email= $('#contenedor_contacto #email').val();
	var mensaje= $('#contenedor_contacto #mensaje').val();
	var mensaje_ancho= $('#mensajes_respuesta').outerWidth();
	var mensaje_alto= $('#mensajes_respuesta').height();
	
	
	if (nombre.length < 2){
	$('#contenedor_contacto .nombre .error_input').css('visibility','visible');
	}else{
	$('#contenedor_contacto .nombre .error_input').css('visibility','hidden')
	};	
	if(!$("#contenedor_contacto #email").correo()){
		$('#contenedor_contacto .email .error_input').css('visibility','visible');
		}else{
		$('#contenedor_contacto .email .error_input').css('visibility','hidden')
	};	
	if (mensaje.length < 2){
	$('#contenedor_contacto .mensaje .error_input').css('visibility','visible');
	}else{
		$('#contenedor_contacto .mensaje .error_input').css('visibility','hidden');
	};	
	
	
	// Validando que todos los datos esten bien al mismo tiempo
	if ((nombre.length < 2) || (mensaje.length < 2) || (!$("#contenedor_contacto #email").correo()) ){
		//alert('no envia');
		error=true;
	}else{
		error=false;
		//alert('envia');
	};	
	
	if (error !=true  ) {
		if(enviado == false){
			 $('#mensajes_respuesta').text('enviando');
			 bodyContent = $.ajax({
				url: "correo.php",
				global: false,
				type: "POST",
				data: ({
				nombre: nombre,
				email: email,
				mensaje: mensaje
			}),
			dataType: "html",
			async: false,
			success:
			 function(msg){
				 enviado=true;
				 $('#mensajes_respuesta').text('tu mensaje ha sido enviado.');
				 $('#contenedor_contacto input,#contenedor_contacto textarea').attr('disabled','disabled');
				//alert(msg);
			},error: function(){
			$('#mensajes_respuesta').text('no se ha podido enviar el mensaje');
			}
		}).responseText;
			
		}else{ $('#mensajes_respuesta').text('tu mensaje ya ha sido enviado');};
		
	}
	else {
		$('#mensajes_respuesta').text('debes ingresar todos los datos');
	};
	
});

