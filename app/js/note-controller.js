'use strict';

/* Controllers */

App.NotesApp.controller('NoteController', ['$scope', '$http', function($scope, $http) {
    $scope.title = "Add Note";
    $scope.note = {};
    $scope.editor = false

    $scope.markAsDone = function() {
      console.log("mark as done");
      $scope.note.done = 1;
      $scope.save();
    }

    $scope.save = function() {
      $http({
        method  : 'POST',
        url     : 'process.php',
        data    : $.param($scope.note),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
       })
      .success(function(data) {
        $scope.message = "Note added successfully";
      })
    }

    $scope.processForm = function() {
      $http({
        method  : 'POST',
        url     : 'process.php',
        data    : $.param($scope.note),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
       })
      .success(function(data) {
        $scope.message = "Note added successfully";
      })
      .error(function(data, status, headers, config) {
        $scope.errorDescription = 'description mal';
        $scope.message = "Error adding note";
      });
    };

}]);


App.NotesApp.controller(
  'NoteEditController',
  [ '$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
      $http.get('fixtures/' + $routeParams.noteId + '.json').success(function(data) {
        $scope.note = data;
        $scope.note.date = new Date(data.date);
      });
    }
  ]
);