angular.module('test-app')
.controller('dateController', function () {
  var vm = this;
  
  this.today = function() {
    vm.dt = new Date();
  };

  this.clear = function() {
    vm.dt = null;
  };

  this.open1 = function() {
    vm.popup1.opened = true;
  };

  this.open2 = function() {
    vm.popup2.opened = true;
  };

  this.setDate = function(year, month, day) {
    vm.dt = new Date(year, month, day);
  };

  this.popup1 = {
    opened: false
  };

  this.popup2 = {
    opened: false
  };
});

