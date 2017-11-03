

// 1. When user submits the form: get input field value
// variables
// var cityType = "input";initial variable made before I realized var cityType was already implemented in the .susbmit function
var images = [
		'images/nyc.jpg',
		'images/sf.jpg',
		'images/la.jpg',
		'images/austin.jpg',
		'images/sydney.jpg',
	];

// i=0; don't need to use this

// forms// initially given
// need to do .submit bc allows enter key to submit as well
       $(document).ready(function() {
      $('form').submit(function(event) {
        var cityType = $('input').val().toLowerCase();
        $('body').attr('class', '');

 // value of what you want to happen when you input in the field

        changeBackground(cityType);
     

        console.log(cityType);

        event.preventDefault();
      });
    })

		
 

// Running the function :: functionName()







// Setting/Declaring a function
//function name (passing information through the parameter)
function changeBackground (cityType){

	
// comparing types of input values to each other
// adding the function to have the background image change with the city

	if (cityType === "new york" || cityType === "new york city" || cityType  === "nyc"){
			console.log('background to New York City image');
			$('body').addClass('nyc');
			
		}

		else if (cityType  === "san francisco" || cityType  === "sf" || cityType  === "bay area"){
			console.log('background to San Francisco image');
			$('body').addClass('sf');
		}

		else if (cityType  === "los angeles" || cityType  === "la" || cityType  === "lax"){
			console.log('background to Los Angeles image');	
			$('body').addClass('la');
		}

		else if (cityType  === "austin" || cityType  === "atx"){
			console.log('background to Austin image');
			$('body').addClass('austin');
		}
		
		else if (cityType  === "sydney" || cityType  === "syd"){
			console.log('background to Sydney image');
			$('body').addClass('sydney');
			

		}
};



// tried to do .attr(), before css was implemented
// using .attr() to include images attached to their name

	// function changeBackground (cityType){
	// if (cities === "New York" || cities === "New York City" || cities === "NYC"){
	// 		$('#city-type').css('background-image', images[1]);
	// 	} console.log('#city-type');
	// };
	// 	else if ( cities === "San Francisco" || cities === "SF" || cities === "Bay Area"){
	// 		$(cities).attr('src', images[1]);
	// 	}
	// 	else if ( cities === "Los Angeles" || cities === "LA" || cities === "LAX"){
	// 		$(cities).attr('src', images[2]);	
	// 	}
	// 	else if (cities === "Austin" || cities === "ATX"){
	// 		$(cities).attr('src', images[3]);
	// 	}
		
	// 	else if (cities === "Sydney" || cities === "SYD"){
	// 		$(cities).attr('src', images[4]);
	// 	}

