angular.module('personal').component("navComp", {
  templateUrl: "./scripts/cfp-nav-component/cfp-nav-comp.html",
  controller: function($scope,$state){
    $(document).ready(function() {

    $('.button-collapse').sideNav();
  })
  }
})
