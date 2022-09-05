

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
    $("#app").append(
      `
      <div class="row justify-content-center">
          <div class="col-sm-12 col-md-6 col-lg-5">
          ${eventCard()}
          
          </div>
      <div>
      `
    )
  }

//helpers

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


function eventCard(){
  return `
  <div class="card text-center">
  <div class="card-header">
  北大玩具節
  </div>
  <div class="card-header">
  2018.11.01
  </div>
  <div class="card-body">
  ${tabNav()}
</div>
 ${tabContent()}
  <div class="card-footer">
${eventDecision()}
  </div>

</div>
  `
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

function tabContent(){
  return `
  <div class="tab-content" id="nav-tabContent" style="height:60vh;">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">現場凡攜帶項二手玩具或2張111年1-4月發票. 報名方式: 至服務台捐出,即可領取闖關卡入場券。(絨毛娃娃不在回收範圍裡喔!)</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>
  `
}

/*
class Slide {
    constructor(slidenumber, imgSrc, active=false){
      this.slidenumber=slidenumber
      this.imgSrc=imgSrc
      this.active=active
    }
    
    //Method
    snippets(){
        let activeClass=""
        if(this.active) activeClass="active"
        let component1=`<li data-target="#carouselExampleCaptions" data-slide-to="${this.slidenumber}" class="${activeClass}"></li>`
        let component2=`<div class="carousel-item">
        <img src="${this.imgSrc}" class="d-block w-100 ${activeClass}" alt="...">
    
      </div>`
      
      return [
        component1,
        component2]
    }
  
  }  

slide = new Slide(1, "https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181107125836.jpg)")
console.log(slide.snippets())
slideActive = new Slide(1, "https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181107125836.jpg)", true)
console.log(slideActive.snippets())

function accumulateComponent(component=["",""], sl){
    component[0]=component[0]+sl.snippets()[0]
    component[1]=component[1]+sl.snippets()[1]
    return component
  }



slides=
[new Slide(0,"https://miro.medium.com/max/1400/1*D6UPtB09k3LBftsNAsVy6g.jpeg", true),
new Slide(1, "https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181119140922.jpg"),
new Slide(2, "https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181107125836.jpg")]

slides = imgs.map((e, i)=>{
    let active=false
    if(i===0) active=true
  return new Slide(i, e, active)
})

component = slides.reduce(accumulateComponent, ["",""])


component1=1
component2=1


carousel = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        ${component1}
    </ol>
    <div class="carousel-inner">
        ${component2}
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </button>
    </div>`

*/