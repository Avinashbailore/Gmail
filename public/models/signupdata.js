var mongoose = require('mongoose');
module.exports = new mongoose.Schema({


	
		firstname: {
			type:String,
			required:true,

		},
		lastname: {
			type:String,
			required: true,

		},
		password: {
			type:String,
			required : true

		},
		about: {
			type:String

		},
		email: {
			type:String,
			required:true
			// match:/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim
		},

		


		
});