$app = angular.module('ep10App', ['ngRoute']);
 
$app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/states', { templateUrl: 'list.html', controller: 'controllerEp10'}).
      when('/create', { templateUrl: 'create.html', controller: 'controllerEp10'}).
      when('/delete', { templateUrl: 'list.html', controller: 'controllerEp10'}).
      /*when('/lista', { templateUrl: 'lista.html', controller: 'controllerEp10'}).
      when('/cadastro', { templateUrl: 'cadastro.html', controller: 'controllerEp10'}).
      when('/mapa', { templateUrl: 'mapa.html', controller: 'controllerEp10'}).*/
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