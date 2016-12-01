'use strict';

var app = angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
}]);

app.controller('View1Ctrl', function($scope) {
    var data = [
      {
        "city": "Rio de Janeiro",
        "email": "fabio@fabiofarias.com.br"
      },
      {
        "city": "Sao Paulo",
        "email": "joao@fabiofarias.com.br"
      },
      {
        "city": "Petrolina",
        "email": "pedro@fabiofarias.com.br"
      },
      {
        "city": "Fortaleza",
        "email": "ricardo@fabiofarias.com.br"
      },
      {
        "city": "Porto Alegre",
        "email": "gabriela@fabiofarias.com.br"
      },
    ];

    $scope.data = data;
    $scope.search = "";
    var type;

    $scope.filter = function (value, index, array) {
        var result = false;
        switch (type){
            case 'any':

                result = value.city.toLocaleLowerCase().indexOf($scope.search)!=-1 ||
                         value.email.toLocaleLowerCase().indexOf($scope.search)!=-1;

                break;
            case 'city':
              break;
            case 'email':
              break;
        }
    };

});