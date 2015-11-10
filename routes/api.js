var express = require('express'),
	api		= express.Router()

var data = { students: [ {name: "Alexander Juneja", email: "alexjuneja1@gmail.com"}, {name: "Andrew Kim", email: "andyjinkim@gmail.com"}, {name: "Brian Frager", email: "btfrager@gmail.com"}, {name: "Genny Langan", email: "cglangan78@gmail.com"}, {name: "Colin Chan", email: "clnsdabst@gmail.com"}, {name: "Crystal Murray", email: "crystalsmurray@gmail.com"}, {name: "Dan McQuillan", email: "djmcquillan76@gmail.com"}, {name: "Eddie Jung", email: "ejung716@gmail.com"}, {name: "Ellie Shahla", email: "ess9213@yahoo.com"}, {name: "Emma Gilhuly", email: "emmagilhuly@me.com"}, {name: "Eunice Chang", email: "omgunis@gmail.com"}, {name: "Ivy Wong", email: "ivykww@gmail.com"}, {name: "John Meredith", email: "johnm589@yahoo.com"}, {name: "Juan Ruelas", email: "jruel006@ucr.edu"}, {name: "Ken Carrington", email: "kcarring93@verizon.net"}, {name: "Kevin Williams", email: "kevin.williams@onidaprep.com"}, {name: "Kristen Gunn", email: "ohkristen@creativekdg.com"}, {name: "Lilly Ghassemieh", email: "lillygh@gmail.com"}, {name: "Nick Hendren", email: "nhendren7@gmail.com"}, {name: "Rich Donnellan", email: "rich.donnellan@gmail.com"}, {name: "Sam Hager", email: "sam.hager11@gmail.com"}, {name: "Sam Richardson", email: "samrichardson01@hotmail.com"}, {name: "Santiago Casar", email: "santiago@nowhereprod.com"}, {name: "Sean Esteva", email: "seangeleno@gmail.com"}, {name: "Sean Hall", email: "seanhall22@gmail.com"}, {name: "Seri Orfali", email: "seriorfali@gmail.com"}, {name: "Stefanie Koenig", email: "stefanie.l.koenig@gmail.com"}, {name: "Ted Shumway", email: "shumway.ted@gmail.com"}, {name: "Veronica Sykes", email: "vasykes@gmail.com"} ]}

api.get('/', function(req, res) {
	res.json(data)
})

api.get('/students', function(req, res) {
	res.json(data.students)
})

api.get('/students/:id', function(req, res) {
	res.json(data.students[req.params.id - 1])
})

api.post('/students', function(req, res) {
	data.students.push({name: "Some New Student", email: "newstudent@gmail.com"})
	res.json(data.students)
})

api.delete('/students/:id', function(req, res) {
	data.students.splice(req.params.id - 1, 1)
	res.json(data.students)
})

module.exports = api