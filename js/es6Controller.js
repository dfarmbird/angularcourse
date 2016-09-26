myApp.controller('pageController',['$scope','$rootScope',function($scope,$rootScope){
  $scope.firstName = 'Anton';
  $rootScope.timeStamp = new Date();
  $scope.greetings = ['hello','bonjour','ahoj','hallo','pruvit','hola','ni hao'];
  $scope.greet = $scope.greetings[0];
  $scope.greetUser = function(){
    $scope.greet = $scope.greetings[parseInt(Math.random()* $scope.greetings.length)];
  }
}]);