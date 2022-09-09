import fetch from "node-fetch";
import promiseCheck from "debug"
import fs from "fs"
var usrUrl="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019"
//var usrUrl="https://medium.com/usrsocntpu"
fetch(usrUrl)
  .then((r) => r.json())
  .then(e => {
    let data=JSON.stringify(e)
    fs.writeFileSync('evenJson.json', data)
  })
