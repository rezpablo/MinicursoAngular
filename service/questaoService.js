$app.service('questaoService', function($http) {
	
	var questoes = [
	  	{
	  		"pergunta": "Quem sou eu",
	  		"alternativa1": "ze",
	      	"alternativa2": "joao",
	      	"alternativa3": "tial",
	  		"alternativa4": "lula molusco",
	  		"resposta": "alternativa4"

	    }, {
	    	"pergunta": "Quem e vc",
	  		"alternativa1": "bobo esponja",
	      	"alternativa2": "tiao xupis",
	      	"alternativa3": "mane garrincha",
	  		"alternativa4": "ronaldinho",
	  		"resposta": "alternativa4"
	    }, {
	    	"pergunta": "Quem somos nos",
	  		"alternativa1": "macacos",
	      	"alternativa2": "manes",
	      	"alternativa3": "otarios",
	  		"alternativa4": "escravos",
	  		"resposta": "alternativa4"
	    }
     ];
  
  this.adicionarQuestao = function(pergunta, alternativa1, alternativa2, alternativa3, alternativa4, resposta) {      	  
	  questoes.push({
	  pergunta: pergunta,
	  alternativa1: alternativa1,
	  alternativa2: alternativa2,
	  alternativa3: alternativa3,
	  alternativa4: alternativa4,
	  resposta: resposta 
    });    
  };
  
  this.removerQuestao = function(index){
	questoes.splice(index, 1);
  };
 
  this.getQuestoes = function() {	 
	  return questoes;
  };

});