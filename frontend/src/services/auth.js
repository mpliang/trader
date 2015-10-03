app.service("Auth", function($rootScope, $state, $http, $window){

  this.onLogin= function(auth){
    return auth
  }

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
    .then(function(data) {
      localStorage.removeItem('userID')
    })
    .catch(function(error) {
    });
    $state.go('login')
  }

  this.login = function(username, password){
    var user = creatUserObj(username, password)
    $http.post('http://localhost:3000/login', user)
    .then(function(data) {
      localStorage.setItem('userID', data.data._id);
      $rootScope.auth = true;
      console.log('logged in: ', data);
      $state.go('index')
    })
    .catch(function(error) {
    });
  }
});
