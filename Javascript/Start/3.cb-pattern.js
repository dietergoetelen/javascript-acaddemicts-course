// Examples callback usages
function doDbCall(data, callback) {
	// Simulate a delay
	setTimeout(function () {
		
		callback(null, { data: 'Success' });
		
	}, 2000);
}

doDbCall({ id: 1 }, function (error, result) {
	if (error) {
		console.log("Something went wrong");	
	} else {
		console.log(result);
	}
});

console.log("this is non blocking code");