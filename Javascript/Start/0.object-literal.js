var car = {
	color: "red"
};

// car.drive();

/*
	car.drive() should log a message "Driviiiing"
*/


// Print all properties from car
for (var property in car) {
	console.log(property, "-->", car[property]);
}

console.log("=============================");

// Print properties except inherited
function MyCar() {
	this.maxSpeed = 400;
}

MyCar.prototype = car;

var newCar = new MyCar();

for (var property in newCar) {
	if (newCar.hasOwnProperty(property)) {
		console.log(property, "-->", newCar[property]); 
	}
}

// Remove the if and see what happens :-)