angular.module('test-app').controller('formEditController', ['dataservice', 
	function (dataservice) {

		var vm = this;
    
    this.update = function(id,newValue) {
      dataservice.edit(id,newValue).then(function(data) {
        vm.onUpdate({id: id, data: data});
        vm.onCancel();
      });
    };

    this.cancel = function () {
    	vm.onCancel();
    };
	}
]);
