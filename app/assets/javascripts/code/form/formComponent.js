angular.module('test-app').component('myForm', {
  bindings: {
  	type: '<',
    university: '<',
    onUpdate: '&',
    onCancel: '&'
  },
  templateUrl:'code/form/my-form.html',
  controller: 'formController'
});