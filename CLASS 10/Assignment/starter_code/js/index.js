

// 1. When user submits the form: get input field value
// variables
// var cityType = "input";
var update = $('#submit-btn');
var images = [
		'images/citipix_skyline.jpg',
		'../images/nyc.jpg',
		'images/sf.jpg',
		'images/la.jpg',
		'images/austin.jpg',
		'images/sydney.jpg',
	];

i=0;

// forms// click event//
       $(document).ready(function() {
      $('form').submit(function(event) {
        var cityType = $('input').val();
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

	if (cityType === "New York" || cityType === "New York City" || cityType  === "NYC"){
			console.log('background to New York City image');
		
			$('#city-type').css("background-image", url('../images/nyc.jpg'));	
		}

		else if (cityType  === "San Francisco" || cityType  === "SF" || cityType  === "Bay Area"){
			console.log('background to San Francisco image');
			$('#city-type').css("background-image", "images/sf.jpg");
		}

		else if (cityType  === "Los Angeles" || cityType  === "LA" || cityType  === "LAX"){
			console.log('background to Los Angeles image');	
			$('#city-type').css("background-image", "images/la.jpg");
		}

		else if (cityType  === "Austin" || cityType  === "ATX"){
			console.log('background to Austin image');
			$('#city-type').css("background-image", "images/austin.jpg");
		}
		
		else if (cityType  === "Sydney" || cityType  === "SYD"){
			console.log('background to Sydney image');
			$('#city-type').css("background-image", "images/sydney.jpg");
			

		}
		else {
			$('#city-type').css("background-image", "images/citipix_skyline.jpg");
	}
};


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

