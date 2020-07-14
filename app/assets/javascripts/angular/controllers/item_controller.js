Bidly.controller('ItemController', ['$scope', '$location', 'DemoService', 'ngDialog', 'ItemService',
  function($scope, $location, DemoService, ngDialog, ItemService) {

    $scope.selection = 'details';

    $scope.tab = function(selected) {
      $scope.selection = selected
    }

    ItemService.getItems()
    .then(function(d){
      console.log(d)

      $scope.items = d.item
      featured = _.filter(d.item, function(x){ return x.tag == 'featured' ; });

      $scope.featured = featured[0]

      $scope.item = {
        "templateUrl": 'shared/_itemMainCard.html',
        "data": $scope.featured,
      }
    });

    $scope.hello = 'hello'

    $scope.cards = DemoService.class();


    $scope.suggestions = {
      "templateUrl": 'shared/_itemCard.html'
    }

}])
