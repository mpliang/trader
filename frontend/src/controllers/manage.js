app.controller('manageCtrl', function ($scope, $http, $state) {
  $scope.message = 'Enter email and password';
  $http.get('http://localhost:3000/item')
    .then(function (data) {
      console.log(data);
      $scope.itemList = data.data;
    })
    .catch(function (error) {
      console.log(error);
    })

  $scope.addItem = function (item) {
    console.log(item);
    item['owner'] = localStorage['userID'];
    console.log(item['owner']);
    $http.post('http://localhost:3000/item', item)
      .then(function (data) {
        console.log(data);
        $state.go($state.current, {}, {
          reload: true
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  $scope.delete = function (itemId) {
    $http.delete('http://localhost:3000/item/' + itemId)
      .then(function (data) {
        console.log(data);
        $state.go($state.current, {}, {
          reload: true
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  $scope.toggle = function (itemId) {
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
  }

});
