let reviews = []

navigator.geolocation.getCurrentPosition(
    function (positon){
        var map = L.map('map').setView([46.4576607, -63.334517], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable')
    }
)

$(document).ready(function() {
  // geolocation enabled

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showcityname);

    function showcityname(position) {
      var lat = position.coords.latitude;
      var longit = position.coords.longitude;
      var altitude = position.coords.altitude;
      var latitude_text = document.getElementById("latitude-val");
      var altitude_text = document.getElementById("altit");
      var city_name;
      var temp;
      var pressure;
      var wind_speed;
      var country_name;
      var weather_description;
      var apiKey = "5d54b88937f9b6f61a9f47e1938d0751";

      altitude_text.innerHTML = "Altitude is " + altitude;
      latitude_text.innerHTML = "Latitude is " + lat;

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey, function(data) {

        city_name = data["name"];
        country_name = data["sys"]["country"];
        weather_description = data["weather"][0]["description"];
        temp = data["main"]["temp"];
        pressure = data["main"]["pressure"];
        wind_speed = data["wind"]["speed"];

        $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description);
        $(".temp").html(temp);
        $(".pressure").html(pressure + " mBar");
        $(".wind-spd").html(wind_speed + " m/s");

      })

    }

  }

})

class Review{
  date = new Date()
  id = (Date.now() + "").slice

  constructor(text){
    this.text = text;
  }
}

class Food extends Review{
  type = "Food"


  constructor(text){
    super(text)
  }
}

class Book extends Review{
  type = "Book"

  constructor(text, genre){
    super(text)
    this.genre = genre
  }
}

reviews.push()