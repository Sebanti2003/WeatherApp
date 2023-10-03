const city=document.querySelector('.city');
const cityspace=document.querySelector('.cityspace');
const submit=document.querySelector('.submit');
const degree=document.querySelector('.degree');
const humidity=document.querySelector('.humidity');
const wind=document.querySelector('.wind');

async function getweather(city1){
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city1;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d2c56bac7msh65ae0edb4d397f0p1423fajsna4adcd861987',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the response as JSON
    degree.innerHTML = data['temp'];
    humidity.innerHTML = data.humidity;
    wind.innerHTML = data.wind_speed;
    console.log(data);
} catch (error) {
    console.error(error);
}


}

submit.addEventListener('click',function(e){
    // if(city.value===NULL){
    //     cityspace.innerHTML="New york";
    //     degree.innerHTML=23;
    //     humidity.innerHTML=23;
    //     wind.innerHTML=2.07;
    // }
    e.preventDefault();
    cityspace.innerHTML=city.value;
    getweather(city.value);
})