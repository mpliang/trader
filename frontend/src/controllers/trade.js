app.controller('tradeCtrl', function ($scope, $http, $stateParams, $state, $window) {


  $http.get('http://localhost:3000/user/' + $stateParams.userId)
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    })

  $scope.trade = function(itemId) {
    // $http.put('http://localhost:3000/managers/apartment/' + aptId + '/toggleAvail')
    //   .then(function(data) {
    //     console.log(data);
    //     $state.go($state.current, {}, {reload: true});
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
      $window.swal({
        title: 'Trade',
        text: 'Select an item to trade',
        type: 'success'
      })
  }

  $scope.delete = function(itemId) {
    $http.delete('http://localhost:3000/item/' + itemId)
      .then(function(data) {
        console.log(data);
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

});
