//import fetch from 'node-fetch'

async function fetchEventJson(){
  eventAPI="https://script.google.com/macros/s/AKfycbwAGY2_0XkzEBcOppoV0LxOsUr5hJV7VgBs7IFDE3rzzGp2ieECXy0Qp2vvEIJ5Jgwq_g/exec"
  return await fetch(eventAPI).then(e=>e.json())
}






