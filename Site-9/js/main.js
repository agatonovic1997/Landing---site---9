
//DATUM U HEDERU - DAN-MESEC-GODINA

function setCurrentDate() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${dayOfWeek} | ${month} ${day}, ${year}`;

    document.getElementById('currentDate').textContent = formattedDate;
}

setCurrentDate();

//PRIKAZ/SAKRIVANJE INPUT POLJA

const searchContainer = document.getElementById('searchContainer');
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

searchInput.style.width = '0';
searchInput.style.opacity = '0';

searchIcon.addEventListener('click', toggleSearchInput);

function toggleSearchInput() {
    const isHidden = searchInput.style.width === '0px' || !searchInput.style.width;

    if (isHidden) {
        searchInput.style.width = '200px'; 
        searchInput.style.opacity = '1';   
    } else {
        searchInput.style.width = '0';
        searchInput.style.opacity = '0';
    }
}

//VREMENSKA PROGNOZA - PODATAK

const apiKey = "a5614649c3768689496da126f637a246";
const latitude = 43.5825;  
const longitude = 21.3267;  

const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('description');

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        const temperatureCelsius = Math.round(data.main.temp);

        const weatherDescription = data.weather[0].description;

        temperatureElement.textContent = `${temperatureCelsius}°C | `;
        weatherDescriptionElement.textContent = `${weatherDescription}`;
    })
    .catch(error => {
        console.error("Došlo je do greške prilikom dobijanja podataka:", error);
    });


