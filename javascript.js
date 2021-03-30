// let dallas2 = document.getElementById("dallas")




// let city= "dallas"
// let apiKey = "c039ebd3ba2d11396ea2c5109ec9db5a"



// fetch("https://api.openweathermap.org/data/2.5/forecast?id="+city+"&appid="+apiKey)
fetch("https://api.openweathermap.org/data/2.5/forecast?id=dallas&appid=c039ebd3ba2d11396ea2c5109ec9db5a")
.then(response => response.json())
.then(function(data){

    console.log(data);


// let weather1 = document.createElement("ol")
// for (let index = 0; index < data.city.length; index++) {
//     let cityList = data.city[index];
//     let cityList2 = document.createElement("li")
//     cityList2.innerHTML = cityList;
//     weather1.appendChild(cityList2)   
// }
//    dallas2.appendChild(weather1)


})
