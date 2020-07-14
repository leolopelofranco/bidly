angular.module('Bidly.services')
  .service('ItemService', ["$q", "$http", function($q, $http) {

    this.getItems = function(data) {
      var d= $q.defer();

      $.ajax({
        url: 'http://bidly.crabdance.com/api/index',
        type: 'GET',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

  }]);
