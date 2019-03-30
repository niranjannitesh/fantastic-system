var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;


const uri = "mongodb+srv://himanshu:Himanshu103@cluster0-drmqc.mongodb.net/test?retryWrites=true"
mongoose.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("medicapp").collection("devices");
   // perform actions on the collection object
   client.close();
});
var Schema = mongoose.Schema;

var medicationSchema = new Schema({
	medicineName : {
		type: String
	},
	// dosage time in the format like number_L/D/B
	dosage : {
		type: String
	},
	_id : false
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
		medications: [medicationSchema],
		_id : false
});

var futureAppointmentsSchema = new Schema({
	date: {
		type: Date
	},
	doctorLicenseId : {
		type: String
	},
	_id : false
})

var userSchema = new Schema({
	name: {
		type: String
	},
	userType : {
		type : String,
		deault : "patient"
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
	checkupHistory: [checkUpHistorySchema],
	futureAppointments: [futureAppointmentsSchema]
});

userSchema.plugin(uniqueValidator);

var User = module.exports = mongoose.model("User", userSchema);
var Medication = mongoose.model("Medication", medicationSchema);
var CheckupHistory = mongoose.model("CheckupHistory", checkUpHistorySchema);
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