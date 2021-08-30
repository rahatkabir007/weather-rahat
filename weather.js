const loadData = () => {
    const cityName = document.getElementById("search-field");
    cityNameText = cityName.value;
    cityName.value = '';
    if (cityNameText == '') {
        const errorMessage = document.getElementById("error-message");
        const errorMessage2 = document.getElementById("error-message2");
        errorMessage.style.display = 'none';
        errorMessage2.style.display = 'block';
        const weatherResult = document.getElementById('search-result');
        weatherResult.textContent = '';
    }
    else if (cityNameText >= 0 || cityNameText <= 0) {
        const errorMessage = document.getElementById("error-message");
        const errorMessage2 = document.getElementById("error-message2");
        errorMessage.style.display = 'block';
        errorMessage2.style.display = 'none';
        const weatherResult = document.getElementById('search-result');
        weatherResult.textContent = '';
    }


    else if (cityNameText != '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameText}&units=metric&appid=41ced8f6ca3e667a5e1b166e8dda4504`)
            .then(res => res.json())
            .then(data => displayData(data));
        const errorMessage = document.getElementById("error-message");
        const errorMessage2 = document.getElementById("error-message2");
        errorMessage.style.display = 'none';
        errorMessage2.style.display = 'none';
    }
}
const displayData = weatherDatas => {
    const weatherResult = document.getElementById('search-result');
    weatherResult.textContent = '';
    const div = document.createElement('div');
    if (weatherDatas.message == 'city not found') {
        const errorMessage3 = document.getElementById("error-message3");
        errorMessage3.style.display = 'block';
    }
    else {
        div.innerHTML = `
    <h4>${weatherDatas.name}</h4>
    <h4>${weatherDatas.main?.temp}<span>°</span></h4>
    <h4>Feels Like ${weatherDatas.main?.feels_like}<span>°</span></h4>
    <h4>${weatherDatas?.weather[0]?.main}</h4>
    `;
        div.style.fontSize = '20px';
        div.style.textAlign = 'center';

        if (weatherDatas.weather[0].main == "Haze") {
            const body = document.getElementById('body-tag');
            body.style.backgroundImage = 'url(images/haze.jpg) ';
        }
        else if (weatherDatas.weather[0].main == "Clouds") {
            const body = document.getElementById('body-tag');
            body.style.backgroundImage = 'url(images/cloudy.jpg) ';
        }
        else if (weatherDatas.weather[0].main == "Clear") {
            const body = document.getElementById('body-tag');
            body.style.backgroundImage = 'url(images/clear.jpg) ';
        }
        else if (weatherDatas.weather[0].main == "Mist") {
            const body = document.getElementById('body-tag');
            body.style.backgroundImage = 'url(images/mist.jpg) ';
        }
        else if (weatherDatas.weather[0].main == "Rain") {
            const body = document.getElementById('body-tag');
            body.style.backgroundImage = 'url(images/rain.jpg) ';
        }
        else if (weatherDatas.weather[0].main == "Clear") {
            const body = document.getElementById('body-tag');
            body.style.backgroundImage = 'url(images/clear.jpg) ';
        }
        weatherResult.appendChild(div);
        const errorMessage3 = document.getElementById("error-message3");
        errorMessage3.style.display = 'none';
    }


}


