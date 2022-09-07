import fetch from "node-fetch";

fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019")
  .then((response)=>response.json())
  .then(promiseCheck) //.then(e=>console.log(e))




function promiseCheck(e){
  console.log(e)
  et=e
  
}

