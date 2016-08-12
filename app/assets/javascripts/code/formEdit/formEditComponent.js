angular.module('test-app').component('formEdit', {
  bindings: {
    university: '<',
    onUpdate: '&',
    onCancel: '&'
  },
  templateUrl:'code/templates/form-edit.html',
  controller: 'formEditController'
});