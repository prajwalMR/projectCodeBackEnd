var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var sha1 = require('sha1');
var magic = require('csprng');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var signup = {
	register : function(req , res){
		var userData = req.body;
		var userName = userData.userName;
		var userEmailId = userData.userEmailId;
		var userPass = userData.userPass;
		var userBday = userData.userBday;
		var userGender = userData.userGender;
		var userPhoneNumber = userData.userPhoneNumber;

		var salt = magic(160 , 36);

		var hash = sha1(userPass + salt);

		req.db.userDetails.insert({
			userName : userName,
			emailId : emailId,
			hash : hash ,
			userGender : userGender,
			userBday : userBday,
			userPhoneNumber : userPhoneNumber
		})
	}
}