// let's create a re-usable factory that generates the $firebaseAuth instance
angular
  .module('1Meetup')
  .factory("Auth", ["$firebaseAuth", "firebaseUrl",
    function ($firebaseAuth, firebaseUrl) {
      var ref = new Firebase(firebaseUrl);
      return $firebaseAuth(ref);
    }
  ]);
