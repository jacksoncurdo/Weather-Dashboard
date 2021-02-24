var APIKEY = "1ab5d5fb108148020574fbedf5d8f664";

document.querySelector("#search-form").addEventListener("submit", function (event) {
    event.preventDefault()
    var searchTerm = document.querySelector("#search-term").value
    weatherSearch(searchTerm)
});
displayButtons()

function weatherSearch(selectedCity) {

    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=imperial&appid=${APIKEY}`;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                alert(`error: ${response.statusTest}`)
            }
        })
        .then(function (data) {
            var longitude = data.coord.lon
            var latitude = data.coord.lat
            var apiurl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKEY}`
            fetch(apiurl2)
                .then(function (response2) {
                    if (response2.ok) {
                        return response2.json()
                    } else {
                        alert(`error: ${response2.statusTest}`)
                    }
                })
                .then(function (data2) {
                    document.querySelector("#day-grid").innerHTML = ""
                    for (let i = 1; i < 6; i++) {
                        var day = document.createElement('div')
                        day.innerHTML = `
                        <p>Temperature: ${data2.daily[i].temp.day} F°</p>                
                        <img src="https://openweathermap.org/img/wn/${data2.daily[i].weather[0].icon}@2x.png">
                        <p>Humidity: ${data2.daily[i].humidity}%</p>
                        `
                        document.querySelector("#day-grid").appendChild(day)
                    }
                })

            document.querySelector("#current-day").innerHTML = ""

            var title = document.createElement(`h1`)
            title.innerHTML = data.name

            var weatherImg = document.createElement("img")
            weatherImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

            var temp = document.createElement("P")
            temp.innerHTML = "Temperature: " + data.main.temp + " F°"

            var humidity = document.createElement("P")
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%"

            var windSpeed = document.createElement("P")
            windSpeed.innerHTML = "Wind Speed: " + data.wind.speed + " MPH"

            document.querySelector("#current-day").appendChild(title)
            document.querySelector("#current-day").appendChild(weatherImg)
            document.querySelector("#current-day").appendChild(temp)
            document.querySelector("#current-day").appendChild(humidity)
            document.querySelector("#current-day").appendChild(windSpeed)
        })
}
