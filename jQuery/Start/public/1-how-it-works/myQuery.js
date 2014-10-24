/*
	Basis functionaliteit hoe jQuery werkt
*/

var jQuery = (function () {
	function InnerQuery(selector) {
		this.element = document.querySelectorAll(selector);
	}
	
	InnerQuery.prototype.css = function (prop, value) {
		[].forEach.call(this.element, function (el) {
			el.style[prop] = value;
		});
		
		// Chaining
		return this;
	};
	
	InnerQuery.prototype.on = function (identifier, cb) {
		[].forEach.call(this.element, function (el) {
			el.addEventListener(identifier, cb, false);
		});
	};
	
	function JQuery(selector) {
		return new InnerQuery(selector);
	}
	
	JQuery.ajax = function (data) {
		console.log('Doing an ajax call');
	};
	
	JQuery.each = function (arr, cb) {
		console.log('Foreach loop');
	};
	
	return JQuery;
})();