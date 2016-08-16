angular.module('test-app').component('universityRecord', {
  bindings: {
  	opened: '=',
    uni: '<',
    onUpdate: '&',
    onCancel: '&'
  },
  templateUrl:'code/university/university-record.html',
  controller: 'universityController'
});