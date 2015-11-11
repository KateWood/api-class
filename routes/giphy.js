var	express = require('express'),
	giphy	= express.Router(),
	request = require('request')

giphy.get('/:query', function(req, res) {
	var searchString = "http://api.giphy.com/v1/gifs/search?q=" + req.params.query + "&api_key=dc6zaTOxFJmzC"
	request(searchString, function(error, response, body) {
		var imageSource = JSON.parse(body).data[0].images.fixed_height.url
		res.send('<img src=" ' + imageSource + '">')
	})
})

module.exports = giphy