angular.module('test-app').component('formNew', {
  // isolated scope binding
  bindings: {
    onUpdate: '&',
    onCancel: '&'
  },

  // Inline template which is binded to message variable
  // in the component controller
  templateUrl:'code/templates/form-new.html',

  // The controller that handles our component logic
  controller: 'formNewController'
});