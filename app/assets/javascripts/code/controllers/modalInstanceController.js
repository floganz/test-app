angular.module('test-app')
			 .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, uni, del) {

	var vm = this;
  vm.uni = uni;

  vm.ok = function () {
    del(uni.id);
    $uibModalInstance.close();
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
