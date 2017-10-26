var linkElements= document.getElementsByTagName('a');



// stop links from jumping on page
for (var i=0; i<linkElements.length; i++) {
	linkElements[i].onclick = function(event) {
		console.log(event);
	event.preventDefault();
	}
}



// Toggle between readmore and readless
var readmoreElement = document.getElementsByClassName('readmore');
var readlessElement = document.getElementsByClassName('readless');
var showthisElement = document.getElementById('show-this-on-click');



console.dir(readmoreElement); //Array
console.dir(readlessElement); //Array
console.dir(showthisElement); //Object


readmoreElement[0].onclick = function () {
	readmoreElement[0].style.display = "none";
	readlessElement[0].style.display = "block";
	showthisElement.style.display = "block";
};



readlessElement[0].onclick = function () {
	readlessElement[0].style.display = "none";
	readmoreElement[0].style.display = "block";
	showthisElement.style.display = "none";
};



// show learn more text

var learnmoretextElement = document.getElementById('learnmoretext');
var learnmoreElement = document.getElementsByClassName('learnmore');


console.dir(learnmoreElement);

learnmoreElement[0].onclick = function(event) {
	learnmoretextElement.style.display = "block";
	learnmoreElement[0].style.display = "none";
	event.preventDefault(); 
}



