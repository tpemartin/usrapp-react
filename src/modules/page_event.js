export function eventPageContent(eventCarousel){
    return `<div class="row">
        <div class="col">
        ${eventCarousel.carouselhtml}
        </div>
    <div>
    ${footer(eventButtons())}
    `
}
export default async function fetchEventJson(){
  let eventAPI="https://script.google.com/macros/s/AKfycbzE0Td7xZrldnxH06AC7HfJZ5b5Mms5Z2Z8DCFu2jDjfFZa0GgTMX1qMbfILi0ESVjbIg/exec"
  return await fetch(eventAPI).then(e=>e.json())
}

function footer(element){
    return `<div class="fixed-bottom" style="padding-bottom:15px">
    <div class="row">
      <div class="mx-auto">
         ${element}
      </div>
      </div>
    </div>`
}

function eventButtons(){
    return `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group mr-2" role="group" aria-label="First group">
      <button type="button" class="btn btn-secondary">詳細內容</button>
    </div>
    <div class="share-group">
    <div class="share-group" id="share-icon" style="display:none">
      ${share()}
      ${share()}
    </div>
    <div class="btn-group mr-2" role="group" aria-label="Second group">  
      <button type="button" class="btn btn-secondary">分享</button>
    </div>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" class="btn btn-secondary">加入行事曆</button>
    </div>
    
  </div>`
  }
  function share(){
    return `<div class="btn-group mr-2" role="group" aria-label="Second group">  
    <button type="button" class="btn btn-secondary">分享2</button>
    </div>`
  }
  function lineShare(){
    return `<div class="line-it-button" data-lang="en" data-type="share-b" data-env="REAL" data-url="https://tpemartin.github.io/usrapp-react/src/demo_storyPage.html" data-color="default" data-size="small" data-count="false" data-ver="3" style="display: none;"></div>
    <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>`
  }


export function clickGetElement(callback=(e)=>console.log(e)){
  $(".carousel-item").each((i,element) => {
    $(element).click(callback)
  });
}

export function carousel(events){
  let eventsDup=[...events]
  let event_active =
        eventsDup.shift() //shift out first active row
  let carouselComponents=
    eventsDup.reduce((o,e)=>{
      return {
        total: o.total+1,
        carouselItem: o.carouselItem+carouselItem(e),
        indicator: o.indicator+indicator(e,o.total+1)
      }
    }, {
      total: 0,
      carouselItem: carouselItem(event_active,"active"),
      indicator: indicator(event_active,0,"active")
    })

  let carouselhtml= `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      ${carouselComponents.indicator}
    </ol>
    <div class="carousel-inner">
      ${carouselComponents.carouselItem}
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
    </div>`
    return {
      events: events,
      eventMap: constructEventMap(events),
      carouselhtml: carouselhtml
    }
}

function carouselItem(e, activeClass=""){
    return `<div class="carousel-item ${activeClass}" data-eventId="${e.id}">
    <div class="poster" style="background-image: url(${e.海報網址})"></div>
  </div>`
}
function indicator(e, i, activeClass=""){
  return  `<li data-target="#carouselExampleCaptions" data-slide-to="${i}" class="${activeClass}"></li>`
}

function constructEventMap(events){
  let eventMap={}
  events.forEach((e,i)=>{
      eventMap[e.id]=i
  })
  return eventMap 
}
