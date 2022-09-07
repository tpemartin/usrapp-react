
class eventJson {
    constructor(ev){
        this.id=ev
    }



}


components[0]={
    carousel: {
      li: `<li data-target="#carouselExampleCaptions" data-slide-to="${i}" class="${activeClass}"></li>`,
      carouselItem: `<div class="carousel-item ${activeClass}">
      <div class="poster" style="background-image: url(${e})"></div>
    </div>`
    },
    modal: eventModal(title=ev['活動名稱'], time=eventTime(ev), 
    content=ev['活動內容簡述'], _location=ev['地點'], organizer=ev['主辦單位細節']
    )
  }