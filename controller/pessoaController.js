$app.controller('pessoaController', function($scope, $location, pessoaService) {

  $scope.filtro = "";
  
  $scope.today = pessoaService.getToday();
  
  $scope.adicioanarPessoa = function() {
	  pessoaService.adicionarPessoa($scope.nome, $scope.telefone, $scope.endereco); 
    $location.path('#agenda');
  };
 
  $scope.removerPessoa = function(index) {
	  pessoaService.removerPessoa(index);	  
	  $location.path('#agenda');
  };
  
});

$app.run ( function($rootScope, pessoaService) {
	$rootScope.pessoas = pessoaService.getPessoas();	  
});
