var app = angular.module('myApp.view1', []);

app.controller('view1Controller', function($scope) {

  $scope.character = {
    characterTypes: '', 
    personalityTypes: '',
    jobTypes: ''      
  };
  
  $scope.characterTypes = [
      {id:1, value: 'Knight'},
      {id:2, value: 'Wizard'}];

  $scope.personalityTypes = [ 
      {id: 1, value: 'Good'}, 
      {id:2, value: 'Evil'}];
      
  $scope.jobTypes = [
    {id: 1, value: 'Paladin' },
    {id: 2, value: 'Brute'},
    {id: 3, value: 'Sorcerer'},
    {id: 4, value: 'Witch'}];
  
}); 