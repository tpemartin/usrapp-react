//import fetch from 'node-fetch'

async function fetchEventJson(){
  let eventAPI="https://script.google.com/macros/s/AKfycbzE0Td7xZrldnxH06AC7HfJZ5b5Mms5Z2Z8DCFu2jDjfFZa0GgTMX1qMbfILi0ESVjbIg/exec"
  return await fetch(eventAPI).then(e=>e.json())
}






