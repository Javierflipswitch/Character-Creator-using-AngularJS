var app = angular.module('myApp.view1', []);

app.controller('view1Controller', function($scope) {

  $scope.character = {
    type: '', 
    personality: '',
    job: ''      
  };
  
  $scope.characterTypes = [
      {id:1, value: 'Knight'},
      {id:2, value: 'Wizard'}];

  $scope.personalityTypes = [ 
      {id: 1, value: 'Good'}, 
      {id:2, value: 'Evil'}];
  
});
