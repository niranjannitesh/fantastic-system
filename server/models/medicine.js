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

var medicineSchema = new Schema({
	name: {
		type: String
	},
	companyName : {
		type : String
	},
	packagingType : {
		type : String
	},
	vendors : []
});

medicineSchema.plugin(uniqueValidator);

var Medicine = module.exports = mongoose.model("Medicine", medicineSchema);

module.exports.createMedicine = function(newMedicine, callback) {
    newMedicine.save(callback);
}

module.exports.getMedicineDetails = function(medicineName, callback){
	Medicine.findOne({name : medicineName}, callback);
}

module.exports.addVendorByMedicineName = function(medicineName, lisenceId, callback){
	Medicine.update(
		{name : medicineName},
		{ $push : { vendors : lisenceId } },
	    callback
	)
};

module.exports.removeVendorByMedicineName = function(medicineName, lisenceId, callback){
	Medicine.update(
		{name : medicinename},
		{$pull : {vendors : lisenceId}}
	)
}

module.exports.regexSearch = function(pattern, callback){
	pattern = new RegExp(pattern, 'i');
	Medicine.find({
		$or : [
			{
				name : pattern
			},
			{
				companyName : pattern
			}
		]
	}).exec(callback);
}