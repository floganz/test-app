angular.module('test-app').controller('formController', ['dataservice', 
	function (dataservice) {

		var vm = this;
    
    this.onSubmit = function (newValue) {
      console.log(newValue);
      if (vm.type == "new") {
        dataservice.create(newValue).then(function(data) {
          vm.onUpdate({data: data});
          vm.onCancel();
        });
      } else {
        dataservice.edit(newValue.id,newValue).then(function(data) {
          vm.onUpdate({id: newValue.id, data: data});
          vm.onCancel();
        });
      }
    }

    this.cancel = function () {
    	vm.onCancel();
    };
	}
]);
