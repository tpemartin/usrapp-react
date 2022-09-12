import createStoryPageContent from "./modules/page_story.js";
import fetchEventJson, 
  {carousel, eventPageContent, clickGetElement,
    eventModal, eventTime} from "./modules/page_event.js";

$(function(){
    // sidebar storyPage click
    $("#storyPage").click(fillInStoryPage)
    $("#storyPage").on("tap", fillInStoryPage)
    // sidebar eventPage click 
    $("#eventPage").click(fillInEventPage)
    $("#eventPage").on("tap", fillInEventPage)

    let id=getQueryParameter()
    if(id) eventPageForShare(id)
   })

async function eventPageForShare(id){
  fillInEventPage()
    .then((eventInfo)=>{
      console.log(eventInfo)
      //console.log(window.eventMap[id])
      let index=eventInfo.eventMap[id]
      $("#carouselExampleCaptions").carousel(index).carousel("pause")//window.eventMap[id])
      let ev=eventInfo.events[index]
      /*
      let metaTag= meta("https://tpemartin.github.io/usrapp-react/src/index.html?id="+ev.id, ev.活動名稱, ev.活動內容簡述, ev['海報網址'])
      console.log(metaTag) 
      $("head").append(metaTag)
      */
    })
}
async function fillInEventPage(){
    return fetchEventJson()
      .then((eventJson)=>{
        let events = eventJson
            .slice(1, eventJson.length+1) //remove title row
        return carousel(events)
        })
      .then((eventCarousel) => {
        $("#app").empty().append(
           eventPageContent(eventCarousel)
        )
        window.events=eventCarousel.events
        window.eventMap=eventCarousel.eventMap
        clickGetElement(getClickEvent)
        
        $("body").prepend(`<div id="modal" class="row justify-content-center"></div>`)

        return {events: eventCarousel.events, eventMap: eventCarousel.eventMap}
      })
 
}

function fillInStoryPage(){
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019")
    .then((response) => response.json()) // without {} the value will be the succes return
    .then((data) => {
        return createStoryPageContent(data.items)
    })
    .then((data)=>{
        let htmlContent=data.reduce((s,e)=>s+e)
        $("#app").empty().append(`
        <div class="row">
        ${htmlContent}
        </div>
        `)
    })

}

function createMeta(){
  let id=getQueryParameter()
  if(id){
    fillInEventPage()
      .then()
  }
}

//helpers
function meta(url, title, description="", imgSrc=""){

return `<meta property="og:url"           content="${url}" />
<meta property="og:type"          content="web app" />
<meta property="og:title"         content="${title}" />
<meta property="og:description"   content="${description}" />
<meta property="og:image"         content="${imgSrc}/>`
}

function getQueryParameter(){
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  return params.id; // "some_value"
  
}

function getClickEvent(e){
    console.log(e)
    let eventid=$(e.currentTarget).data().eventid
    let eventIndex=eventMap[eventid]
    let targetEvent=events[eventIndex]
    console.log(targetEvent)
    var targetUrl=targetEvent['活動官方網站（若無免填）']
    if(targetUrl===''){
      targetUrl=`https://tpemartin.github.io/usrapp-react/src/event-${targetEvent["id"]}.html`
    }
    let evModal=eventModal(targetEvent['活動名稱'], eventTime(targetEvent), 
    targetEvent['活動內容簡述'], targetEvent['地點'], targetEvent['主辦單位細節'],
    targetEvent["Google行事曆事件訂閱連結"],targetEvent['活動報名網址（若無免填）'],
    targetUrl
    )
    console.log(evModal)
    $("#modal").empty()
    $("#modal").append(
        `
            <div class="col-sm-12 col-md-6 col-lg-5">
            ${evModal.modal}
            </div>
            
              
        `
      )
    $("#exampleModal").modal("show")  
    $("#shareEventBtn").click(()=>{$("#shareBox").toggle()})
    return targetEvent
}
