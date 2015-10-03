app.controller('homeCtrl', function ($scope, $window, $http) {
  // $scope.allItems = [{
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
        console.log(data);
        $scope.allItems = data.data;
      })
      .catch(function(error) {
        console.log(error);
      });


});
