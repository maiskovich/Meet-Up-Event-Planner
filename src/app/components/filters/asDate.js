angular
  .module('1Meetup')
  .filter("asDate", function () {
    return function (input) {
      return new Date(input);
    }
  });
