var mongoose = require("mongoose");
var genderPoll = mongoose.model("GenderPoll");

module.exports={
	show: function(req,res){
		genderPoll.findOne({}, function(err, results){
			if(err){
					console.log(err);
			}
			else{
				res.json(results);
			}
		});
	},
	voteMale: function(req, res){
		genderPoll.findOneAndUpdate({},
			{$inc:{male:1}},
			{new:true},
			function(err, results){
			if(err){
				console.log(err);
			}else{
				res.json(results);
			}
		});
	},
	voteFemale: function(req, res){
		genderPoll.findOneAndUpdate({},
			{$inc:{female:1}},
			{new:true},
			function(err, results){
			if(err){
				console.log(err);
			}else{
				res.json(results);
			}
		});
	}
}