const request = require("request");

const geocode = (address, calback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaWFtaXNtaWxlIiwiYSI6ImNqeGIwbnphODA0bmIzb29hYWlodno0MXoifQ.sgzC9OCS8BjGxR0_K8TUng&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      calback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      calback("Unable to find location. Try another search.", undefined);
    } else {
      calback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;