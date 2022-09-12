export function eventPageContent(eventCarousel){
    return `<div class="row">
        <div class="col">
        ${eventCarousel.carouselhtml}
        </div>
    <div>
    `
}
/* export default async function fetchEventJson(){
  let eventAPI="https://script.google.com/macros/s/AKfycbzE0Td7xZrldnxH06AC7HfJZ5b5Mms5Z2Z8DCFu2jDjfFZa0GgTMX1qMbfILi0ESVjbIg/exec"
  return await fetch(eventAPI).then(e=>e.json())
} */

export default async function fetchEventJson(){
  let eventAPI="https://script.google.com/macros/s/AKfycbzE0Td7xZrldnxH06AC7HfJZ5b5Mms5Z2Z8DCFu2jDjfFZa0GgTMX1qMbfILi0ESVjbIg/exec"
  return await $.ajax({
    dataType: "json",
    url: eventAPI
  }).then((e)=>{
    alert("success")
    return e
  })
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
    <div class="share-group" style="height:0;">
    <div class="share-group" id="share-icon" style="display:none">
      ${share()}
      ${share()}
    </div>
    <div class="btn-group mr-2" role="group" aria-label="Second group">  
      <button type="button" class="btn btn-secondary">分享</button>
    </div>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      
      <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NDM3bW50cnZpYW50Ymk2N2N2ZXN0ZTJqNDcgZ20ubnRwdS5lZHUudHdfY2xhc3Nyb29tMDkwNTg4ODlAZw&amp;tmsrc=gm.ntpu.edu.tw_classroom09058889%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"><button type="button" class="btn btn-secondary">加入行事曆</button></a>
    </div>
    
  </div>`
  }
  function share(){
    return `<div class="btn-group mr-2" role="group" aria-label="Second group">  
    <button type="button" class="btn btn-secondary">分享2</button>
    </div>`
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

//Event Modal
//helpers
function eventModal(title="北大玩具節", time="2018.11.10", content="現場凡攜帶項二手玩具或2張111年1-4月發票. 報名方式: 至服務台捐出,即可領取闖關卡入場券。(絨毛娃娃不在回收範圍裡喔!)",
_location="...", organizer="...", calendarUrl="",registerUrl="", eventUrl=""){
  let calendarHtml=""
  if(calendarUrl !== ""){
    calendarHtml=googleCalendar(calendarUrl)
  } 
  let registerHtml=""
  if(registerUrl !== ""){
    registerHtml=registerBtn(registerUrl)
  } 
  return {
    "button": `
  <!-- Button trigger modal -->
  <button id="eventModal" style="display:none" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    詳細內容
  </button>`,
    "modal": 
  `<!-- Modal -->
  <div class="modal fade text-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-header">
          <h4 class="modal-title">${time}</h4>
        </div>
        <div class="modal-body">
          ${tabNav()}
        <br>
          ${tabContent(content, _location, organizer)}
        </div>
        <div class="modal-footer justify-content-center">
          ${eventDecision(calendarHtml, registerHtml, eventUrl)}
        </div>
      </div>
    </div>
  </div>
  `}
}
function eventModalButton(){
  return `
  <!-- Button trigger modal -->
  <button id="eventDetailBtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    詳細內容
  </button>`
}


function eventTime(ev){
  let formatCase=getFormatCase(ev)
  switch(formatCase.formatCase){
    case "a":
       return formatCase.activityTime.A
    case "ab":
      return `${formatCase.activityTime.A} ${formatCase.activityTime.B}`

    case "ay":
      return `${formatCase.activityTime.A} 到 ${formatCase.activityTime.Y}`

    case "abz":
      return `${formatCase.activityTime.A} ${formatCase.activityTime.B}-${formatCase.activityTime.Z}`

    case "abyz":
      return `${formatCase.activityTime.A} 到 ${formatCase.activityTime.Y}
      ${ev["頻率"]} ${formatCase.activityTime.B}-${formatCase.activityTime.Z}`
}


}
function ymd(timeString){
  let startD=new Date(timeString)
  return startD.getFullYear()+'.'+startD.getMonth()+"."+startD.getDay()
}
function hm(timeString){
  let startD=new Date(timeString)
  let hmString=startD.toLocaleTimeString().replace(/:[0-9][0-9] (?=[PA])/,"")
  return hmString
}
function getFormatCase(ev){
  var formatCaseMap= {"日期(1)": "a","時間(1)": "b","日期(2)": "y","時間(2)": "z",}

  var formatCase=""
  let activityTime={}
  if(ev["日期(1)"]!==""){
    activityTime.A=ymd(ev['日期(1)']) 
    formatCase=formatCase+formatCaseMap["日期(1)"]}
  if(ev["時間(1)"]!==""){ 
    activityTime.B=hm(ev['時間(1)']) 
    formatCase=formatCase+formatCaseMap["時間(1)"]}
  if(ev["日期(2)"]!==""){ 
    activityTime.Y=ymd(ev['日期(2)']) 
    formatCase=formatCase+formatCaseMap["日期(2)"]}
  if(ev["時間(2)"]!==""){ 
    activityTime.Z=hm(ev['時間(1)']) 
    formatCase=formatCase+formatCaseMap["時間(2)"]}

  return { formatCase: formatCase, activityTime: activityTime }
}
function facebookShare(shareUri="https://tpemartin.github.io/usrapp-react/src/eventpage5.html"){
  return `<div class="fb-share-button" data-href="${shareUri}"  data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURI(shareUri)}&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>`
}
function lineShare(shareUrl){
  return `<button type="button" class="btn btn-secondary" data-url="${shareUrl}"></button>`
}
function eventDecision(calendarHtml,registerHtml, eventUrl){
  return `
  <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
    <div class="share-group" style="height:0">
    <div class="share-group" id="shareBox" style="display:none">
      <div class="btn-group mr-2" role="group" aria-label="Second group">  
      ${lineShare(eventUrl)}
      </div>
      <div class="btn-group mr-2" role="group" aria-label="Second group">  
   ${facebookShare(eventUrl)}
    </div>
    </div>
    <div class="btn-group mr-2" role="group" aria-label="Second group">
   
      <button type="button" class="btn btn-secondary" id="shareEventBtn">分享</button>
    </div>
    </div>
    ${registerHtml}
    ${calendarHtml}
  </div>`
}
function googleCalendar(calendarUrl){
  return `<div class="btn-group" role="group" aria-label="Third group">
  <a target="_blank" href="${calendarUrl}">
    <button type="button" class="btn btn-secondary">加入行事曆</button>
  </a> 
  </div>`
}
function registerBtn(registerUrl){
  return `<div class="btn-group" role="group" aria-label="Fourth group">
  <a target="_blank" href="${registerUrl}">
    <button type="button" class="btn btn-secondary">報名</button>
  </a> 
  </div>`
}
function tabNav(){
  return ` 
  
  <nav>
  <div class="nav nav-pills  justify-content-center" id="nav-tab" role="tablist">
    <button type="button" class="btn btsm btn-outline-primary nav-link active" id="nav-home-tab" data-toggle="tab" data-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">內容</button>
    <button type="button" class="btn btsm btn-outline-primary nav-link" id="nav-profile-tab" data-toggle="tab" data-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">地點</button>
    <button type="button" class="btn btsm btn-outline-primary nav-link" id="nav-contact-tab" data-toggle="tab" data-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">主辦單位</button>
  </div>
</nav>

`
}

function tabContent(content, location, organizer){
  return `
  <div class="tab-content" id="nav-tabContent" style="height:60vh;">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">${content}</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">${location}</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">${organizer}</div>
</div>
  `
}

export {eventModal, eventTime}