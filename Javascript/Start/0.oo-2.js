// Extend string, test in chrome dev tools
String.prototype.crazyness = function (amount) {
	if (! amount) {
		amount = 1;
	}
	
	var retVal = [];
	
	for (var i = 0; i < this.length; i++) {
		for (var j = 0; j < amount; j++) {
			retVal.push([this[i]]);
		}
	}
	
	return retVal.join("");
}

"this function makes me go crazy".crazyness(5);

// Oefening
Array.prototype.pluck = function (prop) {

};

var myData = [
	{
		name: 'Foo',
		value: 1
	},
	{
		name: 'Bar',
		value: 2
	}
];

console.log(myData.pluck('name')); // - should log ['Foo', 'Bar']
console.log(myData.pluck('value')); // - should log [1, 2]
console.log(myData.pluck('notsupported')); // - should throw an error 'property not supported'