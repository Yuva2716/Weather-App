const getWeather  = async (city)=>{
    const weatherAPI='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=fbb50edff6f4bb9ba498298f8b781c0e&units=metric';
    const weatherObj = fetch(weatherAPI);
    // const response = weatherObj.json();
    console.log(weatherAPI)
    
    return weatherObj.then((response)=>{
        return response.json()
    })    
}

async function searchCity(){

    const city = document.getElementById('city-input').value

    getWeather(city)
    .then((response)=>{        
        showWeatherData(response);
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })

}

showWeatherData = (weatherData) =>{
    document.getElementById("city-name").innerText = weatherData.name
    document.getElementById("weather-type").innerText = weatherData.weather[0].main
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
    document.getElementById('region').innerText = weatherData.sys.country
    document.getElementById('wind').innerText = weatherData.wind.speed
}

