app.controller("mainController", function($scope, mainFactory){
	var mainCtrl = this;
	mainCtrl.getPop = function(){
		mainFactory.getPop(function(data){
			if(data.male+data.female===0){
				mainCtrl.males = 0;
				mainCtrl.females =0;
			}else{
				mainCtrl.males = data.male/(data.male+data.female);
				mainCtrl.females = data.female/(data.male+data.female);
			}
		})
	};
	mainCtrl.vote = function(gender){
		mainFactory.vote(gender,function(data){
			mainCtrl.males = data.male/(data.male+data.female);
			mainCtrl.females = data.female/(data.male+data.female);
		});
	};
	mainCtrl.getPop();
});