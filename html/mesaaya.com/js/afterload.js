 		// JavaScript Document
	$(document).ready(function() {
		


		var iOS = false,
		    p = navigator.platform;

		


		var unavez = true;
		
		var codigo ="<link href='http://fonts.googleapis.com/css?family=Josefin+Sans&v1' rel='stylesheet' type='text/css'>";
		$('body').append(codigo);
		$('<link id="css_loader1" rel="stylesheet" href="#" type="text/css" media="screen" />').prependTo($('body'));
		$('<link id="css_loader2" rel="stylesheet" href="#" type="text/css" media="screen" />').prependTo($('body'));
		$('<link id="css_loader3" rel="stylesheet" href="#" type="text/css" media="screen" />').prependTo($('body'));
		$('<link id="css_loader4" rel="stylesheet" href="#" type="text/css" media="screen" />').prependTo($('body'));
		$('<script id="loader5" type="text/javascript" src=""></script>').prependTo($('body'));
		$('<link id="css_loader6" rel="stylesheet" href="#" type="text/css" media="screen" />').prependTo($('body'));

		$('#css_loader1').attr('href','css/slider.css');
		$('#css_loader2').attr('href','css/contacto.css');
		$('#css_loader3').attr('href','css/staff.css');
		$('#css_loader4').attr('href','jquery/jScrollbar.jquery.css');
		$('#loader5').attr('src','jquery/jScrollbar.jquery.js');
		$('body').append('<div id="tramado"></div>');
		$('#css_loader6').attr('href','css/basico.css');
		//$.getScript('js/galeria_arquitectos.js');
			
		if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
		    iOS = true;
		   // alert(p);
		    $('#tramado').css({background:"none"});
		}

		$('#menu a').click(function() {
			$('#menu a').css('color','#555');
			$(this).css('color','#fff');
		});
		$("#menu").css({opacity:0.85});
		$('body').prepend('<div id="barra"></div>');
		//$('body').prepend('<div id="mensaje_error"><text>lo sentimos pero debe tener una resolución mayor a 1024x768</text></div>');
		//$('body').prepend('<div id="box1"></div>');
		$('#content').css({visibility:"hidden"});
	// example of use --> animated_menu( '#boton1','#barra',0.85,'10');
	function animated_menu_in(button,object,background,opacity,final_position,bgcolor){
	$(button).mouseenter(function () {
		 $(object).css('background',background);
		 $(object).css('background-color',bgcolor);
		 $(object).css('background-repeat','no-repeat');
		 $(object).css('background-position',' 0 65%');
		 $(object).animate({opacity:opacity,right: final_position}, 250, function() {
    // Animation complete.
 			});
		});
	};
	function animated_menu_out(button,object,opacity,final_position){
	$(button).mouseleave(function () {
		 $(object).animate({opacity:opacity,right: final_position}, 1000, function() {
    // Animation complete.
 			});
		});
	};
$(document).ready(function() {
	var opacidad = 1; 
	var fondo = 'url(img/rollover_proyectos.jpg) #b6b6b6';
	//pongo la opacidad de la barra en 0
    //$("#barra").css({opacity: "0"});

			// animated_menu_in( '#links','#barra','url(img/botones/links.jpg)',opacidad,'590','#FFF');
			// animated_menu_in( '#firma','#barra','url(img/botones/firma.jpg)',opacidad,'530','#000');
			// animated_menu_in( '#equipo','#barra','url(img/botones/equipo.jpg)',opacidad,'460','#FFF');
			// animated_menu_in( '#proyectos','#barra','url(img/botones/proyectos.jpg)',opacidad,'375','#FFF');
			// animated_menu_in( '#mobiliario','#barra','url(img/botones/mobiliario.jpg)',opacidad,'280','#FFF');
			// animated_menu_in( '#servicios','#barra','url(img/botones/servicios.jpg)',opacidad,'190','#FFF');
			// animated_menu_in( '#experiencia','#barra','url(img/botones/experiencia.jpg)',opacidad,'90','#FFF');
			// animated_menu_in( '#contacto','#barra','url(img/botones/contacto.jpg)',opacidad,'5','#FFF');
			if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
		
		   
		}else{
			animated_menu_in( '#firma','#barra','url(img/botones/firma.jpg)',opacidad,'590','#000');
			animated_menu_in( '#equipo','#barra','url(img/botones/equipo.jpg)',opacidad,'530','#FFF');
			animated_menu_in( '#proyectos','#barra','url(img/botones/proyectos.jpg)',opacidad,'440','#fff');
			animated_menu_in( '#mobiliario','#barra','url(img/botones/mobiliario.jpg)',opacidad,'350','#FFF');
			animated_menu_in( '#servicios','#barra','url(img/botones/servicios.jpg)',opacidad,'250','#FFF');
			animated_menu_in( '#experiencia','#barra','url(img/botones/experiencia.jpg)',opacidad,'160','#FFF');
			animated_menu_in( '#contacto','#barra','url(img/botones/contacto.jpg)',opacidad,'60','#FFF');
			animated_menu_in( '#links','#barra','url(img/botones/links.jpg)',opacidad,'0','#FFF');
		};

	animated_menu_out( '#menu','#barra',0,'-100');
	var abierto = false;
	var a = false;
	$('#menu a').click(function(){
			
		$('#barra').animate({opacity:0/*,right:-100*/}, 750);
		me =$(this).attr('href');
		me = me.split('#')[1];
		//alert(anchoventana);
		//alert(me);
		$('#content').empty();
			$.ajax({
				url: me,success: function(data) {
					$('#content').html(data);
					//$('#content').css({visibility:"visible",display:'none'});
					$('.btn_close').css({visibility:"visible",display:'none'});
					  switch(me){
					  case 'proyectos.html':
						  $.getScript('js/galeria_arquitectos.js');


					  unavez= true;
					  abrir(true);
					  // setInterval(function(){$('.wrapper_ancho_slider').css('height','350')},150);
					  break;
					  case 'mobiliario.html':
						  $.getScript('js/galeria_arquitectos.js', function() {
							 abrir();
							 $('.info_slide').animate({'bottom':"-=70px"}, 1000);
						switcher = false;
						  });
					  break;
					  case 'contacto.html':
					   $.getScript('js/contacto.js', function() {
							 abrir();
						  });
					  break;
					  case 'servicios.html':
					  abrir();
					  break;
					   case 'links.html':
					  abrir();
					  break;
					  case 'equipo.html':
					  abrir();
					  break;
					  case 'conocenos.html':
					  abrir();
					  break;
					  case 'experiencia.html':
					  $.getScript('jquery/jquery-ui.js');
					  $.getScript('jquery/jquery-mousewheel.js');
					  $.getScript('jquery/jScrollbar.jquery.js', function() {
						 $('.jScrollbar').jScrollbar();	 
						abrir();
					  });
					 
					  break;
					  case 'firma.html':
						  $.getScript('js/galeria_arquitectos.js', function() {
							 abrir();
							});
					  break;
					  default:
					  abrir();
					}
				 }
				 
			});
		});
		
		
		$('#wrapper').prepend('<div class="btn_close"></div>');
		
			function abrir(close_button_x){
				$('#tramado').css({background:"url(img/tramado2.png)"});
				$('#content').css('visibility','visible');
				//$('#content').css('opacity',0);
				$('.btn_close').fadeIn('slow');
				$('#content').fadeIn('slow');
				$('.wrapper_ancho_slider').css('height','380');
				if (a){
				$('#content').css('margin-left','-386px');
			}else{$('#content').css('margin-left',close_button_x);}
			};
			function cerrar(){
				$('.btn_close').fadeOut('slow');
				$('#content').css('visibility','hidden');
				//$('#content').hide('slow', function() {
				if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
					$('#tramado').css({background:"none"});
				}else {
					$('#tramado').css({background:"url(img/overlays/20.png)"});	
				}	
					
					$('#menu a').css('color','#999');
					$('#content').empty();
					$('body').bgStretcher.play();
				//});
			};
		$('.btn_close').click(function(){
			cerrar();
		});
	
	/*function minsize(){if($(window).width() < "991" || $(window).height() < "600") {$("#mensaje_error").css({visibility: "visible"}); }else { $("#mensaje_error").css({visibility: "collapse"}); }; };*/ //calling the function on resize event //$(window).resize(function() {minsize();}); // calling minsize when the browser starts //minsize(); //--------------- Estado de Botones
	$('#menu_proyectos ul li').click(function() {
			$('#menu_proyectos ul li').css('background','#F00');
			$(this).css('color','#fff');
		});
	});
});