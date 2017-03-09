angular.module('personal').controller('mainCtrl', function($scope,mainSrv,$state){

  $scope.getUser = function(){
    mainSrv.getUser().then(function(response){
    $scope.user = response.data.user
    $scope.hobbies = response.data.user.hobbies
    console.log($scope.hobbies)
    })
  }
  $scope.getSkills = function(){
    mainSrv.getSkills().then(function(response){
      $scope.skills = response.data

    })
  }

  $scope.getUser()
  $scope.getSkills()
})
