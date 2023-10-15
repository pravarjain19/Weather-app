
const apikey = "575795b8ab86060ea8aec37c61ea296b";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const weatherIcon = document.querySelector(".weather-icon");


function getCityName(){
  var cityname =   document.getElementById("search").value;
  console.log(cityname);
  checkWeather(cityname);
document.getElementById("search").value="";
  
}


async function checkWeather(cityname){
    const response = await fetch(apiUrl+`&appid=${apikey}&q=${cityname}`);
    var data = await response.json();

    console.log(data);
    setDataonCard(data);


}
function  setDataonCard(data){
    if(data.cod==404){
        alert("Error "+data.message)
    }
    else{

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity+" %";
    
    document.querySelector(".wind").innerHTML =data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.setAttribute("src" , "./weather-app-img/images/clouds.png");
        
    }
    if(data.weather[0].main=="Rain"){
        weatherIcon.setAttribute("src" , "./weather-app-img/images/rain.png");

    }
    if(data.weather[0].main=="Haze"){
        weatherIcon.setAttribute("src" , "./weather-app-img/images/clear.png");

    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.setAttribute("src" , "./weather-app-img/images/drizzle.png");

    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.setAttribute("src" , "./weather-app-img/images/mist.png");

    }
    if(data.weather[0].main=="Snow"){
        weatherIcon.setAttribute("src" , "./weather-app-img/images/Snow.png");

    }
    

}

}