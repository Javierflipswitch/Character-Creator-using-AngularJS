var app = angular.module('myApp.view1', []);

app.controller('view1Controller', function() {

  var vm = this;

  vm.character = {};
  vm.master = {};
 
  vm.update = function(character) {
      vm.master = angular.copy(vm.character);
      vm.character = {};
  };
  
  vm.reset = function(myForm) {
      vm.character = angular.copy(vm.master);
  };
  
  vm.characterTypes = [
      {id: 1, value: 'Knight'},
      {id: 2, value: 'Wizard'}];

  vm.personalityTypes = [ 
      {id: 1, value: 'Good'}, 
      {id: 2, value: 'Evil'}];
      
  vm.jobTypes = [
    {id: 1, value: 'Paladin' },
    {id: 2, value: 'Brute'},
    {id: 3, value: 'Sorcerer'},
    {id: 4, value: 'Witch'}];
  
 function getJobTypeById(id){
    return vm.jobTypes.filter(function(e) { return e.id == id})[0].value;
 }

  vm.assignJob = function() {
      var ctype = vm.character.characterType;
      var ptype = vm.character.personalityType;
        if(ctype == 1 && ptype == 1) {
           vm.character.jobType = getJobTypeById(1);
        }
        else if (ctype == 1 && ptype == 2) {
            vm.character.jobType = getJobTypeById(2);
        }
           else if (ctype == 2 && ptype == 1) {
            vm.character.jobType = getJobTypeById(3);
        }
           else if (ctype == 2 && ptype == 2) {
            vm.character.jobType = getJobTypeById(4);
        }
        return vm.character.jobType;
  }
}); 