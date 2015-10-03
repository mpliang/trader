app.service("Auth", function($state, $http){
  this.createUser = function(username, password){
    var obj = {
      username: username,
      password: password
    };
    console.log(obj);
    $http.post('http://localhost:3000/register', obj)
    .then(function(data) {
      console.log('success: ', data);
      $state.go('index')
    })
    .catch(function(error) {
      console.log('error: ', error);
    });
  }
});
