Bidly.controller('NavController', ['$scope', '$location', 'DemoService', 'ngDialog', 'ItemService',
  function($scope, $location, DemoService, ngDialog, ItemService) {

    $scope.register = function() {
      ngDialog.open({ templateUrl: 'shared/register.html',
          className: 'ngdialog-theme-default',
          width: 500,
          controller: ['$scope', function($scope) {
            $scope.close = function() {
              ngDialog.close();
            }
          }]
        })
    }

    $scope.login = function() {
      ngDialog.open({ templateUrl: 'shared/login.html',
          className: 'ngdialog-theme-default',
          width: 500,
          controller: ['$scope', function($scope) {
            $scope.close = function() {
              ngDialog.close();
            }
          }]
        })
    }

    ItemService.getItems()
    .then(function(d){
      console.log(d)

      $scope.user = d.user
    });

    $scope.items = [
      {
        "label": "Dashboard",
        "link": "nav.dashboard",
      },
      {
        "label": "Signout",
        "link": "nav.signout",
      }
    ];

}])
