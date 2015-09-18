
$(document).ready(function() { 
	
	$(".sections").eq(0).css("display","block");
	currentpos = 0;
	myHeight = 48;
	// $('#content').css('margin-top','-370px');
	$("#menu li a").each(function(index) {
		// index = index +1;
	  	$(this).click(function() {
			//alert('me '+index);
			
			$(".sections").css("display","none");			
			$(".sections").eq(index).css("display","block");

			finalpos = index;
			//var offset = $( this ).offset();
			if(finalpos != currentpos){
				
				if(finalpos>currentpos){
					//alert('es mayor'); 
					$("#tracker1").text("es mayor");
					position = (index-currentpos) * myHeight ;
					
					$( "#content" ).animate({ top: "+="+position }, 250);
					currentpos = index;
					$("#tracker2").text(position);
				}
				else { 
					$("#tracker1").text("es menor");
					
					position = (currentpos - index) * myHeight ;
					$( "#content" ).animate({ top: "-="+position }, 250);
					currentpos = index;
					$("#tracker2").text(position);
				}
			}else{
				//alert('es igual');	
			}
				
		});
	});


});

