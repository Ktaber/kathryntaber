$(document).ready(function(){


	var images = [
		'images/rias.jpeg',
		'images/soul.jpeg',
		'images/herban.jpeg',
		'images/java.jpeg',
		'images/dulce.jpeg',
		'images/revolution.jpeg',
	];

	i =0;

	$('#prevButton').click(function(){
		i--;

		if(i < 0){
			i = images.length -1;
		}

		$('#image').attr('src', images[i]);
	});

	
	$('#nextButton').click(function(){
		i++;

		if(i >= images.length){
			i = 0;
		}

		$('#image').attr('src', images[i]);
	});




});