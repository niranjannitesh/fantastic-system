var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

mongoose.connect('mongodb://localhost:27017/medicapp')

var db = mongoose.connection;

var Schema = mongoose.Schema;

var appointmentSchema = new Schema({
	userId : { 
		type: String
	},
	appointmentDate : {
		type : Date
	},
	 _id: false
});

var doctorSchema = new Schema({
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
	department: {
		type: String,
		required: true
	},
	licenseId: {
		type: String,
		required: true,	
	},
	rating: {
		type: String,
		required: true,
	},
	appointmentDetails: [appointmentSchema]
});

userSchema.plugin(uniqueValidator);

var Doctor = module.exports = mongoose.model("Doctor", doctorSchema);
var Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports.createDoctor = function(newDoctor, callback) {
    bcrypt.hash(newUser.password, SALT_WORK_FACTOR, function(err, hash) {
      if (err) return err;
      newDoctor.password = hash;
      newDoctor.save(callback);
    });
}

module.exports.getDoctorByUsername = function(username, callback){
	Doctor.findOne({username:username}, callback);
}

module.exports.comparePassword = function(candidatePassowrd, hash, callback){
    bcrypt.compare(candidatePassowrd, hash, function(err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

module.exports.getDoctorById = function(id, callback) {
	Doctor.findOne({_id : id}).exec(callback);
};

module.exports.getDoctorByDepartment = function(dept, callback) {
	Doctor.findOne({department : dept}).exec(callback);
};

module.exports.getDoctorByLicenseId = function(licenseId, callback) {
	Doctor.findOne({licenseId : licenseId}).exec(callback);
};

module.exports.addAppointmentDate = function(doctorLicenseId, appointmentDetails, callback){
	Org.update(
	    { licenseId : doctorLicenseId },
	    { $push: { appointmentDetails : appointmentDetails } },
	    callback
	);
}

module.exports.removeAppointmentDate = function(doctorLicenseId, patientId, appointmentDate, callback){
	appointmentDetails = new Appointment({
		userId : patientId,
		appointmentDate : appointmentDate
	});
	//console.log(appointmentDetails);

	Org.update(
	    { licenseId : doctorLicenseId },
	    { $pull: { appointmentDetails : appointmentDetails } },
	    callback
	);
}
