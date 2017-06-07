angular.module('userProfiles').controller('MainController', function($scope, mainService) {


  $scope.getUsers = function() {
  	mainService.getUsers().then(function(response) {
  		$scope.users = response.data.data;
  	});
  }
  $scope.getUsers();


  $scope.toggleFavorite = function(id) {
  	for(var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i].id === id) {
            $scope.users[i].isFavorite = !$scope.users[i].isFavorite;
            }
        }
  	};




});