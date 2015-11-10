var genderPoll = require('../controllers/genderPolls.js');

module.exports=function(app){
	app.get("/genderPoll", function(req,res){
		genderPoll.show(req,res);
	});
	app.patch('/genderPoll/male', function (req, res){
		genderPoll.voteMale(req,res);
	});
	app.patch('/genderPoll/female', function (req, res){
		genderPoll.voteFemale(req,res);
	});
};