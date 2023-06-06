$(document).ready(function() {
  // geolocation enabled

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showcityname);

    function showcityname(position) {
      var lat = 46.4576607;
      var longit = -63.334517;
      var altitude = position.coords.altitude;
      var latitude_text = document.getElementById("latitude-val");
      var altitude_text = document.getElementById("altit");
      var city_name;
      var temp;
      var pressure;
      var wind_speed;
      var country_name;
      var weather_description;
      var apiKey = "bb2ad73781e462568678af25a8a3b24a";

      altitude_text.innerHTML = "Altitude is " + altitude;
      latitude_text.innerHTML = "Latitude is " + lat;

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey + "&units=metric", function(data) {

        city_name = data["name"];
        country_name = data["sys"]["country"];
        weather_description = data["weather"][0]["description"];
        temp = data["main"]["temp"];
        pressure = data["main"]["pressure"];
        wind_speed = data["wind"]["speed"];

        $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description);
        $(".temp").html(temp + "Celcius");
        $(".pressure").html(pressure + " mBar");
        $(".wind-spd").html(wind_speed + " m/s");

      })

    }

  }

})