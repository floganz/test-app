angular.module('test-app')
.controller('dateController', function () {
  var vm = this;
  
  vm.today = function() {
    vm.dt = new Date();
  };

  vm.clear = function() {
    vm.dt = null;
  };

  vm.open1 = function() {
    vm.popup1.opened = true;
  };

  vm.open2 = function() {
    vm.popup2.opened = true;
  };

  vm.setDate = function(year, month, day) {
    vm.dt = new Date(year, month, day);
  };

  vm.popup1 = {
    opened: false
  };

  vm.popup2 = {
    opened: false
  };
});

