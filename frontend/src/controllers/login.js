app.controller('loginCtrl', function ($scope, $window, Auth) {
  $scope.login = function (username, password){
    Auth.login(username, password)
  }

});
