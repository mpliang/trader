app.controller('NavCtrl', function($scope, $state, Auth){
  $scope.logout = function (){
    Auth.logout()
    $scope.auth = false
  }
  $scope.auth = localStorage['userID']

});
