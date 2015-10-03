app.controller('NavCtrl', function($scope, $state, Auth){
  $scope.logout = function (){
    Auth.logout()
  }
  // Auth.check()
});
