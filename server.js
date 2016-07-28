var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://okcoders:okcoders@okcoders.co/yahya');
mongoose.Promise = Promise;

var app = express();
app.use(bodyParser());
app.use(express.static('./public'));

var port = process.env.PORT || 8080
app.listen(port, function() {
	console.log('Listening at http://localhost:', port);
});

var Contact = require('./models/contact');


app.get('/contacts', function(req,res) {
	Contact.find().populate('contractor').sort({bounty:-1}).exec().then(function(contacts) {
		res.json(contacts);			
	});
});

app.post('/contacts', function(req,res) {		
	var contact = req.body;	
	if(contact._id) {
		Contact.findOneAndUpdate({_id:contact._id}, contact).exec().then(function() {
			res.json(true);
		});
	} else {
		var newContact = new Contact(contact);
		newContact.save().then(function() {
			res.json(true);
		});
	}
});

app.delete('/contacts/:id', function(req,res) {
	var id = req.params.id;
	Contact.findOneAndRemove({_id:id}).exec().then(function() {
		res.json(true);
	});
});
