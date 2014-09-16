$app.controller('utilController', function($scope, $location, utilService) {	
	  
	  $scope.limparMensagens = function() {
		  utilService.limparMensagens();   
	  };
	
});
