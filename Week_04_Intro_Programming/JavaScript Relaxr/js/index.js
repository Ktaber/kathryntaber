var readmoreElement = document.getElementsByClassName('readmore');
var readlessElement = document.getElementsByClassName('readless');
var learnmoretextElement = document.getElementById('learnmoretext');
var learnmoreElement = document.getElementsByClassName('learnmore');
var showthisElement = document.getElementById('show-this-on-click');








// console.log(readmoreElement);



console.dir(readmoreElement);
readmoreElement.onclick = function () {
	readmore.display = "hide";
	readless.display = "show";
	readless.Text.display = "show";
	show-this-on-click.display = "show";
}

console.dir(readlessElement);
readlessElement.onclick = function () {
	// do the opposite
	readless.display = "hide";
	readmore.display = "show";
	readmore.Text.display = "show";
	show-this-on-click.display = "hide";
}

console.dir(learnmoreElement);
learnmoreElement.onclick = function () {
	learnmoretext.display = "show";
	learnmore.display = "hide";

}