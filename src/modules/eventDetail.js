

$(function(){
    fillInEvents()
  })



/*
  function fillInEvents(){
    $("#app").append(
      `<div class="row">
          <div class="col">
           ${card()}
          </div>
      <div>
      `
    )
  }
  */

function fillInEvents(){

  fetchEventJson()
  .then((j)=>{
    eventJson=j
    let ev=eventJson[1]
    let evModal=eventModal(title=ev['活動名稱'], time=eventTime(ev), 
    content=ev['活動內容簡述'], _location=ev['地點'], organizer=ev['主辦單位細節']
    )
    return evModal
  })
  .then(
    (evModal)=>{

      $("#app").append(
        `
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-6 col-lg-5">
            ${evModal.modal}
            
            </div>
            <div class="fixed-bottom" style="padding-bottom:15px">
              <div class="row">
                <div class="mx-auto">
                ${evModal.button}
                </div>
                </div>
              </div>
        <div>
        `
      )
    }
  )
   
    
  }

//helpers

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

function eventDecision(){
  return `
  <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
  
    <div class="btn-group mr-2" role="group" aria-label="Second group">
      <button type="button" class="btn btn-secondary">分享</button>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" class="btn btn-secondary">加入行事曆</button>
    </div>
  </div>`
}


function eventModal(title="北大玩具節", time="2018.11.10", content="現場凡攜帶項二手玩具或2張111年1-4月發票. 報名方式: 至服務台捐出,即可領取闖關卡入場券。(絨毛娃娃不在回收範圍裡喔!)",
_location="...", organizer="..."){


  return {
    "button": `
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
          ${eventDecision()}
        </div>
      </div>
    </div>
  </div>
  `}
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

