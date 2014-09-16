$app.service('pessoaService', function($http, $rootScope) {
	
	var pessoas = [
	  	{
	  		"nome": "Joao",
	  		"telefone": "33113214",
	      	"endereco": "Rua dos Bobos numero 0",
	      	"data": new Date()
	    }, {
	    	"nome": "Maria",
	    	"telefone": "32117854",
	    	"endereco": "Rua do Nada numero 100",
	    	"data": new Date()
	    }, {
	    	"nome": "Firmino",
	    	"telefone": "32587777",
	    	"endereco": "Rua do Qualquer numero 5",
	    	"data": new Date()
	    }
     ];  
	
  this.getToday = function(){
    return new Date();
  };
  
  this.adicionarPessoa = function(nome, telefone, endereco) {      
	  $rootScope.pessoas.push({
      nome: nome,
      telefone: telefone,
      endereco: endereco,
      data: this.getToday()
    });
    $rootScope.msgIncluido = true;
  };

  this.removerPessoa = function(index){
	$rootScope.pessoas.splice(index, 1);
	$rootScope.msgExcluido = true;	
	$rootScope.msgIncluido = false;	
  };
  
  /*$http.get('http://statesapi.apiary.io/app.apiary.io/states').success(callback);*/
  this.getPessoas = function() {	 
	  return pessoas;
  };
  
  this.limparMensagens = function(){
	$rootScope.msgExcluido = false;
	$rootScope.msgIncluido = false;
  };
  
});