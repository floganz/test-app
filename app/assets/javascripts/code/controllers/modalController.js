angular.module('test-app')
			 .controller('ModalController', ['$uibModal', '$log', function ($uibModal, $log) {

  var vm = this;

  vm.open = function (record, del) {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'code/templates/modal.html',
      controller: 'ModalInstanceCtrl as m',
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
