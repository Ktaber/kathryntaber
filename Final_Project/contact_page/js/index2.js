$(document).ready(function() {


	var fullName= '';




    $('form').submit(function(event) {
        var submit = $('input').val().toLowerCase();

    // });


    if (fullName == '') {
    	$('.loginError').show();
    	}
    if (email == '') {
    	$('.loginError').show();
    	}
    if (event ==''){
    	$('.loginError').show();    	
    	}

    	console.log('login error works');

    	event.preventDefault();
    });

});


// document.getElementById("info").onsubmit = function () {
//     var x = document.forms["info"]["name"].value;
//     var y = document.forms["info"]["email"].value;
//     var z = document.forms["info"]["event"].value;

//     var submit = true;

//     if (x == null || x == "") {
//         nameError = "Please enter your name";
//         document.getElementById("name_error").innerHTML = nameError;
//         submit = false;
//     }

//     if (y == null || y == "") {
//         emailError = "Please enter your email";
//         document.getElementById("email_error").innerHTML = emailError;
//         submit = false;
//     }

//     if (z == null || z == "") {
//         eventError = "Please enter your response";
//         document.getElementById("event_error").innerHTML = telephoneError;
//         submit = false;
//     }

//     return submit;
// }

// function removeWarning() {
//     document.getElementById(this.id + "_error").innerHTML = "";
// }

// document.getElementById("name").onkeyup = removeWarning;
// document.getElementById("email").onkeyup = removeWarning;
// document.getElementById("event").onkeyup = removeWarning;