// File A
var RD = (function (RD) {
	var dataContext = {};
	
	
	
	
	RD.dataContext = dataContext;
	return RD;
})(RD || {});

// File B
var RD = (function (RD) {
	var logger = {};
	
	
	
	RD.logger = logger;
	return RD;
})(RD || {});


try {
	int.parse(letItFail);
} catch (ex) {
	RD.logger.log(ex);
}

/*
	Breid logger en datacontext verder uit. Zorg ervoor dat datacontext volgend bericht logged:
		Exception: [ex] logged into the database
*/