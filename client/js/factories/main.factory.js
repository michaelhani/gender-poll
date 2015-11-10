app.factory("mainFactory", function($http){
	factory={};
	factory.getPop = function(callback){
		$http.get("/genderPoll").then(function(population){
			callback(population.data);
		});
	};
	factory.vote = function(gender, callback){
		$http.patch("/genderPoll/"+gender).then(function(res){
			callback(res.data);
		})
	};
	return factory;
});