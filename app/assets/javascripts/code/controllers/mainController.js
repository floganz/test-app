angular.module('test-app')
			 .controller('MainController', ['$http','dataservice','$rootScope',
   function($http,dataservice,$rootScope) {
    var self = this;
    self.show = false;

    this.new = function(newValue) {
      if (self.show)
        self.show = false;
      else
        self.show = true;
    };

    this.create = function(newValue) {
      self.show = false;
      dataservice.create(newValue).then(function(data) {
        $rootScope.unis.unshift(data);
      });
    };

    this.delete = function(id) {
      var obj =  $rootScope.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  $rootScope.unis.indexOf(obj[0]);
      //console.log(id);
      dataservice.destroy(id).then(function(id) {
        $rootScope.unis.splice(i, 1);
      });
    };

    this.edit = function(id) {
      var obj =  $rootScope.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  $rootScope.unis.indexOf(obj[0]);
      if ($rootScope.unis[i].show)
        $rootScope.unis[i].show = false
      else
        $rootScope.unis[i].show = true
      $rootScope.university = angular.copy($rootScope.unis[i]);
      $rootScope.university.start_date = Date.parse($rootScope.unis[i].start_date);
      $rootScope.university.end_date = Date.parse($rootScope.unis[i].end_date);
      //console.log($rootScope.university.start_date);
      //console.log($rootScope.university.start_date.toDateString());
    };

    this.cancel = function(id) {
      $rootScope.unis[i].show = false;
    };

    this.update = function(id,newValue) {
      console.log(id);
      console.log(newValue);
      var obj =  $rootScope.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  $rootScope.unis.indexOf(obj[0]);
      if ($rootScope.unis[i].show)
        $rootScope.unis[i].show = false
      else
        $rootScope.unis[i].show = true
      $rootScope.unis.splice(i, 1);
      dataservice.edit(id,newValue).then(function(data) {
        $rootScope.unis.unshift(data);
      });
    };
  }]);
