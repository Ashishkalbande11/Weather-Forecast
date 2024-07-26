
//gerated api key
const apiKey = "b55e2180d1903b459d72a0fa636c2003";
// copied url from website
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//function with city name
async function checkWeather(city){

    //passing url as per the req city name 
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);


    //if city not found we will get this 404 error 
    if(response.status == 404){
        //initially error msg is hidden if error occoured error msg will display
        document.querySelector(".error").style.display = "block";
        //initially weather forecast is hidden 
        document.querySelector(".weather").style.display = "none";
    }else{

        // if we get valid city name weather forecast will displaye and msg will hide
        var data = await response.json();


        //finding weather forecast as per live updates
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";


        //manupulating images as per the weather conditions

        //as per information present in inspection 
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        } 
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        //displaying weather contions initially it was hidden
        document.querySelector(".weather").style.display = "block";
        //hiding error msg as we get valid city
        document.querySelector(".error").style.display = "none";

    }
}

//searching as per the city
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
