axios({
    method:'get',
    url:'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=813e910f8e9e1734b9e8e02d766708d8',
})
.then((response) => {
    console.log(response);
    const temp = response.data.main.temp;
    $('body').append(`<h1>${temp}</h1>`);
    const desc = response.data.weather[0].description;
    $('body').append(`<h1>${desc}</h1>`);
    $('body').append(`<h1>☁️</h1>`); 

})
.catch((error) => {
console.log(error);
});