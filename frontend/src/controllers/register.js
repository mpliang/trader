app.controller('registerCtrl', function ($scope, $http, Auth) {
  $scope.message = 'Enter email and password';
  $scope.register = function(user) {
    $http.post('http://localhost:3000/login', )
      .then(function(data) {
        console.log('success: ', data);
      })
      .catch(function(error) {
        console.log('error: ', error);
      });
  }
});
