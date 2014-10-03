$app.controller('questaoController', function($rootScope, $scope, $location, questaoService, utilService) {	

	var init = function(){			
		utilService.getToday();
		$scope.questoes = questaoService.getQuestoes();
	}
	init();

	$scope.adicionarQuestao = function() {
		questaoService.adicionarQuestao($scope.pergunta, $scope.alternativa1, $scope.alternativa2, $scope.alternativa3, $scope.alternativa4, $scope.resposta);	  
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