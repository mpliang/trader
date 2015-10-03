app.service("Auth", function($state, $http, $window){

  var creatUserObj = function(username, password){
    return obj = {
      username: username,
      password: password
    };
  }

  this.createUser = function(username, password){
    var user = creatUserObj(username, password)
    $http.post('http://localhost:3000/register', user)
    .then(function(data) {
      console.log(data);
      $state.go('index')
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  this.logout = function(){
    $http.get('http://localhost:3000/logout')
    .then(function(data){
      $state.go('login')
    })
  }

  this.login = function(username, password){
    var user = creatUserObj(username, password)
    $http.post('http://localhost:3000/login', user)
    .then(function(data) {
      localStorage.setItem('userID', data.data._id);
      console.log('logged in: ', data);
      $state.go('index')
    })
    .catch(function(error) {
    });
  }
});
