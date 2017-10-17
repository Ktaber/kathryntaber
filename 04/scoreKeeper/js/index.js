var addZeroElement = document.getElementById('zero');
var addFiveElement = document.getElementById('add5');
var addTenElement = document.getElementById('add10');
var subOneElement = document.getElementById('sub1');
var results = document.getElementById('result');
var total = 0;
var randomElement = document.getElementById('random');




console.dir(addZeroElement);
addZeroElement.onclick = addZero;
addFiveElement.onclick = addFive;
addTenElement.onclick = addTen;
subOneElement.onclick = subOne;
randomElement.onclick = function(){
	var number = prompt("what's your number?");
	addRandom(number);
};


results.onmouseover = function() {
	results.style.color = "blue";
};

results.onmouseout = function() {
	results.style.color = "green";
};






/*My functions Go Here */
function addZero() {
total = total + 0;
results.innerHTML = total;
}

function addFive() {
total = total + 5;
console.log(total);
results.innerHTML = total;
}

function addTen() {
total = total + 10;
results.innerHTML = total;
}

function subOne() {
total = total - 1;
results.innerHTML = total;
}

function addRandom(number) {
total = total + Number(number);
results.innerHTML = total;

}


/*testing out an object*/

var person = {
	firstName: "Katie",
	lastName: "Taber",
	age: "30",
	favoriteColor: "blue",
	favoriteSnack: "Hippeas",
	msg: function() {
		var msg = "My name is " + this.firstName;
		return msg;
	}
};

console.log(person.msg());



