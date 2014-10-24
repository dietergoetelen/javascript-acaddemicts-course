var Foo = (function () {
	
	function Foo() {
		this._bar = "Private naming convention";
	}
	
	Foo.prototype.getBar = function () {
		return this._bar;
	};
	
	Foo.prototype.setBar = function (value) {
		this._bar = value;
	};
	
	return Foo;
	
}());

var foos = [new Foo(), new Foo(), new Foo()];

foos.forEach(function (foo, i) {
	foo.setBar("Another message " + i);
	console.log(foo.getBar());
});

// --> how jQuery works: http://jsfiddle.net/wpenph4p/1/