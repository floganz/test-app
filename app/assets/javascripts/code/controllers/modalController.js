angular.module('test-app')
			 .controller('ModalController', function ($scope, $uibModal, $log) {

  $scope.open = function (record, del) {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'code/templates/modal.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        uni: function () {
          return record;
        },
        del: function () {
          return del;
        }
      }
    });
  };
});
