const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/1f33aae952aefa8a031a9830c0a9d524/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        icon: body.daily.icon,
        summary: body.daily.data[0].summary
      });
    }
  });
};

module.exports = forecast;