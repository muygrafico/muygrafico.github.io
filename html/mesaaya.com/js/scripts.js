$(document).ready(function(){
		$('#menu a').click(function(){
			$('body').bgStretcher.pause();
		});
        //  Initialize Backgound Stretcher	   
		$('body').bgStretcher({
			images: [
					 'img/home/1.jpg',
					 'img/home/2.jpg',
					 'img/home/3.jpg',
					 /*'img/home/4.jpg',*/
					 'img/home/5.jpg',
					 'img/home/6.jpg',
					 'img/home/7.jpg',
					 'img/home/8.jpg',
					 // 'img/home/9.jpg',
					 'img/home/10.jpg',
					 // 'img/home/11.jpg',
					 'img/home/12.jpg',
					 // 'img/home/13.jpg',
					 'img/home/14.jpg',
					 'img/home/15.jpg',
					 'img/home/16.jpg',
					 'img/home/17.jpg'
					 ],
			imageWidth: 1024, 
			imageHeight: 768,
			slideShow: true, 
			slideDirection: 'N',
			slideShowSpeed: 2000,
			nextSlideDelay:6000,
			transitionEffect: 'fade',
			sequenceMode: 'random',
			buttonPrev: '#prev',
			buttonNext: '#next',
			pagination: '#nav',
			anchoring: 'left center',
			anchoringImg: 'left center',
			preloadImg :false
		});
	});