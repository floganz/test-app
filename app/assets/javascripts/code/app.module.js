angular.module('test-app',['ui.bootstrap'])
.run(['dataservice','$rootScope',function(dataservice, $rootScope) {
    dataservice.get_data().then(function(data){
      $rootScope.unis = data;
      //console.log($rootScope.unis);
    })
  }]);