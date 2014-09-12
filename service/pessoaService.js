$app.service('pessoaService', function($http, $rootScope) {

	var pessoas = [
	  	{
	  		"nome": "Joao",
	  		"telefone": "33113214",
	      	"endereco": "Rua dos Bobos numero 0"
	    }, {
	    	"nome": "Maria",
	    	"telefone": "32117854",
	    	"endereco": "Rua do Nada numero 100"
	    }, {
	    	"nome": "Firmino",
	    	"telefone": "32587777",
	    	"endereco": "Rua do Qualquer numero 5"   
	    }
	    ];
  
	
  this.getToday = function(){
    return new Date();
  };
  
  this.adicionarPessoa = function(nome, telefone, endereco) {
	    $rootScope.pessoas.push({
	      nome: nome,
	      telefone: telefone,
	      endereco: endereco
	    });
	  };

  this.removerPessoa = function(index){
	$rootScope.pessoas.splice(index, 1);  
  };
  
  /*$http.get('http://statesapi.apiary.io/app.apiary.io/states').success(callback);*/
  this.getPessoas = function() {  
	  return pessoas;
  };

});