angular.module('test-app')
			 .controller('MainController', ['$scope','$http','dataservice', 
  function($scope,$http,dataservice) {
    var vm = this;
    vm.scope = $scope;
    vm.opened = vm;
    vm.show = false;
    
    dataservice.get_data().then(function(data) {
        vm.unis = data;
    });

    this.new = function(newValue) {
      vm.university = {};
      vm.type = "new";
      // console.log(vm.type);
      if(vm.show) {
        vm.show = false;
      } else {
        vm.opened.show = false;
        vm.show = true;
        // console.log(vm.type);
        // console.log(vm.show);
        vm.opened = vm;
      }
    };

    this.addRecord = function(data) {
      vm.unis.unshift(data);
    };

    this.cancel = function () {
      vm.opened.show = false;
    };

    vm.scope.$on('deleteRecord',function(event, id){
      var obj =  vm.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  vm.unis.indexOf(obj[0]);
      //console.log(id);
      dataservice.destroy(id).then(function(id) {
        vm.unis.splice(i, 1);
      });
    });
  }]);
