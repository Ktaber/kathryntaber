$(document).ready(function(){


	var images = [
		'images/detergents.jpeg',
		'images/free_people.jpeg',
		'images/good_guys.jpeg',
		'images/kat.jpeg',
		'images/lush.jpeg',
		'images/matt.jpeg',
		'images/meyers.jpeg',
		'images/occ.jpeg',
		'images/toms.jpeg',
		'images/toms_shoes.jpeg',
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