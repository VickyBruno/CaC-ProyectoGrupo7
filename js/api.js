
const ciudad = document.getElementById('ciudad');
const temp = document.getElementById('temp');
const description = document.getElementById('weather-description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const tempImg = document.getElementById('temp-img');

async function buscar(){
    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3430668&appid=49c48a5c8cba81ae1941350950260e26&lang=es');
        const data = await response.json();
        

        ciudad.innerHTML = `${data.name}, Bs As`;
        temp.innerHTML = `${convertirCelsius(data.main.temp)}°C`;
        description.innerHTML = `${data.weather[0].description}`;
        tempMax.innerHTML = `${convertirCelsius(data.main.temp_max)}°C/`;
        tempMin.innerHTML = `${convertirCelsius(data.main.temp_min)}°C`;
        tempImg.setAttribute("src", "./img/iconClima/"+data.weather[0].icon+".png"); 
        console.log(data.weather[0].icon);
    }catch(err){
        console.log(err);
        alert('Hubo un error');
    }
}

function convertirCelsius(kelvin){
    return Math.round(kelvin - 273.15);
}

buscar();