$app = angular.module('app', ['ngRoute']);
 
$app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home',     { templateUrl: 'view/home.html', 			 controller: 'utilController'}).      
      when('/questao',  { templateUrl: 'view/cadastrarQuestao.html', controller: 'questaoController'}).
      when('/questoes', { templateUrl: 'view/listaQuestoes.html',    controller: 'questaoController'}).      
      otherwise({
        redirectTo: '/home'
      });
  }
]);
