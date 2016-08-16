angular.module('test-app')
			 .controller('DialogController', ['$mdDialog', 'uni', 'del',
	function ($mdDialog, uni, del) {
		
		var vm = this;
		vm.uni = uni;

	  vm.hide = function() {
	    $mdDialog.hide();
	  };

	  vm.cancel = function() {
	    $mdDialog.cancel();
	  };

	  vm.delete = function() {
	  	del(uni.id);
	    $mdDialog.hide();
	  };
}]);