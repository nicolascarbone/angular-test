'use strict';

App.NotesApp.controller('NotesController', ['$scope', '$http', function($scope, $http) {
  $http.get('fixtures/notes.json').success(function(data) {
    $scope.notes = data;
  });

  $scope.orderProp = "date";
}]);