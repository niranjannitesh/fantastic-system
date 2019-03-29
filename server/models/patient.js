var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

mongoose.connect('mongodb://localhost:27017/medicapp')

var Schema = mongoose.Schema;

var medicationSchema = new Schema({
	medicineName : {
		type: String
	},
	// dosage time in the format like number_L/D/B
	dosage : {
		type: String
	}
});

var checkUpHistorySchema = new Schema({
		date : {
			type : Date
		},
		doctorLicenseId : {
			type : String
		},
		rating: {
			type : Number
		},
		medications: [medicationSchema]
});

var futureAppointmentsSchema = new Schema({
	date: {
		type: Date
	},
	doctorLicenseId : {
		type: String
	}
})

var userSchema = new Schema({
	name: {
		type: String
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	age:{
		type: Number,
		required : true,
	},
	sex:{
		type: String,
		required : true,
	},
	phoneNumber: {
		type: Number,
		required : true,
	},
	eatingHabit : [],
	checkupHistory: [checkUpHistorySchema],
	futureAppointments: [futureAppointmentsSchema]
});

userSchema.plugin(uniqueValidator);

var User = module.exports = mongoose.model("User", userSchema);
var Medication = mongoose.model("Medication", medicationSchema);
var CheckupHistory = mongoose.model("CheckupHistory", checkUpHistorychema);
var FutureAppointment = mongoose.model("FutureAppointment", futureAppointmentsSchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.hash(newUser.password, SALT_WORK_FACTOR, function(err, hash) {
      if (err) return err;
      newUser.password = hash;
      newUser.save(callback);
    });
}

module.exports.getUserByUsername = function(username, callback){
	User.findOne({username:username}, callback);
}

module.exports.comparePassword = function(candidatePassowrd, hash, callback){
    bcrypt.compare(candidatePassowrd, hash, function(err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

module.exports.getUserById = function(id, callback) {
	User.findOne({_id : id}).exec(callback);
};

module.exports.deleteUserById = function(user_id, callback){
	User.remove({_id : user_id}).exec(callback);
}