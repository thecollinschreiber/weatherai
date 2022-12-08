let weather = {
    "apiKey": "6ef6aef9accfd51f6c3513a0206b9dfa",

    //Function to Fetch Weather Information via API Call
    fetchWeather: function(city, state, country) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "," + state + "," + country +"&units=imperial&appid=" + this.apiKey)
    

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    //Fetching individual data from API call
    displayWeather: function(data) {

        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, feels_like, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, feels_like, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src= "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerText = temp + " °F";
        document.querySelector(".description").innerText = description;
        document.querySelector(".feels-like").innerText = "Feels like " + feels_like + " °F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";

        document.querySelector(".weather").classList.remove("loading");
        document.body.style.remove.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')";
    },

    searchWeather: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search-button button").addEventListener("click", function() {
    weather.searchWeather();
    
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter")
    {
        weather.searchWeather();
    }
});

weather.fetchWeather("mcallen", "tx", "us");