$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=atlanta&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 
    
    function(data){
    var location1 = data.name;
    var icon1 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp1 = Math.floor(data.main.temp);
    var humidity1 = data.main.humidity;
    var windSpeed1 = data.wind.speed;
    
    $('.location1').prepend(location1);
    $('.icon1').attr('src', icon1); 
    $('.temp1').append("Temperature: " + temp1 + "°F");
    $('.humidity1').append("Humidity: " + humidity1 + "%");
    $('.windSpeed1').append("Wind Speed: " + windSpeed1 + " MPH");
    
    });
    
    // anchorage weather
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=anchorage&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae",
    
    function(data){
    var location2 = data.name;
    var icon2 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp2 = Math.floor(data.main.temp);
    var humidity2 = data.main.humidity;
    var windSpeed2 = data.wind.speed;
    
    $('.location2').prepend(location2);
    $('.icon2').attr('src', icon2); 
    $('.temp2').append("Temperature: " + temp2 + "°F");
    $('.humidity2').append("Humidity: " + humidity2 + "%");
    $('.windSpeed2').append("Wind Speed: " + windSpeed2 + " MPH");
    });
    
    // perth weather
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=perth&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 
    
    function(data){
    var location3 = data.name;
    var icon3 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp3 = Math.floor(data.main.temp);
    var humidity3 = data.main.humidity;
    var windSpeed3 = data.wind.speed;
    
    $('.location3').prepend(location3);
    $('.icon3').attr('src', icon3); 
    $('.temp3').append("Temperature: " + temp3 + "°F");
    $('.humidity3').append("Humidity: " + humidity3 + "%");
    $('.windSpeed3').append("Wind Speed: " + windSpeed3 + " MPH");
    });
    
    // newhope, PA weather
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=New+Hope&PA&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae",
    
    function(data){
    var location4 = data.name;
    var icon4 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp4 = Math.floor(data.main.temp);
    var humidity4 = data.main.humidity;
    var windSpeed4 = data.wind.speed;
    
    $('.location4').prepend(location4);
    $('.icon4').attr('src', icon4); 
    $('.temp4').append("Temperature: " + temp4 + "°F");
    $('.humidity4').append("Humidity: " + humidity4 + "%");
    $('.windSpeed4').append("Wind Speed: " + windSpeed4 + " MPH");
    });
    
    // baltimore weather
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Baltimore&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 
    
    
    function(data){
    var location5 = data.name;
    var icon5 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp5 = Math.floor(data.main.temp);
    var humidity5 = data.main.humidity;
    var windSpeed5 = data.wind.speed;
    
    $('.location5').prepend(location5);
    $('.icon5').attr('src', icon5); 
    $('.temp5').append("Temperature: " + temp5 + "°F");
    $('.humidity5').append("Humidity: " + humidity5 + "%");
    $('.windSpeed5').append("Wind Speed: " + windSpeed5 + " MPH");
    });
    
    // london weather
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 
    
    
    function(data){
    var location6 = data.name;
    var icon6 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp6 = Math.floor(data.main.temp);
    var humidity6 = data.main.humidity;
    var windSpeed6 = data.wind.speed;
    
    $('.location6').prepend(location6);
    $('.icon6').attr('src', icon6); 
    $('.temp6').append("Temperature: " + temp6 + "°F");
    $('.humidity6').append("Humidity: " + humidity6 + "%");
    $('.windSpeed6').append("Wind Speed: " + windSpeed6 + " MPH");
    });
    
    // paris weather
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=8a33ff430c1f430013be38a1870e0dae", 
    
    
    function(data){
    var location7 = data.name;
    var icon7 = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp7 = Math.floor(data.main.temp);
    var humidity7 = data.main.humidity;
    var windSpeed7 = data.wind.speed;
    
    $('.location7').prepend(location7);
    $('.icon7').attr('src', icon7); 
    $('.temp7').append("Temperature: " + temp7 + "°F");
    $('.humidity7').append("Humidity: " + humidity7 +"%");
    $('.windSpeed7').append("Wind Speed: " + windSpeed7 + " MPH");
    
    });
    
    // ajax calls for uv index ATL
    $.getJSON("https://api.openweathermap.org/data/2.5/uvi?lat=33.75&lon=84.39&APPID=8a33ff430c1f430013be38a1870e0dae",
    function(data){
    var uVIndex1 = data.value;
    $('.uVIndex1').append("UV Index: " + uVIndex1);
    });
    
    // AK
    $.getJSON("https://api.openweathermap.org/data/2.5/uvi?lat=61.21&lon=-122.37&APPID=8a33ff430c1f430013be38a1870e0dae", 
    function(data){
    var uVIndex2 = data.value;
    $('.uVIndex2').append("UV Index: " + uVIndex2);
    });
    // Perth
    $.getJSON("https://api.openweathermap.org/data/2.5/uvi?lat=31.95&lon=115.86&APPID=8a33ff430c1f430013be38a1870e0dae",
    function(data){
    var uVIndex3 = data.value;
    $('.uVIndex3').append("UV Index: " + uVIndex3);
    });
    // New Hope
    $.getJSON( "https://api.openweathermap.org/data/2.5/uvi?lat=40.36&lon=74.95&APPID=8a33ff430c1f430013be38a1870e0dae",
    function(data){
    var uVIndex4 = data.value;
    $('.uVIndex4').append("UV Index: " + uVIndex4);
    });
    // Baltimore
    $.getJSON("https://api.openweathermap.org/data/2.5/uvi?lat=39.29&lon=76.61&APPID=8a33ff430c1f430013be38a1870e0dae",
    function(data){
    var uVIndex5 = data.value;
    $('.uVIndex5').append("UV Index: " + uVIndex5);
    });
    // London
    $.getJSON("https://api.openweathermap.org/data/2.5/uvi?lat=51.51&lon=0.13&APPID=8a33ff430c1f430013be38a1870e0dae",
    function(data){
    var uVIndex6 = data.value;
    $('.uVIndex6').append("UV Index: " + uVIndex6);
    });
    // Paris
    $.getJSON("https://api.openweathermap.org/data/2.5/uvi?lat=48.85&lon=2.35&APPID=8a33ff430c1f430013be38a1870e0dae",
    function(data){
    var uVIndex7 = data.value;
    $('.uVIndex7').append("UV Index: " + uVIndex7);
    });
    
    // // five day
    // $.getJSON("api.openweathermap.org/data/2.5/forecast?id=4180439&units=imperial&APPID=8a33ff430c1f430013be38a1870e0dae",
    // function(data){
    // var fiveDayTemp1 = main.temp;
    // console.log(fiveDayTemp1, "fiveDayTemp1");
    // $('.fiveDayTemp1').append("Temp: " + fiveDayTemp1);
    
    // })