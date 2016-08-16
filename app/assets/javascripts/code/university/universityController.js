angular.module('test-app').controller('universityController', ['dataservice', '$scope',
	function (dataservice, $scope) {

		var vm = this;
    vm.scope = $scope;
    //vm.opened = opened;
    
    this.edit = function(id) {
      vm.type = "edit";
      if (vm.uni.show) {
        vm.uni.show = false
      }
      else {
        vm.opened.show = false;
        vm.uni.show = true
        vm.opened = vm.uni;
      }
      vm.university = angular.copy(vm.uni);
      vm.university.start_date = new Date(vm.uni.start_date);
      vm.university.end_date = new Date(vm.uni.end_date);
    };

    this.editRecord = function (id,data) {
      // console.log(id);
      // console.log(data);
      vm.opened.show = !vm.opened.show;
      vm.uni = data;
    };

    this.delete = function (id) {
      vm.scope.$emit('deleteRecord', id);
    };

    this.cancel = function () {
      vm.uni.show = false;
    	vm.onCancel();
    };
	}
]);
