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
  $scope.distanceTurn = 150;
  $scope.distanceTotal = 825;
  $scope.time = 4;

  $scope.calcul = function () {
    var isNumeric = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    if (!isNumeric($scope.distanceTurn)) {
      $ionicPopup.alert({
         title: 'Erreur',
         template: 'Vous devez donner un nombre pour la disance par tour.'
       });
    } else if (!isNumeric($scope.distanceTotal)) {
      $ionicPopup.alert({
         title: 'Erreur',
         template: 'Vous devez donner un nombre pour la disance total.'
       });
    } else if (!isNumeric($scope.time)) {
      $ionicPopup.alert({
         title: 'Erreur',
         template: 'Vous devez donner un nombre pour le temps total.'
       });
    } else {
      $scope.result = $scope.time / ($scope.distanceTotal/$scope.distanceTurn) * 60;
    }
  };
  $scope.calcul();
});
