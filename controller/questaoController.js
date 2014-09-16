$app.controller('questaoController', function($scope, $location, questaoService, utilService) {	

	$scope.adicionarQuestao = function() {
		questaoService.adicionarQuestao($scope.descricao, $scope.alternativa1, $scope.alternativa2, $scope.alternativa3, $scope.alternativa4);	  
		utilService.incluirMensagemIncluido();
		$location.path('/questoes');
	  };
	  
	  $scope.removerQuestao = function(index) {
		questaoService.removerQuestao(index);	 
		utilService.incluirMensagemExcluido();
		$location.path('/questoes');
	  };
	  
	  $scope.limparMensagens = function() {
		  utilService.limparMensagens();   
	  };
	
});

$app.run ( function($rootScope, questaoService) {
	$rootScope.questoes = questaoService.getQuestoes();
});
