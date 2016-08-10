angular.module('test-app')
			 .controller('MainController', ['$http','dataservice','$rootScope',
   function($http,dataservice,$rootScope) {
    var vm = this;
    vm.show = false;
    vm.unis = dataservice.records;
    console.log(vm.unis);
    console.log(dataservice.records);

    var opened = vm;

    this.new = function(newValue) {
      $rootScope.university = {};
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
        //$rootScope.unis.unshift(data);
        vm.unis.unshift(data);
      });
    };

    this.delete = function(id) {
      var obj =  $rootScope.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  $rootScope.unis.indexOf(obj[0]);
      //console.log(id);
      dataservice.destroy(id).then(function(id) {
        $rootScope.unis.splice(i, 1);
      });
    };

    this.edit = function(id) {
      var obj =  $rootScope.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  $rootScope.unis.indexOf(obj[0]);
      if ($rootScope.unis[i].show) {
        $rootScope.unis[i].show = false
      }
      else {
        opened.show = false;
        $rootScope.unis[i].show = true
        opened = $rootScope.unis[i];
      }
      
      $rootScope.university = angular.copy($rootScope.unis[i]);
      $rootScope.university.start_date = new Date($rootScope.unis[i].start_date);
      $rootScope.university.end_date = new Date($rootScope.unis[i].end_date);
    };

    this.cancel = function(id) {
      $rootScope.unis[i].show = false;
    };

    this.update = function(id,newValue) {
      console.log(id);
      console.log(newValue);
      var obj =  $rootScope.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  $rootScope.unis.indexOf(obj[0]);
      if ($rootScope.unis[i].show)
        $rootScope.unis[i].show = false
      else
        $rootScope.unis[i].show = true
      //$rootScope.unis.splice(i, 1);

      dataservice.edit(id,newValue).then(function(data) {
        $rootScope.unis[i] = data;
      });
    };
  }]);
