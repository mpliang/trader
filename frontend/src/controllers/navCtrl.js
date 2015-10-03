app.controller('NavCtrl', function($scope, $state, Auth){
  $scope.logout = function (){
    Auth.logout()
  }
  $scope.userID = Auth.idea
  // Auth.check()
});
