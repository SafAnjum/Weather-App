const form=document.querySelector('form');
const temperatureField=document.querySelector('.temp');
const cityField=document.querySelector('.location p');
const dateField=document.querySelector('.location span');
const emojiField=document.querySelector('.weather-con img');
const weatherField=document.querySelector('.weather-con span')
const searchField=document.querySelector('.searchField');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let cityName=searchField.value;
    //console.log(searchField.value);
    getWeatherInfo(cityName);

})




async function getWeatherInfo(cityName){
    try{
    let url= `http://api.weatherapi.com/v1/current.json?key=dc390f5d63ac4f9fa78170412233110&q=${cityName}&aqi=no`;
    const response=await fetch(url);
    const weatherData = await response.json();
        console.log(weatherData);
        let temp=weatherData.current.temp_c;
        let locationName=weatherData.location.name;
        let dateValue=weatherData.location.localtime;
        let conditionIcon=weatherData.current.condition.icon;
        let conditionVal=weatherData.current.condition.text;
        //console.log(temp,locationName,dateValue,conditionIcon,conditionVal);
        temperatureField.innerText=temp+' °C';
        cityField.innerText=locationName;
        dateField.innerText=dateValue;
        emojiField.src=conditionIcon;
        weatherField.innerText=conditionVal;

    } 
    catch (error){
        console.log('Im catching my error: ', error);
        console.log('some logic to handle error');

    }
}
