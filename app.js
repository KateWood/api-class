var express	= require('express'),
	app		= express(),
	port	= process.env.PORT || 3000,
	apiRoutes = require('./routes/api.js')

app.get('/', function(req, res) {
	res.json({message: "Welcome to my app!"})
})

app.listen(port, function() {
	console.log("Server is running on", port)
})