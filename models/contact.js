var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', {									// Create a model called Hit and export it
	name: String,
	occupation: String,
	email: String,
	address: String,
	phone: String,
	relationship: String,
	description: String,
	img: String,
});
