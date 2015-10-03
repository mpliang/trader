app.controller('homeCtrl', function ($scope, $window, $http) {

  // $scope.trade = function(item) {
  //
  //
  //   $window.swal({
  //     title: 'Trade',
  //     text: 'Select an item to trade',
  //     type: 'success'
  //   })

    $http.get('http://localhost:3000/item')
      .then(function(data) {
        console.log(data.data);
        $scope.allItems = data.data;
      })
      .catch(function(error) {
        console.log(error);
      });

});
