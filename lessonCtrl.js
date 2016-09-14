angular.module( 'directivePractice' )

.controller( 'lessonCtrl', function ( $scope, lessonService ) {

$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

$scope.announceDay = function ( lesson, day ) {
  if ( !day ) {
    day = "Monday";
  }
  alert( lesson + ' is active on ' + day + '.' );
}

$scope.deleteLesson = function ( barf ) {
  $scope.lessons.splice(barf,1);
}

} );
