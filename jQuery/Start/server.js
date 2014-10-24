var express = require('express'),
	path = require('path'),
	app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/1', function (req, res) {
	res.sendFile('public/1-how-it-works/index.html', {root: __dirname });
});

app.listen(3000, function () {
	console.log('Server listening on port', 3000);
});