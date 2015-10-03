app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '../pages/home.html',
      controller: 'homeCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: '../pages/register.html',
      controller: 'registerCtrl'
    })
    .state('manage', {
      url: '/manage',
      templateUrl: '../pages/manage.html',
      controller: 'manageCtrl'
    })
    .state('manageProp', {
      url: '/manage/:propertyId',
      templateUrl: '../pages/manageProp.html',
      controller: 'propCtrl'
    })

});
