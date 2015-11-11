
App.NotesApp.config(function($routeProvider) {

  $routeProvider

    .when('/notes', {
        templateUrl : 'pages/notes.html',
        controller  : 'NotesController'
    })

    .when('/add', {
        templateUrl : 'pages/add-note.html',
        controller  : 'NoteController'
    })

    .when('/notes/:noteId', {
      templateUrl : 'pages/edit-note.html',
      controller  : 'NoteEditController'
    })

    .when('/board', {
        templateUrl : 'pages/board.html',
        controller  : 'NotesController'
    })

    .when('/done', {
        templateUrl : 'pages/done.html',
        controller  : 'NotesController'
    })

});