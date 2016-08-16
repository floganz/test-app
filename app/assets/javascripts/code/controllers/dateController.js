angular.module('test-app')
.controller('dateController', function() {
  var vm = this;

	vm.initDatepicker = function(){
    angular.element(".md-datepicker-button").each(function(){
      var el = this;
      var ip = angular.element(el).parent().find("input").bind('click', function(e){
        angular.element(el).click();
      });
      angular.element(this).css('display', 'none');
    });
  };

  vm.myDate = new Date();
});



