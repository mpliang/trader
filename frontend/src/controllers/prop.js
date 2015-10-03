app.controller('propCtrl', function ($scope, $http, $stateParams, $state) {

  $http.get('http://localhost:3000/managers/properties/' + $stateParams.propertyId)
    .then(function(data) {
      console.log(data);
      $scope.aptList = data.data.apartments;
    })
    .catch(function(error) {
      console.log(error);
    })

  $scope.toggle = function(aptId) {
    $http.put('http://localhost:3000/managers/apartment/' + aptId + '/toggleAvail')
      .then(function(data) {
        console.log(data);
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error) {
        console.log(error);
      });
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
