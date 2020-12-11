//Step 1create a request variable that issues the http request
//by creating an instance of xmlhttprequest
var request = new XMLHttpRequest();


//Step2 Open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true)

//send the request
request.send();
//Load the response when its ready
request.onload = function(){
	
	var data = JSON.parse(this.response);
	//console.log(data);
	weatherAtCity('London');
	weatherAtLatLon(data[0].latlng[0],data[0].latlng[1]);
	
	}
	function weatherAtCity(city)
	{
	 var weather_Request =new XMLHttpRequest();
	 let apikey = 'f34641c2bb09b64afe478aea18746fe4';
	 //let city = prompt("City Nane");
	 let bycity = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey;
	 
	 weather_Request.open('GET',bycity,true);
	 
	 weather_Request.send();
	 weather_Request.onload = function(){
			console.log('Link to check weather by city :'+bycity);
			var cityData = JSON.parse(this.response);
			console.log("City:"+city);
			console.log('Weather:'+cityData.weather[0].description);
			console.log('Temperature:'+cityData.main.temp);
			 }
	}
	function weatherAtLatLon(lat,lon)
	{	
	let apikey = 'f34641c2bb09b64afe478aea18746fe4';	
	 var LatLonWeatherRequest =new XMLHttpRequest();
	 //let lat=prompt("Enter latitude");
	 //let lon=prompt("Enter longitude");
	 let bylatlon = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apikey;
	 
	 LatLonWeatherRequest.open('GET',bylatlon,true);
	 
	//send the request
	LatLonWeatherRequest.send();
	//Load the response when its ready
	LatLonWeatherRequest.onload = function(){
		console.log("Link to check weather by latitude and longitude:"+bylatlon);
		var latlonData = JSON.parse(this.response);
		console.log("Lat:"+lat+"  ,Lon:", +lon);
		//console.log(latlonData);
		console.log("The city is :"+latlonData.name);
		console.log('Weather:'+latlonData.weather[0].description);
		console.log('Temperature:'+latlonData.main.temp);
		
		}
	}

request.onerror = function(){
	alert ('Network error');
}
