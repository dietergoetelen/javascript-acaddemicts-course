var jQuery = {
	ajax: function () {
		console.log('Doing an ajax call using jQuery');
	},
	element: function () {
		console.log('Selecting an element using jQuery');
	}
};

var $ = {
	ajax: function () {
		console.log('Doing an ajax call using $');
	},
	element: function () {
		console.log('Selecting an element using $');
	}
};

(function () {
	
	$.ajax();
	$.element();
	
}());

/*
	- Situatie:
		In uw project zijn er 2 libraries die gebruik maken van het $-teken.
		Dit veroorzaakt conflicten met uw project, bovenstaande code gebruikt de ajax functie van het object $, terwijl je de ajax functie van jQuery wilt gebruiken.
	- Hoe los je dit op in bovenstaande code zonder het $-teken te veranderen door jQuery?
*/