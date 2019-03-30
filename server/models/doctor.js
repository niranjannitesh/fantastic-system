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
	userType : {
		type : String,
		default : "doctor"
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
	appointmentDetails: [appointmentSchema]
});

doctorSchema.plugin(uniqueValidator);

var Doctor = module.exports = mongoose.model("Doctor", doctorSchema);
var Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports.createDoctor = function(newDoctor, callback) {
    bcrypt.hash(newDoctor.password, SALT_WORK_FACTOR, function(err, hash) {
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
