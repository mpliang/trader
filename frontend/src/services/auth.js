app.service("Auth", function($state, $http){

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
      $state.go('index')
    })
    .catch(function(error) {
    });
  }
  this.logout = function(){
    $http.get('http://localhost:3000/logout')
    .then(function(data){
      $state.go('login')
    })
  }

  // this.check = function() {
  //   $http.get('http://localhost:3000/config')
  //   .then(function(data){
  //     console.log(data);
  //   })
  // }

  this.login = function(username, password){
    var user = creatUserObj(username, password)
    $http.post('http://localhost:3000/login', user)
    .then(function(data) {
      $state.go('index')
    })
    .catch(function(error) {
    });
  }
});
