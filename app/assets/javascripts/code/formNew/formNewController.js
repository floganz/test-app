angular.module('test-app').controller('formNewController', ['dataservice', 
	function (dataservice) {

		var vm = this;
    
    this.create = function (newValue) {
      dataservice.create(newValue).then(function(data) {
        vm.onUpdate({data: data});
        vm.onCancel();
      });
    };

    this.cancel = function () {
    	vm.onCancel();
    }
	}
]);
