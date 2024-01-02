const apiKey = "4ca4ce649c9e86adb3d727328e5ccbcd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".wheather-icon");

async function checkWheather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    } else {
        var data = await response.json();



        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.wheather[0].main == "clouds") {
            wheatherIcon.src = "images/clouds.png";
        }
        else if (data.wheather[0].main == "clear") {
            wheatherIcon.src = "images/clear.png";
        }
        else if (data.wheather[0].main == "rain") {
            wheatherIcon.src = "images/rain.png";
        }
        else if (data.wheather[0].main == "Drizzle") {
            wheatherIcon.src = "images/drizzle.png";
        }
        else if (data.wheather[0].main == "Mist") {
            wheatherIcon.src = "images/mist.png";
        }

        document.querySelector(".wheather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}


searchBtn.addEventListener("click", () => {
    checkWheather(searchBox.value);

})