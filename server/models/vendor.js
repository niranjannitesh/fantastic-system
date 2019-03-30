var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

mongoose.connect('mongodb://localhost:27017/medicapp')

var db = mongoose.connection;

var Schema = mongoose.Schema;

var medicineSchema = new Schema({
	medicineId : {
		type: String,
		required : true
	},
	quantity : {
		type : Number,
		required : true
	}
});

var vendorSchema = new Schema({
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
	latitude : {
		type: String,
	},
	longitude : {
		type: String,
	},
	medicines : [medicineSchema]
});

vendorSchema.plugin(uniqueValidator);

var Vendor = module.exports = mongoose.model("Vendor", vendorSchema);
var Medicine = mongoose.model("Medicine", medicineSchema);

module.exports.createVendor = function(newVendor, callback) {
    bcrypt.hash(newUser.password, SALT_WORK_FACTOR, function(err, hash) {
      if (err) return err;
      newVendor.password = hash;
      newVendor.save(callback);
    });
}

module.exports.getVendorByUsername = function(username, callback){
	Vendor.findOne({username:username}, callback);
}

module.exports.comparePassword = function(candidatePassowrd, hash, callback){
    bcrypt.compare(candidatePassowrd, hash, function(err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

module.exports.getVendorById = function(id, callback) {
	Vendor.findOne({_id : id}).exec(callback);
};

module.exports.updateMedicineQuantityByVendorId = function(medicineName, id, changeQuantity, callback){
	Vendor.updateOne(
		{
			_id : id,
			medicine : {$elemMatch : {name : medicineName}}
		},
		{
			$inc : {
				"medicines.$.quantity" : changeQuantity
			}
		}
	);
}