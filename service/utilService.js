$app.service('utilService', function($http, $rootScope) {
  
  this.limparMensagens = function(){
	$rootScope.msgExcluido = false;
	$rootScope.msgIncluido = false;
  };
  
  this.incluirMensagemIncluido = function(){
	$rootScope.msgIncluido = true;
	$rootScope.msgExcluido = false;
  };
  
  this.incluirMensagemExcluido = function(){
	$rootScope.msgExcluido = true;
	$rootScope.msgIncluido = false;
  };
  
});