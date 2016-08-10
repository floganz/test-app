angular.module('test-app')
			 .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, uni, del) {

  $scope.uni = uni;

  $scope.ok = function () {
    del(uni.id);
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
