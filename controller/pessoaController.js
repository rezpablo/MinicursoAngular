$app.controller('pessoaController', function($scope, $location, pessoaService, utilService) {
      
  $scope.adicioanarPessoa = function() {
	pessoaService.adicionarPessoa($scope.nome, $scope.telefone, $scope.endereco);	  
    $location.path('/agenda');
  };
 
  $scope.removerPessoa = function(index) {
	  pessoaService.removerPessoa(index);	  
	  $location.path('/agenda');
  };
  
  $scope.limparMensagens = function() {
	  utilService.limparMensagens();   
  };
   
  
});

$app.run ( function($rootScope, pessoaService) {
	$rootScope.pessoas = pessoaService.getPessoas();
});
