$app.service('pessoaService', function($http, $rootScope) {
  
  this.getToday = function(){
    return new Date();
  };
  
  this.addStateIntoCollection = function(estado, capital, renda) {
    $rootScope.states.push({
      name: estado,
      capital: capital,
      renda: renda
    });
  };

  this.removeStateFromCollection = function(i) {
    $rootScope.states.splice(i, 1);
  };  

  this.getStates = function(callback) {    
    $http.get('http://statesapi.apiary.io/app.apiary.io/states').success(callback);
  };

});