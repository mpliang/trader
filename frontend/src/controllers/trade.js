app.controller('tradeCtrl', function ($scope, $http, $stateParams, $state, $window) {

  //get all items
  // $http.get('http://localhost:3000/')
  //   .then(function(data) {
  //     console.log(data);
  //     $scope.aptList = data.data.apartments;
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   })

  // $scope.itemList = [{
  //   name: 'test1',
  //   url: 'http://vignette1.wikia.nocookie.net/thelorienlegacies/images/2/2c/4129-pokemon-pokeball.png/revision/latest?cb=20140822201518',
  //   value: 3,
  //   description: 'test',
  //   _id: '1231232kjfkdlsd'
  // }, {
  //   name: 'test2',
  //   url: 'http://vignette1.wikia.nocookie.net/thelorienlegacies/images/2/2c/4129-pokemon-pokeball.png/revision/latest?cb=20140822201518',
  //   value: 5,
  //   description: 'test',
  //   _id: '1231232kjfkdlsd'
  // }];

  $http.get('http://localhost:3000/item/' + $stateParams.userId)
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

  $scope.delete = function(aptId) {
    $http.delete('http://localhost:3000/managers/apartment/' + aptId)
      .then(function(data) {
        console.log(data);
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

});
