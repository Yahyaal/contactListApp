var mongoose = require('mongoose');

module.exports = mongoose.model('Hit', {									// Create a model called Hit and export it
	name: String,
	occupation: String,
	email: String,
	address: String,
	phone: String,
	relationship: String,
	description: String,

	//contractor: {type:mongoose.Schema.Types.ObjectId, ref:'Contractor'},	// contractor is an ObjectId that references the Contractor model
	/*bids: [{
		name: String,			// The bidder's name
		amount: Number,			// The bid amount
		days: Number			// Number of days to complete the job
	}]*/
});
