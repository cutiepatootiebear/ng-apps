// DIRECTIVES
weatherApp.directive("weatherReport", function() {
  return {
    restrict: "E",
    templateUrl: "directives/weatherReport.html",
    replace: false,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  };
});
