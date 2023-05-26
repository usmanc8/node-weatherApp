const request = require('request');
const chalk = require('chalk');

const forecast = (lati, longi, callback) => {
    const weatherUrl = `http://api.weatherstack.com/current?access_key=03139053489ab82ff63f57c77ccc682c&query=${lati},${longi}`;

    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback(chalk.bgRed("Unable to connect to the " + chalk.bgRed("Location Service") + "!", undefined));
        } else if (response.body.error) {
            callback(chalk.bgRed("Unable to find given location's weather!"), undefined);
        } else {
            callback(undefined, {
                location: response.body.location,
                currentWeather: response.body.current,
                precip: response.body.current.precip,
                humidity: response.body.current.humidity,
                windSpeed: response.body.current.wind_speed
            });
        }
    })
};

module.exports = forecast;