var express = require("express");
var crypto = require("crypto");
var url = require("url");
var path = require("path");
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/patient");
var Vendor = require("../models/vendor");
var Doctor = require("../models/doctor");
var xss = require("xss");

passport.serializeUser(function(user, done) {
	console.log(user);
	done(null, { userId : user.id, userType : user.userType});
});

passport.deserializeUser(function(userObj, done) {
	if(userObj.userType == "vendor"){
		Vendor.getVendorById(id, function(err, user) {
			done(err, user);
		});
	}
	else if(userObj.userType == "patient"){
		User.getUserById(id, function(err, user) {
			done(err, user);
		});
	}
	else if(userObj.userType == "doctor"){
		Doctor.getDoctorById(id, function(err, user) {
			done(err, user);
		});
	}
});

passport.use('local-user-login', new LocalStrategy(
    function(username, password, done){
        User.getUserByUsername(username, function(err, user){
            if(err) throw err;
            if(!user){
            	 	return done(null, false, {message: "Unknown User"});
            }

            User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Invalid Password"});
                }
            });
        });
    }
));

passport.use('local-doctor-login', new LocalStrategy(
    function(username, password, done){
        Doctor.getDoctorByUsername(username, function(err, user){
            if(err) throw err;
            if(!user){
            	 	return done(null, false, {message: "Unknown User"});
            }

            Doctor.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Invalid Password"});
                }
            });
        });
    }
));

passport.use('local-vendor-login', new LocalStrategy(
    function(username, password, done){
        Vendor.getVendorByUsername(username, function(err, user){
            if(err) throw err;
            if(!user){
            	 	return done(null, false, {message: "Unknown User"});
            }

            Vendor.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Invalid Password"});
                }
            });
        });
    }
));

function ensureAuthentication(req, res, next){
	if(!req.isAuthenticated())
		{
			return next();
		}
	else
	{
		res.redirect('/login', {
    		message : "All active sessions must be logged out"
  		});
	}
}

router.post("/register", ensureAuthentication, function(req, res, next) {
	// Form Validation
	console.log(req.body.userType);

		if(req.body.userType == 'doctor'){
			let newDoctor = new Doctor({
				name: req.body.doctorName,
				username: req.body.username,
				password: req.body.password,
				department: req.body.department,
				lisenceId : req.body.lisenceId
			});
			Doctor.createDoctor(newDoctor, function(err_user, res_user) {
				if (err_user) {
					res.redirect('/register', {
		 		    	message : "Username not available"
					});
				}
			    else {
					res.redirect('/login', {
						message : "Account created successfully",
				  	})
				}
			});
		}	
		else if(req.body.userType == 'vendor'){
			let newVendor = new Vendor({
				name: req.body.vendorName,
				username: req.body.username,
				password: req.body.password,
				lisenceId : req.body.lisenceId
			});
			Vendor.createVendor(newVendor, function(err_user, res_user) {
				if (err_user) {
					res.redirect('/register', {
		 		    	message : "Username not available"
					});
				}
			    else {
					res.redirect('/login', {
						message : "Account created successfully",
				  	})
				}
			});
		}
		else if(req.body.userType == 'patient'){
			let newUser = new User({
				name: req.body.patientName,
				username: req.body.username,
				password: req.body.password,
				age : req.body.age,
				sex : req.body.sex
			});
			User.createUser(newUser, function(err_user, res_user) {
				if (err_user) {
					res.redirect('/register'{
		 		    	message : "Username not available"
					});
				}
			    else {
					res.redirect('/login', {
						message : "Account created successfully",
				  	})
				}
			});	 
		}
});

router.post('/login', function(req, res, next) {
	console.log(req.body);
	let userType = req.body.userType;

	if(userType == "patient"){
		passport.authenticate('local-user-login', function(err, user, info) {
		    if (err) { return next(err); }
		    if (!user) { console.log(info); return res.status(401).send(info); }
				else
				{
					User.getUserByUsername(req.body.username, function(err_user, res_user){
						if(err_user){
							res.redirect('login', {
								message : "No user with specified details available"
							})
						}
						else {
							req.session.user_id = res_user._id;
							console.log(res_user);
							return res.redirect('/', {
						    	message : "User successfully logged in",
								details : res_user
						  })
						}
					})
				}
		  })(req, res, next);
	}
	else if(userType == "doctor"){
		passport.authenticate('local-doctor-login', function(err, user, info) {
		    if (err) { return next(err); }
		    if (!user) { console.log(info); return res.status(401).send(info); }
				else
				{
					Doctor.getDoctorByUsername(req.body.username, function(err_user, res_user){
						if(err_user){
							res.redirect('login', {
								message : "No user with specified details available"
							});
						}
						else {
							console.log(req);
							req.session.user_id = res_user._id;
							console.log(res_user);
							res.redirect('/', {
						    	message : "User successfully logged in",
								details : res_user
						  })
						}
					})
				}
		  })(req, res, next);
	}
	else if (userType == "vendor"){
		passport.authenticate('local-vendor-login', function(err, user, info) {
		    if (err) { return next(err); }
		    if (!user) { console.log(info); return res.status(401).send(info); }
				else
				{
					Vendor.getVendorByUsername(req.body.username, function(err_user, res_user){
						if(err_user){
							res.redirect('login', {
								message : "No user with specified details available"
							})
						}
						else {
							req.session.user_id = res_user._id;
							console.log(res_user);
							res.redirect('/', {
						    	message : "User successfully logged in",
								details : res_user
						  })
						}
					})
				}
		  })(req, res, next);
	}
});

router.get("/logout", function(req, res) {
	if(req.session.user_id) {
	    req.session.destroy(function(err) {
	      if(err) {
	        res.redirect('/login', {
            	message : err
          	})
	      } else {
	        res.redirect('/login', {
				      message : "Logged out"
					});
	      }
	    });
	  }
  else {
    res.redirect('login', {
      message : "No active sessions"
    })
	}
});

module.exports = router;
