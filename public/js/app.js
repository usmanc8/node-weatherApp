console.log('client side js file is loaded');

const form = document.getElementById('searchForm');
let query = document.getElementById('weatherSearch');
let weatherData = document.getElementById('weatherData');
let html = "";


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weatherUrl = `/weather?location=${query.value}`;

    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        html += `
        <div class="card" style="width: 18rem;">
            <img src="/images/weather.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Weather Report</h5>
                <p class="card-text"><strong>Location:</strong> ${data.locationOverall.name}, ${data.locationOverall.region}, ${data.locationOverall.country}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Temprature: ${data.currentWeather.temperature}</li>
                <li class="list-group-item">Feels Like: ${data.currentWeather.feelslike}</li>
                <li class="list-group-item">Humidity: ${data.currentWeather.humidity}</li>
                <li class="list-group-item">Preciption: ${data.currentWeather.precip}</li>
            </ul>
            <div class="card-footer">
                <p>There are ${data.currentWeather.precip}% chances of rain today</p>
            </div>
        </div>
        <br><hr>
        `;
        weatherData.innerHTML = html;

    })
    query.value = "";
})

{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">Weather Report</h5>
    <p class="card-text"><strong>Location:</strong> ${data.locationOverall.name}, ${data.locationOverall.region}, ${data.locationOverall.country}</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">Temprature: ${data.currentWeather.temperature}</li>
    <li class="list-group-item">Feels Like: ${data.currentWeather.feelslike}</li>
    <li class="list-group-item">Humidity: ${data.currentWeather.humidity}</li>
    <li class="list-group-item">Preciption: ${data.currentWeather.precip}</li>
</ul>
<div class="card-footer">
    <p>There are ${data.currentWeather.precip}% chances of rain today</p>
</div>
</div>   */}


// fetch('http://api.weatherstack.com/current?access_key=03139053489ab82ff63f57c77ccc682c&query=30.19556,71.47528')
// .then((response) => {
//     response.json()
//     .then((data) => {
//         console.log(data)
//     })
// })



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let queryData = document.getElementById('searchItem').value;
//     console.log(queryData);

//     const url = `http://localhost:4000/products?q=${queryData}`;

//     fetch(url)
//     .then(data => data.json())
//     .then(d=> {
//         console.log(d,"Here");
//         d.forEach(element => {
//             htmlData+=`<p>${element.title}</p>`;
//         });
//         console.log('htmlData :', htmlData);
//         document.getElementById('data').innerHTML = htmlData;
//     })
// })




{/* <h3>Weather Report</h3><br>
        <p><strong>Location:</strong> ${data.locationOverall.name}, ${data.locationOverall.region}, ${data.locationOverall.country}</p>
        <h2>Weather Description:</h2>
        <ul>
            <li>Temprature: ${data.currentWeather.temperature}</li>
            <li>Feels Like: ${data.currentWeather.feelslike}</li>
            <li>Humidity: ${data.currentWeather.humidity}</li>
            <li>Preciption: ${data.currentWeather.precip}</li>
        </ul>
        <p>There are ${data.currentWeather.precip}% chances of rain today</p>
        <br>
        <hr></hr> */}