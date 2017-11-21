$(document).ready(function() {





    $('form').submit(function(event) {
        var submit = $('input').val().toLowerCase();
        event.preventDefault();
      });	

    
    $('.hamburgerMenu').click(function(){
    	$('nav').slideToggle(200);
	});


    $('h2').hover(function() {

    	$(this).toggleClass('changeColor');
    	});

    // $('.about').hover(function() {

    //     $(this).toggleClass('changeColor');
    //     });

    function gohome(){
    	window.location.href ="Final_Project/index.html";
    };
	

});