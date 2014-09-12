/*$app = angular.module('ep10App', ['ngRoute']);*/
$app = angular.module('app', ['ngRoute']);
 
$app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/agenda',   { templateUrl: 'view/listaPessoas.html',    controller: 'pessoaController'}).
      when('/cadastro', { templateUrl: 'view/cadastraPessoas.html', controller: 'pessoaController'}).
      otherwise({
        redirectTo: '/agenda'
      });
  }
]);
 
$app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);