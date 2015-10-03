app.controller('tradeCtrl', function ($scope, $http, $state, $window) {
  $http.get('http://localhost:3000/user/' + localStorage['userID'])
    .then(function(data) {
      $scope.userItemList = data.data.items;
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
    $http.put('http://localhost:3000/item/' + itemId + '/toggleAvailable')
    .then(function (data) {
      console.log(data);
      $state.go($state.current, {}, {
        reload: true
      });
    })
    .catch(function (error) {
      console.log(error);
    });
      $window.swal({
        title: 'Trade',
        text: 'Item offered for trade!',
        type: 'success'
      })
  }

  // $scope.delete = function(itemId) {
  //   $http.delete('http://localhost:3000/item/' + itemId)
  //     .then(function(data) {
  //       console.log(data);
  //       $state.go($state.current, {}, {reload: true});
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

});
