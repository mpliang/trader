app.controller('manageCtrl', function ($scope, $http, $state) {
  $scope.message = 'Enter email and password';
  $http.get('http://localhost:3000/item')
    .then(function(data) {
      console.log(data);
      $scope.propertiesList = data.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    $scope.addItem = function(item) {
      console.log(item);
      $http.post('http://localhost:3000/item', item)
        .then(function(data) {
          console.log(data);
          $state.go($state.current, {}, {reload: true});
        })
        .catch(function(error) {
          console.log(error);
        })
    }

    $scope.delete = function(propId) {
      $http.delete('http://localhost:3000/managers/property/' + propId)
        .then(function(data) {
          console.log(data);
          $state.go($state.current, {}, {reload: true});
        })
        .catch(function(error) {
          console.log(error);
        })
    }



});
