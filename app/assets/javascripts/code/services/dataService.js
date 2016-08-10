angular.module('test-app').service('dataservice', dataservice);

function dataservice($http,$q) {
  var service = {
    get_data: get_data,
    create: create,
    destroy: destroy,
     edit: edit
    // records: records
  };
  return service;

  // var records = {};

  function get_data() {
    var deffered = $q.defer();
    $http.get("/get_data")
    .success(function(data, status, headers, config){
      // records = data;
      //console.log(records);
      deffered.resolve(data);
    });
    return deffered.promise;
  };

  function create(newValue) {
    var deffered = $q.defer();
    $http.post(
      "/universities", newValue,
      {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
    ).success(function (data, status, headers, config) {
      deffered.resolve(data);
    })
    .error(function (){
      console.log("error");
    });
    return deffered.promise;
  };
  
  function destroy(id){
    var deffered = $q.defer();
    $http.delete(
      "/universities/" +id,
      {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
    ).success(function (data, status, headers, config) {
      deffered.resolve(data);
    });
    return deffered.promise;
  };

  function edit(id,newValue) {
    var deffered = $q.defer();
    $http.patch(
      "/universities/"+id, newValue,
      {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
    ).success(function (data, status, headers, config) {
      deffered.resolve(data);
    })
    .error(function (){
      console.log("error");
    });
    return deffered.promise;
  };
};
