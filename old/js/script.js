$(document).ready(function(){


	var toTop =  $('.toTop');

	toTop.click(function(){
		$("html, body").animate({scrollTop:0}, "fast");
		// return false;
	});

});


	var header = document.getElementById('header');
	var headerHeight = header.offsetHeight;
	console.log(headerHeight);


	var background = document.getElementById('back');
	background.style.top = headerHeight+'px';


	var content = document.getElementById('content');
	content.style.top = headerHeight+'px';

	// var footer = document.getElementById('footer');
	// footer.style.top = headerHeight+'px';



// $(document).ready(function(){

// 	widthMedia = window.outerWidth;


// 	if(widthMedia >= 0 && widthMedia <= 767) {

// 			$('.menu').css("transform","translateX(-100%)");
// 			$('.overlay').css("display",'none');

// 	        $(".toggle-menu").click(function () {
// 	            $('.menu').css("transform", "translateX(0%)");
// 	            $('.overlay').css("display", "block");
// 	        });


// 	        $(".overlay").click(function(){
// 	        	$(this).css("display","none");
// 	        	$(".menu").css("transform","translateX(-100%)");
// 	        })


// 	        $(".btn-close").click(function () {
// 	            $('.menu').css("transform", "translateX(-100%)");
// 	            $('.overlay').css("display", "none");
// 	        });
// 	    }
// 	    else if(widthMedia >= 768){
// 	        $('.menu').css("transform", "translateX(0%)");
// 	    }
// })



// var resize = function(){
// 	var header = document.getElementById('header');
// 	var headerHeight = header.offsetHeight;

// 	background.style.top = headerHeight+'px';
// 	content.style.top = headerHeight+'px';
// 	footer.style.top = headerHeight+'px';



//     widthMedia = window.outerWidth;
//     console.log(widthMedia);


// 	    $(document).ready(function(){
// 	    if(widthMedia >= 0 && widthMedia <= 767) {

// 	    	$('.menu').css("transform","translateX(-100%)");
// 	    	$('.overlay').css("display",'none');

// 	        $(".toggle-menu").click(function () {
// 	            $('.menu').css("transform", "translateX(0%)");
// 	            $('.overlay').css("display", "block");
// 	        });


// 	        $(".overlay").click(function(){
// 	        	$(this).css("display","none");
// 	        	$(".menu").css("transform","translateX(-100%)");
// 	        })


// 	        $(".btn-close").click(function () {
// 	            $('.menu').css("transform", "translateX(-100%)");
// 	            $('.overlay').css("display", "none");
// 	        })
// 	    }
// 	    else if(widthMedia >= 768){
// 	        $('.menu').css("transform", "translateX(0%)");
// 	    }
// 	});
// };


var setDefault = function(size){

	var elemMenu = $('nav.menu');
	var overlay = $('.overlay');
	if(size < 767 ){
		elemMenu.css('transform', 'translateX(-100%)');
		overlay.css('display', 'none');
	}

	else if(size > 768){
		elemMenu.css('transform', 'translateX(0%)');
		overlay.css('display', 'none');
	}
}


$(window).resize(function(){
	widthDisplay();
})


var widthDisplay = function(){
	var widthTotal = $('html body').width();
	setDefault(widthTotal);
	menuOpen(widthTotal);
	menuClose(widthTotal);
}


var menuOpen = function(size){

	if(size < 768){
		$('div.toggle-menu').click(function(){
			$('nav.menu').css('transform','translateX(0%)');
			$('.overlay').css('display', 'block');
		})
	}

}

var menuClose = function(size){

	if(size < 768){
		$('.btn-close').click(function(){
			$('nav.menu').css('transform', 'translateX(-100%)');
			$('.overlay').css('display', 'none')
		});
	}

}



$(document).ready(function(){
	widthDisplay();



	var ypos = window.pageYOffset;
	var sekat = $('.sekat-komentar').offset();
	sekat = sekat.top;



	var scroll = function(){
		var ypos = window.pageYOffset;
		var sekat = $('.sekat-komentar').offset();
		sekat = sekat.top;
		showNext(ypos, sekat);
	}

	window.addEventListener('scroll', scroll); 

var showNext = function(ypos, sekat){
		sekat = sekat-500;
		if(ypos >= sekat){
			$('.nextpost').css('transform', 'translateX(0%)');
		}
		else {
			$('.nextpost').css('transform', 'translateX(100%)');
		}

		console.log(sekat +" "+ypos);
	}
	showNext(ypos, sekat);
	

});

