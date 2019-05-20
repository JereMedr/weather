function weatherUrl(lat, lon){
    return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dbf230c9bb687fd6db2cecf0ba1b1263`
}

 function getWeather(lat, lon){
     return fetch(weatherUrl(lat, lon))
        .then(r => r.json())
        .then(weather => console.log(weather))
 }

 function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
}

 getWeather(-34.5221554, -58.7000067)
 