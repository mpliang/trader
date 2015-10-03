app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('index', {
    url: '/index',
    templateUrl: '../pages/home.html',
    controller: 'homeCtrl'
  })
  .state('login', {
    url: '/',
    templateUrl: '../pages/login.html',
    controller: 'loginCtrl'
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
  .state('tradeItem', {
    url: '/user/:propertyId',
    templateUrl: '../pages/tradeItem.html',
    controller: 'tradeItem'
  })

});
