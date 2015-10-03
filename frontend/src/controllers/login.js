app.controller('loginCtrl', function ($scope, Auth) {
  $scope.message = 'Enter username and password';

  $scope.login = function (username, password){
    Auth.login(username, password)
  }

});
