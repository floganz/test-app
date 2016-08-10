angular.module('test-app')
			 .controller('MainController', ['$http','dataservice','$rootScope',
   function($http,dataservice) {
    var vm = this;
    var opened = vm;
    vm.show = false;
    dataservice.get_data().then(function(data) {
        vm.unis = data;
    });

    this.new = function(newValue) {
      vm.university = {};
      if (vm.show) {
        vm.show = false;
      } else {
        opened.show = false;
        vm.show = true;
        opened = vm;
      }
    };

    this.create = function(newValue) {
      vm.show = false;
      dataservice.create(newValue).then(function(data) {
        vm.unis.unshift(data);
      });
    };

    this.delete = function(id) {
      var obj =  vm.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  vm.unis.indexOf(obj[0]);
      //console.log(id);
      dataservice.destroy(id).then(function(id) {
        vm.unis.splice(i, 1);
      });
    };

    this.edit = function(id) {
      var obj =  vm.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  vm.unis.indexOf(obj[0]);
      // console.log(i);
      if (vm.unis[i].show) {
        vm.unis[i].show = false
      }
      else {
        opened.show = false;
        vm.unis[i].show = true
        opened = vm.unis[i];
      }
      // console.log(vm.unis[i]);
      vm.university = angular.copy(vm.unis[i]);
      vm.university.start_date = new Date(vm.unis[i].start_date);
      vm.university.end_date = new Date(vm.unis[i].end_date);
      // console.log(vm.university);
    };

    this.cancel = function(id) {
      vm.unis[i].show = false;
    };

    this.update = function(id,newValue) {
      console.log(id);
      console.log(newValue);
      var obj =  vm.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  vm.unis.indexOf(obj[0]);
      if (vm.unis[i].show)
        vm.unis[i].show = false
      else
        vm.unis[i].show = true
      //vm.unis.splice(i, 1);

      dataservice.edit(id,newValue).then(function(data) {
        vm.unis[i] = data;
      });
    };
  }]);
