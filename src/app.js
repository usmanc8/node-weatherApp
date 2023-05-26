const path = require('path');
const express = require('express');
const hbs = require('hbs');
const locationCode = require('./utils/locationCode');
const forecast = require('./utils/forecast')

const app = express();

const publicDirPath = path.join(__dirname, '../public');
// const viewsPath = path.join(__dirname, '../templates');     This line can be used to define the path if we use our own path inseatd of default
const partialsPath = path.join(__dirname, '../views/partials');

app.use(express.static(publicDirPath));

//app.set('view engine', 'ejs');
app.set('view engine', 'hbs');
// app.set('views', viewsPath);                This line is used to set the path of our custom view folder
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Usman'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Usman'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.location) {
        return res.send({
            error: 'You must provide the location'
        });
    }

    locationCode(req.query.location, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                location: req.query.location,
                currentWeather: data.currentWeather,
                locationOverall: data.location,
                latitude,  
                longitude
            });
        });
    });

    // res.send({
    //     forecast: 'Its raining',
    //     location: 'Pakistan',
    //     City: req.query.location
    // });
});

app.get('*', (req, res) => {
    res.render('404', {
        message: 'Page Not Found'
    });
});

app.listen(3000, () => {
    console.log('Webserver started successfuly on port 3000');
});