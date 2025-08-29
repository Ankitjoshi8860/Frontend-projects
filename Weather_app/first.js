document.querySelector("button").addEventListener("click",()=>{

   document.getElementById("weatherInfo").innerHTML = "<p>Loading...</p>";

   const place = document.getElementById("location").value;

   function updateTemp(data){

    const element = document.getElementById("weatherInfo")

    element.innerHTML = `<p>City Name: ${data.location.name} </p>
                         <p>Today's temperature: ${data.current.temp_c}°C  </p>
                         <p>Weather condition: ${data.current.condition.text} </p>
                         <p><img src="${data.current.condition.icon}" alt="Weather icon"><p>`
   }

   const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=ab26cc63132d446595a185933252608&q=${place}&aqi=yes`)

   prom
   .then((response)=>{
    return response.json();
   })
   .then((data)=>{

    updateTemp(data);

   })
   .catch((err) => {
  document.getElementById("weatherInfo").innerHTML = `<p>Error: City not found</p>`;
});

    
})