angular.module('TempsParTour', ['ionic'])
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
.controller('TempsParTourCtrl', function ($scope, $ionicPopup) {
  $scope.default = {
    distanceTurn: 150,
    distanceTotal: 825,
    time: 4
  };

  $scope.calcul = function () {
    console.log($scope.default .time / ($scope.default.distanceTotal/$scope.default.distanceTurn) * 60)
    var isNumeric = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    if (!isNumeric($scope.default.distanceTurn)) {
      $ionicPopup.alert({
         title: 'Erreur',
         template: 'Vous devez donner un nombre pour la disance par tour.'
       });
    } else if (!isNumeric($scope.default.distanceTotal)) {
      $ionicPopup.alert({
         title: 'Erreur',
         template: 'Vous devez donner un nombre pour la disance total.'
       });
    } else if (!isNumeric($scope.default .time)) {
      $ionicPopup.alert({
         title: 'Erreur',
         template: 'Vous devez donner un nombre pour le temps total.'
       });
    } else {
        $scope.result = $scope.default.time / ($scope.default.distanceTotal/$scope.default.distanceTurn) * 60;
    }
  };
  $scope.calcul();
});
