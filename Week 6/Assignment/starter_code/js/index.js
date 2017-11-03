// want someone to choose a variable (cityType) using the drop down arrows.. this will then change the background to a picture of the city picked

// 1. need to establish the variables for the array of the cities

// 2. create a form with a . function using the main variable


// 3. establish the val()

// 4. run the function you want to happen when user uses drop-down, with console log to see of any errors and if it is initially working

// 5. create logic using if and else if statements, want background to change with cityType selected 


$(document).ready(function() {

var city = [
	'NYC',
	'SF',
	'LA',
	'ATX',
	'SYD',
];

	console.log(city);

	
		
	

for (var i=0;
	i< city.length;
	i++){
   $('<option/>').val(city[i]).text(city[i]).appendTo('#city-type');
}

	// $('#city-type').append('<option>NYC</option>');

	// 	console.log()


 	
	$('#city-type').change(function(){
 		var city = $("#city-type option:selected").val();
 
 	// $('body').css('background', '');
 	// console.log(background)

// });

	if (city == "NYC"){
			// console.log('background to New York City image');
			$('body').addClass('nyc');
		

		}

		else if (city == "SF"){
			// console.log('background to San Francisco image');
			$('body').addClass('sf');
		}

		 else if (city == "LA"){
			// console.log('background to Los Angeles image');	
			$('body').addClass('la');
		}

		 else if (city == "ATX"){
			// console.log('background to Austin image');
			$('body').addClass('austin');
		}
		
		 else if (city == "SYD"){
			// console.log('background to Sydney image');
			$('body').addClass('sydney');
			

		}

	})

		// event.preventDefault();

})








