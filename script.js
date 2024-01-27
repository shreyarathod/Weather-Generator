const apiKey = "3b45a366c8a396a9035786c0c02813c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(inputCity){
    const response = await fetch(apiUrl + inputCity + `&appid=${apiKey}`); 

    if(response.status == 404){
        document.querySelector(".error-message").style.display="block";
        document.querySelector(".card-content").style.display="none";
    }else{
        var data = await response.json();

        const temp = document.querySelector('#temp');
        const city = document.querySelector('#city');
        const humidityVal = document.querySelector('#humidity-value');
        const windVal = document.querySelector('#wind-value');
        const centerImage = document.querySelector(".center-content img");

        temp.innerHTML = data.main.temp;
        city.innerHTML = data.name;
        humidityVal.innerHTML = data.main.humidity;
        windVal.innerHTML = data.wind.speed;

        if(data.weather[0].main ==="Clouds"){
            centerImage.src="clouds.png";
        }else if(data.weather[0].main ==="Clear"){
            centerImage.src="clear.png";
        }else if(data.weather[0].main ==="Drizzle"){
            centerImage.src="drizzle.png";
        }else if(data.weather[0].main ==="Mist"){
            centerImage.src="images/mist.png";
        }else if(data.weather[0].main ==="Rain"){
            centerImage.src="rain.png";
        }else if(data.weather[0].main ==="Snow"){
            centerImage.src="snow.png";
        }else{
            centerImage.src="mist.png";
        }

        document.querySelector(".card-content").style.display="block";
        document.querySelector(".error-message").style.display="none";
    }
    
   
}


const searchBar = document.querySelector(".top-bar input");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
})

searchBar.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        checkWeather(searchBar.value);
    }

})

