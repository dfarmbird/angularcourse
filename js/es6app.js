let app = angular.module('myApp',[])
  .controller('FormController',['$scope','$http', function($scope,$http){
    
    $http.get('js/countries.json')
      .success(function(response){
          console.log(response);
          $scope.countries = response;
      })
  }]);