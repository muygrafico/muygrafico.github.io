jQuery(document).ready(function($){
	var smallWindow = false;
	$('#login').css('display','none');
	//Login Menu code
	$('.button-login').click(function(){
		$('#login').slideToggle();
		$('.top-bar').removeClass('expanded');
	});

	function logoChanger(){
		var windowWidth = $(window).width();
		var scroll = $(window).scrollTop();
		// console.log('window width:'+windowWidth);
		// console.log('scroll to top:'+scroll);
		if(windowWidth  <= 640){
			$('#logo-image').attr('src','assets/img/logo_pd_white.png');
		};
		if(windowWidth > 880){
			$('#logo-image').attr('src','assets/img/logo_pd.png');
		};
		if( windowWidth > 640 && windowWidth <= 890 ){
			$('#logo-image').attr('src','assets/img/logo_pd_small.png');
		};
		if(scroll > 50 && windowWidth > 640){
			$('#logo-image').attr('src','assets/img/logo_pd_small.png');
			$(".important-class").addClass("padding-on-my-header");
		};
		if(scroll <= 50 && windowWidth > 880){
			$('#logo-image').attr('src','assets/img/logo_pd.png');
			$(".important-class").removeClass("padding-on-my-header");
		};
	}
	logoChanger();
	$(window).scroll(function(){ logoChanger(); });
	$(window).resize(function(){ logoChanger(); });
});