// CONTROLLERS
weatherApp.controller("homeController", [
  "$scope",
  "cityService",
  function($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch("city", function() {
      cityService.city = $scope.city;
    });
  }
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$resource",
  "$routeParams",
  "cityService",
  function($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.appid = "APPID";
    $scope.days = $routeParams.days || "2";

    $scope.weatherAPI = $resource(
      "http://api.openweathermap.org/data/2.5/forecast?&APPID=a143c0f7c12e183a7a5adae1de94d010&q=New%20York" +
        $scope.searchCity +
        "&appid=" +
        $scope.appid +
        "&cnt=" +
        $scope.count
    );

    $scope.weatherResult = $scope.weatherAPI.get({
      q: $scope.city,
      cnt: $scope.days
    });

    $scope.convertToFahrenheit = function(degK) {
      return Math.round(1.8 * (degK - 273) + 32);
    };

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
  }
]);
