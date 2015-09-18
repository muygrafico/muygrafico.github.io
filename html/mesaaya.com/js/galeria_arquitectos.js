// JavaScript Document
$(document).ready(function() {
	function precarga(selector,index){
		//var location = 'http://mesaaya.com/';
		var location = '';
		var img = new Image();
		var imagen =$(selector).attr('src');
		var informacion =$(selector).attr('alt');
		var contenido ='<span><span class="info_slide"><span>'+informacion+'</span></span><div id="loader_galeria'+index+'"class="loading"></div></span>';
		$(selector).before(contenido);
		$(img).load(function () {
			$('.loading').removeClass('loading');
			$(this).fadeIn();
        }).error(function () {'error al cargar la imagen'}).attr('src',location+imagen);
	} 
	var index =0;
	$('.slider .botones_galeria').prepend("<div id='next' class='botones_nav'></div><div id='previous' class='botones_nav'></div>")
			//Agrego un identificador a los botones de la galeria
	$('#menu_proyectos ul li').each(function(index) {
	// $(this).text());
	index = index +1;
	var total = index;
	$(this).attr({
		id:'btn_proyecto'+ index 
		});
	});
	$('#menu_firma ul li').each(function(index) {
	// $(this).text());
	index = index +1;
	var total = index;
	$(this).attr({
		id:'btn_proyecto'+ index 
		});
	});
			var p_actual = 1;
			var alto_slides =$('.slider ul li').height();
			//alert (ancho_slides);
			$('#menu_proyectos ul li').click(function(){
				var id = $(this).attr("id");
				boton= id.split('btn_proyecto');
				var p_final = (boton[1]);
				if (p_final != p_actual)
				 {
					if(  p_actual <p_final){
						moverse =p_final-p_actual;
						$('#galerias').animate({'margin-top':"-="+alto_slides* moverse+"px"}, 1000); 
						//alert(moverse);
					} else if (  p_actual> p_final){
						moverse =(p_actual-p_final);
						$('#galerias').animate({'margin-top':"+="+alto_slides* moverse+"px"},400*moverse);
						 //alert(moverse);
						}
					}
				 p_actual=p_final;
			});
			$('#menu_firma ul li').click(function(){
				var id = $(this).attr("id");
				boton= id.split('btn_proyecto');
				var p_final = (boton[1]);
				if (p_final != p_actual)
				 {
					if(  p_actual <p_final){
						moverse =p_final-p_actual;
						$('#galerias').animate({'margin-top':"-="+alto_slides* moverse+"px"}, 1000); 
						//alert(moverse);
					} else if (  p_actual> p_final){
						moverse =(p_actual-p_final);
						$('#galerias').animate({'margin-top':"+="+alto_slides* moverse+"px"},400*moverse);
						 //alert(moverse);
						}
					}
				 p_actual=p_final;
			});
			//Function Switcher para mostrar/Ocultar la información de cada imagen
			//$('.info_slide').animate({'bottom':"-=70px"}, 1000);
			var switcher = false;	
			$('.switch_info').click(function(){
				if (switcher == false){
					$('.info_slide').animate({'bottom':"-=70px"}, 1000);
					switcher=true;
					//alert(switcher);
					}else {
					$('.info_slide').animate({'bottom':"+=70px"}, 1000);
						switcher = false;
						//alert(switcher);
					};
			});
			function galeria_arquitectos(slider,state) {
				//$(slider+' #next').css({'background':'#FFF'});
				$(slider+' ul li img').each(function(imagen) {
				imagen  = new Image();
				var img_src = $(this).attr('src');
				//alert(img_src);
				imagen +=1;
				});
			//$(slider+'ul li span').prepend(" <span class='switch_info'></span>");
			//$(slider+'ul li span').prepend(" <span class='switch_info'></span>");
//IMPORTANTE> CONTADOR DE IMAGENES	 	$('<div class="caja_texto"></div>').insertBefore(slider+' .ancho_slider');
			var slides = $(slider+' ul li').length;

			if(slides>1){
			$(slider).prepend("<div class='botones_galeria'><div id='next' class='botones_nav'></div><div id='previous' class='botones_nav'></div></div>");
			}else{
				$(slider).prepend("<div class='botones_galeria'></div>");
				}
//IMPORTANTE> CONTADOR DE IMAGENES	$(slider).append('<div class="wrapper_ancho_slider"><div class="caja_texto"></div><div id="ancho_slider"></div></div>');
			$(slider).append('<div class="wrapper_ancho_slider"><div id="ancho_slider"></div></div>');
			//$(slider+' ul').clone().appendTo(slider+' #ancho_slider');
			var copia =$(slider+' ul').clone();
			$(slider+' #ancho_slider').append(copia);
			//$(slider+' ul').attr('id',slider);
			$(slider+' ul:nth-child(2)').remove();
				$(slider+' #ancho_slider').removeAttr('id').attr('class','ancho_slider');
				//Set The variables
				var ancho=0;
				var counter =1;
				var n = $(slider+" ul li").length;
				//Count Each Li inside Slider to know the total width
				$(slider+" ul li").each(function() {
					 ancho = ancho + $(this).width();
					 $(slider+' .ancho_slider').css('width',(ancho*2));
				  });
				// Uses the Total width of the slider minus the witdh of one slide to set the start position
				var startPosition=ancho - $(slider+" ul li").width();
				//Ingreso La el # de la posicion de la imagen Actual + la longitud del slider			 
	//IMPORTANTE> CONTADOR DE IMAGENES	 $(slider+' .caja_texto').text(counter+'/'+n);
				$(slider + ' #next').click(function(){
					counter =counter + 1;
					//alert(counter);
								 if (counter > n){
									 counter =1;
									$(slider+' ul').animate({'margin-left':"+="+startPosition+"px"}, 1500);
								 }else {
									$(slider+' ul').animate({'margin-left':"-="+$(slider+" ul li").width()+"px"}, 1000);
								 };
					//Cambio el inidicar de posición al dar click a next			 
	//IMPORTANTE> CONTADOR DE IMAGENES	  $(slider+' .caja_texto').text(counter+'/'+n);
					//alert('estoy en'+counter+'de:'+n);
					});
				//alert('esta es la galeria:'+slider+' estoy en'+counter+'de:'+n);
				
				
				$(slider + ' #previous').click(function(){
					counter =counter - 1; 
					//alert(counter);
					if (counter <= 0){
						counter =n;
						$(slider+' ul').animate({'margin-left':"-="+startPosition+"px"}, 1500);
					}else {
						$(slider+' ul').animate({'margin-left':"+="+$(slider+" ul li").width()+"px"}, 1000);
					}; 
					//Cambio el inidicar de posición al dar click a previous			 
	//IMPORTANTE> CONTADOR DE IMAGENES	      $(slider+' .caja_texto').text(counter+'/'+n);
					//alert(counter);
				});
				
			};
		$(' li img').each(function(index) {
			var imagen = $(this)[0];
			precarga(imagen,index);
		});
		$('.slider').each(function(index) {
			slider='#'+$(this).attr('id');
			galeria_arquitectos(slider,true);
		});
/*		$('.slider2').each(function(index) {
			slider='#'+$(this).attr('id');
			galeria_arquitectos(slider,false);
		});
*/		galeria_arquitectos('mobiliario');
		$('.info_slide').css({'opacity':0.8});
		
		$('#menu_proyectos ul li, #menu_proyecto ul li ').click(function() {
			$(this).css('background','#111111');
			$('#menu_proyectos ul li a').css('color','#444');
			$(this).children().css('color','#FFF');
		});
		
		
//IMPORTANTE> CONTADOR DE IMAGENES	 $('.caja_texto').css('opacity',0.60);

	var abierto = false;
	$('#menu_proyectos_main li a, #btn-back a').click(function(){
			
		$('#barra').animate({opacity:0/*,right:-100*/}, 750);
		me =$(this).attr('href');
		me = me.split('#')[1];
		//alert(anchoventana);
		//alert(me);
		$('#content').empty();
		$('.switch_info').empty();
			$.ajax({
				url: me,success: function(data) {
					$('#content').html(data);
					//$('#content').css({visibility:"visible",display:'none'});
					$('.btn_close').css({visibility:"visible",display:'visible'});
					  switch(me){
					  case 'vivienda.html':
						  $.getScript('js/galeria_arquitectos.js');
							// unavez= true;	   
					  abrir();
					  break;
					  case 'comercial.html':
						  $.getScript('js/galeria_arquitectos.js');
						  // unavez= true;	
					  abrir();
					  break;
					  case 'institucional.html':
						  $.getScript('js/galeria_arquitectos.js');
						  // unavez= true;	
					  abrir();
					  break;
					  case 'renovacion.html':
						  $.getScript('js/galeria_arquitectos.js');
						  // unavez= true;	
					  abrir();
					  break;
					  case 'proyectos.html':
						  $.getScript('js/galeria_arquitectos.js');
							// unavez= true;	   
					  abrir();
					  break;
					  default:
					  abrir();
					}
				 }
				 
			});
		});



});

