function Foo() {
	this.message = "Hello World";
	this.timer = 2000;
	
	this.bar = function () {
		
		setTimeout(function () {
				
				console.log(this.message);

		}, this.timer);
		
	};
}

var foo = new Foo();
foo.bar();

/*
	- Situatie: "console.log(this.message)" logs undefined, hoe los je dit op? Wat is er fout en waarom?
*/