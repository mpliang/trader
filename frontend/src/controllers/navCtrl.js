app.controller('NavCtrl', function($rootScope, $scope, $state, Auth){
  $scope.logout = function (){
    Auth.logout()
    $rootScope.auth = false
  }
});
