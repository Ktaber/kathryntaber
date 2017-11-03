
  var currentTemp = 71;
  var setTemp = $("#setTemperature");
  var newTemp = $('#newTemp');
  var body = $("body");
  var text = $("#currentTemp");

/*Running the function :: functionName()*/
changeBackground(currentTemp);


/*Click Event*/
setTemp.click(function(){
	currentTemp = newTemp.val();
	console.log(currentTemp);
	changeBackground(currentTemp);
});

/*Setting/Declaring a function*/
//function name (passing information through the parameter)
function changeBackground(currentTemp){
	text.text(currentTemp);

	if (currentTemp <= 65){
		body.css("background-color", 'blue');
	} else if(currentTemp > 65 && currentTemp <= 85){
		body.css("background-color", 'yellow');
	} else if (currentTemp >85 && currentTemp < 95){
		body.css("background-color", 'orange');
	} else {
		body.css("background-color", 'red');
	}
}







