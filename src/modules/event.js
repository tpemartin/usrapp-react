

$(function(){
    fillInEvents()
  })



//carouselSnippet = assembleSlidesSnippet();

function fillInEvents(){
  $("#app").append(
    `<div class="row>
        <div class="col">
        ${assembleSlidesSnippet()}
        </div>
    <div>
    ${footer(eventButtons())}
    `
  )
}

//helpers
function footer(element){
  return `<div class="fixed-bottom">
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
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">分享</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary">加入行事曆</button>
  </div>
</div>`
}

function assembleSlidesSnippet(){
    let accumulateSlides=slidesComponent();
    return `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      ${accumulateSlides[0]}
    </ol>
    <div class="carousel-inner">
      ${accumulateSlides[1]}
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
}
function slidesComponent(imgs = [
    "https://miro.medium.com/max/1400/1*D6UPtB09k3LBftsNAsVy6g.jpeg",
    "https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181119140922.jpg",
    "https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181107125836.jpg"
]){

    let slides = imgs.map(
        (e, i) => {
          let activeClass=""
          if(i===0) activeClass="active"
          return [
            `<li data-target="#carouselExampleCaptions" data-slide-to="${i}" class="${activeClass}"></li>`,
            `<div class="carousel-item ${activeClass}">
              <div class="poster" style="background-image: url(${e})"></div>
            </div>` ]
        }
      )
    
    
    
    let accumulateSlides = slides.reduce((accumulateElement, e)=>{
        return [
            accumulateElement[0]+e[0],
            accumulateElement[1]+e[1]
        ]
    }, ["",""])
    
    return accumulateSlides
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