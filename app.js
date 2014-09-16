/*$app = angular.module('ep10App', ['ngRoute']);*/
$app = angular.module('app', ['ngRoute']);
 
$app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home',     { templateUrl: 'view/home.html', 			 controller: 'utilController'}).
      when('/agenda',   { templateUrl: 'view/listaPessoas.html',     controller: 'pessoaController'}).
      when('/cadastro', { templateUrl: 'view/cadastraPessoas.html',  controller: 'pessoaController'}).
      when('/questao',  { templateUrl: 'view/cadastrarQuestao.html', controller: 'questaoController'}).
      when('/questoes', { templateUrl: 'view/listaQuestoes.html',    controller: 'questaoController'}).      
      otherwise({
        redirectTo: '/home'
      });
  }
]);
