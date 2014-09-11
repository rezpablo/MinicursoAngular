$app.controller('pessoaController', function($scope, $location, pessoaService) {

  $scope.filtro = "";
  
  $scope.today = pessoaService.getToday();

  $scope.addState = function() {
	  pessoaService.addStateIntoCollection($scope.estado, $scope.capital, 1000); 
    $location.path('#states');
  };

  $scope.deleteState = function(index) {
	  pessoaService.removeStateFromCollection(index); 
    $location.path('#states');
  };

});

$app.run ( function($rootScope, pessoaService) {
	 pessoaService.getStates(function(data){
	    $rootScope.states = data;
	  });
	  
	});
