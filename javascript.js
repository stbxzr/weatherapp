let city= "dallas"
let apiKey = "7d020fcb030d00eed3ed563fb2e04537"

fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey)
.then(response => response.json())
.then(function(data){
    console.log(data);

})
