'use strict';
//Get your client ID and secrent by visiting https://developer.foursquare.com
//Thise are demo client Id & secret.

var requestParms = {
  clientId: "2NVEZVMEPV4WLS3QQ0DJFWLR1PJAXBQTKREYXTNYIJBDNEYP",
  clientSecret: "4TK0IYB4W4BE0PJQPLEG5C5C1EUCXTNNQGISN1EWEF2DRCAV",
  version: "20131230"
}

angular
  .module('1Meetup').factory('locationApi', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource(requestUri,
      {
        action: 'explore',
        client_id: requestParms.clientId,
        client_secret: requestParms.clientSecret,
        v: requestParms.version,
        venuePhotos: '1',
        callback: 'JSON_CALLBACK'
      },
      {
        get: {method: 'JSONP'}
      });

  });
