var express = require('express'),
	api		= express.Router()

api.get('/', function(req, res) {
	res.json({message: "My API's root route!"})
})

module.exports = api