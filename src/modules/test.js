let eventJson=
[{"時間戳記":"時間戳記","電子郵件地址":"電子郵件地址","活動名稱":"活動名稱","日期(1)":"日期(1)","時間(1)":"時間(1)","地點":"地點","主辦單位細節":"主辦單位細節","活動內容簡述":"活動內容簡述","海報網址":"海報網址","活動官方網站（若無免填）":"活動官方網站（若無免填）","海報檔":"海報檔","日期(2)":"日期(2)","時間(2)":"時間(2)","頻率":"頻率","活動報名網址（若無免填）":"活動報名網址（若無免填）","id":"id"},{"時間戳記":"2022-09-05T04:55:00.911Z","電子郵件地址":"tpemartin@gmail.com","活動名稱":"北大玩具節","日期(1)":"2022-09-23T16:00:00.000Z","時間(1)":"1899-12-30T09:00:00.000Z","地點":"行政大樓前廣場","主辦單位細節":"USR辦公室","活動內容簡述":"沒有教育部的大學社會責任計畫，也就不會有「北大玩具節」；而沒有大家的協力合作，「北大玩具節」也無法圓滿熱烈舉辦。尤其天公作美、風雨暫歇，12月2日週六上午的景象是--玩具回收再運用，親子歡樂人來瘋，師生社團共協力，大學社區展共融。\n\n經過三個月的籌畫以及六次的協調會議，由社科院USR計畫與新北市玩具銀行合作舉辦的首屆「北大玩具節」，在社工系游以安老師兒童療癒課程、北大學生會、多元服務社、伊甸基金會志工隊、以及北大策進會的協辦之下，終於在三峽校區商學院前廣場熱情展開。","海報網址":"https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181107125836.jpg","活動官方網站（若無免填）":"","海報檔":"","日期(2)":"","時間(2)":"","頻率":"","活動報名網址（若無免填）":"","id":"67960336"},{"時間戳記":"2022-09-07T03:42:55.463Z","電子郵件地址":"mtlin@gm.ntpu.edu.tw","活動名稱":"銀青共榮","日期(1)":"2022-09-19T16:00:00.000Z","時間(1)":"1899-12-30T06:30:00.000Z","地點":"圖書館","主辦單位細節":"森","活動內容簡述":"","海報網址":"https://miro.medium.com/max/1400/1*D6UPtB09k3LBftsNAsVy6g.jpeg","活動官方網站（若無免填）":"","海報檔":"","日期(2)":"2022-09-23T16:00:00.000Z","時間(2)":"1899-12-30T08:00:00.000Z","頻率":"","活動報名網址（若無免填）":"","id":"271AE42B"},{"時間戳記":"2022-09-09T14:52:28.321Z","電子郵件地址":"mtlin@gm.ntpu.edu.tw","活動名稱":"北大經濟營","日期(1)":"2022-09-09T16:00:00.000Z","時間(1)":"1899-12-30T01:30:00.000Z","地點":"臺北大學三峽校區社會科學院大廳","主辦單位細節":"經濟系學會","活動內容簡述":"【MANDALA迎新 |行前通知】\n終於來到我們北大經濟MANDALA迎新 倒數1️⃣天了！✨ （鼓掌👏）\n相信大家都抱著期待、興奮卻又緊張的心來參加我們的MANDALA迎新吧😍\n別擔心～一起來看看有沒有遺漏的迎新資訊吧！\n\n必備物品：環保餐具、換洗衣物*2、毛巾、備用口罩*2\n（女生長髮者建議攜帶髮圈，以免跑跳過程中拉扯到唷）\n⚠️  之前未報名宿營者費用將於當天收取，請自備完整金額💰450！\n⚠️還未自主進行 covid-19快篩，並依照指示上傳者請速速上傳至各隊Line群組喔！\n最後，希望明天都能看到活力充沛的大家❤️一起為2022的暑假劃下一個完美的句點，\n留下屬於我們 獨特且美好的回憶吧！🥳\n📌有任何疑問都歡迎詢問各隊隊輔😉或是以下聯絡資訊⬇️","海報網址":"https://www.ntpu.edu.tw/college/e4/files/e4_announce/20181107125836.jpg","活動官方網站（若無免填）":"https://www.facebook.com/NTPUECO/posts/pfbid02TMjZLGAXZgLt4coNoZvvJiBusL7i4QZaKFFpNmAbC3yENKeuNEYe5R8SwUmZnY8sl?__cft__[0]=AZW0PxU2clJkLJ1tc5sPJlBht4F-scffY78ayQB48-k9gNkwUUY8mlv7TOWwnsls3vIZY_6XUjW8kCv9Uv7WtaOEhRyPPwuPt723WNLEuUlImbSvRme-ZXIh1LDK7tES8fiFMf1ROF5Hu8bBgB9PbCj5DUFBU-xBLV28IhM6RqHYZQ&__tn__=%2CO%2CP-R","海報檔":"https://drive.google.com/open?id=1FNnnzMPdwvRAvooU_yC9iLQU9ub0Ha5C","日期(2)":"","時間(2)":"1899-12-30T11:30:00.000Z","頻率":"","活動報名網址（若無免填）":"","id":"B1BC92D4"}]

let events = 
      eventJson
       .slice(1, eventJson.length+1) //remove title row


console.log(carousel(eventJson))

let eventCarousel=carousel(events)
var eventIndex = {}
//eventJson.shift().map((e,i)=> eventIndex[e.id]=i)

function clickGetElement(callback=(e)=>console.log(e)){
  $(".carousel-item").each((i,element) => {
    $(element).click(callback)
  });
}

function carousel(events){
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



