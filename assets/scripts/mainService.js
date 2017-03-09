angular.module('personal').service('mainSrv', function($http){

        this.getUser = function () {
          return $http.get('/user');
        }

        this.getSkills = function () {
          return $http.get('/skillz');
        }

})
