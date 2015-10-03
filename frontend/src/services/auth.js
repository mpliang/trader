app.service("Auth", function($state, $http){
  this.createUser = function(username, password){
    var user = createUserObj(username, password)
    $http.post('http://localhost:3000/register', user)
    .then(function(data) {
      $state.go('index')
    })
    .catch(function(error) {
    });
  }

  var creatUserObj = function(username, password){
    return obj = {
      username: username,
      password: password
    };
  }

  this.login = function(username, password){
    var user = creatUserObj(username, password)
    console.log(user);
    $http.post('http://localhost:3000/login', user)
    .then(function(data) {
      console.log(data, 'loggedin');
      $state.go('index')
    })
    .catch(function(error) {
    });
  }
});
