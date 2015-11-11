var express	= require('express'),
	app		= express(),
	port	= process.env.PORT || 3000,
	apiRoutes = require('./routes/api.js'),
	giphyRoutes = require('./routes/giphy.js')

app.get('/', function(req, res) {
	res.json({message: "Welcome to my app!"})
})

app.use('/api', apiRoutes)
app.use('/giphy', giphyRoutes)

app.listen(port, function() {
	console.log("Server is running on", port)
})