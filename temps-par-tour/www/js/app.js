angular.module('TempsParTour', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

  });
})
.filter('toMinutes', function() {
    return function(seconds) {
        if (seconds < 60) return '.';
        if (seconds % 60 == 0) {
          return ' soit ' + Math.round(seconds / 60) + 'min.'
        }
        return ' soit ' + Math.round(seconds / 60)  + 'min ' + Math.round(seconds % 60)  + 's.';
    };
})
.filter('round', function() {
    return function(seconds) {
        return Math.round(seconds);
    };
})
.controller('TempsParTourCtrl', function ($scope) {
  $scope.distanceTurn = '150';
  $scope.distanceTotal = '825';
  $scope.time = '4';

  $scope.calcul = function () {
    $scope.result = $scope.time / ($scope.distanceTotal/$scope.distanceTurn) * 60;
  };
  $scope.calcul();
});
