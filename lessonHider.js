//directive
angular.module('directivePractice')

.directive('lessonHider', function() {
    return {
        restrict: 'E'
        , templateUrl: './lessonHider.html'
        , scope: {
            lesson: "=",
            dayAlert: "&",
            deleteLesson: "&"
        }
        , replace: true
        , controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();


        }

        , link: function(scope, elem, attr) {
            scope.getSchedule.then(function(getBack) {
                scope.schedule = getBack.data;
                console.log(scope.schedule);

                scope.schedule.forEach(function(obj) {
                    if (obj.lesson === scope.lesson) {
                        scope.lessonDay = obj.weekday;
                        elem.find('li').css("text-decoration", "line-through");
                        scope.complete = true;
                        return;
                    }

                })
                scope.lessonDone = function() {
                    if (scope.complete) {
                        //  elem.toggleClass("checked");
                        elem.find('li').css("text-decoration", "line-through");
                    } else {
                        //  elem.toggleClass("checked");
                        elem.find('li').css("text-decoration", "none");
                    }
                }


            })

        }



    }
});
