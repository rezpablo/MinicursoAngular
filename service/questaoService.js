$app.service('questaoService', function($http, $rootScope) {
	
	var questoes = [
	  	{
	  		"descricao": "Quem sou eu",
	  		"alternativa1": "ze",
	      	"alternativa2": "joao",
	      	"alternativa3": "tial",
	  		"alternativa4": "lula molusco"
	    }, {
	    	"descricao": "Quem e vc",
	  		"alternativa1": "bobo esponja",
	      	"alternativa2": "tiao xupis",
	      	"alternativa3": "mane garrincha",
	  		"alternativa4": "ronaldinho"
	    }, {
	    	"descricao": "Quem somos nos",
	  		"alter$rootScope.msgIncluido = true;nativa1": "macacos",
	      	"alternativa2": "manes",
	      	"alternativa3": "otarios",
	  		"alternativa4": "escravos"
	    }
     ];  
	
  this.getToday = function(){
    return new Date();
  };
  
  this.adicionarQuestao = function(descricao, alternativa1, alternativa2, alternativa3, alternativa4) {      
	  $rootScope.questoes.push({
	  descricao: descricao,
	  alternativa1: alternativa1,
	  alternativa2: alternativa2,
	  alternativa3: alternativa3,
	  alternativa4: alternativa4 
    });    
  };
  
  this.removerQuestao = function(index){
	$rootScope.questoes.splice(index, 1);
  };
 
  this.getQuestoes = function() {	 
	  return questoes;
  };
  
});