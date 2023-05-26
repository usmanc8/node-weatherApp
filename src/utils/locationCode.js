const request = require('request');
const chalk = require('chalk');

const locationCode = (address, callback) => {
    const locationUrl = 'http://api.positionstack.com/v1/forward?access_key=73e333d043b418ee8cd13e16e2deb137&limit=1&query=' + address + '';

    request({ url: locationUrl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to the " + chalk.bgRed("Location Service") + "!", undefined);
        } else if (response.body.data.length === 0) {
            callback(chalk.bgRed("Unable to find Location!"), undefined);
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                name: response.body.data[0].name,
                region: response.body.data[0].region,
                country: response.body.data[0].country
            });
        }
    });
};

module.exports = locationCode;