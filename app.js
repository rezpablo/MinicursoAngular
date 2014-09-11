/*$app = angular.module('ep10App', ['ngRoute']);*/
$app = angular.module('app', ['ngRoute']);
 
$app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/states', { templateUrl: 'list.html', controller: 'pessoaController'}).
      when('/create', { templateUrl: 'create.html', controller: 'pessoaController'}).
      when('/delete', { templateUrl: 'list.html', controller: 'pessoaController'}).
      /*when('/lista', { templateUrl: 'view/lista.html', controller: 'pessoaController'}).
      when('/cadastro', { templateUrl: 'view/cadastro.html', controller: 'pessoaController'}).
      when('/mapa', { templateUrl: 'view/mapa.html', controller: 'pessoaController'}).*/
      otherwise({
        redirectTo: '/states'
        /*redirectTo: '/lista'*/
      });
  }
]);
 
$app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);