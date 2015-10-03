app.controller('registerCtrl', function ($scope, $http, Auth) {

  $scope.register = function(username, password) {
    Auth.createUser(username, password)
  }
});
