// Basic class
function Car1() {
	this.color = "Red";
}

var car1 = new Car1();
console.log(car1.color);

// Class with constructor
function Car2(options) {
	this.color = options.color || "Red";
}

var car2 = new Car2( { color: "Blue" } );
console.log(car2.color);

// Prototypal inheritance
Car2.prototype.drive = function () {
	console.log("I'm driving a car in", this.color);
};

car2.drive();