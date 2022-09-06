//import fetch from 'node-fetch'



fetch("https://script.google.com/macros/s/AKfycbxftu_E6AQP06G-ekxRK2vDawfJbSp70PtaakYEd0zE4GLL1xSrCYmZsD-y-OKfJ-X7qg/exec")
  .then(e=>e.json())
  .then((j)=> {
    console.log(j)
    eventJson=j})


