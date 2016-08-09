angular.module('test-app')
			 .controller('MainController', ['$http','dataservice','$rootScope',
   function($http,dataservice,$rootScope) {
    var self = this;
    self.show = false;

    this.new = function(newValue) {
      if (self.show)
        self.show = false
      else
        self.show = true
    };

    this.create = function(newValue) {
      dataservice.create(newValue).then(function(data) {
        $rootScope.unis.unshift(data);
      });
    };

    this.delete = function(id) {
      var obj =  $rootScope.unis.filter(function(obj) {
        return obj.id == id;
      });
      var i =  $rootScope.unis.indexOf(obj[0]);

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
      //console.log($rootScope.unis[i].start_date);
      $rootScope.start.dt = $rootScope.unis[i].start_date;
    };

    this.cancel = function(id) {
      $rootScope.unis[i].show = false;
    };

    this.update = function(id,newValue) {
      console.log(id);
      console.log(newValue);
      dataservice.edit(id,newValue).then(function(data) {
        $rootScope.unis.unshift(data);
      });
    };
  }]);
