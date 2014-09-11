$app.controller('controllerEp10', function($scope, $location, statesService) {

  $scope.filtro = "";
  
  $scope.today = statesService.getToday();

  $scope.addState = function() {
    statesService.addStateIntoCollection($scope.estado, $scope.capital, 1000); 
    $location.path('#states');
  };

  $scope.deleteState = function(index) {
    statesService.removeStateFromCollection(index); 
    $location.path('#states');
  };

});

$app.run ( function($rootScope, statesService) {
	  statesService.getStates(function(data){
	    $rootScope.states = data;
	  });
	  
	});
