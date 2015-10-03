app.controller('manageCtrl', function ($scope, $http, $state) {
  $scope.message = 'Enter email and password';
  $http.get('http://localhost:3000/managers/properties')
    .then(function(data) {
      console.log(data);
      $scope.propertiesList = data.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    $scope.addProp = function(property) {
      $http.post('http://localhost:3000/managers/newProperty', property)
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

    $scope.addApt = function(apartment) {
      console.log(apartment);
      if (apartment.isAvail === 'true') {
        apartment.isAvail = true;
      } else {apartment.isAvail = false}

      $http.post('http://localhost:3000/managers/newApartment', apartment)
        .then(function(data) {
          console.log(data);
          $state.go($state.current, {}, {reload: true});
        })
        .catch(function(error) {
          console.log(error);
        })
    }

});
